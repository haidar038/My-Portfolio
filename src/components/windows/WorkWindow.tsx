import { Folder, ExternalLink, Star } from "lucide-react";

export const WorkWindow = () => {
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
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <Folder className="w-6 h-6 text-cyan-600" />
          My Projects
        </h2>
        <p className="text-gray-600 text-sm mb-6">A showcase of my recent work and contributions</p>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200/50 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                )}
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors" />
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-2 py-1 text-xs bg-cyan-100 text-cyan-700 rounded-md font-medium"
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
