
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '首页', href: '#home', id: 'home' },
    { label: '公司介绍', href: '#about', id: 'about' },
    { label: '核心产品', href: '#products', id: 'products' },
    { label: '工程案例', href: '#cases', id: 'cases' },
    { label: '联系我们', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-green-800 leading-none">长霖环保科技</span>
                <span className="text-[10px] text-gray-500 tracking-tighter uppercase font-medium">Changlin Environmental Protection</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === item.id ? 'text-green-600 border-b-2 border-green-600 py-2' : 'text-gray-600'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              17730180680
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
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
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium ${
                activeSection === item.id ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 text-green-600 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              17730180680 (微信同号)
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
