import { motion } from 'framer-motion';

export function TechStack() {
  const tools = [
    { name: 'Figma', icon: '/figma.svg' },
    { name: 'Framer', icon: '/framer.svg', invert: true }, 
    { name: 'HTML5', icon: '/html-5.svg' },
    { name: 'JavaScript', icon: '/javascript.svg' },
    { name: 'TypeScript', icon: '/typescript-icon.svg' },
    { name: 'React', icon: '/react.svg' },
    { name: 'Tailwind CSS', icon: '/tailwindcss-icon.svg' }, 
    { name: 'Storybook', icon: '/storybook-icon.svg' }, 
    { name: 'Claude AI', icon: '/claude-icon.svg' }
  ];

  return (
    <div className="w-full h-28 border-t border-b border-white/5 relative flex items-center bg-zinc-950 overflow-hidden">
      
      {/* 1. MURO SÓLIDO PARA EL TEXTO (Izquierda) 
        Esto garantiza que los iconos desaparezcan por debajo del texto en desktop.
      */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 bg-zinc-950 z-30 w-40 items-center justify-center shadow-[20px_0_40px_-15px_rgba(9,9,11,1)]">
        <span className="text-neutral-500 text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap">
          Core Stack
        </span>
      </div>

      {/* 2. GRADIENTES DE DIFUMINADO
        Hacen que el efecto de entrada/salida sea suave.
      */}
      <div className="absolute left-0 md:left-40 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />
      
      <div className="w-full max-w-[1533px] mx-auto flex items-center opacity-90 relative">
        
        {/* 3. CONTENEDOR DEL CARRUSEL
          Sin overflow-hidden interno para que el hover:scale no se ampute.
        */}
        <div className="w-full flex">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 35, 
              repeat: Infinity 
            }}
          >
            {/* PRIMERA LISTA */}
            <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
              {tools.map((tool, index) => (
                // Lote de tamaño fijo (w-16 h-16) para que la separación sea idéntica sin importar el SVG
                <div key={`first-${index}`} className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 shrink-0">
                  <img 
                    src={tool.icon} 
                    alt={`${tool.name} logo`} 
                    title={tool.name}
                    className={`max-h-7 md:max-h-9 w-auto object-contain transition-all duration-300 cursor-pointer 
                      ${tool.invert 
                        ? 'invert opacity-40 hover:opacity-100 hover:scale-[1.35]' 
                        : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[1.35]'
                      }
                    `}
                  />
                </div>
              ))}
            </div>

            {/* SEGUNDA LISTA (CLON) */}
            <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
              {tools.map((tool, index) => (
                <div key={`second-${index}`} className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 shrink-0">
                  <img 
                    src={tool.icon} 
                    alt={`${tool.name} logo`} 
                    title={tool.name}
                    className={`max-h-7 md:max-h-9 w-auto object-contain transition-all duration-300 cursor-pointer 
                      ${tool.invert 
                        ? 'invert opacity-40 hover:opacity-100 hover:scale-[1.35]' 
                        : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[1.35]'
                      }
                    `}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}