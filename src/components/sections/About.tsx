import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: "LinkedIn", url: "#" }, 
    { name: "GitHub", url: "#" }, 
    { name: "Dribbble", url: "#" }, 
    { name: "Gumroad", url: "#" }
  ];

  return (
    <section id="about" className="w-full flex justify-center pt-10 pb-24 border-t border-white/5 scroll-mt-14">
      <div className="w-full max-w-[1533px] px-6 md:px-40 flex flex-col gap-16">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex flex-col gap-3">
          <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">
            {t('about', 'badge')}
          </span>
          <h2 className="text-gray-200 text-4xl md:text-5xl font-semibold font-sans leading-none">
            {t('about', 'title')}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="w-full lg:w-5/12 shrink-0 relative group">
            <div className="w-full aspect-[3/4] max-h-[622px] bg-zinc-900 rounded-xs overflow-hidden outline outline-1 outline-white/5 relative">
              <img src="https://placehold.co/467x622/18181b/52525b?text=Portrait" alt="Alan" className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>
          </motion.div>

          <div className="w-full lg:w-7/12 flex flex-col gap-8 pt-4">
            <div className="flex flex-col gap-6 text-zinc-300 text-base font-sans leading-relaxed">
              <p>{t('about', 'p1')}</p>
              <p>{t('about', 'p2')}</p>
              <p>
                {t('about', 'p3_start')}
                <span className="text-gray-200 font-medium">{t('about', 'p3_highlight')}</span>
                {t('about', 'p3_end')}
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 mt-auto">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="text-zinc-500 hover:text-gray-200 text-xs transition-colors flex items-center gap-1 group">
                  {link.name} <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-all">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}