import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black text-white border-b border-gray-800">

      {/* LOGO */}
      <h1 className="text-2xl font-serif text-[#c8a96a]">
        LUXOREE
      </h1>

      {/* LINKS */}
      <div className="flex gap-8 text-sm uppercase">

        <Link to="/" className="hover:text-[#c8a96a]">
          Home
        </Link>

        <Link to="/products" className="hover:text-[#c8a96a]">
          Shop
        </Link>

        <Link to="/build-set" className="hover:text-[#c8a96a]">
          Build Set
        </Link>

        <Link to="/cart" className="hover:text-[#c8a96a]">
          Cart
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;
