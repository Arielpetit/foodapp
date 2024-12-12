import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Star, Bike, DollarSign } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Import the Cart Context

const menuCategories = [
  {
    name: 'Popular Items',
    items: [
      {
        id: '1',
        name: 'Signature Burger',
        description: 'Angus beef patty with special sauce and fresh vegetables',
        price: 12.99,
        image: 'https://th.bing.com/th/id/OIP.Mf0BBKivMReA4LF9TeImLAHaHa?w=800&h=800&rs=1&pid=ImgDetMain'
      },
      {
        id: '2',
        name: 'Classic Pizza',
        description: 'Fresh mozzarella, tomatoes, and basil',
        price: 15.99,
        image: 'https://th.bing.com/th/id/OIP.2ZhDKxFY2acBHFv5RHXPsgHaEo?rs=1&pid=ImgDetMain'
      }
    ]
  },
  {
    name: 'Main Course',
    items: [
      {
        id: '3',
        name: 'Grilled Salmon',
        description: 'Fresh salmon with herbs and lemon butter sauce',
        price: 24.99,
        image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520957651-grilled-salmon-vertical.jpg?crop=1.0xw:1xh;center,top&resize=768:*'
      },
      {
        id: '4',
        name: 'Pasta Carbonara',
        description: 'Creamy pasta with pancetta and parmesan',
        price: 16.99,
        image: 'https://th.bing.com/th/id/OIP.jMLdCcFXJ6Ji9D97ueCYUAHaJQ?rs=1&pid=ImgDetMain'
      }
    ]
  }
];

const RestaurantPage = () => {
  const { id } = useParams();
  const { cartItems, addToCart } = useCart(); // Access cart context

  const handleAddToCart = (item: any) => {
    addToCart(item); // Add item to cart when button is clicked
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={`https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?cs=srgb&dl=chairs-coffee-shop-drinking-glasses-67468.jpg&fm=jpg`}
          alt="Restaurant Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-end pb-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">Restaurant Name</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1">4.5 (500+ reviews)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5" />
                  <span className="ml-1">30-45 min</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5" />
                  <span className="ml-1">$$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container mx-auto px-4 py-8">
        {menuCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover"
                    />
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">${item.price}</span>
                        <button
                          onClick={() => handleAddToCart(item)} // Add item to cart
                          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
