import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountdownSection from './components/CountdownSection';
import About from './components/About';
import Stats from './components/Stats';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsors';
import ThemesRules from './components/ThemesRules';
import FAQ from './components/FAQ';
import Coordinators from './components/Coordinators';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import IntroScreen from './components/IntroScreen';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroScreen onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticleBackground />
      <ScrollProgress />
      <BackToTop />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <CountdownSection />
        <About />
        <Stats />
        <Prizes />
        <Timeline />
        <Sponsors />
        <ThemesRules />
        <FAQ />
        <Coordinators />
        <Footer />
      </div>
    </div>
  );
}

export default App;
