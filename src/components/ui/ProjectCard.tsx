import { motion } from 'framer-motion';

interface ProjectCardProps {
  number: string;
  year: string;
  title: string;
  description: string;
  roles: string[];
  tags: string[];
  linkText?: string;
  index: number;
}

export function ProjectCard({ 
  number, 
  year, 
  title, 
  description, 
  roles, 
  tags, 
  linkText = "View Case Study",
  index
}: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group w-full max-w-[594px] h-[458px] relative bg-zinc-950/70 rounded-xs outline outline-1 outline-offset-[-1px] outline-white/5 overflow-hidden hover:outline-white/20 transition-all duration-300"
    >
      
      {/* Zona Superior (Imagen/Gradiente) */}
      <div className="w-full h-48 absolute top-0 left-0 bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 overflow-hidden group-hover:from-zinc-800/30 transition-colors duration-500">
        <div className="absolute right-4 top-3.5 text-white/20 text-[10px] font-mono tracking-wide">
          {year}
        </div>
        
        {/* Placeholder para Preview */}
        <div className="absolute bottom-4 left-0 w-full px-4 md:px-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-zinc-500 text-[9px] font-mono uppercase tracking-widest bg-zinc-950/80 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                Preview Placeholder
            </span>
        </div>
      </div>

      {/* Contenido Inferior */}
      <div className="absolute top-[200px] left-0 w-full px-6 flex flex-col items-start">
        
        {/* Metadatos */}
        <div className="flex items-center gap-3 w-full mb-2">
          <span className="text-zinc-400 text-[10px] font-mono leading-4 tracking-wide w-5">
            {number}
          </span>
          <div className="flex items-center gap-4 flex-wrap">
            {roles.map((role, i) => (
              <span key={i} className="text-zinc-400 text-[9px] font-mono uppercase leading-3 tracking-wide">
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Título */}
        <h3 className="text-gray-200 text-xl font-semibold font-sans leading-6 mb-3">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-zinc-300 text-xs font-normal font-sans leading-5 w-full max-w-[510px] h-[60px] line-clamp-3 mb-6">
          {description}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-white/0 rounded-[1px] outline outline-1 outline-offset-[-1px] outline-white/5 text-zinc-400 text-[9px] font-mono uppercase leading-3 tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        {/* Botón */}
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white/0 rounded-xs outline outline-1 outline-offset-[-1px] outline-white/5 hover:bg-white/5 transition-colors group/btn cursor-pointer">
          <span className="text-zinc-300 text-xs font-medium font-sans leading-4 tracking-tight">
            {linkText}
          </span>
          <span className="text-zinc-300 text-xs font-medium font-sans leading-4 tracking-tight group-hover/btn:translate-x-1 transition-transform">
            →
          </span>
        </button>

      </div>
    </motion.div>
  );
}