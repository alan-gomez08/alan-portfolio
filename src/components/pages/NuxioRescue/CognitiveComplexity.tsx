import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

export function CognitiveComplexity() {
  const { t } = useLanguage();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 md:mt-32 mb-32 font-['Poppins']"
    >
      <div className="w-full flex flex-col items-center">
        
        <div className="text-center max-w-4xl mx-auto px-4 mb-16 md:mb-24 flex flex-col gap-4">
          <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight uppercase">
            {t('nuxio', 'cc_title')}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mt-2">
            {t('nuxio', 'cc_desc')}
          </p>
        </div>

        <div className="w-full max-w-[1200px] relative flex flex-col gap-24 lg:gap-32 px-4 md:px-8">
          
          <div className="hidden lg:block absolute left-[33%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 via-sky-300 to-sky-700 z-0" />

          {/* PASO 01 */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 relative">
            <div className="w-full lg:w-[33%] flex flex-col gap-6 pt-4 relative z-10 bg-white pr-4">
              <h3 className="text-slate-900 text-2xl md:text-3xl font-bold uppercase">{t('nuxio', 'cc_step1_title')}</h3>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                {t('nuxio', 'cc_step1_desc')}
              </p>
            </div>
            
            <div className="w-full lg:w-[67%] relative z-10 flex justify-center">
              <img 
                src="/NuxioRescueimg/step1-problem.png" 
                alt="The Problem Mockup" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* PASO 02 */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 relative">
            <div className="w-full lg:w-[33%] flex flex-col gap-6 pt-4 relative z-10 bg-white pr-4">
              <h3 className="text-slate-900 text-2xl md:text-3xl font-bold uppercase">{t('nuxio', 'cc_step2_title')}</h3>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                {t('nuxio', 'cc_step2_desc')}
              </p>
            </div>
            
            <div className="w-full lg:w-[67%] relative z-10 flex justify-center">
              <img 
                src="/NuxioRescueimg/step2-wireframe.png" 
                alt="Wireframes Mockup" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* PASO 03 */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 relative">
            <div className="w-full lg:w-[33%] flex flex-col gap-6 pt-4 relative z-10 bg-white pr-4">
              <h3 className="text-slate-900 text-2xl md:text-3xl font-bold uppercase">{t('nuxio', 'cc_step3_title')}</h3>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                {t('nuxio', 'cc_step3_desc')}
              </p>
            </div>
            
            <div className="w-full lg:w-[67%] relative z-10 flex justify-center">
              <img 
                src="/NuxioRescueimg/step3-solution.png" 
                alt="The Solution Mockup" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}