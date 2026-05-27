import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

export function AtomicDesign() {
  const { t } = useLanguage();

  const atomicBlocks = [
    {
      id: 1,
      tag: t('agentic', 'atomic_b1_tag'),
      title: t('agentic', 'atomic_b1_title'),
      description: t('agentic', 'atomic_b1_desc'),
      codeImg: "/AgenticOsimg/Inpunt.tsx code 1.svg",
      uiImg: "/AgenticOsimg/Input 1.svg",
      boxHeight: "h-[350px] lg:h-full", 
      reverse: false
    },
    {
      id: 2,
      tag: t('agentic', 'atomic_b2_tag'),
      title: t('agentic', 'atomic_b2_title'),
      description: t('agentic', 'atomic_b2_desc'),
      codeImg: "/AgenticOsimg/data table code 1.svg",
      uiImg: "/AgenticOsimg/data table 1.svg",
      boxHeight: "h-[350px] lg:h-full", 
      reverse: true
    },
    {
      id: 3,
      tag: t('agentic', 'atomic_b3_tag'),
      title: t('agentic', 'atomic_b3_title'),
      description: t('agentic', 'atomic_b3_desc'),
      codeImg: "/AgenticOsimg/pricing code 1.svg",
      uiImg: "/AgenticOsimg/Pricing 1.svg",
      boxHeight: "h-[350px] lg:h-full", 
      reverse: false
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col items-center pt-16 pb-8 px-4 font-['Geist',_sans-serif]"
    >
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-[768px] mb-16 md:mb-24">
        <span className="text-[#2DD4BF] text-xs md:text-sm font-bold font-['Geist_Mono',_monospace] tracking-[2.64px]">
          {t('agentic', 'atomic_badge')}
        </span>
        <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight m-0">
          {t('agentic', 'atomic_title')}
        </h2>
        <p className="text-[#94A3B8] text-[18px] md:text-2xl font-normal m-0">
          {t('agentic', 'atomic_desc')}
        </p>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col gap-24 md:gap-32">
        {atomicBlocks.map((block) => (
          <div 
            key={block.id} 
            className={`flex flex-col gap-12 lg:gap-20 lg:items-stretch items-center ${
              block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            <div className="flex-1 flex flex-col items-start w-full">
              <div className="flex flex-col gap-5 w-full">
                <span className="text-[#2DD4BF] text-xs font-semibold font-['Geist_Mono',_monospace] tracking-[2.64px]">
                  {block.tag}
                </span>
                <h3 className="text-white text-3xl md:text-[40px] font-semibold leading-[1.2] whitespace-pre-line m-0">
                  {block.title}
                </h3>
                <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-[560px] m-0">
                  {block.description}
                </p>
              </div>
              
              <div className="mt-8 w-full max-w-[560px]">
                <img 
                  src={block.codeImg} 
                  alt={`${block.tag} Code Snippet`}
                  className="w-full h-auto object-contain rounded-xl hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center lg:justify-end items-center relative">
              <div className={`w-full max-w-[568px] ${block.boxHeight} bg-[#0D0D0D] border border-[#27272A] rounded-2xl flex justify-center items-center p-8 relative overflow-hidden group`}>
                <img 
                  src={block.uiImg} 
                  alt={`${block.tag} Component`}
                  className="w-auto h-auto max-w-[85%] max-h-[85%] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </motion.section>
  );
}