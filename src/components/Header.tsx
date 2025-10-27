"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/10 backdrop-blur-[8px] border-b border-white/30 shadow-[0_2px_12px_0_rgba(31,38,135,0.11)]">
      <div className="w-[95%] mx-auto px-4 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/AcuSkyLogo.png"
            alt="AcuSky Logo"
            width={140}
            height={100}
            className="mr-2"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`px-4 py-1 rounded-[34px] font-medium text-sm transition 
              ${
                active === item.label
                  ? "bg-white text-gray-900"
                  : "bg-white/10 text-white"
              }`}
              style={{ boxShadow: "0px 2px 4px 0px #00000026" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Search */}
        <form className="hidden lg:flex items-center bg-white/40 rounded-full pl-3 ml-4 w-[170px] lg:w-[240px] border border-white/30 shadow">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none border-none flex-1 text-[#FFFFFF] placeholder:text-[#FFFFFF]"
          />
          <button
            type="submit"
            className="flex items-center justify-center ml-2 h-10 w-25 rounded-[34px] bg-[#166CD0] border border-[#166CD0] shadow-[0px_2px_4px_0px_#00000026]"
          >
            <FaSearch className="text-white text-[14px]" />
          </button>
        </form>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src="/HamburgerWhite.png"
            alt="Menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0F2C59]/90 backdrop-blur-md border-t border-white/20 flex flex-col items-center py-6 space-y-4 animate-slideDown">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => {
                setActive(item.label);
                setIsMenuOpen(false);
              }}
              className={`w-[80%] text-center px-4 py-2 rounded-[34px] font-medium text-sm transition 
              ${
                active === item.label
                  ? "bg-white text-gray-900"
                  : "bg-white/10 text-white"
              }`}
              style={{ boxShadow: "0px 2px 4px 0px #00000026" }}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Search */}
          <form className="flex items-center bg-white/40 rounded-full pl-3 w-[85%] border border-white/30 shadow mt-2">
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent outline-none border-none flex-1 text-[#FFFFFF] placeholder:text-[#FFFFFF]"
            />
            <button
              type="submit"
              className="flex items-center justify-center ml-2 h-10 w-25 rounded-[34px] bg-[#166CD0] border border-[#166CD0] shadow-[0px_2px_4px_0px_#00000026]"
            >
              <FaSearch className="text-white text-[14px]" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
