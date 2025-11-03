export const FinderWelcome = () => {
  const renderStyledText = (text: string) => {
    return text.split(' ').map((word, index) => {
      const firstLetter = word.charAt(0);
      const restOfWord = word.slice(1);
      
      if (firstLetter.toUpperCase() === 'W') {
        return (
          <span key={index}>
            <span className="font-luxurious text-5xl md:text-6xl lg:text-7xl text-cyan-600" style={{ textShadow: '0 2px 8px rgba(34, 211, 238, 0.4)' }}>
              {firstLetter}
            </span>
            <span>{restOfWord}</span>
            {index < text.split(' ').length - 1 && ' '}
          </span>
        );
      }
      
      return <span key={index}>{word}{index < text.split(' ').length - 1 && ' '}</span>;
    });
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[90%] max-w-3xl pointer-events-none">
      <div 
        className="bg-white/70 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border-2 border-white/60 animate-fade-in"
        style={{
          boxShadow: '0 20px 60px -10px rgba(6, 182, 212, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.9), 0 0 40px rgba(34, 211, 238, 0.2)',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.85) 50%, rgba(186, 230, 253, 0.75) 100%)'
        }}
      >
        {/* Finder Window Header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyan-200/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-500 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-500 shadow-sm" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs md:text-sm font-medium text-gray-600">Finder</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            {renderStyledText('Welcome to My World')}
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto px-4" style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}>
            You can explore anything here, think of it as your home and a place where you can reminisce a bit. 
            Let&apos;s get acquainted and make connections.
          </p>

          {/* Decorative glass reflection */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/2 rounded-t-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};
