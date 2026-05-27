import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, Reorder } from 'framer-motion';

// --- WRAPPER BENTO CARD PREMIUM ---
function LabCard({ title, tag, children, colSpan = 1 }: { title: string; tag: string; children: React.ReactNode; colSpan?: number }) {
  return (
    <div className={`relative bg-[#0A0A0C] border border-white/5 rounded-3xl p-6 flex flex-col overflow-hidden group hover:border-white/10 transition-all duration-500 shadow-xl h-full
      ${colSpan === 2 ? 'md:col-span-2' : 'col-span-1'} 
    `}>
      <div className="flex justify-between items-start z-10 mb-2">
        <span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase group-hover:text-cyan-400 transition-colors">{tag}</span>
        <div className="flex gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative z-10 py-6 min-h-[140px]">
        {children}
      </div>
      <h4 className="text-zinc-300 text-sm font-medium tracking-tight z-10 mt-auto group-hover:text-white transition-colors leading-tight">
        {title}
      </h4>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
}

// ============================================
// --- COMPONENTES B2B SAAS MEJORADOS ---
// ============================================

// --- 1. COMMAND PALETTE (Atajo Global + Click Outside) ---
function CmdKPalette() {
  const [open, setOpen] = useState(false);

  // Capturar atajo de teclado Cmd+K o Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <button onClick={() => setOpen(true)} className="w-full max-w-[260px] px-4 py-2.5 bg-zinc-900 border border-white/10 text-zinc-400 rounded-xl flex items-center justify-between hover:bg-zinc-800 transition-colors shadow-lg group">
        <span className="text-sm group-hover:text-zinc-200 transition-colors">Search issues...</span> 
        <kbd className="bg-black border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-zinc-500">⌘ K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop para cerrar haciendo click afuera */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-[-20px] w-full max-w-[280px] bg-[#121214] border border-zinc-700/50 rounded-xl shadow-2xl flex flex-col overflow-hidden z-50"
            >
              <div className="flex items-center px-3 border-b border-zinc-800">
                <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input autoFocus placeholder="Type a command..." className="bg-transparent p-3 text-xs text-white outline-none w-full placeholder:text-zinc-600" />
                <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white text-[10px] font-mono bg-zinc-800 px-1.5 py-0.5 rounded">ESC</button>
              </div>
              <div className="flex flex-col p-1.5 gap-0.5 bg-black/20">
                <span className="text-[9px] text-zinc-600 font-mono px-2 py-1 uppercase tracking-widest">Suggestions</span>
                <div className="p-2 text-xs text-zinc-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-md cursor-pointer transition-colors flex justify-between items-center">
                  Assign to me <kbd className="text-[9px] text-zinc-600 font-mono">I</kbd>
                </div>
                <div className="p-2 text-xs text-zinc-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-md cursor-pointer transition-colors flex justify-between items-center">
                  Change Status <kbd className="text-[9px] text-zinc-600 font-mono">S</kbd>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- 2. LINEAR-STYLE STATUS PICKER (Click Outside Fix) ---
function StatusPicker() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("In Progress");
  const menuRef = useRef<HTMLDivElement>(null);

  const statuses = [
    { name: "Backlog", color: "bg-zinc-500" },
    { name: "Todo", color: "bg-zinc-300" },
    { name: "In Progress", color: "bg-amber-400" },
    { name: "Done", color: "bg-emerald-500" }
  ];

  // Cerrar al clickear afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative w-full flex justify-center items-center">
      <button 
        onClick={() => setOpen(!open)}
        className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg text-xs font-medium text-white flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm"
      >
        <div className={`w-2 h-2 rounded-full ${statuses.find(s => s.name === status)?.color}`} />
        {status}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -5, scale: 0.95 }} animate={{ opacity: 1, y: 5, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full mt-1 bg-[#18181b] border border-white/10 rounded-xl p-1 shadow-xl z-50 min-w-[140px] flex flex-col"
          >
            {statuses.map(s => (
              <div 
                key={s.name} 
                onClick={() => { setStatus(s.name); setOpen(false); }}
                className="flex items-center gap-2 px-2 py-1.5 text-xs text-zinc-300 hover:bg-white/5 hover:text-white rounded-md cursor-pointer transition-colors"
              >
                <div className={`w-2 h-2 rounded-full ${s.color}`} />
                {s.name}
                {status === s.name && <svg className="w-3 h-3 ml-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- 3. 3D PERSPECTIVE CARD ---
function PerspectiveCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  return (
    <div className="w-full h-full flex items-center justify-center relative" style={{ perspective: 800 }} 
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }} 
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <motion.div 
        style={{ rotateX, rotateY }} 
        className="w-32 h-40 bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm gap-3 cursor-crosshair"
      >
        <div className="w-10 h-10 bg-cyan-400/10 rounded-full flex items-center justify-center">
           <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2 1m-2-1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>
        </div>
        <span className="text-[10px] text-zinc-500 font-mono tracking-widest">TILT ME</span>
      </motion.div>
    </div>
  );
}

// --- 4. DRAG & DROP KANBAN LIST ---
function DragDropList() {
  const [items, setItems] = useState(['UX Research', 'API Integration', 'UI Polish']);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Reorder.Group axis="y" values={items} onReorder={setItems} className="w-full max-w-[220px] flex flex-col gap-2">
        {items.map(item => (
          <Reorder.Item key={item} value={item} className="bg-zinc-900 px-3 py-2.5 rounded-lg cursor-grab active:cursor-grabbing text-xs font-medium text-zinc-300 border border-white/5 flex items-center justify-between shadow-sm hover:border-cyan-500/30 transition-colors">
            {item} 
            <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <span className="text-[9px] text-zinc-600 mt-4 font-mono uppercase tracking-widest">Drag to reorder</span>
    </div>
  );
}

// --- 5. MULTI-TAG INPUT ---
function MultiTagInput() {
  const [tags, setTags] = useState(['React', 'TypeScript']);
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) setTags([...tags, input.trim()]);
      setInput('');
    } else if (e.key === 'Backspace' && !input && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  return (
    <div className="w-full max-w-[300px] flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2 p-2 bg-black border border-white/10 rounded-xl focus-within:border-cyan-400/50 transition-colors min-h-[44px]">
        <AnimatePresence>
          {tags.map((tag) => (
            <motion.span 
              key={tag} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              className="bg-zinc-800 text-white text-xs px-2.5 py-1 rounded-md flex items-center gap-1.5"
            >
              {tag}
              <button onClick={() => setTags(tags.filter(t => t !== tag))} className="text-zinc-500 hover:text-rose-400">×</button>
            </motion.span>
          ))}
        </AnimatePresence>
        <input
          value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? "Type and press enter..." : ""}
          className="bg-transparent outline-none text-xs text-white flex-1 min-w-[60px]"
        />
      </div>
      <span className="text-[9px] text-zinc-600 font-mono pl-1 uppercase tracking-widest">Press Enter to add</span>
    </div>
  );
}

// --- 6. AUTO-FOCUS OTP (Con Backspace Handler) ---
function PremiumOTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp]; newOtp[index] = value; setOtp(newOtp);
    // Auto-focus next
    if (value && index < 3) inputs.current[index + 1]?.focus();
  };

  // Logica de Backspace arreglada
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div animate={error ? { x: [-10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.4 }} className="flex gap-2.5">
        {otp.map((digit, i) => (
          <input
            key={i} type="text" maxLength={1} value={digit} ref={el => inputs.current[i] = el!}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={`w-12 h-14 bg-black border ${error ? 'border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.2)]' : 'border-zinc-800 focus:border-cyan-400'} rounded-xl text-center text-white font-mono text-xl focus:bg-cyan-400/5 outline-none transition-colors`}
          />
        ))}
      </motion.div>
      <button onClick={() => { setError(true); setTimeout(() => setError(false), 500); }} className="text-[9px] text-rose-400 hover:text-rose-300 transition-colors uppercase tracking-[0.2em] font-bold">Trigger Error</button>
    </div>
  );
}

// --- 7. SKELETON MORPHING ---
function SkeletonMorph() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4 items-center cursor-pointer" onClick={() => setLoaded(!loaded)}>
      <div className="flex items-center gap-4 p-4 border border-white/5 rounded-2xl bg-zinc-900/50 w-full max-w-[220px]">
        <motion.div layout className={`rounded-full shrink-0 ${loaded ? 'w-10 h-10 bg-cyan-400 flex items-center justify-center' : 'w-10 h-10 bg-zinc-800 animate-pulse'}`}>
          {loaded && <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>}
        </motion.div>
        <div className="flex flex-col gap-2 w-full">
            <motion.div layout className={`h-2.5 rounded-md ${loaded ? 'w-3/4 bg-white' : 'w-full bg-zinc-800 animate-pulse'}`} />
            <motion.div layout className={`h-2 rounded-md ${loaded ? 'w-1/2 bg-zinc-400' : 'w-2/3 bg-zinc-800 animate-pulse'}`} />
        </div>
      </div>
      <span className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest">Tap to toggle</span>
    </div>
  );
}

// --- 8. EXPANDABLE SEARCH SHIFT ---
function PremiumSearch() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-center items-center h-12">
      <motion.div
        layout animate={{ width: open ? 200 : 44 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="h-11 bg-zinc-900 border border-white/10 rounded-full flex items-center px-3 overflow-hidden cursor-pointer"
        onClick={() => { if(!open) setOpen(true); }}
      >
        <svg className="w-4 h-4 text-zinc-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input
          type="text" placeholder="Search..." onBlur={() => setOpen(false)}
          className="bg-transparent outline-none text-white text-xs ml-3 w-full placeholder:text-zinc-600"
          style={{ display: open ? 'block' : 'none' }} autoFocus={open}
        />
      </motion.div>
    </div>
  );
}

// --- 9. ANIMATED TABS ---
function AnimatedTabs() {
  const [active, setActive] = useState("React");
  const tabs = ["React", "Vue", "Svelte"];
  return (
    <div className="flex bg-black p-1 rounded-xl border border-white/5 relative">
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setActive(tab)} className="relative px-4 py-1.5 text-xs font-semibold text-white transition-colors">
          {active === tab && <motion.div layoutId="bubble_tabs" className="absolute inset-0 bg-zinc-800 rounded-lg" transition={{ duration: 0.3 }} />}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}

// --- 10. HOLD TO CONFIRM (Auto-Reset Fix) ---
function HoldToConfirm() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  
  useEffect(() => { 
    if (isDeleting && !isDeleted) { 
      const t = setTimeout(() => setIsDeleted(true), 1500); 
      return () => clearTimeout(t); 
    } 
  }, [isDeleting, isDeleted]);

  // Auto-reset para que el usuario pueda jugar varias veces
  useEffect(() => {
    if (isDeleted) {
      const t = setTimeout(() => { setIsDeleted(false); setIsDeleting(false); }, 3000);
      return () => clearTimeout(t);
    }
  }, [isDeleted]);

  return (
    <motion.button onPointerDown={() => setIsDeleting(true)} onPointerUp={() => setIsDeleting(false)} onPointerLeave={() => setIsDeleting(false)} animate={isDeleted ? { scale: 0.9, opacity: 0.5 } : { scale: 1 }} className="relative px-6 py-3 bg-zinc-900 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-widest rounded-xl overflow-hidden select-none" >
      <span className="relative z-10">{isDeleted ? 'Deleted' : 'Hold Delete'}</span>
      <motion.div className="absolute left-0 top-0 bottom-0 bg-rose-500/20" initial={{ width: "0%" }} animate={{ width: isDeleting ? "100%" : "0%" }} transition={{ duration: isDeleting ? 1.5 : 0.2 }} />
    </motion.button>
  );
}

// --- 11. SWIPE TO UNLOCK (Auto-Reset Fix) ---
function SwipeToUnlock() {
  const [unlocked, setUnlocked] = useState(false);
  
  // Auto-reset
  useEffect(() => {
    if (unlocked) {
      const t = setTimeout(() => setUnlocked(false), 2500);
      return () => clearTimeout(t);
    }
  }, [unlocked]);

  return (
    <div className="w-full max-w-[200px] h-12 bg-black rounded-full border border-white/10 relative flex items-center px-1.5 overflow-hidden">
      {!unlocked && <span className="absolute w-full text-center text-zinc-600 text-[9px] font-mono uppercase tracking-widest pointer-events-none">Swipe Lock</span>}
      <motion.div drag="x" dragConstraints={{ left: 0, right: 140 }} dragSnapToOrigin={!unlocked} onDragEnd={(_, info) => { if (info.offset.x > 100) setUnlocked(true); }} className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing z-10 shadow-md text-black font-bold">{unlocked ? '🔓' : '→'}</motion.div>
      <motion.div className="absolute left-0 h-full bg-cyan-500/20 rounded-full" animate={{ width: unlocked ? '100%' : 0 }} />
    </div>
  );
}

// --- 12. PASSWORD METER ---
function PasswordMeter() {
  const [pwd, setPwd] = useState("secret");
  const strength = Math.min(pwd.length, 4);
  const colors = ['bg-zinc-800', 'bg-rose-500', 'bg-amber-400', 'bg-cyan-400', 'bg-emerald-400'];
  return (
    <div className="flex flex-col gap-3 w-full max-w-[180px]">
      <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="Enter password" className="bg-black border border-zinc-800 text-white text-xs font-mono rounded-lg px-3 py-2 outline-none focus:border-cyan-400 transition-colors"/>
      <div className="flex gap-1 h-1.5 w-full">{[1, 2, 3, 4].map(l => <div key={l} className={`flex-1 rounded-full transition-colors duration-300 ${strength >= l ? colors[strength] : colors[0]}`}/>)}</div>
    </div>
  );
}

// --- 13. VOICE VISUALIZER ---
function VoiceVisualizer() {
  return (
    <div className="flex items-center gap-1.5 h-12">
      {[...Array(7)].map((_, i) => (
        <motion.div key={i} className="w-1.5 bg-cyan-400 rounded-full" animate={{ height: ["20%", "100%", "40%", "80%", "20%"] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }} />
      ))}
    </div>
  );
}

// --- 14. LIKE BUTTON ---
function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <motion.button onClick={() => setLiked(!liked)} whileTap={{ scale: 0.8 }} className={`p-3.5 rounded-full border transition-all duration-300 ${liked ? 'bg-rose-500/10 border-rose-500/50 text-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.2)]' : 'bg-black border-white/10 text-zinc-500 hover:text-white'}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    </motion.button>
  );
}

// --- 15. VOLUME SLIDER ---
function VolumeSlider() {
  const [vol, setVol] = useState(60);
  return (
    <div className="w-full max-w-[160px] h-2 bg-zinc-900 rounded-full relative cursor-pointer group flex items-center border border-white/5">
      <input type="range" min="0" max="100" value={vol} onChange={(e) => setVol(Number(e.target.value))} className="absolute inset-0 opacity-0 cursor-pointer z-20 w-full" />
      <div className="h-full bg-white rounded-full relative pointer-events-none" style={{ width: `${vol}%` }}>
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform" />
      </div>
    </div>
  );
}

// --- 16. LOADING BUTTON ---
function LoadingSubmit() {
  const [state, setState] = useState<'idle'|'loading'|'success'>('idle');
  const handleClick = () => { if (state !== 'idle') return; setState('loading'); setTimeout(() => setState('success'), 2000); setTimeout(() => setState('idle'), 4000); };
  return (
    <motion.button onClick={handleClick} animate={{ width: state === 'idle' ? 140 : 44 }} className="h-11 bg-white rounded-full text-black font-semibold flex items-center justify-center overflow-hidden text-sm px-4">
      <AnimatePresence mode="wait">
        {state === 'idle' && <motion.span key="i">Deploy</motion.span>}
        {state === 'loading' && <motion.div key="l" className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />}
        {state === 'success' && <motion.svg key="s" className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M5 13l4 4L19 7"/></motion.svg>}
      </AnimatePresence>
    </motion.button>
  );
}

// ============================================
// --- MAIN PAGE ---
// ============================================
export function Laboratory() {
  return (
    <section className="w-full flex flex-col items-center bg-[#0A0A0A] py-24 px-4 md:px-8 font-['Geist',_sans-serif]">
      
      <div className="w-full max-w-[1200px] mb-16 flex flex-col items-start gap-3">
        <span className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase border border-white/10 px-3 py-1.5 rounded-full bg-white/5">
          Engineering Playground
        </span>
        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight m-0">
          The Desktop Lab.
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed m-0 mt-2">
          An exhibition of 16 high-fidelity React interactions focused on B2B SaaS desktop environments. Try the Cmd+K palette, tag input, and perspective card.
        </p>
      </div>

      {/* THE BENTO GRID - PERFECT TETRIS 16 COMPONENTS */}
      {/* 4 Rows, 4 Columns per row on Desktop (xl). Alturas consistentes vía auto-rows-fr */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
        
        {/* Row 1 */}
        <LabCard title="Command Palette" tag="UX Pattern" colSpan={2}><CmdKPalette /></LabCard>
        <LabCard title="Status Picker" tag="Desktop UI"><StatusPicker /></LabCard>
        <LabCard title="3D Perspective" tag="Mouse Physics"><PerspectiveCard /></LabCard>

        {/* Row 2 */}
        <LabCard title="Kanban Reorder" tag="Workspace" colSpan={2}><DragDropList /></LabCard>
        <LabCard title="Animated Tabs" tag="Layout"><AnimatedTabs /></LabCard>
        <LabCard title="Hold to Delete" tag="Safety UX"><HoldToConfirm /></LabCard>

        {/* Row 3 */}
        <LabCard title="Auto-Focus OTP" tag="Security" colSpan={2}><PremiumOTP /></LabCard>
        <LabCard title="Multi-Tag Input" tag="Forms" colSpan={2}><MultiTagInput /></LabCard>

        {/* Row 4 */}
        <LabCard title="Search Shift" tag="Nav UI"><PremiumSearch /></LabCard>
        <LabCard title="Password Strength" tag="Forms"><PasswordMeter /></LabCard>
        <LabCard title="Skeleton Morphing" tag="Loading State"><SkeletonMorph /></LabCard>
        <LabCard title="Voice Visualizer" tag="AI Animation"><VoiceVisualizer /></LabCard>

        {/* Row 5 */}
        <LabCard title="Swipe Unlock" tag="Mobile UX"><SwipeToUnlock /></LabCard>
        <LabCard title="Like Reaction" tag="Feedback UI"><LikeButton /></LabCard>
        <LabCard title="Hardware Volume" tag="Inputs"><VolumeSlider /></LabCard>
        <LabCard title="Submit State Loading" tag="Buttons"><LoadingSubmit /></LabCard>

      </div>
    </section>
  );
}