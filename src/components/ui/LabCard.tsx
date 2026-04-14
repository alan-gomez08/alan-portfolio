import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Importamos el resaltador y el tema de VS Code
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface LabCardProps {
  title: string;
  description: string;
  tags: string[];
  children: React.ReactNode;
  index: number;
  codeSnippet: string;
}

export function LabCard({ title, description, tags, children, index, codeSnippet }: LabCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group w-full h-[380px] relative bg-transparent"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        {/* CARA FRONTAL */}
        <div 
          className="absolute inset-0 w-full h-full flex flex-col justify-between p-7 bg-zinc-950/40 rounded-xs outline outline-1 outline-white/5 overflow-hidden group-hover:outline-white/20 transition-all z-20"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-200 text-sm font-semibold font-sans">{title}</h3>
              <div className="size-1.5 bg-zinc-800 rounded-full group-hover:bg-emerald-500 transition-colors" />
            </div>
            <p className="text-zinc-400 text-[11px] font-mono leading-4 tracking-tight">
              {description}
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center py-8">
            {children}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/5 pt-4 mt-auto">
            <div className="flex gap-3">
              {tags.map((tag, i) => (
                <span key={i} className="text-neutral-700 text-[9px] font-mono uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <button 
              onClick={() => setIsFlipped(true)}
              className="text-neutral-600 hover:text-emerald-500 text-[10px] font-mono transition-colors flex items-center gap-1.5 w-max cursor-pointer uppercase tracking-widest"
            >
              <div className="size-2 bg-neutral-800" />
              TAP TO VIEW CODE ↗
            </button>
          </div>
        </div>

        {/* CARA TRASERA (El Código con Colores) */}
        <div 
          className="absolute inset-0 w-full h-full flex flex-col p-6 bg-zinc-900 rounded-xs outline outline-1 outline-white/10 shadow-2xl z-10"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
            <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-widest font-bold">
              Source Code
            </span>
            <button 
              onClick={() => setIsFlipped(false)}
              className="text-zinc-500 hover:text-white text-[10px] font-mono transition-colors cursor-pointer flex items-center gap-1 uppercase tracking-widest"
            >
              ↺ TAP TO FLIP BACK
            </button>
          </div>
          
          {/* Contenedor del Syntax Highlighter */}
          <div className="flex-1 rounded-sm overflow-hidden outline outline-1 outline-white/5 text-[10px]">
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro transparente para que combine con tu diseño
                height: '100%',
                fontSize: '10px',
                lineHeight: '1.6',
              }}
              wrapLongLines={true} // Evita el scroll horizontal si una línea es muy larga
            >
              {codeSnippet}
            </SyntaxHighlighter>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}