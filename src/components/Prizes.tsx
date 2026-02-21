import { Trophy, Coins, Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Card from './Card';

export default function Prizes() {
  const prizes = [
    {
      icon: Trophy,
      title: 'Cash Prize',
      amount: '₹25,000',
      description: 'Win from the total cash prize pool distributed among top teams',
      gradient: 'from-yellow-500 to-orange-500',
      shadow: 'shadow-yellow-500/50'
    },
    {
      icon: Coins,
      title: 'Sharp Tokens',
      amount: '40,000',
      description: 'Earn Sharp Tokens that can be used across partner platforms',
      gradient: 'from-orange-500 to-green-500',
      shadow: 'shadow-orange-500/50'
    },
    {
      icon: Briefcase,
      title: 'Internships',
      amount: 'Multiple',
      description: 'Exciting internship opportunities with leading tech companies',
      gradient: 'from-green-500 to-teal-500',
      shadow: 'shadow-green-500/50'
    }
  ];

  return (
    <section id="prizes" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Prize Pool"
          subtitle="Compete for amazing rewards and opportunities to kickstart your career"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <Card key={index} className="relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${prize.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prize.gradient} flex items-center justify-center mb-4 ${prize.shadow} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <prize.icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{prize.title}</h3>

                <div className={`text-4xl font-bold mb-4 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                  {prize.amount}
                </div>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{prize.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-orange-500/10 to-green-500/10" hover={false}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Total Prize Pool Value</h3>
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent mb-4">
              ₹25,000 + 40K Tokens + Internships
            </div>
            <p className="text-gray-300">
              All winners will receive certificates of achievement and recognition. Top performers may also receive
              special mentions from our sponsors and industry partners.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
