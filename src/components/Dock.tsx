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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gray-800/90 backdrop-blur-xl rounded-2xl px-3 py-2 shadow-[0_-4px_24px_rgba(0,0,0,0.3)] border border-white/10">
        <div className="flex items-end gap-2">
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
                {/* Tooltip */}
                {isHovered && (
                  <div className="absolute -top-12 bg-gray-800/95 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
                    {item.label}
                  </div>
                )}

                {/* Icon Button */}
                <button
                  onClick={item.onClick}
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300",
                    "hover:scale-125 hover:-translate-y-2",
                    "active:scale-110",
                    isActive && "scale-110 -translate-y-1"
                  )}
                  style={{
                    background: isActive 
                      ? "linear-gradient(135deg, hsl(195, 85%, 65%), hsl(195, 75%, 50%))" 
                      : "linear-gradient(135deg, hsl(200, 30%, 75%), hsl(200, 25%, 65%))",
                    boxShadow: isActive 
                      ? "0 4px 16px hsl(195 85% 55% / 0.4), inset 0 1px 0 rgba(255,255,255,0.3)" 
                      : "0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)"
                  }}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </button>

                {/* Active Indicator */}
                {isActive && (
                  <div className="w-1 h-1 rounded-full bg-white/90 mt-1 animate-in fade-in zoom-in duration-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
