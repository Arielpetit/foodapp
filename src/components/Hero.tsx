import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Add the image positioned toward the left
      <img
        src="../../public/image.png" // Replace with your image URL
        alt="Restaurant Logo" // Alt text for the image
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/ z-20 max-w-sm " 
      /> */}

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Favorite Meals, Delivered Fast!
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover a wide range of restaurants and get your food delivered to your door in no time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/order')}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-colors flex items-center gap-2"
            >
              Order Now <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-colors backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
