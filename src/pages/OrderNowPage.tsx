import React, { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import RestaurantCard from '../components/RestaurantCard';
import AnimatedSection from '../components/AnimatedSection';

// Define the Restaurant type with additional properties
type Restaurant = {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  imageUrl: string;
};

const OrderNowPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'American', 'Japanese', 'Italian', 'Mexican', 'Indian', 'Healthy'];

  // Fetch restaurant data when the component mounts
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/restaurants');
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data);
        } else {
          console.error('Error fetching restaurant data');
        }
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchRestaurants();
  }, []);

  // Filter restaurants based on category and search query
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const categoryMatch =
      selectedCategory === 'All' || restaurant.cuisine.toLowerCase().includes(selectedCategory.toLowerCase());
    const searchMatch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-orange-500 to-orange-600 py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Discover Your Next Favorite Meal
          </motion.h1>
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
              <MapPin className="text-gray-400 w-6 h-6 ml-2" />
              <input
                type="text"
                placeholder="Enter your delivery address"
                className="flex-1 p-3 outline-none text-lg"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Find Food
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Search Bar to Search Restaurants */}
      <AnimatedSection className="py-8 container mx-auto px-4">
        <div className="flex items-center bg-white shadow-lg p-3 rounded-lg">
          <Search className="text-gray-400 w-6 h-6 ml-2" />
          <input
            type="text"
            placeholder="Search for a restaurant"
            className="flex-1 p-3 outline-none text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </AnimatedSection>

      {/* Categories */}
      <AnimatedSection className="py-8 container mx-auto px-4">
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Restaurants Grid */}
      <AnimatedSection className="py-8 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Available Restaurants</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              priceRange={restaurant.priceRange}
              imageUrl={restaurant.imageUrl}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default OrderNowPage;
