import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface ImpactfulProductsProps {
  onOpenCaseStudy?: (id: string) => void;
}

export function ImpactfulProducts({ onOpenCaseStudy }: ImpactfulProductsProps) {
  const [activeProject, setActiveProject] = useState(0);
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      urlId: 'nuxio', // ID que usamos para abrir el case study
      title: "Nuxio Rescue",
      category: t('products', 'nuxio_cat'),
      description: t('products', 'nuxio_desc'),
      image: "https://placehold.co/800x600/18181b/52525b?text=Nuxio+Rescue",
      tags: ["UX Research", "Design System", "React"]
    },
    {
      id: 2,
      urlId: 'electro', // Para futuros case studies
      title: "ElectroShop",
      category: t('products', 'electro_cat'),
      description: t('products', 'electro_desc'),
      image: "https://placehold.co/800x600/18181b/52525b?text=ElectroShop",
      tags: ["UI Design", "Frontend", "Firebase"]
    },
    {
      id: 3,
      urlId: 'figma', // Para futuros case studies
      title: "Figma Make Prompts",
      category: t('products', 'figma_cat'),
      description: t('products', 'figma_desc'),
      image: "https://placehold.co/800x600/18181b/52525b?text=Figma+AI",
      tags: ["AI Prompts", "MD3", "Systems"]
    }
  ];

  return (
    <section id="impactful-products" className="w-full flex justify-center pt-10 pb-24 border-t border-white/5 scroll-mt-14">
      <div className="w-full max-w-[1533px] px-6 md:px-40 flex flex-col lg:flex-row gap-16 lg:gap-8">
        
        <div className="w-full lg:w-5/12 flex flex-col justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            className="flex flex-col gap-3"
          >
            <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">
              {t('products', 'badge')}
            </span>
            <h2 className="text-gray-200 text-4xl md:text-5xl font-semibold font-sans leading-none">
              {t('products', 'title')}
            </h2>
            <p className="text-zinc-400 text-sm mt-4 max-w-sm leading-relaxed">
              {t('products', 'subtitle')}
            </p>
          </motion.div>

          <div className="hidden lg:flex flex-col gap-0 mt-12">
            {products.map((product, index) => (
              <div 
                key={product.id}
                onMouseEnter={() => setActiveProject(index)}
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

        <div className="w-full lg:w-7/12 lg:pl-12 flex items-center">
          <div className="w-full aspect-[4/3] relative bg-zinc-900 rounded-xs overflow-hidden outline outline-1 outline-white/5 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={products[activeProject].image} 
                  alt={products[activeProject].title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 flex flex-col justify-end p-8 md:p-12">
                  <div className="flex gap-3 mb-4">
                    {products[activeProject].tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-mono uppercase tracking-wider border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed font-sans drop-shadow-lg">
                    {products[activeProject].description}
                  </p>

                  <button 
                    onClick={() => onOpenCaseStudy && products[activeProject].urlId && onOpenCaseStudy(products[activeProject].urlId)}
                    className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all w-max cursor-pointer mt-6"
                  >
                    <span className="text-white text-xs font-sans font-medium uppercase tracking-tight">
                      {t('products', 'link') || "View Case Study"}
                    </span>
                    <span className="text-white text-xs transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}