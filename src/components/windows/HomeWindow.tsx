import { Sparkles } from "lucide-react";

export const HomeWindow = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Welcome!
          </h1>
          <p className="text-gray-600">Your vintage macOS portfolio</p>
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        <p className="text-gray-700 leading-relaxed">
          Welcome to my portfolio website! This site is designed with a nostalgic touch, 
          inspired by the classic macOS interface. Navigate through different sections 
          using the dock at the bottom of the screen.
        </p>

        <div className="mt-6 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200/50">
          <h3 className="text-sm font-semibold text-cyan-900 mb-2">Getting Started</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>Click icons in the dock to open windows</li>
            <li>Drag windows by their title bar to reposition</li>
            <li>Close windows using the red button</li>
            <li>Explore my journey, projects, and get in touch!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
