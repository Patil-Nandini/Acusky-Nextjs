"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "#" },
    { label: "Solutions", href: "/under-renovation" },
    { label: "About", href: "/under-renovation" },
    { label: "Contact Us", href: "/under-renovation" },
  ];

  const products = [
    {
      name: "Tenant Management",
      desc: "The complete tenant onboarding and operations suite.",
      icon: "/TenantIcon.svg",
      href: "/Products/tenant-management",
    },
    {
      name: "Airport Business & Revenue Management",
      desc: "Manage operations, leases, billing, utilities, and more.",
      icon: "/BusinessManagemenet.svg",
      href: "/under-renovation",
    },
    {
      name: "Space Management",
      desc: "Maximize space utilization with optimal allocation.",
      icon: "/Space-Management.svg",
      href: "/under-renovation",
    },
    {
      name: "Customer Portal",
      desc: "A smart self-service experience for your customers.",
      icon: "/Customer-Manage.svg",
      href: "/under-renovation",
    },
  ];

  const isUnderRenovation = pathname === "/under-renovation";

  return (
    <header
      className={`w-full fixed top-0 left-0 z-[9999] border-b border-white/30 shadow-[0_2px_12px_0_rgba(31,38,135,0.11)]
    ${isUnderRenovation ? "bg-[#ACD4F4]" : "bg-white/10 backdrop-blur-[8px]"}
  `}
    >
      <div className="w-[95%] mx-auto px-4 md:px-10 flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/AcuSkyLogo.png"
              alt="AcuSky Logo"
              width={140}
              height={100}
              className="mr-2"
              priority
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <div
                className="peer flex items-center"
                onMouseEnter={() => setActive(item.label)}
                onMouseLeave={() => setActive("")}
              >
                <Link
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className={`flex items-center px-4 py-2 rounded-[34px] font-medium text-sm transition 
        ${
          active === item.label
            ? "bg-white text-gray-900"
            : "bg-white/10 text-white"
        }`}
                  style={{ boxShadow: "0px 2px 4px 0px #00000026" }}
                >
                  {item.label}
                  {item.label === "Products" && (
                    <svg
                      className="w-4 h-4 mt-1.5 ml-2 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              </div>

              {item.label === "Products" && (
                <div className="absolute left-0 mt-2 w-[320px] text-gray-800 rounded-xl shadow-lg opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-300 z-20">
                  <div className="relative rounded-xl p-[20px] bg-gradient-to-r from-white/40 to-white/10 backdrop-blur-md">
                    <div className="rounded-xl bg-white/70 backdrop-blur-lg">
                      <ul className="flex flex-col gap-3 py-3 px-4">
                        {products.map((product) => (
                          <li
                            key={product.name}
                            className="flex items-center gap-3 hover:bg-white/60 rounded-lg p-2 transition"
                          >
                            <Image
                              src={product.icon}
                              alt={product.name}
                              width={28}
                              height={28}
                              className="w-10 h-10"
                            />
                            <div className="flex flex-col">
                              <Link
                                href={product.href}
                                className="font-semibold text-[14px] text-[#567DAB] hover:underline cursor-pointer"
                              >
                                {product.name}
                              </Link>
                              <span className="text-[#677489] text-[12px] leading-snug">
                                {product.desc}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

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

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RxCross2 className="text-white text-3xl cursor-pointer" />
          ) : (
            <Image
              src="/HamburgerWhite.png"
              alt="Menu"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white/10 backdrop-blur-[8px] border-t border-white/20 flex flex-col items-center py-6 space-y-4 animate-slideDown">
          <form className="flex items-center bg-white/40 rounded-full pl-3 w-[80%] border border-white/30 shadow mt-2">
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

          {navItems.map((item) => {
            if (item.label === "Products") {
              return (
                <div key={item.label} className="w-[80%]">
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className={`w-full flex items-center justify-center px-4 py-2 rounded-[34px] font-medium text-sm transition 
            ${
              active === item.label
                ? "bg-white text-gray-900"
                : "bg-white/10 text-white"
            }`}
                    style={{ boxShadow: "0px 2px 4px 0px #00000026" }}
                  >
                    {item.label}
                    {isProductsOpen ? (
                      <IoIosArrowUp className="text-[16px]" />
                    ) : (
                      <IoIosArrowDown className="text-[16px]" />
                    )}
                  </button>

                  {isProductsOpen && (
                    <ul className="mt-3 flex flex-col gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-md border border-white/20">
                      {products.map((product) => (
                        <li
                          key={product.name}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/20 transition"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                            <Image
                              src={product.icon}
                              alt={product.name}
                              width={28}
                              height={28}
                            />
                          </div>
                          <div className="flex flex-col text-left">
                            <Link
                              href={product.href}
                              className="font-semibold text-[14px] text-[#3271BD] hover:underline"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {product.name}
                            </Link>
                            <span className="text-[12px] text-black lg:text-gray-200 leading-snug">
                              {product.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }

            return (
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
            );
          })}
        </div>
      )}
    </header>
  );
}
