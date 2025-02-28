import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartItem, clearCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateCartItem(id, quantity);
    } else {
      removeFromCart(id);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Ensure price and quantity are valid numbers
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
  
      // Log values to check for inconsistencies
      console.log(`Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`);
  
      if (isNaN(price) || isNaN(quantity)) {
        console.error(`Invalid price or quantity for item: ${item.name}`, item);
        return total; // Skip this item and don't add it to total
      }
  
      return total + price * quantity;
    }, 0);
  };
  

  const totalAmount = calculateTotal();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                    min="1"
                    className="w-16 text-center border rounded-lg"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Amount */}
          <div className="flex justify-between items-center mt-8">
            <p className="text-xl font-semibold">Total: ${totalAmount.toFixed(2)}</p>
            <div>
              <button
                onClick={clearCart}
                className="bg-gray-500 text-white py-3 px-8 rounded-full hover:bg-gray-600 transition mr-4"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate('/checkout')}
                className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-600 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
