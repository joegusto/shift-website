"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import CalendlyButton from "./CalendlyButton";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#specialties", label: "Specialties" },
  { href: "/#consulting", label: "Consulting" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[6%] py-6
        flex items-center justify-between
        transition-all duration-300
        ${scrolled
          ? "bg-bg/[0.92] backdrop-blur-xl border-b border-white/[0.07]"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      {/* Logo */}
      <Link href="/" aria-label="SHIFT is IT">
        <Image
          src="/shift-logo.svg"
          alt="SHIFT is IT"
          width={120}
          height={44}
          className="logo-img"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/80 text-sm font-medium transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <CalendlyButton className="btn-primary text-sm py-2.5 px-5">
            Book a Call
          </CalendlyButton>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-200 origin-center
            ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-200
            ${mobileOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-200 origin-center
            ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
        />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99] bg-bg/[0.97] flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 text-2xl font-semibold hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <CalendlyButton>Book a Call</CalendlyButton>
        </div>
      )}
    </nav>
  );
}
