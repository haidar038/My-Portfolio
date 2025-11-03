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
          "absolute w-[90%] max-w-2xl transition-all duration-200",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
        style={{ zIndex }}
      >
        {/* Window */}
        <div className="bg-white/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.15),0_0_0_1px_rgba(200,200,220,0.5)] border border-white/40">
          {/* Title Bar */}
          <div 
            className="window-header h-12 bg-gradient-to-b from-gray-50/90 to-gray-100/90 border-b border-gray-200/50 flex items-center justify-between px-4 cursor-move select-none"
            onMouseDown={onFocus}
          >
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleClose}
                className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF4136] transition-colors shadow-sm"
                aria-label="Close"
              />
              <button
                onClick={() => setIsMinimized(true)}
                className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFB000] transition-colors shadow-sm"
                aria-label="Minimize"
              />
              <button
                className="w-3 h-3 rounded-full bg-[#28CA42] hover:bg-[#00D924] transition-colors shadow-sm"
                aria-label="Maximize"
              />
            </div>

            {/* Title */}
            <div className="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-gray-700">
              {title}
            </div>

            {/* Spacer for alignment */}
            <div className="w-16" />
          </div>

          {/* Content */}
          <div className="max-h-[60vh] overflow-y-auto p-6 bg-gradient-to-b from-white/95 to-gray-50/95">
            {children}
          </div>
        </div>
      </div>
    </Draggable>
  );
};
