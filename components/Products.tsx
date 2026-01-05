
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  isSpecial?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, features, image, isSpecial }) => (
  <div className={`group rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl flex flex-col h-full bg-white ${isSpecial ? 'border-2 border-green-500' : 'border border-gray-100'}`}>
    <div className="relative h-64 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      {isSpecial && (
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          核心专利产品
        </div>
      )}
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>
      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl hover:bg-green-600 hover:text-white transition-colors">
        产品详情
      </button>
    </div>
  </div>
);

export const Products: React.FC<{ id: string }> = ({ id }) => {
  const products = [
    {
      title: '陶粒悬浮球',
      description: '净水除臭、革新之选。构建高密度微生物生态，引领污水处理新效能。',
      features: [
        '微孔增效型陶粒核心，比表面积达800-1200 m²/m³',
        '极致的抗冲击性能，可抵御100%-150%瞬时负荷',
        '卓越的脱氮除磷效率，硝化速率高出40%',
        '生物承载力实现飞跃式提升'
      ],
      image: 'https://picsum.photos/seed/ball1/600/400',
      isSpecial: true
    },
    {
      title: 'PP悬浮球',
      description: '高效生物膜的核心载体。新一代可持续废气、废水处理平台。',
      features: [
        '精密立体网格，极大提升比表面积',
        '科学匹配多种填料，快速形成高活性生物膜',
        '稳定高效运行，保障复杂工况下的稳定性',
        '耐腐蚀、寿命长，易于安装维护'
      ],
      image: 'https://picsum.photos/seed/ball2/600/400'
    },
    {
      title: '高效能活性炭',
      description: '精准治污，稳定达标的净化核心。卓越吸附性能，源自精控工艺。',
      features: [
        '优化孔径结构：构筑高比表面积与多级孔道',
        '高强耐磨性能：有效降低破碎率与系统压降',
        '靶向定制生产：针对特定污染物调控孔径',
        '专为工业VOCs治理与溶剂回收定制'
      ],
      image: 'https://picsum.photos/seed/carbon/600/400'
    },
    {
      title: '鲍尔环 & 多面空心球',
      description: '工业净化领域的经典之选。优化净化效率，降低运行能耗。',
      features: [
        '经典开窗结构，实现卓越传质',
        '高通量低压降，优化运行效益',
        '优异的抗堵塞性，液体分布均匀',
        '专为大风量、低能耗工况优化'
      ],
      image: 'https://picsum.photos/seed/rings/600/400'
    }
  ];

  const fillers = ["陶粒", "聚氨酯海绵", "生物绳", "弹性填料", "MBBR", "火山岩"];

  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Our Products</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">核心产品与技术</h2>
          <p className="text-gray-600 text-lg">
            依托创新的“微孔增效”专利技术，我们提供从载体填料到净化设备的完整环境治理产品矩阵。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>

        <div className="mt-20 p-12 bg-white rounded-[3rem] shadow-sm border border-gray-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">更多常用填料 (可组合、可定制)</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {fillers.map((f, i) => (
              <span key={i} className="px-8 py-3 bg-green-50 text-green-700 rounded-full font-medium hover:bg-green-600 hover:text-white transition-all cursor-default">
                {f}
              </span>
            ))}
          </div>
          <p className="mt-8 text-gray-400 text-sm italic">* 图片展示均为常用填料，可根据具体工况提供定制化方案</p>
        </div>
      </div>
    </section>
  );
};
