import { ReactNode, useState, useEffect } from "react";
import Draggable from "react-draggable";
import { X, Minus, Maximize2, ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface WindowProps {
    title: string;
    children: ReactNode;
    onClose: () => void;
    onMinimize?: () => void;
    onFullscreen?: () => void;
    defaultPosition?: { x: number; y: number };
    zIndex?: number;
    onFocus?: () => void;
    showToolbar?: boolean;
    isFullscreen?: boolean;
}

export const Window = ({ title, children, onClose, onMinimize, onFullscreen, defaultPosition = { x: 100, y: 50 }, zIndex = 10, onFocus, showToolbar = false, isFullscreen = false }: WindowProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        // Fade in animation
        setTimeout(() => setIsVisible(true), 10);

        // Detect mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 200);
    };

    const WindowContent = (
        <div
            className={cn(
                "transition-all duration-300 pointer-events-auto",
                isFullscreen ? "fixed inset-0 w-full h-full rounded-none" : isMobile ? "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl rounded-xl" : "absolute w-[95%] sm:w-[90%] md:w-[85%] max-w-2xl rounded-xl",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
            style={isFullscreen ? { zIndex, top: "24px", bottom: 0 } : { zIndex }}
        >
            {/* Classic Mac OS X Aqua Window with brushed metal */}
            <div
                className={cn("overflow-hidden border transition-all duration-300", isFullscreen ? "rounded-none h-full" : "rounded-xl")}
                style={{
                    boxShadow: isDarkMode ? "0 12px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(148, 163, 184, 0.2)" : "0 12px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.15)",
                    background: isDarkMode
                        ? "linear-gradient(180deg, rgba(51, 65, 85, 0.95) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)"
                        : "linear-gradient(180deg, hsl(210, 12%, 92%) 0%, hsl(210, 10%, 86%) 50%, hsl(210, 12%, 80%) 100%)",
                    borderColor: isDarkMode ? "rgba(148, 163, 184, 0.3)" : "rgba(156, 163, 175, 0.6)",
                    height: isFullscreen ? "100%" : "auto",
                }}
            >
                {/* Classic Mac OS X Title Bar */}
                <div
                    className={cn("window-header h-9 border-b flex items-center justify-between px-3 select-none relative transition-all duration-300", !isFullscreen && !isMobile && "cursor-move")}
                    style={{
                        background: isDarkMode
                            ? "linear-gradient(180deg, rgba(71, 85, 105, 0.9) 0%, rgba(51, 65, 85, 0.9) 50%, rgba(30, 41, 59, 0.9) 100%)"
                            : "linear-gradient(180deg, hsl(210, 15%, 95%) 0%, hsl(210, 12%, 89%) 50%, hsl(210, 10%, 83%) 100%)",
                        boxShadow: isDarkMode ? "inset 0 1px 0 rgba(148, 163, 184, 0.3), 0 1px 0 rgba(0, 0, 0, 0.2)" : "inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 1px 0 rgba(0, 0, 0, 0.1)",
                        borderBottomColor: isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(156, 163, 175, 0.4)",
                    }}
                    onMouseDown={onFocus}
                >
                    {/* Classic Aqua Window Controls - Using Frutiger Aero style */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleClose}
                            className="w-4 h-4 rounded-full transition-all relative group"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 90%, #fff8, transparent), linear-gradient(in oklch to right, oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h), transparent, oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h)), linear-gradient(in oklch to bottom, oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h), oklch(72% 0.25 25))",
                                border: "2px solid oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h)",
                                boxShadow: "inset 0 0 5px color-mix(in oklch, oklch(72% 0.25 25), oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h)), 0 1px 1px 1px rgba(255, 255, 255, 0.7), 0 -1px 1px 1px rgba(0, 0, 0, 0.5)",
                            }}
                            aria-label="Close"
                        >
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: "radial-gradient(ellipse 70% 30% at 50% 10%, #ffff 5%, #fff0 55%)",
                                }}
                            />
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10"
                                style={{
                                    boxShadow: "0 0 12px 2px rgba(239, 68, 68, 0.8), 0 0 20px 4px rgba(239, 68, 68, 0.4)",
                                }}
                            >
                                <X className="w-2 h-2 text-red-950 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" strokeWidth={3.5} />
                            </div>
                        </button>
                        <button
                            onClick={onMinimize}
                            className="w-4 h-4 rounded-full transition-all relative group"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 90%, #fff8, transparent), linear-gradient(in oklch to right, oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h), transparent, oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h)), linear-gradient(in oklch to bottom, oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h), oklch(90% 0.17 82))",
                                border: "2px solid oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h)",
                                boxShadow: "inset 0 0 5px color-mix(in oklch, oklch(90% 0.17 82), oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h)), 0 1px 1px 1px rgba(255, 255, 255, 0.7), 0 -1px 1px 1px rgba(0, 0, 0, 0.5)",
                            }}
                            aria-label="Minimize"
                        >
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: "radial-gradient(ellipse 70% 30% at 50% 10%, #ffff 5%, #fff0 55%)",
                                }}
                            />
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10"
                                style={{
                                    boxShadow: "0 0 12px 2px rgba(234, 179, 8, 0.8), 0 0 20px 4px rgba(234, 179, 8, 0.4)",
                                }}
                            >
                                <Minus className="w-2 h-2 text-yellow-950 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" strokeWidth={3.5} />
                            </div>
                        </button>
                        <button
                            onClick={onFullscreen}
                            className="w-4 h-4 rounded-full transition-all relative group"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 90%, #fff8, transparent), linear-gradient(in oklch to right, oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h), transparent, oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h)), linear-gradient(in oklch to bottom, oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h), oklch(85% 0.2 135))",
                                border: "2px solid oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h)",
                                boxShadow: "inset 0 0 5px color-mix(in oklch, oklch(85% 0.2 135), oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h)), 0 1px 1px 1px rgba(255, 255, 255, 0.7), 0 -1px 1px 1px rgba(0, 0, 0, 0.5)",
                            }}
                            aria-label="Fullscreen"
                        >
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: "radial-gradient(ellipse 70% 30% at 50% 10%, #ffff 5%, #fff0 55%)",
                                }}
                            />
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10"
                                style={{
                                    boxShadow: "0 0 12px 2px rgba(34, 197, 94, 0.8), 0 0 20px 4px rgba(34, 197, 94, 0.4)",
                                }}
                            >
                                <Maximize2 className="w-2 h-2 text-green-950 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" strokeWidth={3.5} />
                            </div>
                        </button>
                    </div>

                    {/* Title */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold tracking-tight transition-colors duration-300"
                        style={{
                            color: isDarkMode ? "#f8fafc" : "#374151",
                            textShadow: isDarkMode ? "0 1px 0 rgba(0, 0, 0, 0.6)" : "0 1px 0 rgba(255, 255, 255, 0.6)",
                            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                    >
                        {title}
                    </div>

                    {/* Spacer for alignment */}
                    <div className="w-16" />
                </div>

                {/* Optional Toolbar */}
                {showToolbar && (
                    <div
                        className="h-12 border-b flex items-center px-3 gap-2 transition-all duration-300"
                        style={{
                            background: isDarkMode ? "linear-gradient(180deg, rgba(51, 65, 85, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)" : "linear-gradient(180deg, hsl(210, 12%, 90%) 0%, hsl(210, 10%, 84%) 100%)",
                            boxShadow: isDarkMode ? "inset 0 1px 0 rgba(148, 163, 184, 0.2)" : "inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                            borderBottomColor: isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(156, 163, 175, 0.4)",
                        }}
                    >
                        {/* Navigation buttons */}
                        <div className="flex gap-1">
                            <button
                                className="w-7 h-7 rounded flex items-center justify-center transition-all"
                                style={{
                                    background: isDarkMode ? "linear-gradient(180deg, rgba(71, 85, 105, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                    boxShadow: isDarkMode ? "0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(148, 163, 184, 0.2)" : "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = isDarkMode ? "rgba(71, 85, 105, 0.7)" : "rgba(255, 255, 255, 0.4)")}
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background = isDarkMode
                                        ? "linear-gradient(180deg, rgba(71, 85, 105, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)"
                                        : "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)")
                                }
                            >
                                <ChevronLeft className="w-4 h-4 transition-colors" style={{ color: isDarkMode ? "#cbd5e1" : "#374151" }} strokeWidth={2} />
                            </button>
                            <button
                                className="w-7 h-7 rounded flex items-center justify-center transition-all"
                                style={{
                                    background: isDarkMode ? "linear-gradient(180deg, rgba(71, 85, 105, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                    boxShadow: isDarkMode ? "0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(148, 163, 184, 0.2)" : "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = isDarkMode ? "rgba(71, 85, 105, 0.7)" : "rgba(255, 255, 255, 0.4)")}
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background = isDarkMode
                                        ? "linear-gradient(180deg, rgba(71, 85, 105, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)"
                                        : "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)")
                                }
                            >
                                <ChevronRight className="w-4 h-4 transition-colors" style={{ color: isDarkMode ? "#cbd5e1" : "#374151" }} strokeWidth={2} />
                            </button>
                        </div>

                        {/* View options */}
                        <button
                            className="w-7 h-7 rounded flex items-center justify-center transition-all ml-auto"
                            style={{
                                background: isDarkMode ? "linear-gradient(180deg, rgba(71, 85, 105, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                boxShadow: isDarkMode ? "0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(148, 163, 184, 0.2)" : "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = isDarkMode ? "rgba(71, 85, 105, 0.7)" : "rgba(255, 255, 255, 0.4)")}
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.background = isDarkMode
                                    ? "linear-gradient(180deg, rgba(71, 85, 105, 0.5) 0%, rgba(51, 65, 85, 0.5) 100%)"
                                    : "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)")
                            }
                        >
                            <Grid3x3 className="w-4 h-4 transition-colors" style={{ color: isDarkMode ? "#cbd5e1" : "#374151" }} strokeWidth={2} />
                        </button>
                    </div>
                )}

                {/* Content with brushed metal background */}
                <div
                    className={cn("overflow-y-auto relative transition-all duration-300", isFullscreen ? "h-[calc(100vh-60px)]" : "max-h-[60vh] md:max-h-[65vh]")}
                    style={{
                        background: isDarkMode ? "linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)" : "linear-gradient(180deg, hsl(210, 8%, 97%) 0%, hsl(210, 6%, 93%) 100%)",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );

    // For mobile or fullscreen: no dragging
    if (isFullscreen || isMobile) {
        return WindowContent;
    }

    // For desktop: enable dragging
    return (
        <Draggable handle=".window-header" defaultPosition={defaultPosition} bounds="parent" onMouseDown={onFocus}>
            {WindowContent}
        </Draggable>
    );
};
