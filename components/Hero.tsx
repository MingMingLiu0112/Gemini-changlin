
import React from 'react';

interface HeroProps {
  id: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section id={id} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/10/1920/1080" 
          alt="Environmental Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/40"></div>
      </div>

      {/* Decorative Wave from brochure Page 1 */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-white wave-mask z-10 opacity-90"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
            All-in-One Environmental Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            长霖环保科技<br/>
            <span className="text-green-400">智慧环保·净享未来</span>
          </h1>
          <p className="text-xl text-gray-100 mb-10 leading-relaxed font-light">
            您的一站式环境治理专家。专注水处理、废气治理领域，凭借深厚的技术实力和完善的服务体系，为您实现环境治理目标。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              查看核心产品
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 bg-white hover:bg-gray-100 text-green-900 rounded-lg font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2"
            >
              在线咨询
            </a>
          </div>

          <div className="mt-16 flex gap-10 items-center">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">10+</span>
              <span className="text-xs text-gray-300 uppercase tracking-widest">行业经验</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">100+</span>
              <span className="text-xs text-gray-300 uppercase tracking-widest">成功案例</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-xs text-gray-300 uppercase tracking-widest">品质保障</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
