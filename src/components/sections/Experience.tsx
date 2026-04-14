import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    { 
      period: t('experience', 'exp1_period'), 
      company: t('experience', 'exp1_company'), 
      role: t('experience', 'exp1_role'), 
      description: t('experience', 'exp1_desc'), 
      tags: ["AI UX", "CRO", "System Design"] 
    },
    { 
      period: t('experience', 'exp2_period'), 
      company: t('experience', 'exp2_company'), 
      role: t('experience', 'exp2_role'), 
      description: t('experience', 'exp2_desc'), 
      tags: ["Leadership", "B2B", "Design Systems"] 
    },
    { 
      period: t('experience', 'exp3_period'), 
      company: t('experience', 'exp3_company'), 
      role: t('experience', 'exp3_role'), 
      description: t('experience', 'exp3_desc'), 
      tags: ["Algorithms", "CS Theory"] 
    }
  ];

  return (
    <section id="experience" className="w-full flex justify-center pt-10 pb-24 border-t border-white/5 scroll-mt-14">
      <div className="w-full max-w-[1533px] px-6 md:px-40 flex flex-col gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex flex-col gap-3">
          <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">
            {t('experience', 'badge')}
          </span>
          <h2 className="text-gray-200 text-4xl md:text-5xl font-semibold font-sans leading-none">
            {t('experience', 'title')}
          </h2>
        </motion.div>

        <div className="flex flex-col w-full">
          {experiences.map((exp, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="group flex flex-col md:flex-row w-full py-10 border-t border-white/5 relative">
              <div className="w-full md:w-64 shrink-0 flex gap-4 mb-4 md:mb-0">
                <div className="flex flex-col items-center mt-1.5">
                  <div className="size-2 bg-teal-600 rounded-sm shadow-[0_0_14px_rgba(20,184,166,0.6)]" />
                  {index !== experiences.length - 1 && <div className="w-px h-[calc(100%+3rem)] bg-gradient-to-b from-teal-800/40 to-transparent mt-3" />}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-400 text-xs font-mono">{exp.period}</span>
                  <span className="text-zinc-300 text-xs font-mono">{exp.company}</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 md:pl-8">
                <h3 className="text-gray-200 text-xl font-semibold font-sans">{exp.role}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">{exp.description}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {exp.tags.map((tag, i) => <span key={i} className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">{tag}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="w-full h-px bg-white/5" />
        </div>
      </div>
    </section>
  );
}