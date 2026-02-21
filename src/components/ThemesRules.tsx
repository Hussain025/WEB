import { Cpu, Brain, Sparkles, CheckCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Card from './Card';

export default function ThemesRules() {
  const themes = [
    {
      icon: Cpu,
      title: 'Web3',
      description: 'Build decentralized applications, smart contracts, and blockchain solutions',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Create AI-powered applications, machine learning models, and intelligent systems',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Sparkles,
      title: 'Emerging Technologies',
      description: 'Explore IoT, AR/VR, quantum computing, and other cutting-edge tech',
      color: 'from-orange-500 to-green-500'
    }
  ];

  const rules = [
    'All projects must be original work created during the hackathon',
    'Teams can have 1-4 members maximum',
    'Build time is limited to 24 hours from start to finish',
    'Projects will be judged on innovation, technical quality, and real-world impact',
    'All code must be submitted via GitHub before the deadline',
    'Teams must present their projects to the judging panel',
    'Use of any programming language and framework is allowed',
    'Pre-existing libraries and APIs are permitted, but core functionality must be new'
  ];

  return (
    <section id="themes" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Themes"
          subtitle="Choose your track and build something amazing"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {themes.map((theme, index) => (
            <Card key={index}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.color} flex items-center justify-center mb-4 shadow-lg`}>
                <theme.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{theme.title}</h3>
              <p className="text-gray-400">{theme.description}</p>
            </Card>
          ))}
        </div>

        <SectionTitle
          title="Rules & Guidelines"
          subtitle="Follow these guidelines to ensure fair play and maximum fun"
        />

        <Card className="max-w-4xl mx-auto" hover={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-300">{rule}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mt-8 max-w-4xl mx-auto bg-gradient-to-r from-orange-500/10 to-green-500/10" hover={false}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Judging Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  Innovation
                </div>
                <p className="text-gray-400 text-sm">Uniqueness and creativity of the solution</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-2">
                  Impact
                </div>
                <p className="text-gray-400 text-sm">Real-world applicability and value</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  Technical Quality
                </div>
                <p className="text-gray-400 text-sm">Code quality and implementation</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
