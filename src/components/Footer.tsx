import { MapPin, Phone } from 'lucide-react';

interface FooterProps {
  language: 'es' | 'en';
}

export function Footer({ language }: FooterProps) {
  const content = {
    es: {
      services: 'Servicios',
      location: 'Ubicación',
      hours: 'Horarios',
      contact: 'Contacto',
      address: 'Teatinos 465, Santiago',
      rights: 'Todos los derechos reservados.',
      madeBy: 'Hecho por'
    },
    en: {
      services: 'Services',
      location: 'Location',
      hours: 'Hours',
      contact: 'Contact',
      address: 'Teatinos 465, Santiago',
      rights: 'All rights reserved.',
      madeBy: 'Made by'
    }
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[var(--charcoal)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-xs tracking-wider text-gray-400 uppercase">Óptica</span>
              <span className="text-2xl font-semibold tracking-tight text-[var(--gold)]">Teatinos</span>
            </div>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[var(--gold)] flex-shrink-0" />
                <a href="tel:+56966333039" className="hover:text-[var(--gold)] transition-colors">
                  +56 9 6633 3039
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('servicios')} className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                  {t.services}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ubicacion')} className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                  {t.location}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('horarios')} className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                  {t.hours}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-[var(--gold)] transition-colors">
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Additional space for future social media links */}
          <div>
            {/* Reserved for social media links if needed */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Óptica Teatinos. {t.rights}
          </p>
          <p className="text-center text-gray-400 text-sm mt-2">
            {t.madeBy} <a href="https://tuhuelladigital.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors font-medium">TuHuellaDigital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}