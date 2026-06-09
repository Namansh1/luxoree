import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItem = (path, label) => {
    const isActive = location.pathname === path;

    return (
      <Link
        to={path}
        className={`relative text-sm uppercase tracking-[3px] font-light transition duration-300
        ${isActive ? "text-[#c8a96a]" : "text-white hover:text-[#c8a96a]"}
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[1px] after:bg-[#c8a96a] after:transition-all
        ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-black/95 backdrop-blur-md border-b border-[#1a1a1a]">

      {/* LOGO */}
      <h1 className="text-3xl font-serif tracking-[6px] text-[#c8a96a]">
        LUXOREE
      </h1>

      {/* LINKS */}
      <div className="flex gap-10 items-center">
        {navItem("/", "Home")}
        {navItem("/products", "Shop")}
        {navItem("/build-set", "Build Set")}
        {navItem("/cart", "Cart")}
      </div>

      {/* CTA */}
      <Link to="/products">
        <button className="px-5 py-2 border border-[#c8a96a] text-[#c8a96a] text-sm uppercase tracking-[2px] hover:bg-[#c8a96a] hover:text-black transition">
          Shop Now
        </button>
      </Link>

    </nav>
  );
};

export default Navbar;
