import React from 'react';
import { Store, MapPin, CreditCard, Clock, Shield, Gift, Utensils, Phone, Heart } from 'lucide-react';

const features = [
  {
    icon: Store,
    title: 'Wide Restaurant Selection',
    description: 'Choose from over 1000+ restaurants and local favorites in your area',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Track your order in real-time with our advanced GPS system',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Multiple secure payment options including cards, wallet, and cash',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Average delivery time of 30 minutes or less to your doorstep',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Contactless delivery and strict safety protocols for your peace of mind',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: Gift,
    title: 'Exclusive Offers',
    description: 'Regular promotions and special discounts for our loyal customers',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: Utensils,
    title: 'Quality Guaranteed',
    description: 'Satisfaction guaranteed with our quality assurance program',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you anytime',
    color: 'bg-pink-50 text-pink-600'
  },
  {
    icon: Heart,
    title: 'Loyalty Rewards',
    description: 'Earn points with every order and redeem for free meals',
    color: 'bg-teal-50 text-teal-600'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience the best food delivery service with features designed to make your life easier.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`p-6 rounded-xl ${feature.color} hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <feature.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}