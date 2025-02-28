import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Newsletter } from './Newsletter';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Newsletter />
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About FoodDelivery</h3>
            <p className="text-sm leading-relaxed">
              We're on a mission to transform the food delivery experience. With thousands of restaurants
              and dedicated delivery partners, we ensure your favorite meals reach you fresh and fast.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-500" />
                Tchikayaline@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-500" />
                +237 659 143 005
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                123 Delivery St, Food City
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <img
                src="https://images.unsplash.com/photo-1536148935331-408321065b18?auto=format&fit=crop&q=80"
                alt="Food delivery illustration"
                className="rounded-lg opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2024 arielpetit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}