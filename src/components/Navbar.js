"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading tracking-widest text-white">
          CORE <span className="text-gold">X</span> FITNESS
        </Link>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest">
          <Link href="/classes" className="hover:text-gold transition">CLASSES</Link>
          <Link href="/facilities" className="hover:text-gold transition">FACILITIES</Link>
          <Link href="/pricing" className="hover:text-gold transition">PRICING</Link>
          <Link href="/contact" className="bg-gold text-black px-6 py-2 rounded-sm font-bold hover:bg-white transition">
            JOIN NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}