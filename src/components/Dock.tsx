import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

export interface DockItem {
  id: string;
  label: string;
  iconSrc: string;
  onClick: () => void;
}

interface DockProps {
  items: DockItem[];
  activeItems: string[];
}

export const Dock = ({ items, activeItems }: DockProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  // Calculate icon scale based on distance from mouse - more reduced sensitivity
  const calculateScale = (index: number, itemCount: number) => {
    if (mouseX === null || !dockRef.current) return 1;

    const dockRect = dockRef.current.getBoundingClientRect();
    const itemWidth = dockRect.width / itemCount;
    const itemCenter = dockRect.left + (index + 0.5) * itemWidth;
    const distance = Math.abs(mouseX - itemCenter);
    const maxDistance = itemWidth * 3.5; // Further increased range for smoother effect

    if (distance > maxDistance) return 1;

    // Magnification curve - more reduced sensitivity
    const proximity = 1 - distance / maxDistance;
    return 1 + proximity * 0.35; // Max 1.35x scale (reduced from 1.5x) - CONFIGURABLE: change this value to adjust zoom intensity
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dockRef.current) {
        const dockRect = dockRef.current.getBoundingClientRect();
        const isNearDock = e.clientY > dockRect.top - 100 && e.clientY < dockRect.bottom + 50;
        setMouseX(isNearDock ? e.clientX : null);
      }
    };

    const handleMouseLeave = () => {
      setMouseX(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    dockRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      dockRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 w-auto">
      {/* Floating Dock Container */}
      <div className="relative">
        {/* Floating Glass Dock */}
        <div
          ref={dockRef}
          className="relative backdrop-blur-3xl rounded-[24px]"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.18) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            padding: '8px 12px',
          }}
        >
          <div className="flex items-center justify-center gap-3">
            {items.map((item, index) => {
              const isActive = activeItems.includes(item.id);
              const isHovered = hoveredItem === item.id;
              const scale = calculateScale(index, items.length);
              const floatAmount = (scale - 1) * 30; // CONFIGURABLE: change multiplier to adjust float height

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    transform: `scale(${scale}) translateY(-${floatAmount}px)`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {/* Tooltip */}
                  {isHovered && (
                    <div
                      className="absolute -top-14 text-white text-xs font-medium px-3 py-1.5 rounded-lg backdrop-blur-xl whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200 z-[60]"
                      style={{
                        background: 'rgba(20, 20, 20, 0.96)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {item.label}
                      <div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                        style={{
                          background: 'rgba(20, 20, 20, 0.96)',
                        }}
                      />
                    </div>
                  )}

                  {/* Icon container */}
                  <div className="relative flex flex-col items-center">
                    {/* Main icon button */}
                    <button
                      onClick={item.onClick}
                      className={cn(
                        "w-14 h-14 rounded-[16px] flex items-center justify-center transition-all duration-200 relative",
                        "active:scale-90",
                        "hover:brightness-110"
                      )}
                      style={{
                        background: 'transparent',
                      }}
                    >
                      {/* Icon image */}
                      <img
                        src={item.iconSrc}
                        alt={item.label}
                        className="w-13 h-13 object-contain"
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                        }}
                      />
                    </button>
                  </div>

                  {/* Active indicator - white glow dot */}
                  {isActive && (
                    <div
                      className="absolute -bottom-2 w-1 h-1 rounded-full animate-in fade-in zoom-in duration-200"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 100%)',
                        boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.8), 0 0 12px 4px rgba(255, 255, 255, 0.5), inset 0 0 2px rgba(255, 255, 255, 1)'
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating dock shadow */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-4 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>
    </div>
  );
};
