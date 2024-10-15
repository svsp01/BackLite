import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardProps {
  isLogin: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ isLogin, children }) => {
  return (
    <div className="card bg-base-100 shadow-xl max-w-md w-full  ">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? 'login' : 'signup'}
          initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="w-full  "
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Card;