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
        className="backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-400/60 animate-fade-in overflow-hidden relative"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(180deg, hsl(210, 12%, 92%) 0%, hsl(210, 10%, 86%) 50%, hsl(210, 12%, 80%) 100%)'
        }}
      >
        {/* Finder Window Header */}
        <div 
          className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-400/50 -mx-8 md:-mx-12 px-8 md:px-12 -mt-8 md:-mt-12 pt-3 md:pt-4 mb-8"
          style={{
            background: 'linear-gradient(180deg, hsl(210, 15%, 94%) 0%, hsl(210, 12%, 88%) 50%, hsl(210, 10%, 82%) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 1px 0 rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="flex gap-1.5">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{
                background: 'linear-gradient(135deg, #FF6057 0%, #ED4E44 100%)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              }}
            />
            <div 
              className="w-3 h-3 rounded-full" 
              style={{
                background: 'linear-gradient(135deg, #FFBD2E 0%, #F7A200 100%)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              }}
            />
            <div 
              className="w-3 h-3 rounded-full" 
              style={{
                background: 'linear-gradient(135deg, #29C940 0%, #20A034 100%)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
              }}
            />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs md:text-sm font-medium text-gray-700" style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)' }}>Finder</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-6 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            {renderStyledText('Welcome to My World')}
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto px-4" style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)' }}>
            You can explore anything here, think of it as your home and a place where you can reminisce a bit. 
            Let&apos;s get acquainted and make connections.
          </p>
        </div>
      </div>
    </div>
  );
};
