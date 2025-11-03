import { ReactNode, useState, useEffect } from "react";
import Draggable from "react-draggable";
import { X, Minus, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WindowProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  defaultPosition?: { x: number; y: number };
  zIndex?: number;
  onFocus?: () => void;
}

export const Window = ({ 
  title, 
  children, 
  onClose, 
  defaultPosition = { x: 100, y: 50 },
  zIndex = 10,
  onFocus
}: WindowProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  if (isMinimized) {
    return null;
  }

  return (
    <Draggable
      handle=".window-header"
      defaultPosition={defaultPosition}
      bounds="parent"
      onMouseDown={onFocus}
    >
      <div
        className={cn(
          "absolute w-[95%] sm:w-[90%] md:w-[85%] max-w-2xl transition-all duration-300 pointer-events-auto",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
        style={{ zIndex }}
      >
        {/* Classic Mac OS X Aqua Window with brushed metal */}
        <div 
          className="overflow-hidden rounded-xl border border-gray-400/60"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(180deg, hsl(210, 12%, 92%) 0%, hsl(210, 10%, 86%) 50%, hsl(210, 12%, 80%) 100%)',
          }}
        >
          {/* Classic Mac OS X Title Bar with brushed metal */}
          <div 
            className="window-header h-9 md:h-10 border-b border-gray-400/50 flex items-center justify-between px-3 md:px-4 cursor-move select-none relative"
            style={{
              background: 'linear-gradient(180deg, hsl(210, 15%, 94%) 0%, hsl(210, 12%, 88%) 50%, hsl(210, 10%, 82%) 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 1px 0 rgba(0, 0, 0, 0.1)'
            }}
            onMouseDown={onFocus}
          >
            {/* Classic Aqua Window Controls */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <button
                onClick={handleClose}
                className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all relative group"
                style={{
                  background: 'linear-gradient(135deg, #FF6057 0%, #ED4E44 100%)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                }}
                aria-label="Close"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <X className="w-2 h-2 text-red-900" strokeWidth={2.5} />
                </div>
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all relative group"
                style={{
                  background: 'linear-gradient(135deg, #FFBD2E 0%, #F7A200 100%)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                }}
                aria-label="Minimize"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Minus className="w-2 h-2 text-yellow-900" strokeWidth={2.5} />
                </div>
              </button>
              <button
                className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all relative group"
                style={{
                  background: 'linear-gradient(135deg, #29C940 0%, #20A034 100%)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                }}
                aria-label="Maximize"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-2 h-2 text-green-900" strokeWidth={2.5} />
                </div>
              </button>
            </div>

            {/* Title */}
            <div className="absolute left-1/2 -translate-x-1/2 text-xs md:text-sm font-medium text-gray-700" style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)' }}>
              {title}
            </div>

            {/* Spacer for alignment */}
            <div className="w-16" />
          </div>

          {/* Content with brushed metal background */}
          <div 
            className="max-h-[60vh] md:max-h-[65vh] overflow-y-auto p-4 md:p-6 relative"
            style={{
              background: 'linear-gradient(180deg, hsl(210, 8%, 96%) 0%, hsl(210, 6%, 92%) 100%)',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </Draggable>
  );
};
