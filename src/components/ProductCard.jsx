import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-4 inset-x-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl shadow-2xl hover:bg-slate-100 transition-colors flex items-center justify-center space-x-2"
          >
            <i className="fas fa-cart-plus"></i>
            <span>Add to Cart</span>
          </button>
        </div>

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-indigo-500/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
            {product.subcategory}
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-semibold text-lg hover:text-indigo-400 transition-colors line-clamp-1 cursor-pointer">
            {product.name}
          </h3>
          <span className="text-indigo-400 font-bold text-lg">${product.price}</span>
        </div>
        <p className="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          <i className="fas fa-tag mr-2 text-indigo-500/50"></i>
          {product.category}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
