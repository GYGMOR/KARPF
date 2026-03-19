'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projekte", href: "#projects" },
    { name: "Über uns", href: "#about" },
    { name: "Kontakt", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id.startsWith('/') ? id.substring(1) : id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "bg-[#FDFBF7] shadow-sm py-4 text-[#2D241E]"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => scrollToSection("#hero")}>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={cn(
              "h-16 w-48 relative transition-all duration-300",
              isScrolled ? "scale-90" : "scale-100"
            )}>
              <Image
                src="/images/logo.png"
                alt="KARPF Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                "text-sm font-medium transition-colors relative group py-2",
                "text-[#5D4037] hover:text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                "bg-primary"
              )} />
            </Link>
          ))}
          <a href="tel:0566673676">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 transition-all hover:scale-105"
            >
              056 667 36 76
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="text-[#2D241E]" /> : <Menu className="text-[#2D241E]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FDFBF7] border-b border-[#5D4037]/10 p-6 md:hidden flex flex-col gap-6 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-xl font-display font-bold text-[#2D241E] hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:0566673676">
            <Button
              className="w-full bg-primary text-white font-bold rounded-full h-12"
            >
              056 667 36 76
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
