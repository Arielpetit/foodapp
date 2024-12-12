import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="bg-orange-500 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Get Exclusive Offers & Updates
          </h3>
          <p className="text-white/90 mb-6">
            Subscribe to our newsletter and receive special deals available only to newsletter subscribers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
          {status === 'success' && (
            <p className="text-white mt-4 animate-fade-in">
              Thanks for subscribing! 🎉
            </p>
          )}
        </div>
      </div>
    </div>
  );
}