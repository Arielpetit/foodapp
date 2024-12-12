import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as reduxLogin } from '../store/userSlice';
import { motion } from "framer-motion";
import GoogleLoginButton from "../components/GoogleLoginButton";
import axios from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login: authLogin } = useAuth(); // Use the login method from AuthContext
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/auth/login", formData);
      const userData = {
        user: { email: formData.email },
        token: response.data.token,
      };
      dispatch(reduxLogin(userData));
      await authLogin(response.data.token); // Use AuthContext login method
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <motion.div
        className="bg-white shadow-lg rounded-lg w-full max-w-lg p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login to Your Account
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-8" onSubmit={handleSubmit}>
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
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <div className="mt-6">
          <center>
            <GoogleLoginButton />
          </center>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{' '}
          <a
            href="/signup"
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
