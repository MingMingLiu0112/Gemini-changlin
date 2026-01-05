import React from 'react';

const ProductFeature: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col border-l-2 border-green-500 pl-4 py-2 bg-slate-50 rounded-r-xl">
    <span className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">{label}</span>
    <span className="text-slate-900 font-bold text-base whitespace-nowrap">{value}</span>
  </div>
);

export const Products: React.FC<{ id: string }> = ({ id }) => {
  const productList = [
    { name: "组合式填料", desc: "挂膜容易，脱膜快，污水处理首选", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400" },
    { name: "弹性立体填料", desc: "比表面积大，不堵塞，寿命长", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400" },
    { name: "高效生物绳", desc: "高密度纤维载体，模拟自然水草", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=400" },
    { name: "改性 MBBR 填料", desc: "亲水性极佳，流化态运行稳定", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" },
    { name: "蜂窝斜管填料", desc: "高效沉淀澄清，增加沉淀面积", img: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=400" },
    { name: "配套曝气系统", desc: "氧利用率高，高效曝气不结垢", img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section id={id} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center lg:text-left mb-16 px-4">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
            <span className="h-px w-8 bg-green-600"></span>
            <span className="text-green-600 font-black tracking-widest uppercase text-xs">Solutions & Products</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">核心产品中心</h2>
          <p className="text-gray-500 max-w-2xl text-base sm:text-lg leading-relaxed">
            依托长霖自研配方与自动化流水线，提供高强度、高性能的环保填料载体。我们的方案已广泛应用于市政污水、工业废气治理等多个重点领域。
          </p>
        </div>

        {/* 重点单品：陶粒悬浮球 */}
        <div className="bg-slate-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-20 mb-16 relative overflow-hidden group border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center relative z-10">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm mb-6">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-ping"></span>
                <span className="text-green-600 text-[10px] font-black tracking-widest uppercase">专利产品 · 核心技术</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 mb-6">陶粒悬浮球载体</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                专为高负荷治理系统设计。内置高性能多孔陶粒，外壳采用高韧性 PP 材质。在实现<span>“巨量比表面积”</span>的同时，确保持久的化学稳定性与抗冲击负荷能力。
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-10">
                <ProductFeature label="比表面积" value="> 550 m²/m³" />
                <ProductFeature label="挂膜周期" value="< 7 天" />
                <ProductFeature label="空隙率" value="> 90%" />
                <ProductFeature label="设计寿命" value="10 年以上" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2">
                  技术参数咨询
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <a href="tel:17730180680" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all text-center">
                  联系我们询价
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=800" 
                  alt="Ceramic Carrier Product" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 其它产品阵列 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
          {productList.map((p, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] mb-4 bg-slate-50 border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=400';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-white text-[10px] font-medium leading-tight">{p.desc}</p>
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-800 group-hover:text-green-600 transition-colors text-center">{p.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};