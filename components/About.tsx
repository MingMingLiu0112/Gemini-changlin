import React from 'react';

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative order-2 lg:order-1 px-4 lg:px-0">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-green-50 rounded-full -z-10 animate-pulse"></div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
              <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
                <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-xl border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Production" className="aspect-[3/4] object-cover" />
                </div>
                <div className="rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=600" alt="Details" className="aspect-square object-cover" />
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600" alt="Technology" className="aspect-square object-cover" />
                </div>
                <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-xl border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=600" alt="Environmental" className="aspect-[3/4] object-cover" />
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full p-2 shadow-2xl border-4 border-green-50 hidden sm:flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl font-black text-green-600">2014</span>
                <span className="text-[8px] font-bold tracking-widest text-slate-400 uppercase">源头工厂创立</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left px-4">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="h-px w-8 bg-green-600"></div>
              <span className="text-green-600 font-black tracking-widest uppercase text-[10px]">Company Profile</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              专注填料技术研发<br/>提升环境治理效率
            </h2>
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">常州长霖环保科技有限公司</strong> 坐落于江苏省常州市，是一家致力于生物填料、环保设备附件研发、生产与销售的高新技术企业。
              </p>
              <p>
                我们秉承“科技净水，生态先行”的理念，通过对高分子材料的深度改性，成功研发出陶粒悬浮球、生物绳等一系列高性能产品。公司拥有完整的注塑、拉丝及组装流水线，确保产品从源头到工地的质量可控与价格优势。
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">质量为本</h4>
                  <p className="text-sm text-gray-500">严格执行 ISO 质量管理体系，每批次产品均经过挂膜性能实测。</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">服务全球</h4>
                  <p className="text-sm text-gray-500">产品出口多个国家，为市政及大型工业项目提供稳定支撑。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};