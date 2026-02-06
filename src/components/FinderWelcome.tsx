import { Monitor, Languages, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

interface FinderWelcomeProps {
    onMoreInfoClick?: () => void;
}

export const FinderWelcome = ({ onMoreInfoClick }: FinderWelcomeProps) => {
    const { t, i18n } = useTranslation();
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "id" : "en";
        i18n.changeLanguage(newLang);
    };
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[8] w-[95%] sm:w-[90%] laptop:w-[85%] max-w-md laptop:max-w-lg desktop:max-w-xl pointer-events-none">
            <div
                className="rounded-xl sm:rounded-2xl animate-fade-in overflow-hidden shadow-2xl pointer-events-none transition-all duration-300"
                style={{
                    boxShadow: isDarkMode ? "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(148, 163, 184, 0.2)" : "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)",
                    background: isDarkMode ? "linear-gradient(180deg, rgba(51, 65, 85, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)" : "linear-gradient(180deg, #f5f5f7 0%, #e8e8ea 100%)",
                    border: isDarkMode ? "1px solid rgba(148, 163, 184, 0.2)" : "1px solid rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* Window Controls */}
                <div
                    className="h-9 sm:h-10 laptop:h-11 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 border-b pointer-events-none transition-all duration-300"
                    style={{
                        background: isDarkMode ? "linear-gradient(180deg, rgba(71, 85, 105, 0.8) 0%, rgba(51, 65, 85, 0.8) 100%)" : "linear-gradient(180deg, #fafafa 0%, #f0f0f2 100%)",
                        borderBottomColor: isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)",
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
                <div className="p-4 sm:p-5 laptop:p-6 desktop:p-8 text-center space-y-3 sm:space-y-4 laptop:space-y-5 desktop:space-y-6 pointer-events-none">
                    {/* Monitor/Laptop Icon */}
                    <div className="flex justify-center">
                        <div
                            className="w-16 h-16 sm:w-20 sm:h-20 laptop:w-24 laptop:h-24 desktop:w-32 desktop:h-32 rounded-2xl sm:rounded-3xl flex items-center justify-center"
                            style={{
                                background: "linear-gradient(135deg, #6dd5ed 0%, #2193b0 100%)",
                                boxShadow: "0 10px 30px rgba(33, 147, 176, 0.3), inset 0 -2px 10px rgba(0, 0, 0, 0.1), inset 0 2px 10px rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            <Monitor className="w-8 h-8 sm:w-10 sm:h-10 laptop:w-12 laptop:h-12 desktop:w-16 desktop:h-16 text-white" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <h1
                            className="text-lg sm:text-xl laptop:text-2xl desktop:text-3xl font-bold mb-1 leading-tight transition-colors duration-300"
                            style={{
                                color: isDarkMode ? "#f8fafc" : "#111827",
                            }}
                        >
                            {t("finderWelcome.title")}
                        </h1>
                        <p
                            className="text-xs sm:text-sm laptop:text-base transition-colors duration-300"
                            style={{
                                color: isDarkMode ? "#cbd5e1" : "#6b7280",
                            }}
                        >
                            {t("finderWelcome.subtitle")}
                        </p>
                    </div>

                    {/* Specs/Info */}
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm laptop:text-base">
                        <div className="flex justify-between items-center px-2 sm:px-4 laptop:px-6">
                            <span
                                className="text-right flex-1 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#cbd5e1" : "#4b5563",
                                }}
                            >
                                {t("finderWelcome.role")}
                            </span>
                            <span
                                className="font-medium text-left flex-1 ml-2 sm:ml-4 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#f8fafc" : "#111827",
                                }}
                            >
                                {t("finderWelcome.roleValue")}
                            </span>
                        </div>
                        <div className="flex justify-between items-center px-2 sm:px-4 laptop:px-6">
                            <span
                                className="text-right flex-1 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#cbd5e1" : "#4b5563",
                                }}
                            >
                                {t("finderWelcome.experience")}
                            </span>
                            <span
                                className="font-medium text-left flex-1 ml-2 sm:ml-4 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#f8fafc" : "#111827",
                                }}
                            >
                                {t("finderWelcome.experienceValue")}
                            </span>
                        </div>
                        <div className="flex justify-between items-center px-2 sm:px-4 laptop:px-6">
                            <span
                                className="text-right flex-1 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#cbd5e1" : "#4b5563",
                                }}
                            >
                                {t("finderWelcome.status")}
                            </span>
                            <span
                                className="font-medium text-left flex-1 ml-2 sm:ml-4 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#f8fafc" : "#111827",
                                }}
                            >
                                {t("finderWelcome.statusValue")}
                            </span>
                        </div>
                        <div className="flex justify-between items-center px-2 sm:px-4 laptop:px-6">
                            <span
                                className="text-right flex-1 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#cbd5e1" : "#4b5563",
                                }}
                            >
                                {t("finderWelcome.version")}
                            </span>
                            <span
                                className="font-medium text-left flex-1 ml-2 sm:ml-4 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#f8fafc" : "#111827",
                                }}
                            >
                                {t("finderWelcome.versionValue")}
                            </span>
                        </div>
                    </div>

                    {/* Button (TSX-only, based on your style.sass) */}
                    <div className="pt-1 sm:pt-2 laptop:pt-3 pointer-events-auto space-y-2 sm:space-y-3">
                        <button
                            type="button"
                            aria-label="More information"
                            onClick={onMoreInfoClick}
                            className="group relative overflow-hidden rounded-full px-5 sm:px-7 laptop:px-8 desktop:px-10 py-2 sm:py-2.5 laptop:py-3 desktop:py-3.5 text-xs sm:text-sm laptop:text-base font-semibold text-white transition-all duration-200 ease-in-out focus:outline-none hover:scale-105 active:scale-95"
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
                            <span className="relative z-10">{t("finderWelcome.moreInfo")}</span>
                        </button>

                        {/* Language Switcher Button - Mobile Only */}
                        {isMobile && (
                            <button
                                type="button"
                                aria-label="Switch language"
                                onClick={toggleLanguage}
                                className="group relative overflow-hidden rounded-full px-3 sm:px-5 laptop:px-6 py-1.5 sm:py-2 laptop:py-2.5 text-[10px] sm:text-xs laptop:text-sm font-semibold text-white transition-all duration-200 ease-in-out focus:outline-none hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 mx-auto"
                                style={{
                                    background: `radial-gradient(farthest-corner at 50% 100%, rgba(255,255,255,0.6), transparent), linear-gradient(to bottom, #6b7280, #4b5563)`,
                                    boxShadow: "0 3px 3px rgba(0,0,0,0.3)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    textShadow: "0 1px 0.3em rgba(0,0,0,0.3)",
                                    cursor: "pointer",
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                {/* glossy highlight */}
                                <span
                                    aria-hidden
                                    className="absolute left-[3%] top-[4%] w-[94%] h-[40%] rounded-full pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:h-[45%]"
                                    style={{
                                        background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.05))",
                                        opacity: 0.8,
                                        transform: "translateZ(0)",
                                    }}
                                />

                                {/* subtle inner shadow layer */}
                                <span
                                    aria-hidden
                                    className="absolute inset-0 pointer-events-none transition-all duration-200 group-hover:opacity-80"
                                    style={{
                                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -4px 12px rgba(0,0,0,0.12)",
                                        borderRadius: "9999px",
                                    }}
                                />

                                {/* Hover glow effect */}
                                <span
                                    aria-hidden
                                    className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        boxShadow: "0 0 15px rgba(107, 114, 128, 0.5), 0 0 30px rgba(107, 114, 128, 0.2)",
                                    }}
                                />

                                {/* label */}
                                <Languages className="w-3 h-3 sm:w-3.5 sm:h-3.5 relative z-10" />
                                <span className="relative z-10">{i18n.language === "en" ? "English" : "Indonesia"}</span>
                            </button>
                        )}

                        {/* Dark Mode Toggle Button - Mobile Only */}
                        {isMobile && (
                            <button
                                type="button"
                                aria-label="Toggle dark mode"
                                onClick={toggleTheme}
                                className="group relative overflow-hidden rounded-full px-3 sm:px-5 laptop:px-6 py-1.5 sm:py-2 laptop:py-2.5 text-[10px] sm:text-xs laptop:text-sm font-semibold text-white transition-all duration-200 ease-in-out focus:outline-none hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 mx-auto"
                                style={{
                                    background: `radial-gradient(farthest-corner at 50% 100%, rgba(255,255,255,0.6), transparent), linear-gradient(to bottom, ${isDarkMode ? "#1f2937" : "#f59e0b"}, ${isDarkMode ? "#111827" : "#d97706"})`,
                                    boxShadow: "0 3px 3px rgba(0,0,0,0.3)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    textShadow: "0 1px 0.3em rgba(0,0,0,0.3)",
                                    cursor: "pointer",
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                {/* glossy highlight */}
                                <span
                                    aria-hidden
                                    className="absolute left-[3%] top-[4%] w-[94%] h-[40%] rounded-full pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:h-[45%]"
                                    style={{
                                        background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.05))",
                                        opacity: 0.8,
                                        transform: "translateZ(0)",
                                    }}
                                />

                                {/* subtle inner shadow layer */}
                                <span
                                    aria-hidden
                                    className="absolute inset-0 pointer-events-none transition-all duration-200 group-hover:opacity-80"
                                    style={{
                                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -4px 12px rgba(0,0,0,0.12)",
                                        borderRadius: "9999px",
                                    }}
                                />

                                {/* Hover glow effect */}
                                <span
                                    aria-hidden
                                    className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        boxShadow: `0 0 15px ${isDarkMode ? "rgba(31, 41, 55, 0.5)" : "rgba(245, 158, 11, 0.5)"}, 0 0 30px ${isDarkMode ? "rgba(31, 41, 55, 0.2)" : "rgba(245, 158, 11, 0.2)"}`,
                                    }}
                                />

                                {/* label */}
                                {isDarkMode ? <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 relative z-10" /> : <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5 relative z-10" />}
                                <span className="relative z-10">{isDarkMode ? "Light" : "Dark"}</span>
                            </button>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="pt-2 sm:pt-3 laptop:pt-4 space-y-0.5 sm:space-y-1">
                        <p
                            className="text-[10px] sm:text-xs laptop:text-sm transition-colors duration-300"
                            style={{
                                color: isDarkMode ? "#cbd5e1" : "#6b7280",
                            }}
                        >
                            {t("finderWelcome.footer1")}
                        </p>
                        <p
                            className="text-[10px] sm:text-xs laptop:text-sm transition-colors duration-300"
                            style={{
                                color: isDarkMode ? "#94a3b8" : "#9ca3af",
                            }}
                        >
                            {t("finderWelcome.footer2")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
