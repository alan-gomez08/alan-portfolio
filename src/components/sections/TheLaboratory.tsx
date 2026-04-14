import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LabCard } from '../ui/LabCard';
import { useLanguage } from '../../context/LanguageContext';

// ==========================================
// EXPERIMENTOS
// ==========================================
const SpringToggle = () => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useLanguage(); 
  
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={() => setIsActive(!isActive)}
        className={`w-14 h-8 rounded-full p-1 flex items-center transition-colors duration-300 ${
          isActive ? 'bg-emerald-500' : 'bg-white/5 border border-white/10'
        }`}
        style={{ justifyContent: isActive ? 'flex-end' : 'flex-start' }}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className={`size-6 rounded-full ${isActive ? 'bg-zinc-950' : 'bg-neutral-700'}`}
        />
      </button>
      <span className="text-gray-500 text-[9px] font-mono uppercase tracking-wide">
        {isActive ? t('laboratory', 'exp0_active') : t('laboratory', 'exp0_inactive')}
      </span>
    </div>
  );
};

const MorphingLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            layoutId="morph-wrapper"
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <motion.div layoutId="morph-dot" className="size-2 bg-emerald-500 rounded-full" />
            <motion.span layoutId="morph-title" className="text-zinc-300 text-xs font-mono">
              {t('laboratory', 'exp1_expand')}
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            layoutId="morph-wrapper"
            className="absolute inset-0 bg-zinc-900 border border-white/10 rounded-md p-5 flex flex-col justify-between z-20 overflow-hidden shadow-2xl cursor-default"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <motion.div layoutId="morph-dot" className="size-2 bg-emerald-500 rounded-full" />
                <motion.span layoutId="morph-title" className="text-gray-200 text-xs font-semibold font-sans">
                  {t('laboratory', 'exp1_detail')}
                </motion.span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors size-6 flex items-center justify-center bg-white/5 rounded-full text-xs cursor-pointer">✕</button>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-zinc-400 text-[10px] font-mono leading-relaxed mt-4">
              {t('laboratory', 'exp1_body')}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 h-8 w-full bg-white/5 rounded-xs border border-white/5" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AIPrompt = () => {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { t } = useLanguage();

  const handleRun = () => {
    if (!inputValue) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="flex flex-col items-start gap-3 w-full max-w-[300px]">
      <div className="w-full h-10 bg-black/40 border border-white/5 focus-within:border-teal-800/50 rounded-sm flex items-center px-3 gap-2 transition-colors">
        <span className="text-neutral-700 font-mono text-xs">⌘</span>
        <input 
          type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          placeholder={t('laboratory', 'exp2_placeholder')} 
          className="bg-transparent border-none outline-none text-zinc-300 text-[10px] font-mono flex-1 placeholder:text-zinc-600"
          onKeyDown={(e) => e.key === 'Enter' && handleRun()}
        />
        <button onClick={handleRun} className="bg-teal-800/10 hover:bg-teal-800/20 text-teal-800 text-[8px] px-2 py-1 rounded-xs border border-teal-800/20 font-bold transition-colors cursor-pointer">
          {status === 'loading' ? <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }}>...</motion.span> : t('laboratory', 'exp2_btn')}
        </button>
      </div>
      <AnimatePresence>
        {status === 'success' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-1.5 pl-1">
            <div className="w-1 h-px bg-teal-800" />
            <span className="text-teal-800/80 text-[9px] font-mono">
              {t('laboratory', 'exp2_success')}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ElasticCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span key={count} initial={{ y: 40, opacity: 0, filter: "blur(4px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} exit={{ y: -40, opacity: 0, filter: "blur(4px)" }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="text-gray-200 text-5xl font-bold font-sans tabular-nums">
            {count}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        <button onClick={() => setCount(c => c - 1)} className="size-8 rounded-xs border border-white/10 hover:bg-white/5 flex items-center justify-center text-gray-500 transition-colors cursor-pointer">−</button>
        <button onClick={() => setCount(c => c + 1)} className="size-8 rounded-xs border border-teal-800/20 bg-teal-800/5 hover:bg-teal-800/10 flex items-center justify-center text-teal-500 transition-colors cursor-pointer">＋</button>
      </div>
    </div>
  );
};

// ==========================================
// THE LABORATORY
// ==========================================
export function TheLaboratory() {
  const { t } = useLanguage();

  return (
    <section id="laboratory" className="w-full flex justify-center pt-10 pb-24 border-t border-white/5 scroll-mt-14">
      <div className="w-full max-w-[1533px] px-6 md:px-40 flex flex-col gap-12">
        
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            className="flex flex-col gap-3"
          >
            <span className="text-neutral-500 text-[10px] font-mono uppercase tracking-[0.2em]">
              {t('laboratory', 'badge')}
            </span>
            <h2 className="text-gray-200 text-4xl md:text-5xl font-semibold font-sans leading-none">
              {t('laboratory', 'title')}
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-gray-500 text-xs font-mono max-w-xs md:text-right leading-relaxed"
          >
            {t('laboratory', 'subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <LabCard 
            index={0} 
            title={t('laboratory', 'exp0_title')} 
            description={t('laboratory', 'exp0_desc')} 
            tags={["React", "Motion", "Spring"]} 
            codeSnippet={`const [isActive, setIsActive] = useState(false);\n\n<motion.div\n  layout\n  transition={{\n    type: "spring",\n    stiffness: 700,\n    damping: 30\n  }}\n/>`}
          >
            <SpringToggle />
          </LabCard>

          <LabCard 
            index={1} 
            title={t('laboratory', 'exp1_title')} 
            description={t('laboratory', 'exp1_desc')} 
            tags={["layoutId", "Micro-interactions"]} 
            codeSnippet={`<AnimatePresence>\n  {!isOpen ? (\n    <motion.div layoutId="wrapper" />\n  ) : (\n    <motion.div layoutId="wrapper" />\n  )}\n</AnimatePresence>`}
          >
            <MorphingLayout />
          </LabCard>

          <LabCard 
            index={2} 
            title={t('laboratory', 'exp2_title')} 
            description={t('laboratory', 'exp2_desc')} 
            tags={["AI UX", "Command Palette"]} 
            codeSnippet={`const handleRun = () => {\n  setStatus('loading');\n  setTimeout(() => {\n    setStatus('success');\n  }, 1500);\n};`}
          >
            <AIPrompt />
          </LabCard>

          <LabCard 
            index={3} 
            title={t('laboratory', 'exp3_title')} 
            description={t('laboratory', 'exp3_desc')} 
            tags={["AnimatePresence", "popLayout"]} 
            codeSnippet={`<AnimatePresence mode="popLayout">\n  <motion.span\n    key={count}\n    initial={{ y: 40, opacity: 0 }}\n    animate={{ y: 0, opacity: 1 }}\n    exit={{ y: -40, opacity: 0 }}\n  >\n    {count}\n  </motion.span>\n</AnimatePresence>`}
          >
             <ElasticCounter />
          </LabCard>
        </div>

        <p className="text-center text-neutral-700 text-[10px] font-mono uppercase tracking-widest pt-8">
          {t('laboratory', 'footer')}
        </p>
      </div>
    </section>
  );
}