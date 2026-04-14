import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext'; // <-- Importamos el hook

export function Contact() {
  const { t } = useLanguage(); // <-- Inicializamos el traductor

  // Mezclamos links estáticos con la traducción dinámica para el CV
  const footerLinks = ['LinkedIn', 'GitHub', 'Gumroad', t('contact', 'resume')];

  return (
    <section id="contact" className="w-full flex flex-col items-center pt-32 border-t border-white/5">
      
      {/* ==========================================
          CALL TO ACTION (Get in Touch)
          ========================================== */}
      <div className="w-full max-w-[1533px] px-6 md:px-40 flex flex-col items-center text-center pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-neutral-500 text-[10px] font-mono uppercase tracking-[0.2em]">
            {t('contact', 'badge')}
          </span>
          
          <h2 className="text-gray-200 text-5xl md:text-7xl font-bold font-sans tracking-tight max-w-3xl leading-[1.1]">
            {t('contact', 'title')}
          </h2>
          
          <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mt-2">
            {t('contact', 'desc')}
          </p>

          <div className="flex flex-col items-center gap-4 mt-8">
            {/* Botón de Email Premium */}
            <a 
              href="mailto:hello@alan.design"
              className="group flex items-center gap-3 px-8 py-3.5 bg-teal-800/10 hover:bg-teal-800/20 rounded-xs border border-white/10 hover:border-teal-700/50 transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.05)] hover:shadow-[0_0_25px_rgba(20,184,166,0.15)]"
            >
              {/* Ícono de Email SVG */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-white transition-colors">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-gray-200 text-sm font-medium font-sans tracking-wide group-hover:text-white transition-colors">
                {t('contact', 'btn')}
              </span>
              <span className="text-gray-200 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            
            <span className="text-zinc-500 text-[10px] font-mono tracking-wide mt-2">
              {t('contact', 'subtext')}
            </span>
          </div>
        </motion.div>
      </div>

      {/* ==========================================
          FOOTER
          ========================================== */}
      <footer className="w-full border-t border-white/5 flex justify-center py-8 bg-zinc-950/50">
        <div className="w-full max-w-[1533px] px-6 md:px-40 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-gray-200 text-xs font-bold font-sans uppercase tracking-widest">
              Alan.Design
            </span>
            <span className="text-zinc-500 text-[10px] font-mono tracking-wide">
              {t('contact', 'motto')}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-zinc-500 hover:text-gray-200 text-xs font-sans transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

        </div>
      </footer>

    </section>
  );
}