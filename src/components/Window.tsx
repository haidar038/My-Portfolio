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
        {/* Enhanced Frutiger Aero Window with glossy effect */}
        <div 
          className="bg-white/85 backdrop-blur-2xl rounded-2xl overflow-hidden border-2 border-white/60"
          style={{
            boxShadow: '0 12px 40px -8px rgba(6, 182, 212, 0.25), 0 0 0 1px rgba(224, 242, 254, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 30px rgba(34, 211, 238, 0.15)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.85) 100%)'
          }}
        >
          {/* Enhanced Title Bar with glossy gradient */}
          <div 
            className="window-header h-11 md:h-12 border-b border-white/40 flex items-center justify-between px-3 md:px-4 cursor-move select-none relative"
            style={{
              background: 'linear-gradient(180deg, rgba(240, 249, 255, 0.95) 0%, rgba(224, 242, 254, 0.9) 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 1px 2px rgba(0, 0, 0, 0.05)'
            }}
            onMouseDown={onFocus}
          >
            {/* Enhanced Window Controls with glossy effect */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <button
                onClick={handleClose}
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 transition-all shadow-md hover:shadow-lg"
                style={{ boxShadow: '0 2px 4px rgba(239, 68, 68, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)' }}
                aria-label="Close"
              />
              <button
                onClick={() => setIsMinimized(true)}
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-md hover:shadow-lg"
                style={{ boxShadow: '0 2px 4px rgba(234, 179, 8, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)' }}
                aria-label="Minimize"
              />
              <button
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 transition-all shadow-md hover:shadow-lg"
                style={{ boxShadow: '0 2px 4px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)' }}
                aria-label="Maximize"
              />
            </div>

            {/* Title */}
            <div className="absolute left-1/2 -translate-x-1/2 text-xs md:text-sm font-semibold text-gray-700" style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)' }}>
              {title}
            </div>

            {/* Spacer for alignment */}
            <div className="w-16" />
          </div>

          {/* Enhanced Content with subtle gradient */}
          <div 
            className="max-h-[60vh] md:max-h-[65vh] overflow-y-auto p-4 md:p-6 relative"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.9) 100%)'
            }}
          >
            {children}
            
            {/* Top glass reflection */}
            <div 
              className="absolute top-0 left-0 right-0 h-24 pointer-events-none rounded-t-xl"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </Draggable>
  );
};
