import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export const JourneyWindow = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University Name",
      year: "2018 - 2022",
      description: "Focused on software engineering and web development"
    },
    {
      degree: "High School Diploma",
      institution: "High School Name",
      year: "2014 - 2018",
      description: "Science and Mathematics track"
    }
  ];

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading frontend development projects and mentoring junior developers"
    },
    {
      title: "Junior Web Developer",
      company: "Startup Inc.",
      period: "2021 - 2022",
      description: "Built responsive web applications using modern frameworks"
    },
    {
      title: "Intern Developer",
      company: "Digital Agency",
      period: "2020 - 2021",
      description: "Assisted in developing client websites and learned industry best practices"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-cyan-600" />
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200/50"
            >
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
          Work Experience
        </h2>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div 
              key={index}
              className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50"
            >
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
