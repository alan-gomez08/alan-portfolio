export function TechStack() {
  // Tu arsenal actualizado exactamente con lo que pediste
  const tools = [
    'FIGMA', 
    'FRAMER', 
    'HTML5', 
    'CSS3', 
    'REACT', 
    'STORYBOOK', 
    'TAILWIND'
  ];

  return (
    <div className="w-full h-20 border-t border-b border-white/5 relative overflow-hidden flex items-center justify-center bg-zinc-950">
      
      {/* Gradientes laterales para que el texto se desvanezca en los bordes */}
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
      
      <div className="w-full max-w-[1533px] px-8 md:px-40 flex flex-col md:flex-row items-center gap-4 md:gap-12 opacity-80">
        <span className="text-neutral-500 text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap">
          Core Stack
        </span>
        
        {/* Contenedor de tecnologías */}
        <div className="flex items-center gap-8 md:gap-12 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full justify-start md:justify-center">
          {tools.map((tool, index) => (
            <span 
              key={index} 
              className="text-gray-300 hover:text-white transition-colors cursor-default text-xs font-semibold font-sans uppercase tracking-[0.15em] whitespace-nowrap"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}