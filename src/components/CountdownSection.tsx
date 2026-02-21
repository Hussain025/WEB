import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const CountdownSection = () => {
  const targetDate = new Date('2026-03-13T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
              Event Countdown
            </h2>
            <Clock className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-gray-400">March 13-14, 2026 | Mailam Engineering College</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-orange-500 to-green-500 bg-clip-text text-transparent mb-2">
                {String(block.value).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{block.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
