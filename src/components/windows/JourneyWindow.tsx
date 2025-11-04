import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";

export const JourneyWindow = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useTheme();
    const education = [
        {
            degree: "Bachelor of Computer Science",
            institution: "Muhammadiyah University of North Maluku",
            year: "2019 - Now",
            description: "Focused on software engineering and web development",
        },
        {
            degree: "Senior High School",
            institution: "SMA Muhammadiyah Ternate",
            year: "2016 - 2019",
            description: "Social Sciences major with a strong interest in technology",
        },
    ];

    const experience = [
        {
            title: "Graphic Designer",
            company: "PT. Bintang Muara Kieraha (Muara Group)",
            period: "2023 - 2024",
            description: "Created visual content for marketing campaigns and social media",
        },
        {
            title: "Junior Software Engineer",
            company: "Ternate Creative Space",
            period: "2022 - Present",
            description: "Developing and maintaining web applications using Flask, React and Node.js",
        },
        {
            title: "Creative Designer",
            company: "Ternate Creative Space",
            period: "2022 - Present",
            description: "Created visual content for community needs such as social media, events, etc",
        },
        {
            title: "Creative Designer",
            company: "Ternate Geoparh Youth Forum",
            period: "2022 - Present",
            description: "Created visual content for community needs and event promotional",
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 transition-colors duration-300" style={{
                    color: isDarkMode ? '#f8fafc' : '#1f2937'
                }}>
                    <GraduationCap className="w-6 h-6" style={{
                        color: isDarkMode ? '#22d3ee' : '#0891b2'
                    }} />
                    {t("journey.sectionheading1")}
                </h2>
                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div key={index} className="p-4 rounded-lg border transition-all duration-300" style={{
                            background: isDarkMode
                                ? 'linear-gradient(to bottom right, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.15))'
                                : 'linear-gradient(to bottom right, rgb(236, 254, 255), rgb(239, 246, 255))',
                            borderColor: isDarkMode ? 'rgba(6, 182, 212, 0.3)' : 'rgba(165, 243, 252, 0.5)'
                        }}>
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold transition-colors duration-300" style={{
                                    color: isDarkMode ? '#f8fafc' : '#1f2937'
                                }}>{edu.degree}</h3>
                                <span className="text-xs flex items-center gap-1 transition-colors duration-300" style={{
                                    color: isDarkMode ? '#cbd5e1' : '#4b5563'
                                }}>
                                    <Calendar className="w-3 h-3" />
                                    {edu.year}
                                </span>
                            </div>
                            <p className="text-sm font-medium mb-1 transition-colors duration-300" style={{
                                color: isDarkMode ? '#67e8f9' : '#0e7490'
                            }}>{edu.institution}</p>
                            <p className="text-sm transition-colors duration-300" style={{
                                color: isDarkMode ? '#cbd5e1' : '#4b5563'
                            }}>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 transition-colors duration-300" style={{
                    color: isDarkMode ? '#f8fafc' : '#1f2937'
                }}>
                    <Briefcase className="w-6 h-6" style={{
                        color: isDarkMode ? '#60a5fa' : '#2563eb'
                    }} />
                    {t("journey.sectionheading2")}
                </h2>
                <div className="space-y-4">
                    {experience.map((exp, index) => (
                        <div key={index} className="p-4 rounded-lg border transition-all duration-300" style={{
                            background: isDarkMode
                                ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15))'
                                : 'linear-gradient(to bottom right, rgb(239, 246, 255), rgb(238, 242, 255))',
                            borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(191, 219, 254, 0.5)'
                        }}>
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold transition-colors duration-300" style={{
                                    color: isDarkMode ? '#f8fafc' : '#1f2937'
                                }}>{exp.title}</h3>
                                <span className="text-xs flex items-center gap-1 transition-colors duration-300" style={{
                                    color: isDarkMode ? '#cbd5e1' : '#4b5563'
                                }}>
                                    <Calendar className="w-3 h-3" />
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-sm font-medium mb-1 transition-colors duration-300" style={{
                                color: isDarkMode ? '#93c5fd' : '#1d4ed8'
                            }}>{exp.company}</p>
                            <p className="text-sm transition-colors duration-300" style={{
                                color: isDarkMode ? '#cbd5e1' : '#4b5563'
                            }}>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
