import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import notFoundEmoji from '../assets/images/not-found.gif';


type Props = {}

const PageNotFound = (props: Props) => {
  const [grayScale, setGrayScale] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrayScale(prev => !prev);
    }, 1300);
    // clean up on component unmount
    return () => clearInterval(interval);
  }, [grayScale]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000] text-gray-200 p-6">  {/* bg-gray-900 */}
      {/* animated 404 text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-9xl font-bold text-[#F87315] mb-4"
      >
        <div className={`flex flex-row justify-center items-center hover:text-red-700 ${grayScale ? 'grayscale' : 'grayscale-0'}`}>
          <span>4</span><img src={notFoundEmoji} width={150} height={900} alt='not found' className='rounded-full' /><span>4</span>
        </div>
      </motion.div>

      {/* error message */}
      <h1 className="text-4xl font-semibold text-white mb-2">Page Not Found</h1>
      <p className="text-lg text-gray-400 mb-8 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* back to home button */}
      <Link to="/" className="relative group">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`bg-[#00A58C] hover:bg-[#00C69E] text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300`}
        >
          Back to Home
        </motion.button>
      </Link>

      {/* decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="absolute bottom-20 right-20 text-[#F87315] text-8xl font-extrabold opacity-10 transform rotate-12"
      >
        Oops!
      </motion.div>
    </div>
  );
}

export default PageNotFound;