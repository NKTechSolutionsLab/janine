import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Flower2,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Books", href: "#books" },
    { name: "Music & Media", href: "#media" },
    { name: "Events", href: "#events" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#e8dfd2] bg-[#f8f2e8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="relative flex h-12 w-12 items-center justify-center">
            <Flower2
              size={44}
              strokeWidth={1.1}
              className="text-[#b8893c]"
            />
          </div>

          <div className="leading-none">
            <div className="font-serif text-[27px] italic tracking-tight text-[#171513]">
              Janine Ambrose
            </div>

            <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-[#26221f]">
              Loving Arts Centre
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-[15px] transition-colors duration-300 ${
                index === 0
                  ? "text-[#a8752d]"
                  : "text-[#26221f] hover:text-[#a8752d]"
              }`}
            >
              {link.name}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-[#b8893c]" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-3 rounded-full bg-[#b8893c] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#9c6e2c] xl:flex"
        >
          Work With Janine
          <ArrowRight size={16} />
        </a>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7c8b4] text-[#302b26] xl:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#e5dacb] bg-[#f8f2e8] px-6 py-6 xl:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[16px] text-[#27221e]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#b8893c] px-6 py-3 text-sm text-white"
            >
              Work With Janine
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;