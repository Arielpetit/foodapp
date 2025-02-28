import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    text: 'The food delivery service has been a game-changer for me. The real-time tracking feature is incredibly accurate, and the food always arrives fresh and hot!',
    rating: 5,
    location: 'New York, NY',
    orderCount: '50+ orders'
  },
  {
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    text: 'As a busy professional, this app has saved me countless hours. The variety of restaurants is impressive, and the delivery is always on time.',
    rating: 5,
    location: 'San Francisco, CA',
    orderCount: '30+ orders'
  },
  {
    name: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    text: 'The customer service is exceptional! Had a small issue with my order once, and they resolved it immediately. Plus, the app is so easy to use!',
    rating: 5,
    location: 'Miami, FL',
    orderCount: '25+ orders'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust us with their food delivery needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-orange-500/20 mb-4" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="text-sm text-orange-500 font-medium">
                {testimonial.orderCount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}