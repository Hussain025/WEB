import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
      } : {}}
      transition={{ 
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={`bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
