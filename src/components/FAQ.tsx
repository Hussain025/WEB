import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who can participate in HackIndia 2026?',
      answer: 'HackIndia 2026 is open to all students, developers, and tech enthusiasts. Whether you\'re a beginner or an experienced developer, you\'re welcome to join! Teams can have 1-4 members.'
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, chargers, any hardware you plan to use, a valid ID for registration, and your enthusiasm! We\'ll provide food, drinks, and a great environment for hacking.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No! HackIndia 2026 is completely free to attend. We provide meals, snacks, swag, and prizes at no cost to participants.'
    },
    {
      question: 'What are the technology tracks?',
      answer: 'We have two main tracks: Web3 (blockchain, DeFi, NFTs, DAOs) and AI (machine learning, computer vision, NLP, generative AI). You can choose the track that interests you most.'
    },
    {
      question: 'Do I need a team to participate?',
      answer: 'No, you can participate solo or form a team of up to 4 members. We\'ll also have team formation sessions at the beginning if you\'re looking for teammates.'
    },
    {
      question: 'What prizes can we win?',
      answer: 'We have exciting prizes worth over ₹5 lakhs including cash prizes, tech gadgets, cloud credits, and internship opportunities. Check the Prizes section for details!'
    },
    {
      question: 'Will there be mentors available?',
      answer: 'Yes! We have industry experts and experienced developers who will be available throughout the hackathon to help with technical challenges, provide guidance, and answer questions.'
    },
    {
      question: 'Can I work on an existing project?',
      answer: 'No, all projects must be started from scratch during the hackathon. However, you can use existing libraries, frameworks, and APIs.'
    },
    {
      question: 'What if I\'m a beginner?',
      answer: 'Perfect! We welcome beginners and will have workshops, mentors, and resources to help you learn and build. Hackathons are great learning experiences regardless of your skill level.'
    },
    {
      question: 'How will projects be judged?',
      answer: 'Projects will be evaluated based on innovation, technical complexity, design, functionality, and presentation. Our panel of judges includes industry professionals and tech leaders.'
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/5 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Got questions? We've got answers!"
        />

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-orange-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
