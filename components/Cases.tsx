
import React from 'react';

const CaseItem: React.FC<{ title: string; desc: string; category: string; image: string }> = ({ title, desc, category, image }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
    <div className="relative h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm">
        {category}
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{title}</h4>
      <p className="text-gray-500 text-sm line-clamp-2">{desc}</p>
    </div>
  </div>
);

export const Cases: React.FC<{ id: string }> = ({ id }) => {
  const cases = [
    {
      title: '上海生物能源再利用中心二期三期',
      desc: '废气处理系统，解决复杂臭味及有机物组分治理难题。',
      category: '废气处理',
      image: 'https://picsum.photos/seed/case1/600/400'
    },
    {
      title: '上海松江湿垃圾资源化处理厂一期二期',
      desc: '采用陶粒悬浮球构建组合式生物净化系统，稳定达标。',
      category: '废气处理',
      image: 'https://picsum.photos/seed/case2/600/400'
    },
    {
      title: '河北故城县农村生活污水治理工程配套',
      desc: '利用悬浮填料提升生物承载力，显著改善出水水质。',
      category: '污水处理',
      image: 'https://picsum.photos/seed/case3/600/400'
    },
    {
      title: '黑龙江哈尔滨市松北区利民污水处理厂',
      desc: '大规模MBBR工艺应用，有效提高污染物去除率。',
      category: '污水处理',
      image: 'https://picsum.photos/seed/case4/600/400'
    },
    {
      title: '洛阳石化新建含盐污水处理厂项目',
      desc: '针对高盐污水设计的专项生物处理系统。',
      category: '工业废水',
      image: 'https://picsum.photos/seed/case5/600/400'
    },
    {
      title: '上海嘉定湿垃圾资源化处理厂一期二期',
      desc: '核心恶臭指标硫化氢去除率 > 99%。',
      category: '废气处理',
      image: 'https://picsum.photos/seed/case6/600/400'
    }
  ];

  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Case Studies</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-4">合作案例 (部分)</h2>
            <p className="text-gray-600">
              项目实证效果显示，采用陶粒悬浮球构建的高效生物过滤系统，可显著降低运行成本并长期稳定达标。
            </p>
          </div>
          <button className="px-6 py-3 border-2 border-green-600 text-green-600 font-bold rounded-xl hover:bg-green-600 hover:text-white transition-all whitespace-nowrap">
            查看更多案例
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => <CaseItem key={i} {...item} />)}
        </div>
        
        <div className="mt-20 p-12 bg-white rounded-3xl border border-gray-100 grid md:grid-cols-3 gap-8 text-center">
           <div>
             <div className="text-4xl font-bold text-green-600 mb-2">> 99%</div>
             <div className="text-sm text-gray-500 font-medium">H2S 去除率</div>
           </div>
           <div className="border-x border-gray-100">
             <div className="text-4xl font-bold text-green-600 mb-2">> 95%</div>
             <div className="text-sm text-gray-500 font-medium">NH3 去除率</div>
           </div>
           <div>
             <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
             <div className="text-sm text-gray-500 font-medium">运行成本降低</div>
           </div>
        </div>
      </div>
    </section>
  );
};
