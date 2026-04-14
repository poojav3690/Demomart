import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Login from './components/Login';
import { products } from './data';

function App() {
  // State
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = !activeCategory || product.category === activeCategory;
      const matchSubcategory = !activeSubcategory || product.subcategory === activeSubcategory;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSubcategory && matchSearch;
    });
  }, [activeCategory, activeSubcategory, searchQuery]);

  // Actions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Open cart on add
    setIsCartOpen(true);
  };

  const updateQuantity = (itemId, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoginOpen(false);
  };

  if (!user) {
    return (
      <Login
        isOpen={true}
        onLogin={handleLogin}
        isMandatory={true}
      />
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
        user={user}
        onSearch={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-6 flex space-x-8 animate-fade-in">
        {/* Left Sidebar */}
        <Sidebar
          activeCategory={activeCategory}
          activeSubcategory={activeSubcategory}
          onCategoryChange={(cat) => { setActiveCategory(cat); setActiveSubcategory(null); }}
          onSubcategoryChange={setActiveSubcategory}
        />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white brand-font">
              {activeCategory || 'Latest Collections'}
              {activeSubcategory && <span className="text-indigo-400 ml-2 text-xl block sm:inline">/ {activeSubcategory}</span>}
            </h2>
            <div className="text-slate-500 text-sm font-medium">
              Showing {filteredProducts.length} items
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center space-y-4 glass rounded-3xl animate-fade-in">
              <i className="fas fa-search text-6xl text-slate-700"></i>
              <div className="text-center">
                <p className="text-slate-300 font-bold text-xl">No styles found</p>
                <p className="text-slate-500 text-sm">Try adjusting your filters or search query.</p>
              </div>
              <button
                onClick={() => { setActiveCategory(null); setActiveSubcategory(null); setSearchQuery(''); }}
                className="text-indigo-400 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Hero Section (Visible only on index) */}
      {!activeCategory && !activeSubcategory && searchQuery === '' && (
        <div className="fixed bottom-12 right-12 z-40 hidden xl:block animate-fade-in">
          <div className="glass p-4 rounded-2xl flex items-center space-x-4 border border-indigo-500/20 shadow-2xl">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
              <i className="fas fa-bolt text-white"></i>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Flash Sale!</p>
              <p className="text-slate-400 text-xs">2 hours remaining</p>
            </div>
          </div>
        </div>
      )}

      {/* Overlays */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;
