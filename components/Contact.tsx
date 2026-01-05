
import React from 'react';

interface ContactProps {
  id: string;
}

export const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 relative z-10">
            <div className="p-12 lg:p-20 text-white">
              <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl font-bold mb-8 leading-tight">联系我们，共建绿色未来</h2>
              <p className="text-gray-400 mb-12 text-lg">
                无论您是面临复杂的废水处理挑战，还是需要高效的废气治理方案，我们的专业团队都将为您提供量身定制的技术支持。
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">24小时服务热线</div>
                    <div className="text-2xl font-bold">177-3018-0680</div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">官方微信 (同手机号)</div>
                    <div className="text-2xl font-bold">17730180680</div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">办公地址</div>
                    <div className="text-lg">江苏省常州市武进区</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-12 lg:p-20 flex flex-col justify-center">
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm text-gray-400">您的姓名</label>
                     <input type="text" className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" placeholder="张先生" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm text-gray-400">联系电话</label>
                     <input type="text" className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" placeholder="手机号" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm text-gray-400">咨询项目</label>
                   <select className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors">
                     <option>产品咨询 (悬浮球/填料)</option>
                     <option>工程配套方案</option>
                     <option>设备维护服务</option>
                     <option>其他需求</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm text-gray-400">需求详情</label>
                   <textarea rows={4} className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" placeholder="请描述您的具体工况或产品需求..."></textarea>
                 </div>
                 <button className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all transform active:scale-95 shadow-lg">
                   提交需求
                 </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
