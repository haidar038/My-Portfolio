import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export const JourneyWindow = () => {
    const { t } = useTranslation();
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-cyan-600" />
                    {t("journey.sectionheading1")}
                </h2>
                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div key={index} className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200/50">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                                <span className="text-xs text-gray-600 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {edu.year}
                                </span>
                            </div>
                            <p className="text-sm text-cyan-700 font-medium mb-1">{edu.institution}</p>
                            <p className="text-sm text-gray-600">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                    {t("journey.sectionheading2")}
                </h2>
                <div className="space-y-4">
                    {experience.map((exp, index) => (
                        <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                                <span className="text-xs text-gray-600 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-sm text-blue-700 font-medium mb-1">{exp.company}</p>
                            <p className="text-sm text-gray-600">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
