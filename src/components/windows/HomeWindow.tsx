import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";

export const HomeWindow = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useTheme();

    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t("home.title")}</h1>
                    <p
                        className="transition-colors duration-300"
                        style={{
                            color: isDarkMode ? "#cbd5e1" : "#4b5563",
                        }}
                    >
                        {t("home.subtitle")}
                    </p>
                </div>
            </div>

            <div className="prose prose-sm max-w-none">
                <p
                    className="leading-relaxed transition-colors duration-300"
                    style={{
                        color: isDarkMode ? "#e2e8f0" : "#374151",
                    }}
                >
                    {t("home.intro")}
                </p>

                <div
                    className="mt-6 p-4 rounded-lg border transition-all duration-300"
                    style={{
                        background: isDarkMode ? "linear-gradient(to bottom right, rgba(14, 116, 144, 0.15), rgba(59, 130, 246, 0.15))" : "linear-gradient(to bottom right, rgb(236, 254, 255), rgb(239, 246, 255))",
                        borderColor: isDarkMode ? "rgba(34, 211, 238, 0.3)" : "rgba(165, 243, 252, 0.5)",
                    }}
                >
                    <h3
                        className="text-sm font-semibold mb-2 transition-colors duration-300"
                        style={{
                            color: isDarkMode ? "#67e8f9" : "#164e63",
                        }}
                    >
                        {t("home.gettingStartedTitle")}
                    </h3>
                    <ul
                        className="text-sm space-y-1 list-disc list-inside transition-colors duration-300"
                        style={{
                            color: isDarkMode ? "#e2e8f0" : "#374151",
                        }}
                    >
                        <li>{t("home.tip1")}</li>
                        <li>{t("home.tip2")}</li>
                        <li>{t("home.tip3")}</li>
                        <li>{t("home.tip4")}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
