import React from 'react';
import { categories, subcategories } from '../data';

const Sidebar = ({ activeCategory, activeSubcategory, onCategoryChange, onSubcategoryChange }) => {
  return (
    <aside className="w-64 hidden lg:block sticky top-24 h-[calc(100vh-120px)] overflow-y-auto pr-4 custom-scrollbar">
      <div className="space-y-8">
        {/* Categories */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 px-2">Categories</h3>
          <div className="space-y-1">
            <button
              onClick={() => onCategoryChange(null)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                !activeCategory 
                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              All Collections
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat 
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategories */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 px-2">Style</h3>
          <div className="space-y-1">
            <button
              onClick={() => onSubcategoryChange(null)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                !activeSubcategory 
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              All Styles
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => onSubcategoryChange(sub)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSubcategory === sub 
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Card */}
        <div className="bg-primary-gradient p-6 rounded-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-white font-bold mb-2">Summer Sale</h4>
            <p className="text-white/80 text-xs mb-4">Get up to 40% off on all active wear items.</p>
            <button className="bg-white text-indigo-600 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider hover:bg-opacity-90 transition-all">Shop Now</button>
          </div>
          <i className="fas fa-tag absolute -bottom-4 -right-4 text-white/10 text-6xl rotate-12 group-hover:scale-110 transition-transform"></i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
