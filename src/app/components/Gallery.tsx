"use client";

import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dugdepvgg/image/upload/v1729016593/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r_3_yxmk2k.jpg",
  "https://res.cloudinary.com/dugdepvgg/image/upload/v1729016794/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r_7_tq5rmr.jpg",
  "https://res.cloudinary.com/dugdepvgg/image/upload/v1726902357/samples/ecommerce/analog-classic.jpg",
  "https://res.cloudinary.com/dugdepvgg/image/upload/v1729016593/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r_5_kmg25a.jpg",
  "https://res.cloudinary.com/dugdepvgg/image/upload/v1729016795/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r_8_lf9a4r.jpg",
  "https://res.cloudinary.com/dugdepvgg/image/upload/v1729016795/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r_6_ql88gh.jpg",
];

// Wrap your Gallery component in forwardRef
const Gallery = forwardRef((_, ref: any) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section ref={ref} id="gallery" className="py-16 bg-base-100">
      {" "}
      {/* Attach ref to the section */}
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                onClick={() => setSelectedImage(image)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-[90vh] rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
});

export default Gallery; // Export the component
