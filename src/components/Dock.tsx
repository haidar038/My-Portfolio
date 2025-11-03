import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface DockItem {
  id: string;
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}

interface DockProps {
  items: DockItem[];
  activeItems: string[];
}

export const Dock = ({ items, activeItems }: DockProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto">
      <div 
        className="backdrop-blur-xl rounded-2xl sm:rounded-3xl px-2 sm:px-3 py-2.5 sm:py-3 border border-white/30"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
          boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="flex items-end justify-center gap-1 sm:gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeItems.includes(item.id);
            const isHovered = hoveredItem === item.id;

            return (
              <div
                key={item.id}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Classic Mac OS X Tooltip */}
                {isHovered && (
                  <div 
                    className="absolute -top-10 sm:-top-12 text-white text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md backdrop-blur-sm whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200"
                    style={{
                      background: 'rgba(40, 40, 40, 0.92)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {item.label}
                  </div>
                )}

                {/* Classic Aqua 3D Glossy Icon Button */}
                <button
                  onClick={item.onClick}
                  className={cn(
                    "w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden",
                    "hover:scale-110 sm:hover:scale-125 hover:-translate-y-1 sm:hover:-translate-y-2",
                    "active:scale-100 sm:active:scale-110",
                    isActive && "scale-105 sm:scale-110 -translate-y-0.5 sm:-translate-y-1"
                  )}
                  style={{
                    background: isActive 
                      ? "linear-gradient(180deg, hsl(205, 95%, 68%) 0%, hsl(205, 90%, 58%) 50%, hsl(205, 85%, 48%) 100%)" 
                      : "linear-gradient(180deg, hsl(210, 60%, 72%) 0%, hsl(210, 55%, 62%) 50%, hsl(210, 50%, 52%) 100%)",
                    boxShadow: isActive 
                      ? "0 4px 16px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(0, 0, 0, 0.2)" 
                      : "0 3px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.15)",
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  {/* Glossy overlay effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(0, 0, 0, 0.05) 100%)'
                    }}
                  />
                  <Icon 
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white relative z-10" 
                    strokeWidth={2.5} 
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4))' }} 
                  />
                </button>

                {/* Classic Active Indicator */}
                {isActive && (
                  <div 
                    className="w-1.5 h-1.5 rounded-full mt-1 sm:mt-1.5 animate-in fade-in zoom-in duration-200" 
                    style={{
                      background: 'radial-gradient(circle, rgba(100, 100, 100, 1) 0%, rgba(60, 60, 60, 0.8) 100%)',
                      boxShadow: '0 0 4px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
