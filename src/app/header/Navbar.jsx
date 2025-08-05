"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Drawer from "./Drawer"; // Adjust path accordingly

const logoSrc = "/assets/images/logo_white.webp";

export default function Navbar() {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about",
      dropdown: [
        { name: "Message", path: "/about/message" },
        { name: "Our Values", path: "/about/values" },
        { name: "What Sets Us Apart", path: "/about/set-apart" },
      ],
    },
    { name: "Academics", path: "/academics" },
    { name: "Programs", path: "/program" },
    { name: "Admissions", path: "/admission" },
    { name: "Glimpse", path: "/glimpse" },
    {
      name: "Highlights",
      path: "/events",
      dropdown: [
        { name: "Events", path: "/events" },
        { name: "News Coverage", path: "/news-coverage" },
      ],
    },
    { name: "Contact", path: "/contact-us" },
  ];

  const isDropdownActive = (dropdown) =>
    dropdown.some((item) => pathname.startsWith(item.path));

  const isActiveLink = (path, dropdown) =>
    pathname === path || (dropdown && isDropdownActive(dropdown));

  return (
    <nav className="bg-red-600 shadow-lg relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-10">
          <Link href="/" aria-label="Home" className="flex items-center">
            <Image
              src={logoSrc}
              alt="Brookfield International School Logo"
              width={150}
              height={50}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.path}
                className={`px-3 py-2 rounded transition-colors duration-300 ${
                  isActiveLink(link.path, link.dropdown)
                    ? "border-b-2 border-red-200 text-red-200"
                    : "text-white hover:text-red-300"
                }`}
              >
                {link.name}
              </Link>
              {link.dropdown && openDropdown === link.name && (
                <ul className="absolute left-0 mt-2 bg-red-900 rounded shadow-lg py-2 w-48 z-50">
                  {link.dropdown.map((sublink) => (
                    <li key={sublink.name}>
                      <Link
                        href={sublink.path}
                        className={`block px-4 py-2 rounded hover:bg-red-800 ${
                          pathname === sublink.path
                            ? "text-red-200 font-semibold"
                            : "text-white"
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Drawer />
        </div>
      </div>
    </nav>
  );
}
