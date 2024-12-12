import React from 'react';
import { Search, ShoppingBag, Utensils } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse',
    description: 'Explore restaurants and menus in your area',
  },
  {
    icon: ShoppingBag,
    title: 'Order',
    description: 'Select your favorite items and place your order',
  },
  {
    icon: Utensils,
    title: 'Enjoy',
    description: 'Receive your food and enjoy your meal',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-orange-200" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}