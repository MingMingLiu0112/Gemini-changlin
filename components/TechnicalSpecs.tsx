import React from 'react';

export const TechnicalSpecs: React.FC = () => {
  const specs = [
    { label: '有效比表面积', value: '{" > "} 550 m²/m³', ref: '300-450 m²/m³', highlight: '超大微生物附着空间，生物承载量高。' },
    { label: '填料空隙率', value: '{" > "} 90%', ref: '85-95%', highlight: '气液均匀分布，压降低，不易堵塞。' },
    { label: 'H2S平均去除效率', value: '≥ 98% (50ppmv)', ref: '85-95%', highlight: '对硫化氢等恶臭组分去除效果彻底。' },
    { label: 'NH3平均去除效率', value: '≥ 95% (100ppmv)', ref: '80-90%', highlight: '对氨气等碱性恶臭物处理稳定。' },
    { label: '系统挂膜启动时间', value: '{" < "} 7 天', ref: '15-20 天', highlight: '快速达标运行，大幅缩短工程调试周期。' },
    { label: '填料设计使用寿命', value: '≥ 10 年', ref: '3-8 年', highlight: '优质高分子改性材料，化学性能极稳。' },
  ];

  return (
    <section className="py-24 bg-gradient-eco relative overflow-hidden text-white">
      {/* Decorative Top Wave Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-slate-50 -translate-y-px wave-mask transform rotate-180 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 rounded-full text-green-400 font-bold text-xs tracking-widest uppercase mb-4">
            Lab Tested Performance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">陶粒悬浮球性能实证</h2>
          <p className="text-green-100 max-w-2xl mx-auto text-lg opacity-80">
            经权威实验室（南京大学环境工程技术中心）测试，长霖环保核心载体在各项关键指标上均大幅领先行业常规产品。
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="bg-white/10 text-xs uppercase tracking-[0.2em] font-black">
                  <th className="px-10 py-8">性能关键指标</th>
                  <th className="px-10 py-8">长霖环保 (陶粒悬浮球)</th>
                  <th className="px-10 py-8">行业主流同类填料</th>
                  <th className="px-10 py-8">核心竞争优势</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {specs.map((spec, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-10 py-8 font-bold text-slate-100">{spec.label}</td>
                    <td className="px-10 py-8">
                      <span className="inline-flex items-center gap-2 text-green-400 font-black text-xl">
                        {spec.value.includes('{') ? (spec.label === '有效比表面积' ? '> 550 m²/m³' : '< 7 天') : spec.value}
                      </span>
                    </td>
                    <td className="px-10 py-8 text-gray-400 font-medium">{spec.ref}</td>
                    <td className="px-10 py-8">
                      <p className="text-sm text-green-50/70 group-hover:text-green-50 transition-colors leading-relaxed italic">
                        "{spec.highlight}"
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-6 opacity-40 text-xs tracking-widest">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
             测试报告编号: NDHJ20241026
           </div>
           <div className="w-px h-4 bg-white/20"></div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
             执行标准: GB/T 18921-2002
           </div>
        </div>
      </div>
    </section>
  );
};