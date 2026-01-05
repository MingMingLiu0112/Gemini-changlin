
import React from 'react';

export const TechnicalSpecs: React.FC = () => {
  const specs = [
    { label: '有效比表面积', value: '> 550 m²/m³', ref: '300-450 m²/m³', highlight: '超大微生物附着空间，生物量高。' },
    { label: '空隙率', value: '> 90%', ref: '85-95%', highlight: '气液均匀分布，压降低，不易堵塞。' },
    { label: 'H2S平均去除效率', value: '≥ 98% (进气H2S 50ppmv)', ref: '85-95%', highlight: '对硫化氢等典型恶臭物去除彻底。' },
    { label: 'NH3平均去除效率', value: '≥ 95% (进气NH3 100ppmv)', ref: '80-90%', highlight: '对氨气等碱性恶臭物处理高效。' },
    { label: '系统启动时间', value: '7天内达90%稳定效率', ref: '15-20天', highlight: '快速达标运行，缩短调试周期。' },
    { label: '使用寿命', value: '设计寿命 ≥ 10年', ref: '3-8年', highlight: '材料稳定，维护少，长期经济性好。' },
  ];

  return (
    <section className="py-24 bg-gradient-eco relative overflow-hidden text-white">
      {/* Wave decorative element */}
      <div className="absolute top-0 left-0 w-full h-20 bg-slate-50 -translate-y-px wave-mask transform rotate-180 opacity-100"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">陶粒悬浮球性能证明</h2>
          <p className="text-green-200 max-w-2xl mx-auto">
            经南京大学环境工程技术中心实验室测试（报告编号: [NDHJ20241026]），各项指标处于行业领先地位。
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/20 text-sm uppercase tracking-wider">
                  <th className="px-8 py-6">性能指标</th>
                  <th className="px-8 py-6">测试结果 (陶粒悬浮球)</th>
                  <th className="px-8 py-6">行业主流填料对比</th>
                  <th className="px-8 py-6">性能亮点</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {specs.map((spec, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-medium">{spec.label}</td>
                    <td className="px-8 py-6 text-green-400 font-bold">{spec.value}</td>
                    <td className="px-8 py-6 text-gray-300">{spec.ref}</td>
                    <td className="px-8 py-6 text-sm text-gray-100">{spec.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <p className="mt-8 text-center text-xs text-green-200 opacity-60 italic">
          * 上述应用效果均基于产品强大的性能。
        </p>
      </div>
    </section>
  );
};
