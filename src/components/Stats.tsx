import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Users, Trophy, Code, Clock } from 'lucide-react';

interface StatProps {
  value: number;
  label: string;
  icon: React.ElementType;
  suffix?: string;
}

function AnimatedStat({ value, label, icon: Icon, suffix = '' }: StatProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2 });
    return animation.stop;
  }, [count, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-gradient-to-br from-orange-500/20 to-green-500/20 border border-orange-500/30">
          <Icon className="w-8 h-8 text-orange-400" />
        </div>
      </div>
      <motion.div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.div>
      <div className="text-gray-400 text-lg">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { value: 500, label: 'Participants', icon: Users, suffix: '+' },
    { value: 5, label: 'Lakh Prize Pool', icon: Trophy, suffix: 'L+' },
    { value: 100, label: 'Projects', icon: Code, suffix: '+' },
    { value: 24, label: 'Hours of Hacking', icon: Clock, suffix: '' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/5 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
