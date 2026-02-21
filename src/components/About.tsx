import { Users, IndianRupee, Target, Zap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Card from './Card';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Build Innovation',
      description: 'Create cutting-edge solutions in Web3, AI, and emerging technologies over 24 hours of non-stop coding.'
    },
    {
      icon: IndianRupee,
      title: 'Entry Fee',
      description: '₹250 per person. Affordable pricing to make innovation accessible to all aspiring developers.'
    },
    {
      icon: Users,
      title: 'Team Formation',
      description: 'Form teams of 1-4 members. Solo developers or collaborate with friends to bring ideas to life.'
    },
    {
      icon: Zap,
      title: '24-Hour Sprint',
      description: 'Experience the thrill of rapid development. Build, test, and present your project in just one day.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About HackIndia 2026"
          subtitle="Join India's premier Web3 and AI hackathon, where innovation meets opportunity. Compete with the brightest minds, solve real-world challenges, and win amazing prizes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center mb-4">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 max-w-4xl mx-auto" hover={false}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">What is HackIndia 2026?</h3>
            <p className="text-gray-300 leading-relaxed">
              HackIndia 2026 is a premier 24-hour hackathon organized by the Department of Information Technology
              at Mailam Engineering College. This event brings together talented developers, designers, and innovators
              to tackle challenges in Web3, Artificial Intelligence, and emerging technologies. With a prize pool of
              ₹25,000 in cash, 40,000 Sharp Tokens, and exciting internship opportunities, this is your chance to
              showcase your skills, network with industry leaders, and transform your innovative ideas into reality.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
