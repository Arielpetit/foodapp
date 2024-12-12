import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  imageUrl: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  cuisine,
  rating,
  deliveryTime,
  priceRange,
  imageUrl,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <Link to={`/restaurant/${id}`}>
        <div className="relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-orange-500">
            {priceRange}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <p className="text-gray-600 mb-3">{cuisine}</p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-semibold">{rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bike className="w-4 h-4 text-gray-400" />
              <span>Free Delivery</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RestaurantCard;