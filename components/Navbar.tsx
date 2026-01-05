import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '首页', href: '#home', id: 'home' },
    { label: '关于我们', href: '#about', id: 'about' },
    { label: '产品中心', href: '#products', id: 'products' },
    { label: '案例展示', href: '#cases', id: 'cases' },
    { label: '联系方式', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100 pt-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 lg:gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-600 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
                <svg viewBox="0 0 24 24" className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-black text-slate-900 leading-none tracking-tighter">长霖环保科技</span>
                <span className="text-[8px] lg:text-[9px] text-gray-400 tracking-[0.2em] uppercase font-bold mt-1">Changlin Eco Technology</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-black transition-all hover:text-green-600 ${
                  activeSection === item.id ? 'text-green-600 scale-110' : 'text-slate-600'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="tel:17730180680"
              className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-black flex items-center gap-3 hover:bg-green-600 transition-all shadow-lg shadow-slate-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              17730180680
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="bg-white py-4 px-6 space-y-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-black ${
                activeSection === item.id ? 'text-green-600' : 'text-slate-700'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <a 
              href="tel:17730180680"
              className="w-full py-3 bg-green-600 text-white rounded-xl font-black text-center block shadow-lg shadow-green-100 text-sm"
            >
              拨打业务热线: 17730180680
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};