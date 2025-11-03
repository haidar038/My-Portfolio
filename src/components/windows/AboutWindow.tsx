import { User, Heart, Code, Coffee } from "lucide-react";

export const AboutWindow = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600">Get to know who I am</p>
        </div>
      </div>

      <div className="space-y-4 text-gray-700">
        <p className="leading-relaxed">
          Hi there! I'm a passionate developer who loves creating beautiful and 
          functional web experiences. With a keen eye for design and a strong 
          foundation in modern web technologies, I bring ideas to life through code.
        </p>

        <p className="leading-relaxed">
          My journey in tech started with a curiosity about how things work, and 
          it has evolved into a career where I get to build innovative solutions 
          every day. I believe in writing clean, maintainable code and creating 
          user experiences that delight.
        </p>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200/50">
            <Code className="w-5 h-5 text-blue-600 mb-2" />
            <h3 className="font-semibold text-sm text-blue-900">Tech Enthusiast</h3>
            <p className="text-xs text-gray-600 mt-1">Always learning and exploring</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200/50">
            <Heart className="w-5 h-5 text-pink-600 mb-2" />
            <h3 className="font-semibold text-sm text-pink-900">Design Lover</h3>
            <p className="text-xs text-gray-600 mt-1">Beauty meets functionality</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200/50 col-span-2">
            <Coffee className="w-5 h-5 text-amber-600 mb-2" />
            <h3 className="font-semibold text-sm text-amber-900">Coffee Powered</h3>
            <p className="text-xs text-gray-600 mt-1">Fueled by caffeine and curiosity</p>
          </div>
        </div>
      </div>
    </div>
  );
};
