import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
  const navigate = useNavigate(); 

  return (
    <> 
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center mt-4">
      {/* animated heading */}
      <motion.h1
        className="text-2xl md:text-4xl font-bold text-gray-200 mt-5 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to <span className="text-yellow-400">Chiedozie's</span> 
        <br /> EasyWin Lucky World Cup Game App!
      </motion.h1>

      {/* animated CTA button */}
      <motion.button
        style={{backgroundColor: '#15BB50'}}
        className="mt-6 px-6 py-3 text-lg text-gray-200 font-semibold rounded-full shadow-md bg-yellow-400 hover:bg-yellow-500 transition-all"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // onClick={() => navigate("/games")}
      >
        Get Started
      </motion.button>
    </main>
    </>
  );
};

export default HomePage;
