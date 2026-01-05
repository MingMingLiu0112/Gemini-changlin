
import React from 'react';

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white relative overflow-hidden">
      {/* Abstract circle backgrounds from brochure Page 2 */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 border-[20px] border-green-50 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 border-[40px] border-green-50 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-green-600"></div>
              <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Company Introduction</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              常州长霖环保科技有限公司
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                常州长霖环保科技有限公司，是一家以创新为驱动的综合性环保科技企业，主要产品为各种环保填料生产、供应及安装，各类环保设备、设施的维护和保养。
              </p>
              <p>
                长霖环保凭借深厚的技术实力和完善的服务体系，是您实现废水废气处理、环境治理目标的全方位合作伙伴。我们致力于通过科技手段，为全球工业提供更高效、更绿色的治理方案。
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-green-600">
                <h4 className="font-bold text-slate-900 mb-2">专业设备</h4>
                <p className="text-sm text-gray-500">拥有齐全的模具和先进的注塑生产线，保障产品高精度供应。</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
                <h4 className="font-bold text-slate-900 mb-2">一站式服务</h4>
                <p className="text-sm text-gray-500">从设计到安装再到售后维护，全流程贴心服务。</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img 
                src="https://picsum.photos/seed/factory1/500/600" 
                alt="Factory Exterior" 
                className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
              <img 
                src="https://picsum.photos/seed/office/500/400" 
                alt="Office Environment" 
                className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://picsum.photos/seed/prod/500/400" 
                alt="Production Line" 
                className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
              <img 
                src="https://picsum.photos/seed/lab/500/600" 
                alt="R&D Center" 
                className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
