import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 5, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 2,  ease: "easeInOut" }}
    >
      <div className="relative bg-[#08060E] overflow-hidden">
        {/* Spotlight at Top-Left */}
        <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-[#0B037A] opacity-30 rounded-full blur-[200px] pointer-events-none z-0 " />
        <Navbar />
        <Hero />
        <Project />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
