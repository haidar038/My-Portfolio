import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";

export const JourneyWindow = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useTheme();
    const education = [
        {
            degree: t("journey.degree1"),
            institution: t("journey.degree1Instance"),
            year: t("journey.degree1Date"),
            description: t("journey.degree1Desc"),
        },
        {
            degree: t("journey.degree2"),
            institution: t("journey.degree2Instance"),
            year: t("journey.degree2Date"),
            description: t("journey.degree2Desc"),
        },
    ];

    const experience = [
        {
            title: t("journey.work1"),
            company: t("journey.work1Instance"),
            period: t("journey.work1Date"),
            description: t("journey.work1Desc"),
        },
        {
            title: t("journey.work2"),
            company: t("journey.work2Instance"),
            period: t("journey.work2Date"),
            description: t("journey.work2Desc"),
        },
        {
            title: t("journey.work3"),
            company: t("journey.work3Instance"),
            period: t("journey.work3Date"),
            description: t("journey.work3Desc"),
        },
        {
            title: t("journey.work4"),
            company: t("journey.work4Instance"),
            period: t("journey.work4Date"),
            description: t("journey.work4Desc"),
        },
        {
            title: t("journey.work5"),
            company: t("journey.work5Instance"),
            period: t("journey.work5Date"),
            description: t("journey.work5Desc"),
        },
    ];

    return (
        <div className="space-y-8 p-4 md:p-6">
            <div>
                <h2
                    className="text-2xl font-bold mb-6 flex items-center gap-2 transition-colors duration-300"
                    style={{
                        color: isDarkMode ? "#f8fafc" : "#1f2937",
                    }}
                >
                    <GraduationCap
                        className="w-6 h-6"
                        style={{
                            color: isDarkMode ? "#22d3ee" : "#0891b2",
                        }}
                    />
                    {t("journey.sectionheading1")}
                </h2>
                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-lg border transition-all duration-300"
                            style={{
                                background: isDarkMode ? "linear-gradient(to bottom right, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))" : "linear-gradient(to bottom right, rgb(236, 254, 255), rgb(239, 246, 255))",
                                borderColor: isDarkMode ? "rgba(6, 182, 212, 0.3)" : "rgba(165, 243, 252, 0.5)",
                            }}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3
                                    className="font-semibold transition-colors duration-300"
                                    style={{
                                        color: isDarkMode ? "#f8fafc" : "#1f2937",
                                    }}
                                >
                                    {edu.degree}
                                </h3>
                                <span
                                    className="text-xs flex items-center gap-1 transition-colors duration-300"
                                    style={{
                                        color: isDarkMode ? "#cbd5e1" : "#4b5563",
                                    }}
                                >
                                    <Calendar className="w-3 h-3" />
                                    {edu.year}
                                </span>
                            </div>
                            <p
                                className="text-sm font-medium mb-1 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#67e8f9" : "#0e7490",
                                }}
                            >
                                {edu.institution}
                            </p>
                            <p
                                className="text-sm transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#cbd5e1" : "#4b5563",
                                }}
                            >
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2
                    className="text-2xl font-bold mb-6 flex items-center gap-2 transition-colors duration-300"
                    style={{
                        color: isDarkMode ? "#f8fafc" : "#1f2937",
                    }}
                >
                    <Briefcase
                        className="w-6 h-6"
                        style={{
                            color: isDarkMode ? "#60a5fa" : "#2563eb",
                        }}
                    />
                    {t("journey.sectionheading2")}
                </h2>
                <div className="space-y-4">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-lg border transition-all duration-300"
                            style={{
                                background: isDarkMode ? "linear-gradient(to bottom right, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15))" : "linear-gradient(to bottom right, rgb(239, 246, 255), rgb(238, 242, 255))",
                                borderColor: isDarkMode ? "rgba(59, 130, 246, 0.3)" : "rgba(191, 219, 254, 0.5)",
                            }}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3
                                    className="font-semibold transition-colors duration-300"
                                    style={{
                                        color: isDarkMode ? "#f8fafc" : "#1f2937",
                                    }}
                                >
                                    {exp.title}
                                </h3>
                                <span
                                    className="text-xs flex items-center gap-1 transition-colors duration-300"
                                    style={{
                                        color: isDarkMode ? "#cbd5e1" : "#4b5563",
                                    }}
                                >
                                    <Calendar className="w-3 h-3" />
                                    {exp.period}
                                </span>
                            </div>
                            <p
                                className="text-sm font-medium mb-1 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#93c5fd" : "#1d4ed8",
                                }}
                            >
                                {exp.company}
                            </p>
                            <p
                                className="text-sm transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#cbd5e1" : "#4b5563",
                                }}
                            >
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
