import React from 'react';
import { Search, Utensils, Truck, Star } from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <Search className="w-16 h-16 text-orange-500 animate-bounce-stop" />,
      title: "Find Your Favorite Restaurant",
      description: "Enter your location and browse through a list of curated restaurants in your area. Whether you're craving pizza or sushi, we have it all.",
    },
    {
      icon: <Utensils className="w-16 h-16 text-orange-500 animate-bounce-stop" />,
      title: "Choose Your Meal",
      description: "Browse menus, read reviews, and pick the perfect meal. You can filter by cuisine, price, and user ratings to help make the choice easy.",
    },
    {
      icon: <Truck className="w-16 h-16 text-orange-500 animate-bounce-stop" />,
      title: "Track Your Delivery",
      description: "Watch your order as it’s being prepared and delivered in real-time. Get updates on its status and estimated arrival time.",
    },
    {
      icon: <Star className="w-16 h-16 text-orange-500 animate-bounce-stop" />,
      title: "Enjoy and Rate",
      description: "Savor your meal and share your experience by rating the restaurant and meal. Your feedback helps others and helps us improve.",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50 py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ordering food has never been easier. Simply follow these easy steps to enjoy your meal in no time!
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 container mx-auto px-4 animate-fade-in-up">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-6 space-y-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
              <div className="bg-orange-50 p-6 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute top-12 right-0 w-full h-0.5 bg-orange-100 transform translate-x-1/2">
                  <div className="absolute right-0 w-3 h-3 bg-orange-200 rounded-full transform translate-x-1/2 -translate-y-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your food journey with us today! Choose your favorite meals and enjoy seamless delivery.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
