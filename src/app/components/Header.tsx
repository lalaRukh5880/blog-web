'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBlog } from "react-icons/fa";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString('en-US', options) +
          ' ' +
          now.toLocaleTimeString('en-US', { hour12: false })
      );
    };

    updateDateTime();
    const interValId = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <>
      {/* Top header with date/time */}
      <div className="bg-black text-white text-center py-1">
        <span>{currentDateTime}</span>
      </div>

      {/* Navbar */}
      <header className="text-gray-400 body-font shadow-lg">
        <div className="container mx-auto flex p-4 flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            
            <FaBlog className="text-black font-bold text-lg h-8 w-8" />

          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex justify-center space-x-6">
            <Link
              href={"/home"}
              className="hover:text-red-800 transition-colors duration-300 transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-red-800 transition-colors duration-300 transform hover:scale-105"
            >
              About
            </Link>
            <Link
              href={"/blog"}
              className="hover:text-red-800 transition-colors duration-300 transform hover:scale-105"
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-red-800 transition-colors duration-300 transform hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* YouTube Button */}
          <button className="bg-black text-white border-0 py-1 px-3 rounded hover:bg-red-700 transition-colors duration-300">
            YouTube
          </button>
        </div>
      </header>
    </>
  );
}
