import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function Sponsors() {
  const sponsorTiers = [
    {
      tier: 'Title Sponsor',
      sponsors: [
        { name: 'Sponsor Logo 1', width: 'w-64' }
      ]
    },
    {
      tier: 'Gold Sponsors',
      sponsors: [
        { name: 'Sponsor Logo 2', width: 'w-48' },
        { name: 'Sponsor Logo 3', width: 'w-48' }
      ]
    },
    {
      tier: 'Silver Sponsors',
      sponsors: [
        { name: 'Sponsor Logo 4', width: 'w-40' },
        { name: 'Sponsor Logo 5', width: 'w-40' },
        { name: 'Sponsor Logo 6', width: 'w-40' }
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Sponsors"
          subtitle="Powered by industry leaders who believe in innovation"
        />

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex}>
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                {tier.tier}
              </h3>

              <div className="flex flex-wrap justify-center items-center gap-8">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${sponsor.width} h-32 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 flex items-center justify-center hover:border-orange-500/50 transition-all duration-300`}
                  >
                    <span className="text-gray-500 font-semibold">{sponsor.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Interested in Sponsoring?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Partner with us to empower the next generation of innovators and get your brand in front of talented developers.
            </p>
            <Button variant="primary">Become a Sponsor</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
