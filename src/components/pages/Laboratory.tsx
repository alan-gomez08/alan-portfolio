import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// --- WRAPPER ---
function LabCard({ title, tag, children, colSpan = 1 }: { title: string; tag: string; children: React.ReactNode; colSpan?: number }) {
  return (
    <div className={`relative bg-zinc-950 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-6 overflow-hidden group hover:border-white/10 transition-colors ${colSpan === 2 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
      <div className="flex justify-between items-start z-10">
        <span className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase">{tag}</span>
        <div className="flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center min-h-[180px] z-10 relative">
        {children}
      </div>
      <h4 className="text-zinc-300 text-sm md:text-base font-medium tracking-tight z-10 mt-auto">
        {title}
      </h4>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

// --- 1. AI CHAT ---
function AIChatSimulation() {
  const [state, setState] = useState<'idle' | 'thinking' | 'typing' | 'done'>('idle');
  const [typedText, setTypedText] = useState('');
  const fullText = "Analyzing DOM structure... Layout optimized.";

  useEffect(() => {
    if (state === 'thinking') {
      const timer = setTimeout(() => setState('typing'), 1500);
      return () => clearTimeout(timer);
    }
    if (state === 'typing') {
      let i = 0;
      setTypedText('');
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(interval);
          setState('done');
        }
      }, 40);
      return () => clearTimeout(interval);
    }
  }, [state]);

  return (
    <div className="w-full max-w-[320px] flex flex-col gap-4">
      <div className="bg-zinc-900 border border-white/5 rounded-2xl p-4 min-h-[80px] flex flex-col justify-center relative">
        {state === 'idle' && <p className="text-zinc-500 text-sm m-0">Waiting for prompt...</p>}
        {state === 'thinking' && <p className="text-cyan-400 text-sm font-mono m-0">Thinking...</p>}
        {(state === 'typing' || state === 'done') && <p className="text-zinc-200 text-sm m-0 font-mono">{typedText}</p>}
      </div>
      <button onClick={() => setState('thinking')} className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase rounded-xl transition-colors border border-white/5">Generate</button>
    </div>
  );
}

// --- 2. CHART ---
function InteractiveChart() {
  const [data, setData] = useState([30, 70, 45, 90, 55, 20]);
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="flex items-end gap-3 h-[120px] w-full justify-center">
        {data.map((val, i) => (
          <motion.div key={i} animate={{ height: `${val}%` }} className="w-8 bg-cyan-400 rounded-t-md" />
        ))}
      </div>
      <button onClick={() => setData(data.map(() => Math.floor(Math.random() * 80) + 10))} className="px-5 py-2 rounded-full border border-white/10 text-zinc-400 text-xs hover:text-white transition-all">Randomize</button>
    </div>
  );
}

// --- 3. TOGGLE ---
function FluidToggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div onClick={() => setIsOn(!isOn)} className={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 border border-white/5 ${isOn ? 'bg-cyan-500/20 justify-end' : 'bg-zinc-900 justify-start'}`}>
      <motion.div layout className={`w-8 h-8 rounded-full shadow-lg ${isOn ? 'bg-cyan-400' : 'bg-zinc-500'}`} />
    </div>
  );
}

// --- MAIN PAGE ---
export function Laboratory() {
  const { t } = useLanguage();
  const safeT = (key: string, fallback: string) => t('lab', key) || fallback;

  return (
    <section className="w-full flex flex-col items-center bg-[#0A0A0A] py-24 px-4 md:px-8 font-['Geist',_sans-serif]">
      <div className="w-full max-w-[1200px] mb-16 flex flex-col items-start gap-4">
        <h2 className="text-white text-4xl md:text-6xl font-semibold tracking-tight">The Laboratory.</h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">A curated collection of UI micro-interactions.</p>
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LabCard title="AI Generative State" tag="UX Pattern" colSpan={2}><AIChatSimulation /></LabCard>
        <LabCard title="Spring Physics Toggle" tag="Atomic"><FluidToggle /></LabCard>
        <LabCard title="Dynamic Data Visualization" tag="React State" colSpan={2}><InteractiveChart /></LabCard>
      </div>
    </section>
  );
}