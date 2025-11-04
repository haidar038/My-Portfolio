import { Folder, ExternalLink, Star } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const WorkWindow = () => {
  const { isDarkMode } = useTheme();
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      tech: ["React", "Firebase", "Tailwind CSS"],
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with interactive animations and smooth transitions",
      tech: ["React", "Three.js", "GSAP"],
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with forecasts and interactive maps",
      tech: ["React", "OpenWeather API", "Chart.js"],
      featured: false
    },
    {
      title: "Blog CMS",
      description: "Content management system for blogs with markdown support",
      tech: ["Next.js", "MDX", "Tailwind CSS"],
      featured: false
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 transition-colors duration-300" style={{
          color: isDarkMode ? '#f8fafc' : '#1f2937'
        }}>
          <Folder className="w-6 h-6" style={{
            color: isDarkMode ? '#22d3ee' : '#0891b2'
          }} />
          My Projects
        </h2>
        <p className="text-sm mb-6 transition-colors duration-300" style={{
          color: isDarkMode ? '#cbd5e1' : '#4b5563'
        }}>A showcase of my recent work and contributions</p>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border transition-all duration-300 hover:shadow-lg group"
            style={{
              background: isDarkMode
                ? 'linear-gradient(to bottom right, rgba(51, 65, 85, 0.5), rgba(30, 41, 59, 0.5))'
                : 'linear-gradient(to bottom right, rgb(255, 255, 255), rgb(249, 250, 251))',
              borderColor: isDarkMode ? 'rgba(148, 163, 184, 0.3)' : 'rgba(229, 231, 235, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = isDarkMode ? 'rgba(34, 211, 238, 0.5)' : 'rgba(103, 232, 249, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isDarkMode ? 'rgba(148, 163, 184, 0.3)' : 'rgba(229, 231, 235, 0.5)';
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold transition-colors" style={{
                  color: isDarkMode ? '#f8fafc' : '#1f2937'
                }}>
                  {project.title}
                </h3>
                {project.featured && (
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                )}
              </div>
              <ExternalLink className="w-4 h-4 transition-colors" style={{
                color: isDarkMode ? '#94a3b8' : '#9ca3af'
              }} />
            </div>

            <p className="text-sm mb-3 transition-colors duration-300" style={{
              color: isDarkMode ? '#cbd5e1' : '#4b5563'
            }}>{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs rounded-md font-medium transition-all duration-300"
                  style={{
                    background: isDarkMode ? 'rgba(6, 182, 212, 0.2)' : 'rgb(207, 250, 254)',
                    color: isDarkMode ? '#67e8f9' : '#0e7490'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
