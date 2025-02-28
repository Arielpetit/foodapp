import React from 'react';
import { Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-orange-100 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-300 to-orange-100 opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-down">
            Delivering Happiness, One Meal at a Time
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            We're on a mission to transform the way people experience food delivery, making it more convenient, reliable, and enjoyable for everyone.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 bg-orange-50 p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg">
            <h2 className="text-3xl font-bold text-orange-600 animate-slide-in-left">
              Our Mission
            </h2>
            <p className="text-gray-600 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              To connect people with their favorite restaurants and deliver exceptional food experiences right to their doorstep, while supporting local businesses and creating opportunities in our communities.
            </p>
          </div>
          <div className="space-y-6 bg-orange-50 p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg">
            <h2 className="text-3xl font-bold text-orange-600 animate-slide-in-right">
              Our Vision
            </h2>
            <p className="text-gray-600 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              To be the most trusted and loved food delivery platform, known for our reliability, quality of service, and positive impact on local communities.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-orange-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-12 animate-fade-in">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-2 animate-zoom-in">
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">Every decision we make is centered around enhancing our customers' experience and satisfaction.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-2 animate-zoom-in" style={{ animationDelay: "0.5s" }}>
              <Award className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards in food quality and delivery service.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-2 animate-zoom-in" style={{ animationDelay: "0.5s" }}>
              <Heart className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Impact</h3>
              <p className="text-gray-600">We're committed to supporting local restaurants and creating positive change in our communities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnerships Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Our Partners</h2>
          <div className="overflow-hidden">
          <div className="flex space-x-8 animate-scroll-left-to-right">
              {/* Add your restaurant logos here */}
              <img src="https://creative.starbucks.com/images/logos/logo-1987.png" alt="Starbucks" className="h-20 object-contain" />
              <img src="https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo-700x394.png" alt="McDonald's" className="h-20 object-contain" />
              <img src="https://logos-world.net/wp-content/uploads/2021/08/Chick-fil-A-Logo-700x394.png" alt="Chick-fil-A" className="h-20 object-contain" />
              <img src="https://logos-world.net/wp-content/uploads/2021/10/Pizza-Hut-Logo-700x394.png" alt="Pizza Hut" className="h-20 object-contain" />
              <img src="https://logos-world.net/wp-content/uploads/2021/10/Taco-Bell-Logo.png" alt="Taco Bell" className="h-20 object-contain" />
              <img src="https://logos-world.net/wp-content/uploads/2020/04/KFC-Logo-700x394.png" alt="KFC" className="h-20 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
