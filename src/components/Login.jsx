import React, { useState } from 'react';

const Login = ({ isOpen, onClose, onLogin, isMandatory }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: email.split('@')[0], email });
  };

  if (!isOpen && !isMandatory) return null;

  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-300 ${isOpen || isMandatory ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"></div>
      
      <div className={`relative w-full max-w-md glass p-8 rounded-3xl shadow-2xl border border-white/10 transition-all duration-500 transform ${isOpen || isMandatory ? 'scale-100 translate-y-0' : 'scale-95 translate-y-12'}`}>
        {!isMandatory && (
          <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
            <i className="fas fa-times text-lg"></i>
          </button>
        )}

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
            <i className="fas fa-lock text-white text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-white brand-font">Welcome to <span className="text-indigo-400">DEMOMART</span></h2>
          <p className="text-slate-400 text-sm mt-2">Sign in to your premium account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <i className="far fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="style-seeker@example.com"
                className="w-full bg-slate-800/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-indigo-500 transition-all text-white text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
              <a href="#" className="text-[10px] text-indigo-400 font-bold hover:text-indigo-300 transition-colors uppercase">Forgot?</a>
            </div>
            <div className="relative">
              <i className="fas fa-shield-alt absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-800/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-indigo-500 transition-all text-white text-sm"
              />
            </div>
          </div>

          <button className="w-full bg-primary-gradient text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all">
            Sign In Now
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-500 text-xs">Don't have an account? <a href="#" className="text-indigo-400 font-bold hover:underline">Create One</a></p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default Login;
