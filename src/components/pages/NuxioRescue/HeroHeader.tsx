import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';

export function HeroHeader() {
  const { t } = useLanguage();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center px-4 mt-12 md:mt-24 mb-16 md:mb-24 overflow-hidden antialiased"
    >
      <div className="w-full max-w-[1206px] flex justify-center">
        
        <div 
          className="hero-scale relative bg-[#0B121C] rounded-[32px] overflow-hidden shrink-0 shadow-2xl border border-white/5 w-full lg:w-[1206px] h-auto lg:h-[650px] flex flex-col lg:block"
          style={{ fontFamily: "'Geist', 'Poppins', sans-serif" }}
        >
          
          <div className="relative lg:absolute z-10 flex flex-col justify-between items-center lg:items-start w-full lg:w-[600px] px-6 py-10 lg:p-0 lg:left-[48px] lg:top-[48px] lg:bottom-[48px] gap-8 lg:gap-0">
            
            <div className="flex flex-col items-center lg:items-start gap-6 w-full">
              
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-[20px] h-[18px] lg:w-[29px] lg:h-[26px] relative flex justify-center items-center shrink-0">
                  <svg width="100%" height="100%" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.6" d="M14.5 1.44446L25.7778 7.22224V18.7778L14.5 24.5556L3.22223 18.7778V7.22224L14.5 1.44446Z" stroke="#00E1D9" strokeWidth="1.22222"/>
                    <path d="M8.05554 17.3334V8.66669L14.5 14.4445L20.9444 8.66669V17.3334" stroke="white" strokeWidth="1.52778" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.9444 9.38888C22.2791 9.38888 23.3611 8.41883 23.3611 7.22221C23.3611 6.02559 22.2791 5.05554 20.9444 5.05554C19.6097 5.05554 18.5278 6.02559 18.5278 7.22221C18.5278 8.41883 19.6097 9.38888 20.9444 9.38888Z" fill="#00E1D9"/>
                  </svg>
                </div>
                <div className="text-white text-[18px] lg:text-[24px] font-bold leading-none tracking-tight">
                  PrintFlow
                </div>
              </div>
              
              <h1 className="text-white text-center lg:text-left text-[26px] sm:text-[32px] lg:text-[42px] font-semibold leading-[1.3] lg:leading-[50px] tracking-tight m-0 lg:pr-4">
                {t('nuxio', 'hero_title_1')} <br className="hidden lg:block"/>{t('nuxio', 'hero_title_2')}
              </h1>
              
              <div className="flex flex-col gap-4 text-[#9CA3AF] text-center lg:text-left text-[14px] lg:text-[18px] font-light leading-[1.6] lg:leading-[30px] lg:pr-8">
                <p className="m-0">
                  {t('nuxio', 'hero_desc_1')}
                </p>
                <p className="m-0 hidden sm:block">
                  {t('nuxio', 'hero_desc_2')}
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between lg:justify-start items-start gap-2 lg:gap-8 w-full mt-4 lg:mt-auto">
              
              {/* KPI 1 */}
              <div className="flex flex-col gap-1 flex-1 lg:flex-none lg:w-[140px] items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 lg:gap-2 h-[28px] lg:h-[36px]">
                  <span className="text-white text-[20px] sm:text-[24px] lg:text-[34px] font-semibold leading-none">{t('nuxio', 'kpi_1_value')}</span>
                  <span className="text-white text-[12px] sm:text-[16px] lg:text-[22px] font-bold leading-none mt-1">{t('nuxio', 'kpi_1_unit')}</span>
                </div>
                <span className="text-[#9CA3AF] text-[11px] sm:text-[13px] lg:text-[15px] font-light leading-tight lg:leading-snug whitespace-pre-line">
                  {t('nuxio', 'kpi_1_label')}
                </span>
              </div>
              
              {/* KPI 2 */}
              <div className="flex flex-col gap-1 flex-1 lg:flex-none lg:w-[180px] items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start h-[28px] lg:h-[36px]">
                  <span className="text-white text-[20px] sm:text-[24px] lg:text-[34px] font-semibold leading-none">{t('nuxio', 'kpi_2_value')}</span>
                </div>
                <span className="text-[#9CA3AF] text-[11px] sm:text-[13px] lg:text-[15px] font-light leading-tight lg:leading-snug whitespace-pre-line">
                  {t('nuxio', 'kpi_2_label')}
                </span>
              </div>
              
              {/* KPI 3 */}
              <div className="flex flex-col gap-1 flex-1 lg:flex-none lg:w-[160px] items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 lg:gap-2 h-[28px] lg:h-[36px]">
                  <span className="text-white text-[20px] sm:text-[24px] lg:text-[34px] font-semibold leading-none">{t('nuxio', 'kpi_3_value_1')}</span>
                  <div className="flex items-center justify-center pt-1">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[18px] lg:h-[18px]">
                      <path d="M1 7H13M7 13L13 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-[20px] sm:text-[24px] lg:text-[34px] font-semibold leading-none">{t('nuxio', 'kpi_3_value_2')}</span>
                </div>
                <span className="text-[#9CA3AF] text-[11px] sm:text-[13px] lg:text-[15px] font-light leading-tight lg:leading-snug whitespace-pre-line">
                  {t('nuxio', 'kpi_3_label')}
                </span>
              </div>

            </div>

          </div>

          <div className="relative lg:absolute z-0 pointer-events-none drop-shadow-[-20px_20px_60px_rgba(0,0,0,0.5)] w-[115%] lg:w-[480px] ml-[15%] lg:ml-0 lg:right-0 lg:bottom-0 mt-6 lg:mt-0">
            <img 
              src="/NuxioRescueimg/dashboard-hero.svg" 
              alt="PrintFlow Dashboard"
              className="w-full h-auto object-contain object-left-top lg:object-right-bottom" 
            />
          </div>

        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 1240px) and (min-width: 1024px) {
            .hero-scale {
              transform: scale(calc((100vw - 32px) / 1206));
              transform-origin: top center;
              margin-bottom: calc(-650px * (1 - ((100vw - 32px) / 1206)));
            }
          }
        `}} />
      </div>
    </motion.section>
  );
}