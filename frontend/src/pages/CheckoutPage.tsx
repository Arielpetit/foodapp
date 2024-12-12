import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();


  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      
  
      if (isNaN(price) || isNaN(quantity)) {
        return total; // Skip invalid items
      }
  
      return total + price * quantity;
    }, 0);
  };

  const totalAmount = calculateTotal();

  // Calculate taxes and shipping (you can modify this based on your requirements)
  const shipping = 5.00;
  const taxes = totalAmount * 0.08; // For example, 8% tax rate

  const handleConfirmOrder = () => {
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="container mx-auto bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Contact and Shipping Information */}
          <div className="lg:col-span-2 bg-gray-50">
            {/* Contact Information */}
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Contact Information
            </h2>
            <div className="mb-6">
              <label className="block text-gray-600 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Shipping Information */}
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Shipping Information
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">
                Company (optional)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">
                Apartment, Suite, etc. (optional)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Country
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  State / Province
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">
                Phone
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Payment Information */}
            <h2 className="text-xl font-semibold my-6 text-gray-800">
              Payment
            </h2>
            <div className="flex items-center gap-4">
              <label className="flex items-center border border-gray-300 p-4 rounded-md w-full cursor-pointer hover:border-blue-500 transition duration-200">
                <input type="radio" name="payment" className="mr-2" />
                <span>Cash on Delivery</span>
              </label>
              <label className="flex items-center border border-gray-300 p-4 rounded-md w-full cursor-pointer hover:border-blue-500 transition duration-200">
                <input type="radio" name="payment" className="mr-2" />
                <span>PayPal</span>
              </label>
              <label className="flex items-center border border-gray-300 p-4 rounded-md w-full cursor-pointer hover:border-blue-500 transition duration-200">
                <input type="radio" name="payment" className="mr-2" />
                <span>eTransfer</span>
              </label>
            </div>
          </div>

          {/* Right Section: Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 h-12">
                Order Summary
              </h2>
              <div className="space-y-4 h-48 overflow-y-auto">
                {cartItems.map((item) => (
                  <div className="flex items-center justify-between h-16" key={item.id}>
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-md"
                      />
                      <div className="ml-4">
                        <p>{item.name}</p>
                        <p className="text-gray-500 text-sm">
                          {item.color}, {item.size}
                        </p>
                      </div>
                    </div>
                    <p>${(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="border-t border-gray-300 my-4"></div>
              <div className="space-y-2">
                <div className="flex justify-between h-8">
                  <p>Subtotal</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between h-8">
                  <p>Shipping</p>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Taxes</p>
                  <p>${taxes.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <p>Total</p>
                <p>${(totalAmount + shipping + taxes).toFixed(2)}</p>
              </div>

              <button className="w-full bg-blue-600 text-white rounded-md py-3 mt-6 hover:bg-blue-700 transition duration-200" onClick={handleConfirmOrder}>
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
