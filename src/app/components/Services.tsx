"use client";

import { forwardRef } from 'react'; // Import forwardRef from React
import { motion } from 'framer-motion';
import { Eraser, Wand2, Sparkles, Maximize } from 'lucide-react';

const services = [
  {
    title: 'AI Background Removal',
    description: 'Effortlessly remove and replace backgrounds with our advanced AI technology.',
    icon: Eraser,
  },
  {
    title: 'Smart Retouching',
    description: 'Enhance your photos with intelligent retouching that preserves natural beauty.',
    icon: Wand2,
  },
  {
    title: 'Dynamic Text Generation',
    description: 'Create stunning text overlays with AI-generated designs and layouts.',
    icon: Sparkles,
  },
  {
    title: 'Image Optimization',
    description: 'Automatically optimize your images for web and print with our AI algorithms.',
    icon: Maximize,
  },
];

// Wrap your Services component in forwardRef
const Services = forwardRef((props, ref:any) => {
  
  console.log(props)
  return (
    <section ref={ref} id="services" className="py-16 bg-base-200"> {/* Attach ref to the section */}
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="card-title">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});


Services.displayName = 'Services';
export default Services; // Export the component
