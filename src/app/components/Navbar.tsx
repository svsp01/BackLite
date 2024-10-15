import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", ref: "home" },
  { name: "About", ref: "about" },
  { name: "Services", ref: "services" },
  { name: "Gallery", ref: "gallery" },
  { name: "Contact", ref: "contact" },
];

export default function Navbar({
  aboutRef,
  servicesRef,
  galleryRef,
  contactRef,
}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-base-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            <span className="text-4xl font-extrabold">B</span>
            acklite
          </Link>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-base-content hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-base-content hover:text-primary transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(galleryRef)}
              className="text-base-content hover:text-primary transition-colors duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-base-content hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
            <Link href="/login" className="btn btn-primary btn-sm">
              Get Started
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-base-100 shadow-md"
        >
          <div className="container mx-auto px-4 py-2">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="block py-2 text-base-content hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="block py-2 text-base-content hover:text-primary transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(galleryRef)}
              className="block py-2 text-base-content hover:text-primary transition-colors duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="block py-2 text-base-content hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
            <Link
              href="/login"
              className="block py-2 text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
