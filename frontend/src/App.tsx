import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserFromLocalStorage } from './store/userSlice';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import OrderNowPage from './pages/OrderNowPage';
import ContactPage from './pages/ContactPage';
import RestaurantPage from './pages/RestaurantPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminPage from './pages/AdminPage';
import CartPage from './pages/CartPage';
import MenuManagementPage from './pages/MenuManagementPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/Confirmation';

import { CartProvider } from './context/CartContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  const dispatch = useDispatch();

  // Restore user session from localStorage
  useEffect(() => {
    dispatch(setUserFromLocalStorage());
  }, [dispatch]);

  return (
    <GoogleOAuthProvider clientId="1051051791264-oer3o718uhjnj7gtcvbnl5o12shv1vvh.apps.googleusercontent.com">
      <DarkModeProvider>
        <AuthProvider>
          <CartProvider>
            <Router>
              <div className="min-h-screen">
                <Navbar />
                <main className="pt-16">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <Hero />
                          <Features />
                          <HowItWorks />
                          <Testimonials />
                        </>
                      }
                    />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/how-it-works" element={<HowItWorksPage />} />
                    <Route path="/order" element={<OrderNowPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/restaurant/:id" element={<RestaurantPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/form" element={<AdminPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/confirmation" element={<ConfirmationPage />} />
                    <Route path="/menu" element={<MenuManagementPage />} />
                    <Route path="*" element={<div>404 Page Not Found</div>} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </CartProvider>
        </AuthProvider>
      </DarkModeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
