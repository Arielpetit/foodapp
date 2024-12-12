import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    cuisine: '',
    rating: '',
    deliveryTime: '',
    priceRange: '',
    imageUrl: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRestaurantData({
      ...restaurantData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/restaurants', restaurantData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Restaurant added successfully!');
        setRestaurantData({
          name: '',
          cuisine: '',
          rating: '',
          deliveryTime: '',
          priceRange: '',
          imageUrl: ''
        });
      } else {
        alert('Error adding restaurant');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding restaurant');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Add New Restaurant</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
        <div className="form-group">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={restaurantData.name}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cuisine" className="block text-lg font-medium text-gray-700">Cuisine</label>
          <input
            id="cuisine"
            type="text"
            name="cuisine"
            value={restaurantData.cuisine}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating" className="block text-lg font-medium text-gray-700">Rating (out of 5)</label>
          <input
            id="rating"
            type="number"
            name="rating"
            value={restaurantData.rating}
            onChange={handleChange}
            step="0.1"
            max="5"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="deliveryTime" className="block text-lg font-medium text-gray-700">Delivery Time</label>
          <input
            id="deliveryTime"
            type="text"
            name="deliveryTime"
            value={restaurantData.deliveryTime}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="priceRange" className="block text-lg font-medium text-gray-700">Price Range</label>
          <input
            id="priceRange"
            type="text"
            name="priceRange"
            value={restaurantData.priceRange}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl" className="block text-lg font-medium text-gray-700">Image URL</label>
          <input
            id="imageUrl"
            type="text"
            name="imageUrl"
            value={restaurantData.imageUrl}
            onChange={handleChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600 transition duration-200"
          >
            Add Restaurant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
