import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Location } from './components/Location';
import { HoursAndPayment } from './components/HoursAndPayment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <Services language={language} />
        <HowItWorks language={language} />
        <Location language={language} />
        <HoursAndPayment language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
