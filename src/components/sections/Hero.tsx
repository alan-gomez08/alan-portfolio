import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext'; // <-- 1. Importamos el hook

// Componente Scramble con bucle de 3 segundos (INTACTO)
const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = '0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    let scrambleInterval: ReturnType<typeof setInterval>;
    let loopInterval: ReturnType<typeof setInterval>;

    const runScramble = () => {
      let iteration = 0;
      clearInterval(scrambleInterval);

      scrambleInterval = setInterval(() => {
        setDisplayText(() => 
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) clearInterval(scrambleInterval);
        iteration += 1 / 3;
      }, 40);
    };

    // Ejecución inicial con delay para la entrada
    const timeout = setTimeout(() => {
      runScramble();
      loopInterval = setInterval(runScramble, 3000); // Bucle cada 3 segundos
    }, 1200);

    return () => {
      clearTimeout(timeout);
      clearInterval(scrambleInterval);
      clearInterval(loopInterval);
    };
  }, [text]); // <-- Como escucha 'text', al cambiar de idioma vuelve a hacer el efecto

  return <span>{displayText}</span>;
};

export function Hero() {
  const { t } = useLanguage(); // <-- 2. Inicializamos el traductor

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative w-full h-[calc(100vh-56px)] flex flex-col items-center justify-center px-6 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center gap-6 md:gap-8 w-full max-w-5xl"
      >
        {/* Etiqueta Superior */}
        <motion.div variants={itemVariants}>
          <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em]">
            {t('hero', 'badge')}
          </div>
        </motion.div>

        {/* Título Principal Centrado */}
        <motion.h1 className="flex flex-col items-center justify-center w-full">
          <motion.span variants={itemVariants} className="text-gray-200 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            {t('hero', 'title1')}
          </motion.span>
          
          <motion.span variants={itemVariants} className="text-zinc-500 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            {t('hero', 'title2')}
          </motion.span>
          
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 md:gap-4 mt-1">
            <span className="text-emerald-400 text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tighter inline-block min-w-[1.2em]">
              {/* Le pasamos la palabra traducida al Scramble */}
              <ScrambleText text={t('hero', 'scramble')} />
            </span>

            {/* Cursor */}
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "steps(2)" }}
              className="w-2.5 md:w-4 lg:w-5 h-10 md:h-14 lg:h-[60px] bg-emerald-500 shadow-[0px_0px_15px_rgba(16,185,129,0.4)]" 
            />
          </motion.div>
        </motion.h1>

        {/* Links de Acción */}
        <motion.div variants={itemVariants} className="flex items-center gap-8 mt-4">
          <a href="#impactful-products" className="text-zinc-400 hover:text-gray-100 text-xs font-mono uppercase tracking-widest transition-colors flex items-center gap-2">
            {t('hero', 'link1')} <span className="text-[10px]">↓</span>
          </a>
          <div className="w-px h-3 bg-white/10" />
          <a href="#methodology" className="text-zinc-400 hover:text-gray-100 text-xs font-mono uppercase tracking-widest transition-colors flex items-center gap-2">
            {t('hero', 'link2')} <span className="text-[10px]">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}