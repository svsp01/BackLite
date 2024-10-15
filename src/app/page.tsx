"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Gallery from "@/app/components/Gallery";
import Contact from "@/app/components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://res.cloudinary.com/dugdepvgg/image/upload/v1729017341/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r_10_ettkaz.jpg"
  );
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const changeBackground = () => {
    const images = [
      "https://res.cloudinary.com/dugdepvgg/image/upload/v1729017226/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r_9_l1hxpv.jpg",
      "https://res.cloudinary.com/dugdepvgg/image/upload/v1729017341/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r_10_ettkaz.jpg",
      "https://res.cloudinary.com/dugdepvgg/image/upload/v1729017340/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r_13_i7xrhz.jpg",
    ];
    const currentIndex = images.indexOf(backgroundImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setBackgroundImage(images[nextIndex]);
  };

  return (
    <div className="min-h-screen">
      <Navbar
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <Header
        backgroundImage={backgroundImage}
        onBackgroundChange={changeBackground}
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Gallery ref={galleryRef} />
        <Contact ref={contactRef} />
      </motion.div>
    </div>
  );
}
