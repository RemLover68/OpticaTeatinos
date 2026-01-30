import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  language: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    es: {
      services: 'Servicios',
      location: 'Ubicación',
      hours: 'Horarios',
      contact: 'Contacto',
      cta: 'Contáctanos'
    },
    en: {
      services: 'Services',
      location: 'Location',
      hours: 'Hours',
      contact: 'Contact',
      cta: 'Contact Us'
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
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[var(--gray-border)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-sm tracking-wider text-[var(--gray-text)] uppercase">Óptica</span>
              <span className="text-2xl font-semibold tracking-tight text-[var(--gold)]">Teatinos</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('servicios')} className="text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors">
              {t.services}
            </button>
            <button onClick={() => scrollToSection('ubicacion')} className="text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors">
              {t.location}
            </button>
            <button onClick={() => scrollToSection('horarios')} className="text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors">
              {t.hours}
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors">
              {t.contact}
            </button>
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center border border-[var(--gray-border)] rounded-lg overflow-hidden">
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  language === 'es'
                    ? 'bg-[var(--charcoal)] text-white'
                    : 'bg-white text-[var(--gray-text)] hover:bg-gray-50'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-[var(--charcoal)] text-white'
                    : 'bg-white text-[var(--gray-text)] hover:bg-gray-50'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="tel:+56966333039"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--gold)] text-white rounded-lg hover:bg-[var(--gold-dark)] transition-all shadow-sm hover:shadow"
            >
              <Phone className="w-4 h-4" />
              {t.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--charcoal)]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-[var(--gray-border)]">
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-4 py-2 text-[var(--charcoal)] hover:bg-gray-50 rounded">
              {t.services}
            </button>
            <button onClick={() => scrollToSection('ubicacion')} className="block w-full text-left px-4 py-2 text-[var(--charcoal)] hover:bg-gray-50 rounded">
              {t.location}
            </button>
            <button onClick={() => scrollToSection('horarios')} className="block w-full text-left px-4 py-2 text-[var(--charcoal)] hover:bg-gray-50 rounded">
              {t.hours}
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-4 py-2 text-[var(--charcoal)] hover:bg-gray-50 rounded">
              {t.contact}
            </button>

            <div className="flex items-center justify-between px-4 pt-3 border-t border-[var(--gray-border)]">
              <div className="flex items-center border border-[var(--gray-border)] rounded-lg overflow-hidden">
                <button
                  onClick={() => onLanguageChange('es')}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                    language === 'es'
                      ? 'bg-[var(--charcoal)] text-white'
                      : 'bg-white text-[var(--gray-text)]'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-[var(--charcoal)] text-white'
                      : 'bg-white text-[var(--gray-text)]'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <div className="px-4">
              <a
                href="tel:+56966333039"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[var(--gold)] text-white rounded-lg hover:bg-[var(--gold-dark)] transition-all"
              >
                <Phone className="w-4 h-4" />
                {t.cta}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
