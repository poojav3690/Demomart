import React from 'react';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className={`absolute right-0 top-0 h-full w-full max-w-md glass shadow-2xl transition-transform duration-500 ease-out border-l border-white/10 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white brand-font">Shopping Cart</h2>
              <p className="text-slate-400 text-xs">Checkout your premium selection</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-50">
                <i className="fas fa-cart-arrow-down text-6xl text-slate-700"></i>
                <p className="text-slate-500 font-medium">Your cart is feeling light...</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex space-x-4 animate-fade-in">
                  <div className="w-20 h-24 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-sm line-clamp-1">{item.name}</h3>
                      <p className="text-indigo-400 font-bold text-sm">${item.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 bg-slate-800/50 rounded-lg p-1 border border-white/5">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                        >
                          <i className="fas fa-minus text-[10px]"></i>
                        </button>
                        <span className="text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                        >
                          <i className="fas fa-plus text-[10px]"></i>
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-slate-500 hover:text-red-400 transition-colors"
                      >
                        <i className="fas fa-trash-alt text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/5 bg-slate-900/50 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium text-sm">Subtotal</span>
                <span className="text-white font-bold text-lg">${total}</span>
              </div>
              <button className="w-full bg-primary-gradient text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all">
                Proceed to Checkout
              </button>
              <button 
                onClick={onClose}
                className="w-full text-slate-500 hover:text-slate-300 font-bold text-xs uppercase tracking-widest text-center"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
