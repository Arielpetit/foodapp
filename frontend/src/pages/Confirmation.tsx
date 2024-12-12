import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  
  // Fetch order data passed from CheckoutPage or via state/context
  const location = useLocation();
  const orderDetails = location.state || {
    orderNumber: "#76435857",
    orderDate: "May 14, 2024",
    paymentMethod: "JPMorgan monthly Installments",
    companyName: "Flowbite Studios LLC",
    shippingAddress: "Scott Street, San Francisco, California, USA",
    phoneNumber: "+1 (123) 456-7890",
    email: "name@company.com",
    subtotal: 4894.00,
    savings: -290.00,
    tax: 99.00,
    total: 5493.00,
    items: [
      { name: "Product 1", quantity: 1, price: 2499.99 },
      { name: "Product 2", quantity: 2, price: 1297.50 }
    ]
    
  };

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold">Thanks for your order!</h1>
          <p className="text-gray-600 mt-2">
            Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="space-y-4">
            <div>
              <strong>Order Number:</strong> {orderDetails.orderNumber}
            </div>
            <div>
              <strong>Order Date:</strong> {orderDetails.orderDate}
            </div>
            <div>
              <strong>Payment Method:</strong> {orderDetails.paymentMethod}
            </div>
            <div>
              <strong>Company:</strong> {orderDetails.companyName}
            </div>
            <div>
              <strong>Shipping Address:</strong> {orderDetails.shippingAddress}
            </div>
            <div>
              <strong>Phone Number:</strong> {orderDetails.phoneNumber}
            </div>
            <div>
              <strong>Email:</strong> {orderDetails.email}
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">Order Summary</h2>
          <div className="space-y-2">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t my-4"></div>
            <div className="flex justify-between">
              <strong>Subtotal:</strong> ${orderDetails.subtotal.toFixed(2)}
            </div>
            <div className="flex justify-between">
              <strong>Savings:</strong> ${orderDetails.savings.toFixed(2)}
            </div>
            <div className="flex justify-between">
              <strong>Tax:</strong> ${orderDetails.tax.toFixed(2)}
            </div>
            <div className="flex justify-between font-semibold mt-4">
              <strong>Total:</strong> ${orderDetails.total.toFixed(2)}
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Track Your Order
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              Return to Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
