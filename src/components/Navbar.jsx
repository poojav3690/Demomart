import React from 'react';

const Navbar = ({ cartCount, onCartClick, onLoginClick, user, onSearch }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => window.location.reload()}>
          <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <i className="fas fa-shopping-bag text-white text-xl"></i>
          </div>
          <span className="text-2xl font-bold brand-font text-white tracking-tight">DEMO<span className="text-indigo-400">MART</span></span>
        </div>

        {/* Search Bar - Center */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Search premium styles..." 
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-slate-800/50 border border-white/10 rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Actions - Right */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={onLoginClick}
            className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
          >
            <i className="fas fa-user-circle text-xl"></i>
            <span className="hidden sm:inline font-medium text-sm">{user ? user.name : 'Sign In'}</span>
          </button>

          <button 
            onClick={onCartClick}
            className="relative p-2 text-slate-300 hover:text-white transition-colors group"
          >
            <i className="fas fa-shopping-cart text-xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-gradient text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#0f172a] animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
