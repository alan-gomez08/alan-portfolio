import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  const educationData = [
    {
      id: 'frontend',
      year: '2025',
      inst: t('education', 'front_inst'),
      title: t('education', 'front_title'),
      desc: t('education', 'front_desc'),
      tags: ['REACT', 'JAVASCRIPT', 'PERFORMANCE', 'STATE MANAGEMENT'],
      hasCert: true,
      certLink: '#' // <-- PONER EL LINK AL PDF ACÁ
    },
    {
      id: 'ux',
      year: '2023',
      inst: t('education', 'ux_inst'),
      title: t('education', 'ux_title'),
      desc: t('education', 'ux_desc'),
      tags: ['UX RESEARCH', 'PROTOTYPING', 'DESIGN SYSTEMS', 'FIGMA', 'B2B'],
      hasCert: true,
      certLink: '#' // <-- PONER EL LINK AL PDF ACÁ
    },
    {
      id: 'eng',
      year: t('education', 'eng_year'),
      inst: t('education', 'eng_inst'),
      title: t('education', 'eng_title'),
      desc: t('education', 'eng_desc'),
      tags: ['ALGORITHMS', 'CS THEORY'],
      hasCert: false
    }
  ];

  return (
    <section id="education" className="w-full flex justify-center py-24 px-6 md:px-40 font-['Geist',_sans-serif]">
      <div className="w-full max-w-[1533px] flex flex-col gap-12">
        
        {/* Cabecera */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="flex flex-col gap-3"
        >
          <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">{t('education', 'badge')}</span>
          <h2 className="text-gray-200 text-4xl md:text-5xl font-semibold tracking-tight">{t('education', 'title')}</h2>
        </motion.div>

        {/* Lista del Timeline */}
        <div className="flex flex-col">
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 py-10 border-t border-white/5 relative group"
            >
              {/* Columna Izquierda (Aumentamos de w-56 a w-72 para que entre el texto) */}
              <div className="w-full md:w-72 shrink-0 flex gap-4">
                <div className="flex flex-col items-center mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-800 shadow-[0_0_10px_rgba(17,94,89,0.5)] border-2 border-teal-500/30" />
                  {index !== educationData.length - 1 && (
                    <div className="w-px h-[calc(100%+3rem)] bg-gradient-to-b from-teal-800/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-xs font-mono tracking-wide">{item.year}</span>
                  <span className="text-zinc-300 text-xs font-mono tracking-wide">{item.inst}</span>
                </div>
              </div>

              {/* Columna Derecha (Contenido y Botón) */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <h3 className="text-gray-200 text-xl font-semibold leading-tight">{item.title}</h3>
                  
                  {item.hasCert && (
                    <a 
                      href={item.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 px-3.5 bg-zinc-950/80 hover:bg-zinc-900 rounded-md shadow-[0px_0px_10px_0px_rgba(20,184,166,0.05)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.05)] border border-transparent hover:border-white/5 outline outline-1 outline-white/10 text-zinc-400 hover:text-gray-200 flex justify-center items-center gap-2 transition-all group shrink-0"
                    >
                      <span className="text-xs font-medium font-sans leading-4 tracking-tight">
                        {t('education', 'cert_btn')}
                      </span>
                      <svg className="w-3 h-3 group-hover:text-teal-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">{item.desc}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}