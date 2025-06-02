import React, { useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';

export default function RecipeLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-6 w-6 text-gray-900" />
              <span className="text-xl font-medium text-gray-900">
                Recipe®
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Recipes
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Stats
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm cursor-pointer">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Recipes
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">
                Stats
              </a>
              <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Save every flavor.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed">
            Share recipes and memories easily.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium cursor-pointer">
            Start Sharing
          </button>
        </div>
      </section>

      {/* Main Content Grid - 6 squares in 2x3 layout alternating text and images */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Row 1 */}
            {/* Square 1 - Text */}
            <div className="aspect-square  rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Simple recipe storage.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organize your favorite dishes and keep track of every ingredient
                in a friendly, clear interface.
              </p>
            </div>

            {/* Square 2 - Image */}
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-lg"></div>

            {/* Row 2 */}
            {/* Square 3 - Image */}
            <div className="aspect-square bg-gradient-to-br from-green-200 to-teal-200 rounded-lg"></div>

            {/* Square 4 - Text */}
            <div className="aspect-square  rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Share with loved ones.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Send your favorite recipes to family and friends, or discover
                new dishes from your community.
              </p>
            </div>

            {/* Row 3 */}
            {/* Square 5 - Text */}
            <div className="aspect-square  rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                See your stats.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track your cooking habits, favorite ingredients, and most cooked
                recipes for easy insights and meal planning.
              </p>
            </div>

            {/* Square 6 - Image */}
            <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center">
            {/* Left side - Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Ready to share something tasty?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Save recipes and memories today.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium cursor-pointer">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-6 w-6 text-gray-900" />
                <span className="text-xl font-medium text-gray-900">
                  Recipe®
                </span>
              </div>
              <p className="text-gray-600 max-w-md">
                The easiest way to save, organize, and share your favorite
                recipes.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Stats
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Recipe®. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
