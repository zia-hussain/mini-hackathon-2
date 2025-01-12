import React from "react";
import { Link } from "react-router-dom";
import { Car, UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-400">CarRental</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-500 hover:text-blue-600">
              Find a Car
            </Link>
            <Link
              to="/login"
              className="flex items-center space-x-1 text-gray-500 hover:text-blue-600"
            >
              <UserCircle className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
