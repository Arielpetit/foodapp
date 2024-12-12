import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, UtensilsCrossed, ShoppingCart, Moon, Sun } from 'lucide-react';
import { googleLogout } from '@react-oauth/google';
import { CartContext } from '../context/CartContext';
import { useDarkMode } from '../context/DarkModeContext';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleLogout = () => {
    googleLogout();
    logout();
    window.location.href = '/login';
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Order Now', path: '/order' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleStorageChange = () => {
      if (localStorage.getItem('googleToken')) {
        login();
      } else {
        logout();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [login, logout]);

  return (
    <nav className={`bg-white shadow-sm fixed w-full z-50 ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-2">
            <UtensilsCrossed className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
              OrderUp
            </span>
          </NavLink>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center gap-8 rounded-full">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 font-medium transition-all duration-300 text-gray-700 hover:bg-orange-500 hover:text-white rounded-full ${
                  isActive ? 'bg-orange-500 text-white rounded-full' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Cart Icon */}
            <NavLink
              to="/cart"
              className="relative text-gray-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </NavLink>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 hover:text-orange-500 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>

            {/* User Avatar and Logout */}
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLogout}
                  className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-orange-600 transition-colors"
                >
                  Logout
                </button>
                <img
                  src="https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-gray-300 object-cover cursor-pointer"
                  onClick={togglePanel}
                />
              </div>
            ) : (
              <NavLink
                to="/signup"
                className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-orange-600 transition-colors"
              >
                Login/Signup
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300 ${
                    isActive ? 'bg-orange-500 text-white' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Cart Icon */}
            <NavLink
              to="/cart"
              className="relative block text-gray-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </NavLink>

            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={toggleDarkMode}
              className="w-full text-gray-700 hover:text-orange-500 transition-colors flex justify-center"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>

            {/* Mobile Login/Logout */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full bg-orange-500 text-white py-2.5 rounded-full font-medium text-sm hover:bg-orange-600 transition-colors"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/signup"
                className="w-full bg-orange-500 text-white py-2.5 rounded-full font-medium text-sm hover:bg-orange-600 transition-colors"
              >
                Login/Signup
              </NavLink>
            )}
            
          </div>
        </div>
                {/* Side Panel for Avatar */}
                <div
          className={`fixed top-0 right-0 h-full w-72 bg-gray-100 dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
            isPanelOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col items-center text-center space-y-6">
            <button
              onClick={togglePanel}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 focus:outline-none self-end"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src="https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg"
              alt="User Avatar"
              className="w-20 h-20 rounded-full border-4 border-gray-300 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">John Doe</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">john.doe@example.com</p>

            <button
              onClick={handleLogout}
              className="w-full bg-orange-500 text-white py-2.5 rounded-full font-medium text-sm hover:bg-orange-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}