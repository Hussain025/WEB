import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [stage, setStage] = useState<'sparkle' | 'zoom'>('sparkle');

  useEffect(() => {
    // After 2 seconds, start zoom animation
    const timer1 = setTimeout(() => {
      setStage('zoom');
    }, 2500);

    // After zoom completes, show main site
    const timer2 = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  // Generate fewer sparkles for better performance (20 instead of 50)
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1
  }));

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={stage === 'zoom' ? { 
        scale: 15, 
        opacity: 0,
        filter: 'blur(10px)'
      } : {}}
      transition={{ 
        duration: 2, 
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      style={{
        willChange: 'transform, opacity'
      }}
    >
      {/* Sparkles - only render during sparkle stage */}
      {stage === 'sparkle' && sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
          }}
        />
      ))}

      {/* Static gradient orbs - removed animations for better performance */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-500/30 to-transparent blur-3xl"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-500/30 to-transparent blur-3xl"
        style={{ transform: 'translate(50%, 50%)' }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          willChange: 'transform, opacity'
        }}
      >
        {/* Sparkle icon */}
        <motion.div
          className="flex justify-center mb-8"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-20 h-20 text-orange-400" />
        </motion.div>

        {/* HackIndia text */}
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.span
            className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% center', '100% center', '0% center'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            HackIndia
          </motion.span>
        </motion.h1>

        {/* 2026 */}
        <motion.div
          className="text-4xl md:text-6xl font-bold text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          2026
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          India's Biggest Web3 & AI Hackathon
        </motion.p>

        {/* Loading indicator */}
        <motion.div
          className="mt-12 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-green-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>


    </motion.div>
  );
}
