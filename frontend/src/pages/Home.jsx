import React from "react";
import { Search, Car, UserCircle } from "lucide-react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <div
          className="h-[600px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect Ride
            </h1>
            <p className="text-xl text-white mb-8">
              Rent cars from trusted local providers
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-2">
              <div className="flex items-center">
                <Search className="h-6 w-6 text-gray-400 mx-3" />
                <input
                  type="text"
                  placeholder="Where do you want to rent a car?"
                  className="w-full py-3 px-4 text-gray-600 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Choose from hundreds of cars from trusted providers
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple and secure booking process</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
