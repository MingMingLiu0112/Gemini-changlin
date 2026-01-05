import React from 'react';

const CaseItem: React.FC<{ title: string; desc: string; category: string; image: string }> = ({ title, desc, category, image }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col h-full">
    <div className="relative h-56 sm:h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" 
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-60"></div>
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-black text-green-700 shadow-xl tracking-widest uppercase">
        {category}
      </div>
    </div>
    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
      <div>
        <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-green-600 transition-colors">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{desc}</p>
      </div>
      <div className="flex items-center gap-2 text-green-600 font-bold text-[10px] uppercase tracking-widest">
        <span>详情档案</span>
        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </div>
    </div>
  </div>
);

export const Cases: React.FC<{ id: string }> = ({ id }) => {
  const cases = [
    {
      title: '上海生物能源再利用中心',
      desc: '废气治理填料核心供应商。针对极高浓度有机恶臭，采用长霖陶粒悬浮球，净化效率超越设计标准。',
      category: '市政废气',
      image: 'https://images.unsplash.com/photo-1541888941259-7a3a30740924?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: '松江湿垃圾资源化处理项目',
      desc: '多级生物滤池核心载体配套。攻克寒冷天气下生物挂膜活性难题，助力垃圾资源化标杆建设。',
      category: '湿垃圾治理',
      image: 'https://images.unsplash.com/photo-1530124560677-bdaea02c3a5e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: '洛阳石化污水提标改建工程',
      desc: '针对石油化工高含盐、高难度废水。采用长霖特种改性 MBBR 填料，大幅提升系统抗冲击负荷。',
      category: '石油化工',
      image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id={id} className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 px-4 lg:px-0">
          <div className="max-w-2xl">
            <span className="text-green-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Proven Performance</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">实战工程案例</h2>
            <p className="text-gray-500 text-base sm:text-lg">
              从市政环卫标杆到世界500强厂房，长霖填料正在为中国各地的绿色基建提供稳定动力。
            </p>
          </div>
          <button className="hidden sm:block px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 font-black rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-lg">
            查看更多工程档案
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((item, i) => <CaseItem key={i} {...item} />)}
        </div>
        
        {/* 数据看板 */}
        <div className="p-8 sm:p-16 bg-white rounded-[2.5rem] sm:rounded-[3.5rem] shadow-2xl shadow-slate-200/50 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center border border-slate-50">
           <div className="flex flex-col items-center">
             <div className="text-4xl sm:text-6xl font-black text-slate-900 mb-2 tracking-tighter">99<span className="text-2xl text-green-500">%</span></div>
             <div className="text-[10px] text-green-600 font-black tracking-widest uppercase">平均去除效率</div>
           </div>
           <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-slate-100 py-6 sm:py-0">
             <div className="text-4xl sm:text-6xl font-black text-slate-900 mb-2 tracking-tighter">200<span className="text-2xl text-green-500">+</span></div>
             <div className="text-[10px] text-green-600 font-black tracking-widest uppercase">长期合作项目</div>
           </div>
           <div className="flex flex-col items-center">
             <div className="text-4xl sm:text-6xl font-black text-slate-900 mb-2 tracking-tighter">24<span className="text-2xl text-green-500">h</span></div>
             <div className="text-[10px] text-green-600 font-black tracking-widest uppercase">专家响应速度</div>
           </div>
        </div>
      </div>
    </section>
  );
};