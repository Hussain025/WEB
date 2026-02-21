import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Timeline() {
  const schedule = [
    {
      time: '09:00 AM',
      title: 'Registration & Check-in',
      description: 'Collect your badges and swag kits',
      icon: Calendar,
      date: 'March 13, 2026'
    },
    {
      time: '10:00 AM',
      title: 'Opening Ceremony',
      description: 'Welcome address and hackathon kickoff',
      icon: MapPin,
      date: 'March 13, 2026'
    },
    {
      time: '11:00 AM',
      title: 'Hacking Begins',
      description: 'Start building your projects',
      icon: Clock,
      date: 'March 13, 2026'
    },
    {
      time: '01:00 PM',
      title: 'Lunch Break',
      description: 'Networking and refreshments',
      icon: Calendar,
      date: 'March 13, 2026'
    },
    {
      time: '03:00 PM',
      title: 'Workshop: Web3 Fundamentals',
      description: 'Learn blockchain basics from experts',
      icon: MapPin,
      date: 'March 13, 2026'
    },
    {
      time: '06:00 PM',
      title: 'Mentor Sessions',
      description: 'Get guidance from industry professionals',
      icon: Clock,
      date: 'March 13, 2026'
    },
    {
      time: '08:00 PM',
      title: 'Dinner & Entertainment',
      description: 'Relax and recharge',
      icon: Calendar,
      date: 'March 13, 2026'
    },
    {
      time: '12:00 AM',
      title: 'Midnight Snacks',
      description: 'Keep the energy going',
      icon: Clock,
      date: 'March 14, 2026'
    },
    {
      time: '08:00 AM',
      title: 'Breakfast',
      description: 'Morning fuel for final push',
      icon: Calendar,
      date: 'March 14, 2026'
    },
    {
      time: '11:00 AM',
      title: 'Hacking Ends',
      description: 'Submit your projects',
      icon: Clock,
      date: 'March 14, 2026'
    },
    {
      time: '12:00 PM',
      title: 'Project Presentations',
      description: 'Showcase your innovations',
      icon: MapPin,
      date: 'March 14, 2026'
    },
    {
      time: '03:00 PM',
      title: 'Judging & Awards',
      description: 'Winners announcement and prize distribution',
      icon: Calendar,
      date: 'March 14, 2026'
    }
  ];

  return (
    <section id="schedule" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-900/5 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Event Schedule" 
          subtitle="24 hours of innovation, learning, and fun"
        />

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-green-500 to-orange-500"></div>

          <div className="space-y-12">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-orange-500 to-green-500 border-4 border-black z-10"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-green-500/20">
                          <Icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-orange-400 font-bold text-lg">{item.time}</span>
                            <span className="text-gray-500 text-sm">• {item.date}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
