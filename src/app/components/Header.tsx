"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeaderProps {
  backgroundImage: string;
  onBackgroundChange: () => void;
}

export default function Header({ backgroundImage, onBackgroundChange }: HeaderProps) {
  return (
    <header 
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'start',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <motion.h1
            className="mb-5 text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Photo Studio
          </motion.h1>
          <motion.p
            className="mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your photos with cutting-edge AI technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <button className="btn btn-primary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Services <ArrowRight className="ml-2" />
            </button>
            <button className="btn btn-outline btn-secondary" onClick={onBackgroundChange}>Change Background</button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}