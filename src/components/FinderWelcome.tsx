import { Monitor } from "lucide-react";

interface FinderWelcomeProps {
    onMoreInfoClick?: () => void;
}

export const FinderWelcome = ({ onMoreInfoClick }: FinderWelcomeProps) => {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[8] w-[95%] sm:w-[90%] max-w-md pointer-events-none">
            <div
                className="rounded-xl sm:rounded-2xl border border-gray-300/80 animate-fade-in overflow-hidden shadow-2xl pointer-events-none"
                style={{
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)",
                    background: "linear-gradient(180deg, #f5f5f7 0%, #e8e8ea 100%)",
                }}
            >
                {/* Window Controls */}
                <div
                    className="h-9 sm:h-11 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 border-b border-gray-300/60 pointer-events-none"
                    style={{
                        background: "linear-gradient(180deg, #fafafa 0%, #f0f0f2 100%)",
                    }}
                >
                    <div className="flex gap-1.5 sm:gap-2">
                        <div
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 90%, #fff8, transparent), linear-gradient(in oklch to right, oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h), transparent, oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h)), linear-gradient(in oklch to bottom, oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h), oklch(72% 0.25 25))",
                                border: "2px solid oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h)",
                                boxShadow: "inset 0 0 5px color-mix(in oklch, oklch(72% 0.25 25), oklch(from oklch(72% 0.25 25) calc(l * 0.75) c h)), 0 1px 1px 1px rgba(255, 255, 255, 0.7), 0 -1px 1px 1px rgba(0, 0, 0, 0.5)",
                            }}
                        />
                        <div
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 90%, #fff8, transparent), linear-gradient(in oklch to right, oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h), transparent, oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h)), linear-gradient(in oklch to bottom, oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h), oklch(90% 0.17 82))",
                                border: "2px solid oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h)",
                                boxShadow: "inset 0 0 5px color-mix(in oklch, oklch(90% 0.17 82), oklch(from oklch(90% 0.17 82) calc(l * 0.75) c h)), 0 1px 1px 1px rgba(255, 255, 255, 0.7), 0 -1px 1px 1px rgba(0, 0, 0, 0.5)",
                            }}
                        />
                        <div
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 90%, #fff8, transparent), linear-gradient(in oklch to right, oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h), transparent, oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h)), linear-gradient(in oklch to bottom, oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h), oklch(85% 0.2 135))",
                                border: "2px solid oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h)",
                                boxShadow: "inset 0 0 5px color-mix(in oklch, oklch(85% 0.2 135), oklch(from oklch(85% 0.2 135) calc(l * 0.75) c h)), 0 1px 1px 1px rgba(255, 255, 255, 0.7), 0 -1px 1px 1px rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </div>
                </div>

                {/* Content - About Mac Style */}
                <div className="p-4 sm:p-6 md:p-8 text-center space-y-4 sm:space-y-5 md:space-y-6 pointer-events-none">
                    {/* Monitor/Laptop Icon */}
                    <div className="flex justify-center">
                        <div
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl flex items-center justify-center"
                            style={{
                                background: "linear-gradient(135deg, #6dd5ed 0%, #2193b0 100%)",
                                boxShadow: "0 10px 30px rgba(33, 147, 176, 0.3), inset 0 -2px 10px rgba(0, 0, 0, 0.1), inset 0 2px 10px rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            <Monitor className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 leading-tight">
                            <span className="font-luxurious text-blue-600 inline-block align-middle" style={{ fontSize: 'clamp(1.875rem, 5vw, 2.8125rem)', lineHeight: '1' }}>W</span>
                            <span className="align-middle">elcome to </span>
                            <span className="font-luxurious text-blue-600 inline-block align-middle" style={{ fontSize: 'clamp(1.875rem, 5vw, 2.8125rem)', lineHeight: '1' }}>M</span>
                            <span className="align-middle">y </span>
                            <span className="font-luxurious text-blue-600 inline-block align-middle" style={{ fontSize: 'clamp(1.875rem, 5vw, 2.8125rem)', lineHeight: '1' }}>W</span>
                            <span className="align-middle">orld</span>
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500">Welcome, Explorer</p>
                    </div>

                    {/* Specs/Info */}
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                        <div className="flex justify-between items-center px-2 sm:px-4">
                            <span className="text-gray-600 text-right flex-1">Role</span>
                            <span className="text-gray-900 font-medium text-left flex-1 ml-2 sm:ml-4">Developer & Designer</span>
                        </div>
                        <div className="flex justify-between items-center px-2 sm:px-4">
                            <span className="text-gray-600 text-right flex-1">Experience</span>
                            <span className="text-gray-900 font-medium text-left flex-1 ml-2 sm:ml-4">Full Stack</span>
                        </div>
                        <div className="flex justify-between items-center px-2 sm:px-4">
                            <span className="text-gray-600 text-right flex-1">Status</span>
                            <span className="text-gray-900 font-medium text-left flex-1 ml-2 sm:ml-4">Available</span>
                        </div>
                        <div className="flex justify-between items-center px-2 sm:px-4">
                            <span className="text-gray-600 text-right flex-1">Version</span>
                            <span className="text-gray-900 font-medium text-left flex-1 ml-2 sm:ml-4">2025.1</span>
                        </div>
                    </div>

                    {/* Button (TSX-only, based on your style.sass) */}
                    <div className="pt-1 sm:pt-2 pointer-events-auto">
                        <button
                            type="button"
                            aria-label="More information"
                            onClick={onMoreInfoClick}
                            className="group relative overflow-hidden rounded-full px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-200 ease-in-out focus:outline-none hover:scale-105 active:scale-95"
                            style={{
                                // bottom glow + vertical gradient with Royal Blue
                                background: `radial-gradient(farthest-corner at 50% 100%, rgba(255,255,255,0.7), transparent), linear-gradient(to bottom, #1e3a8a, #305CDE)`,
                                boxShadow: "0 4px 4px rgba(0,0,0,0.4)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                textShadow: "0 2px 0.5em rgba(0,0,0,0.2)",
                                cursor: "pointer",
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {/* glossy highlight (menggantikan ::after pseudo-element) */}
                            <span
                                aria-hidden
                                className="absolute left-[3%] top-[4%] w-[94%] h-[40%] rounded-full pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:h-[45%]"
                                style={{
                                    background: "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.08))",
                                    opacity: 0.9,
                                    transform: "translateZ(0)",
                                }}
                            />

                            {/* optional subtle inner shadow layer (keamanan visual) */}
                            <span
                                aria-hidden
                                className="absolute inset-0 pointer-events-none transition-all duration-200 group-hover:opacity-80"
                                style={{
                                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -6px 18px rgba(0,0,0,0.15)",
                                    borderRadius: "9999px",
                                }}
                            />

                            {/* Hover glow effect */}
                            <span
                                aria-hidden
                                className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    boxShadow: "0 0 20px rgba(48, 92, 222, 0.6), 0 0 40px rgba(48, 92, 222, 0.3)",
                                }}
                            />

                            {/* label */}
                            <span className="relative z-10">More Info...</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="pt-2 sm:pt-3 md:pt-4 space-y-0.5 sm:space-y-1">
                        <p className="text-[10px] sm:text-xs text-gray-500">Built with React & TypeScript</p>
                        <p className="text-[10px] sm:text-xs text-gray-400">™ and © 2025. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
