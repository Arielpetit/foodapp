import React, { useState } from "react";
import { motion } from "framer-motion";
import GoogleLoginButton from "../components/GoogleLoginButton";  // Import the GoogleLoginButton component
import axios from "../services/api";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/signup", formData);
      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <motion.div
        className="bg-white shadow-lg rounded-lg w-full max-w-lg p-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create an Account
        </h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-lg"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-lg"
              placeholder="Enter your password"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Google Login Button */}
        <div className="mt-6"><center>
          <GoogleLoginButton />  {/* Google Login Button Component */}
        </center>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
