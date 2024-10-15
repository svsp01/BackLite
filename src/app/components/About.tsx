"use client";

import { forwardRef } from 'react'; // Import forwardRef from React
import { motion } from 'framer-motion';
import { Cpu, Image, Zap } from 'lucide-react';

const About = forwardRef((props, ref:any) => { // Wrap your component in forwardRef
  console.log(props)

  return (
    <section ref={ref} id="about" className="py-16 bg-base-100"> {/* Attach ref to the section */}
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Our AI Photo Studio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="card bg-base-200 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-body items-center text-center">
              <Cpu className="w-12 h-12 mb-4 text-primary" />
              <h3 className="card-title">Cutting-edge AI</h3>
              <p>Our studio leverages state-of-the-art artificial intelligence to enhance your photos.</p>
            </div>
          </motion.div>
          <motion.div 
            className="card bg-base-200 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card-body items-center text-center">
              <Image className="w-12 h-12 mb-4 text-primary" />
              <h3 className="card-title">Stunning Results</h3>
              <p>Transform ordinary photos into extraordinary works of art with our AI-powered tools.</p>
            </div>
          </motion.div>
          <motion.div 
            className="card bg-base-200 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="card-body items-center text-center">
              <Zap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="card-title">Lightning Fast</h3>
              <p>Experience rapid processing times, allowing you to enhance your photos in seconds.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
About.displayName = 'About';
export default About; // Export the component
