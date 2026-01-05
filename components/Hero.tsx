import React from 'react';

interface HeroProps {
  id: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section id={id} className="relative min-h-[90vh] flex items-center pt-32 pb-12 lg:pt-20 lg:pb-12 overflow-hidden bg-slate-950">
      {/* 著名风景背景：桂林山水/净水意象 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000" 
          alt="Natural Landscape" 
          className="w-full h-full object-cover opacity-60 md:opacity-75"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000';
          }}
        />
        {/* 覆盖层，增强文字对比度 */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/50"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
            <span className="h-[1px] w-8 sm:w-12 bg-green-400"></span>
            <span className="text-green-400 text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase">Changlin Eco Intelligence</span>
            <span className="h-[1px] w-8 sm:w-12 bg-green-400"></span>
          </div>
          
          <h1 className="text-3xl sm:text-6xl md:text-8xl font-black text-white mb-6 lg:mb-8 leading-[1.2] lg:leading-[1.1] tracking-tighter">
            守护<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">碧水蓝天</span><br/>
            智造工业新生态
          </h1>
          
          <p className="text-sm sm:text-xl text-gray-200 mb-10 lg:mb-12 leading-relaxed font-light px-4 max-w-2xl mx-auto opacity-90">
            常州长霖环保科技，深耕高效生物载体研发。<br className="hidden md:block" />
            以领先的填料技术，为全球环境治理提供核心动力。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-5 px-4 sm:px-0">
            <a 
              href="#products" 
              className="w-full sm:w-auto px-8 lg:px-10 py-3.5 lg:py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-base lg:text-lg transition-all shadow-xl shadow-green-900/30 flex items-center justify-center gap-2"
            >
              产品中心
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a 
              href="tel:17730180680"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 lg:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all text-base lg:text-lg"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span className="font-bold">177-3018-0680</span>
            </a>
          </div>

          {/* 核心数据展示 */}
          <div className="mt-16 lg:mt-20 grid grid-cols-3 gap-4 lg:gap-12 border-t border-white/10 pt-10 max-w-xl mx-auto">
            <div>
              <div className="text-xl sm:text-4xl font-black text-white">10<span className="text-green-500 text-xs lg:text-sm ml-1">年</span></div>
              <div className="text-[8px] lg:text-[9px] text-gray-500 font-bold tracking-widest uppercase mt-1">行业经验</div>
            </div>
            <div className="border-x border-white/10">
              <div className="text-xl sm:text-4xl font-black text-white">200<span className="text-green-500 text-xs lg:text-sm ml-1">+</span></div>
              <div className="text-[8px] lg:text-[9px] text-gray-500 font-bold tracking-widest uppercase mt-1">工程案例</div>
            </div>
            <div>
              <div className="text-xl sm:text-4xl font-black text-white">100<span className="text-green-500 text-xs lg:text-sm ml-1">%</span></div>
              <div className="text-[8px] lg:text-[9px] text-gray-500 font-bold tracking-widest uppercase mt-1">源头直供</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 lg:h-24 bg-white wave-mask opacity-100 z-10"></div>
    </section>
  );
};