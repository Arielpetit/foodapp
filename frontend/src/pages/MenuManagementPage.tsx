import React, { useState } from 'react';

// Define the structure of a menu item
type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: string;
};

const MenuManagementPage = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [newItem, setNewItem] = useState<MenuItem>({
    name: '',
    description: '',
    price: 0,
    category: '',
  });
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  // Handle input changes for new menu items
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Add new menu item to the list
  const handleAddItem = () => {
    setMenuItems([...menuItems, newItem]);
    setNewItem({ name: '', description: '', price: 0, category: '' });
  };

  // Submit menu for a specific restaurant
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/restaurants/${selectedRestaurant}/menu`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(menuItems),
      });

      if (response.ok) {
        alert('Menu updated successfully!');
        setMenuItems([]);
      } else {
        console.error('Error submitting menu:', await response.text());
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Manage Menu</h1>
        
        {/* Select Restaurant */}
        <div className="mb-6">
          <label htmlFor="restaurant" className="block font-semibold text-gray-700 mb-2">Select Restaurant</label>
          <select
            id="restaurant"
            name="selectedRestaurant"
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedRestaurant}
            onChange={(e) => setSelectedRestaurant(e.target.value)}
          >
            <option value="" disabled>Select a restaurant</option>
            <option value="1">Restaurant 1</option>
            <option value="2">Restaurant 2</option>
            {/* Add dynamically fetched options here */}
          </select>
        </div>

        {/* Add Menu Items */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Menu Item</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={newItem.name}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newItem.category}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newItem.description}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newItem.price}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddItem}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </div>

        {/* Menu Preview */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Menu Preview</h2>
          <ul className="list-none pl-0 space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <strong className="text-lg text-gray-800">{item.name}</strong>
                  <span className="text-xl font-semibold text-green-500">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuManagementPage;
