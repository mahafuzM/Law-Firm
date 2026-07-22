"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/service" },
    { name: "Case Study", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // এখানে border-b এবং border-gray-100 রিমুভ করা হয়েছে
    <nav className="sticky top-0 z-50 w-full bg-[#08171F] backdrop-blur-md font-poppins overflow-x-hidden">
      <div className="max-w-[1445px] mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-22">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-3xl font-bold tracking-tighter text-white">
              LEX<span className="text-[#C69D61]">PRO</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[16px] font-medium text-white hover:text-[#C69D61] transition-all duration-300 tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-[#C69D61] text-white text-[14px] font-semibold hover:bg-[#1A2D28] transition-all duration-500 rounded-sm"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-gray-200 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[#0F172A] py-2 border-b border-gray-50 hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="mt-4 text-center bg-[#C69D61] text-white py-4 rounded-sm font-bold hover:bg-[#182E29] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;