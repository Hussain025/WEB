import { Phone, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Card from './Card';

export default function Coordinators() {
  const facultyCoordinators = [
    {
      name: 'Dr. S. Kalaivany',
      role: 'HOD - Convenor',
      phone: '+91 94869 47802',
      email: 'kalaivanyit@mailamengg.com',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Loganathan K',
      role: 'AP - Faculty Coordinator',
      phone: '+91 99942 25662',
      email: 'Hackindia.mec@gmail.com',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const studentCoordinators = [
    {
      name: 'Jeevagan S',
      role: 'Student Coordinator',
      phone: '+91 63820 04793',
      email: 'Jeevagan-dev@mailamengg.com',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Ranjith L',
      role: 'Student Coordinator',
      phone: '+91 93458 08145',
      email: 'Hackindia.mec@gmail.com',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Mowleeswaran G',
      role: 'Student Coordinator',
      phone: '+91 94867 47184',
      email: 'Hackindia.mec@gmail.com',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Kathiravan S',
      role: 'Student Coordinator',
      phone: '+91 99940 37135',
      email: 'Hackindia.mec@gmail.com',
      social: {
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const CoordinatorCard = ({ coordinator }: { coordinator: typeof facultyCoordinators[0] | typeof studentCoordinators[0] }) => (
    <Card>
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center mb-4 text-white text-3xl font-bold">
          {coordinator.name.split(' ').map(n => n[0]).join('')}
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{coordinator.name}</h3>
        <p className="text-orange-400 text-sm mb-4">{coordinator.role}</p>

        <div className="space-y-2 w-full mb-4">
          <a href={`tel:${coordinator.phone}`} className="flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <Phone size={16} />
            <span className="text-sm">{coordinator.phone}</span>
          </a>
          <a href={`mailto:${coordinator.email}`} className="flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-colors break-all">
            <Mail size={16} />
            <span className="text-sm">{coordinator.email}</span>
          </a>
        </div>

        <div className="flex space-x-3">
          {coordinator.social.linkedin && (
            <a href={coordinator.social.linkedin} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors">
              <Linkedin size={18} className="text-white" />
            </a>
          )}
          {'twitter' in coordinator.social && coordinator.social.twitter && (
            <a href={coordinator.social.twitter} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors">
              <Twitter size={18} className="text-white" />
            </a>
          )}
          {'github' in coordinator.social && coordinator.social.github && (
            <a href={coordinator.social.github} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 transition-colors">
              <Github size={18} className="text-white" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <section id="coordinators" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet the Coordinators"
          subtitle="Your guides throughout the hackathon journey"
        />

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            Faculty Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyCoordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} coordinator={coordinator} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            Student Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentCoordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} coordinator={coordinator} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
