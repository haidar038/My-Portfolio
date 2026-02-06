import { Folder, ExternalLink, Star, ChevronLeft, ChevronRight, Home, Github } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Category = "graphic-design" | "web-development" | null;

export const WorkWindow = () => {
    const { isDarkMode } = useTheme();
    const [currentCategory, setCurrentCategory] = useState<Category>(null);
    const { t } = useTranslation();

    const categories = [
        {
            id: "graphic-design" as Category,
            name: t("work.graphicDesign"),
            iconLight: "@/src/assets/icons/Brush.png",
            iconDark: "@/src/assets/icons/dark-theme-icons/BrushDark.png",
            description: t("work.graphicDesignDesc"),
        },
        {
            id: "web-development" as Category,
            name: t("work.webDevelopment"),
            iconLight: "@/src/assets/icons/WebDev.png",
            iconDark: "@/src/assets/icons/dark-theme-icons/WebDevDark.png",
            description: t("work.webDevelopmentDesc"),
        },
    ];

    const projects = {
        "graphic-design": [
            {
                title: t("work.project1"),
                description: t("work.project1Desc"),
                tech: ["Figma", "Adobe XD", "Adobe Illustrator"],
                featured: true,
                url: "", // Add your project URL here
                githubUrl: "",
            },
            {
                title: t("work.project2"),
                description: t("work.project2Desc"),
                tech: ["Figma", "Canva", "Photoshop"],
                featured: true,
                url: "", // Add your project URL here
                githubUrl: "",
            },
            {
                title: t("work.project3"),
                description: t("work.project3Desc"),
                tech: ["Figma", "Photoshop", "Adobe Illustrator"],
                featured: true,
                url: "", // Add your project URL here
                githubUrl: "",
            },
            {
                title: t("work.project4"),
                description: t("work.project4Desc"),
                tech: ["Photoshop", "Figma", "Canva", "Adobe Illustrator"],
                featured: true,
                url: "", // Add your project URL here
                githubUrl: "",
            },
        ],
        "web-development": [
            {
                title: t("work.rindang"),
                description: t("work.rindangDesc"),
                tech: ["React", "Supabase | PostgreSQL", "Tailwind CSS", "Groq LLM"],
                featured: true,
                url: "https://rindang.net", // Add your actual project URL here
                githubUrl: "https://github.com/haidar038/digifarm",
            },
            {
                title: t("work.sl"),
                description: t("work.slDesc"),
                tech: ["React", "Firebase", "Tailwind CSS"],
                featured: true,
                url: "https://sl2.my.id", // Add your project URL here
                githubUrl: "https://github.com/haidar038/sl2",
            },
            {
                title: t("work.porto"),
                description: t("work.portoDesc"),
                tech: ["React", "Tailwind CSS", "GSAP"],
                featured: true,
                url: "https://haidar038.vercel.app", // Add your project URL here
                githubUrl: "https://github.com/haidar038/My-Portfolio",
            },
            {
                title: t("work.pasiar"),
                description: t("work.pasiarDesc"),
                tech: ["React", "Supabase | PostgreSQL", "MapLibre GL", "Chart.js"],
                featured: true,
                url: "https://pasiar.ternatekota.go.id", // Add your project URL here
                githubUrl: "https://github.com/haidar038/pasiar",
            },
            {
                title: t("work.sapulidi"),
                description: t("work.sapulidiDesc"),
                tech: ["React", "Supabase | PostgreSQL", "Tailwind CSS", "Groq LLM"],
                featured: false,
                url: "https://sapulidi.vercel.app", // Add your project URL here
                githubUrl: "https://github.com/haidar038/trash-talk-cms",
            },
            {
                title: t("work.wikisnap"),
                description: t("work.wikisnapDesc"),
                tech: ["React", "Supabase | PostgreSQL", "Tailwind CSS", "Groq LLM"],
                featured: false,
                url: "https://sapulidi.vercel.app", // Add your project URL here
                githubUrl: "https://github.com/haidar038/trash-talk-cms",
            },
            {
                title: t("work.kagounga"),
                description: t("work.kagoungaDesc"),
                tech: ["React", "Supabase | PostgreSQL", "Tailwind CSS", "MapLibre GL", "Chart.js"],
                featured: false,
                url: "https://kagounga.vercel.app", // Add your project URL here
                githubUrl: "https://github.com/haidar038/kagounga",
            },
            {
                title: t("work.modiv"),
                description: t("work.modivDesc"),
                tech: ["React", "Supabase | PostgreSQL", "Tailwind CSS"],
                featured: false,
                url: "https://modiv-eventcraft.vercel.app", // Add your project URL here
                githubUrl: "https://github.com/haidar038/modiv",
            },
        ],
    };

    const handleFolderClick = (categoryId: Category) => {
        setCurrentCategory(categoryId);
    };

    const handleBackClick = () => {
        setCurrentCategory(null);
    };

    const handleProjectLinkClick = (url: string) => {
        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    const renderToolbar = () => (
        <div
            className="flex items-center gap-1 px-2 py-1.5 border-b transition-all duration-300 sticky"
            style={{
                background: isDarkMode ? "linear-gradient(180deg, rgba(71, 85, 105, 0.6) 0%, rgba(51, 65, 85, 0.6) 100%)" : "linear-gradient(180deg, hsl(210, 17%, 98%) 0%, hsl(210, 17%, 95%) 100%)",
                borderBottomColor: isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)",
            }}
        >
            <button
                onClick={handleBackClick}
                disabled={currentCategory === null}
                className="p-1 rounded transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                    background: currentCategory !== null ? (isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(255, 255, 255, 0.8)") : "transparent",
                    cursor: currentCategory !== null ? "pointer" : "not-allowed",
                }}
                onMouseEnter={(e) => {
                    if (currentCategory !== null) {
                        e.currentTarget.style.background = isDarkMode ? "rgba(148, 163, 184, 0.3)" : "rgba(255, 255, 255, 1)";
                    }
                }}
                onMouseLeave={(e) => {
                    if (currentCategory !== null) {
                        e.currentTarget.style.background = isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(255, 255, 255, 0.8)";
                    }
                }}
            >
                <ChevronLeft
                    className="w-4 h-4"
                    style={{
                        color: isDarkMode ? "#cbd5e1" : "#4b5563",
                    }}
                />
            </button>

            <button disabled className="p-1 rounded opacity-30 cursor-not-allowed">
                <ChevronRight
                    className="w-4 h-4"
                    style={{
                        color: isDarkMode ? "#cbd5e1" : "#4b5563",
                    }}
                />
            </button>

            <div className="flex-1 flex items-center gap-2 px-2">
                <Home
                    className="w-3.5 h-3.5"
                    style={{
                        color: isDarkMode ? "#94a3b8" : "#6b7280",
                    }}
                />
                <span
                    className="text-xs font-medium transition-colors duration-300"
                    style={{
                        color: isDarkMode ? "#cbd5e1" : "#4b5563",
                    }}
                >
                    {currentCategory ? categories.find((c) => c.id === currentCategory)?.name : t("work.allProjects")}
                </span>
            </div>
        </div>
    );

    const renderFolderView = () => (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleFolderClick(category.id)}
                        className="group flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                        style={{
                            background: isDarkMode ? "linear-gradient(to bottom, rgba(51, 65, 85, 0.3), rgba(30, 41, 59, 0.3))" : "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(249, 250, 251, 0.5))",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = isDarkMode ? "linear-gradient(to bottom, rgba(51, 65, 85, 0.5), rgba(30, 41, 59, 0.5))" : "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = isDarkMode ? "linear-gradient(to bottom, rgba(51, 65, 85, 0.3), rgba(30, 41, 59, 0.3))" : "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(249, 250, 251, 0.5))";
                        }}
                    >
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <img src={isDarkMode ? category.iconDark : category.iconLight} alt={category.name} className="w-full h-full object-contain transition-all duration-200 group-hover:scale-110" />
                        </div>

                        <div className="text-center">
                            <h3
                                className="font-semibold mb-1 transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#f8fafc" : "#1f2937",
                                }}
                            >
                                {category.name}
                            </h3>
                            <p
                                className="text-xs transition-colors duration-300"
                                style={{
                                    color: isDarkMode ? "#94a3b8" : "#6b7280",
                                }}
                            >
                                {category.description}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderCategoryContent = () => {
        if (!currentCategory) return null;

        const categoryProjects = projects[currentCategory];

        return (
            <div className="p-6 space-y-4">
                {categoryProjects.map((project, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg border transition-all duration-300 hover:shadow-lg group"
                        style={{
                            background: isDarkMode ? "linear-gradient(to bottom right, rgba(51, 65, 85, 0.5), rgba(30, 41, 59, 0.5))" : "linear-gradient(to bottom right, rgb(255, 255, 255), rgb(249, 250, 251))",
                            borderColor: isDarkMode ? "rgba(148, 163, 184, 0.3)" : "rgba(229, 231, 235, 0.5)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = isDarkMode ? "rgba(34, 211, 238, 0.5)" : "rgba(103, 232, 249, 0.5)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = isDarkMode ? "rgba(148, 163, 184, 0.3)" : "rgba(229, 231, 235, 0.5)";
                        }}
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <h3
                                    className="font-semibold transition-colors"
                                    style={{
                                        color: isDarkMode ? "#f8fafc" : "#1f2937",
                                    }}
                                >
                                    {project.title}
                                </h3>
                                {project.featured && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                            </div>
                            <div className="flex items-center gap-2">
                                {project.githubUrl && (
                                    <button onClick={() => handleProjectLinkClick(project.githubUrl)} className="transition-all duration-200 hover:scale-110" title="View Code on GitHub">
                                        <Github
                                            className="w-4 h-4 transition-colors"
                                            style={{
                                                color: isDarkMode ? "#94a3b8" : "#9ca3af",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = isDarkMode ? "#67e8f9" : "#0ea5e9";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = isDarkMode ? "#94a3b8" : "#9ca3af";
                                            }}
                                        />
                                    </button>
                                )}
                                {project.url && (
                                    <button onClick={() => handleProjectLinkClick(project.url)} className="transition-all duration-200 hover:scale-110" title="Open Live Project">
                                        <ExternalLink
                                            className="w-4 h-4 transition-colors"
                                            style={{
                                                color: isDarkMode ? "#94a3b8" : "#9ca3af",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = isDarkMode ? "#67e8f9" : "#0ea5e9";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = isDarkMode ? "#94a3b8" : "#9ca3af";
                                            }}
                                        />
                                    </button>
                                )}
                            </div>
                        </div>

                        <p
                            className="text-sm mb-3 transition-colors duration-300"
                            style={{
                                color: isDarkMode ? "#cbd5e1" : "#4b5563",
                            }}
                        >
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-2 py-1 text-xs rounded-md font-medium transition-all duration-300"
                                    style={{
                                        background: isDarkMode ? "rgba(6, 182, 212, 0.2)" : "rgb(207, 250, 254)",
                                        color: isDarkMode ? "#67e8f9" : "#0e7490",
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full">
            {renderToolbar()}
            <div className="flex-1 overflow-y-auto">{currentCategory === null ? renderFolderView() : renderCategoryContent()}</div>
        </div>
    );
};
