import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface ImpactfulProductsProps {
  onOpenCaseStudy?: (id: string) => void;
}

export function ImpactfulProducts({ onOpenCaseStudy }: ImpactfulProductsProps) {
  const [activeProject, setActiveProject] = useState(0);
  const { t } = useLanguage();

  const safeT = (key: string, fallback: string) => {
    const result = t('products', key);
    if (!result || result.toLowerCase() === key.toLowerCase()) {
      return fallback;
    }
    return result;
  };

  const products = [
    {
      id: 1,
      urlId: 'nuxio',
      title: "Nuxio Rescue",
      category: safeT('nuxio_cat', "INDUSTRIAL B2B"),
      description: safeT('nuxio_desc', "A complete redesign focused on user experience and accessibility for an emergency rescue platform."),
      image: "/Nuxio Rescue Cover.png",
      tags: ["UX Research", "Design System", "React"]
    },
    {
      id: 2,
      urlId: 'agentic', 
      title: "Agentic OS",
      category: safeT('agentic_cat', "AI B2B SAAS"),
      description: safeT('agentic_desc', "Designed a complete B2B SaaS platform for an AI from scratch, focusing on scalability, data density, and user experience."),
      image: "/Agentic Os Cover.png", 
      tags: ["UX/UI Design", "Design System", "0 to 1"]
    },
    {
      id: 3,
      urlId: 'laboratory',
      title: "The Laboratory",
      category: safeT('lab_cat', "REACT COMPONENTS"),
      description: safeT('lab_desc', "A curated collection of our highlights: UI components designed with millimeter precision and translated into clean React code across various projects."),
      image: "/The Library Cover.png",
      tags: ["UI Design", "Frontend", "React"] 
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="impactful-products" className="w-full flex justify-center pt-10 pb-24 border-t border-white/5 scroll-mt-14">
      <div className="w-full max-w-[1533px] px-6 md:px-40 flex flex-col lg:flex-row gap-12 lg:gap-8">
        
        <div className="w-full lg:w-5/12 flex flex-col justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            className="flex flex-col gap-3"
          >
            <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">
              {safeT('badge', 'LATEST WORK')}
            </span>
            <h2 className="text-gray-200 text-4xl md:text-5xl font-semibold font-sans leading-none">
              {safeT('title', 'Impactful Products')}
            </h2>
            <p className="text-zinc-400 text-sm mt-4 max-w-sm leading-relaxed">
              {safeT('subtitle', 'Projects where design architecture and code quality intersect to solve real business problems.')}
            </p>
          </motion.div>

          <div className="hidden lg:flex flex-col gap-0 mt-12">
            {products.map((product, index) => (
              <div 
                key={product.id}
                onMouseEnter={() => setActiveProject(index)}
                onClick={() => onOpenCaseStudy && product.urlId && onOpenCaseStudy(product.urlId)}
                className={`py-6 border-b border-white/5 cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                  activeProject === index ? 'opacity-100 pl-4' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-teal-600 text-[10px] font-mono uppercase tracking-widest group-hover:text-teal-400 transition-colors">
                    {product.category}
                  </span>
                  <h3 className="text-gray-200 text-2xl font-semibold font-sans">
                    {product.title}
                  </h3>
                </div>
                {activeProject === index && (
                  <motion.span layoutId="arrow" className="text-teal-500 font-mono text-sm">
                    →
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-7/12 lg:pl-12 flex items-center relative">
          {/* Aumentamos un poco la altura base en mobile a 580px para que el texto respire bien */}
          <div className="w-full h-[580px] md:h-[600px] lg:aspect-[4/3] lg:h-auto relative bg-zinc-900 rounded-xs overflow-hidden outline outline-1 outline-white/5 group shadow-2xl">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                // CLAVE: En mobile es flex-col, en desktop vuelve a ser un bloque absoluto superpuesto
                className="absolute inset-0 w-full h-full flex flex-col lg:block"
              >
                {/* 1. IMAGEN (Arriba en Mobile, Ocupa todo en Desktop) */}
                <div className="relative w-full h-[45%] lg:h-full lg:absolute lg:inset-0 overflow-hidden">
                  <img 
                    src={products[activeProject].image} 
                    alt={products[activeProject].title}
                    className="w-full h-full object-cover object-top lg:object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Sutil fade out para que se una perfecto con el contenedor negro de abajo (Solo Mobile) */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent lg:hidden" />
                </div>
                
                {/* 2. TEXTO (Abajo con fondo sólido en Mobile, Superpuesto con gradiente en Desktop) */}
                <div className="w-full h-[55%] lg:h-full bg-zinc-950 lg:bg-transparent lg:absolute lg:inset-0 lg:bg-gradient-to-t lg:from-zinc-950/90 lg:via-zinc-950/30 lg:to-transparent flex flex-col justify-center lg:justify-end p-6 md:p-12 z-10 transition-opacity duration-500">
                  <div className="flex flex-col lg:pr-0 pr-14">
                    
                    <div className="flex flex-col mb-3 lg:hidden">
                      <span className="text-teal-400 text-[10px] font-mono uppercase tracking-widest mb-1 drop-shadow-md">
                        {products[activeProject].category}
                      </span>
                      <h3 className="text-gray-100 text-3xl font-semibold font-sans drop-shadow-lg">
                        {products[activeProject].title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-3 lg:mb-4">
                      {products[activeProject].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-gray-200 text-[10px] font-mono uppercase tracking-wider border border-white/10 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed font-sans drop-shadow-lg">
                      {products[activeProject].description}
                    </p>

                    <button 
                      onClick={() => onOpenCaseStudy && products[activeProject].urlId && onOpenCaseStudy(products[activeProject].urlId)}
                      className="group flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all w-max cursor-pointer mt-4 lg:mt-6 shadow-sm"
                    >
                      <span className="text-gray-100 text-xs font-sans font-medium uppercase tracking-tight">
                        {products[activeProject].urlId === 'laboratory' 
                          ? safeT('lab_link_text', 'View Library') 
                          : safeT('link', 'View Case Study')}
                      </span>
                      <span className="text-teal-400 text-xs transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* --- FLECHA DE NAVEGACIÓN MOBILE --- */}
            {/* Movimos la flecha para que quede centrada en la zona del texto negro en mobile */}
            <div className="absolute bottom-24 right-4 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:hidden z-20 pointer-events-none">
              <button 
                onClick={(e) => { e.stopPropagation(); nextProject(); }}
                className="pointer-events-auto size-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all shadow-xl"
                aria-label="Siguiente proyecto"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 lg:hidden">
            {products.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${activeProject === idx ? 'w-6 bg-teal-500' : 'w-1.5 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}