import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-black text-white border-b border-gray-800">

      {/* BRAND */}
      <h1 className="text-2xl font-serif tracking-widest text-[#c8a96a]">
        LUXOREE
      </h1>

      {/* NAV LINKS */}
      <div className="flex gap-8 text-sm uppercase tracking-wide">

        <Link
          to="/"
          className="hover:text-[#c8a96a] transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-[#c8a96a] transition duration-300"
        >
          Shop
        </Link>

        <Link
          to="/build-set"
          className="hover:text-[#c8a96a] transition duration-300"
        >
          Build Set
        </Link>

        <Link
          to="/cart"
          className="hover:text-[#c8a96a] transition duration-300"
        >
          Cart
        </Link>

      </div>

      {/* CTA BUTTON */}
      <Link to="/products">
        <button className="border border-[#c8a96a] px-4 py-2 text-[#c8a96a] hover:bg-[#c8a96a] hover:text-black transition duration-300">
          Shop Now
        </button>
      </Link>

    </nav>
  );
};

export default Navbar;
