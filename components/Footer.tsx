
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900">常州长霖环保科技</span>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed mb-8">
              依托创新的环境治理技术和完善的供应链体系，为全球工业污水及废气处理提供高性价比、高效率的填料载体与一站式治理方案。
            </p>
            <div className="flex gap-4">
               {/* QR Code Placeholder for WeChat */}
               <div className="w-24 h-24 bg-white p-2 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center">
                 <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center mb-1">
                   <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                 </div>
                 <span className="text-[10px] text-gray-400">微信咨询</span>
               </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">快速链接</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-green-600 transition-colors">公司首页</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-green-600 transition-colors">关于我们</a></li>
              <li><a href="#products" className="text-gray-500 hover:text-green-600 transition-colors">产品中心</a></li>
              <li><a href="#cases" className="text-gray-500 hover:text-green-600 transition-colors">经典案例</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-green-600 transition-colors">联系方式</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">核心优势</h4>
            <ul className="space-y-4 text-gray-500">
              <li>• 微孔增效专利技术</li>
              <li>• 高密度微生物挂膜</li>
              <li>• 10年+设计使用寿命</li>
              <li>• 源头工厂 现货供应</li>
              <li>• 全方位维护保养服务</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} 常州长霖环保科技有限公司 版权所有
          </p>
          <div className="flex gap-8 text-sm text-gray-400">
            <span>苏ICP备XXXXXXXX号-1</span>
            <a href="#" className="hover:text-green-600 transition-colors">法律声明</a>
            <a href="#" className="hover:text-green-600 transition-colors">隐私政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
