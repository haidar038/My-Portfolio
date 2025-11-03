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
        className="backdrop-blur-2xl rounded-2xl sm:rounded-3xl px-2 sm:px-3 py-2 border-2 border-white/20"
        style={{
          background: 'linear-gradient(135deg, rgba(71, 85, 105, 0.95) 0%, rgba(51, 65, 85, 0.9) 100%)',
          boxShadow: '0 -8px 32px rgba(6, 182, 212, 0.4), 0 0 0 1px rgba(148, 163, 184, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
                {/* Enhanced Tooltip */}
                {isHovered && (
                  <div 
                    className="absolute -top-10 sm:-top-12 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg backdrop-blur-md whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200 border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(71, 85, 105, 0.98) 0%, rgba(51, 65, 85, 0.95) 100%)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {item.label}
                  </div>
                )}

                {/* Enhanced Icon Button with glossy gradient */}
                <button
                  onClick={item.onClick}
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300",
                    "hover:scale-110 sm:hover:scale-125 hover:-translate-y-1 sm:hover:-translate-y-2",
                    "active:scale-100 sm:active:scale-110",
                    isActive && "scale-105 sm:scale-110 -translate-y-0.5 sm:-translate-y-1"
                  )}
                  style={{
                    background: isActive 
                      ? "linear-gradient(135deg, hsl(195, 90%, 70%), hsl(190, 85%, 55%), hsl(185, 80%, 45%))" 
                      : "linear-gradient(135deg, hsl(200, 40%, 80%), hsl(195, 35%, 70%), hsl(190, 30%, 60%))",
                    boxShadow: isActive 
                      ? "0 6px 20px hsl(195 85% 55% / 0.5), 0 2px 8px hsl(195 90% 40% / 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 0 rgba(0, 0, 0, 0.1)" 
                      : "0 4px 12px rgba(0, 0, 0, 0.25), inset 0 2px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" strokeWidth={2} style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }} />
                </button>

                {/* Enhanced Active Indicator with glow */}
                {isActive && (
                  <div 
                    className="w-1 h-1 rounded-full mt-0.5 sm:mt-1 animate-in fade-in zoom-in duration-200" 
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(34, 211, 238, 0.8) 100%)',
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.8), 0 0 4px rgba(255, 255, 255, 0.9)'
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
