import { Phone, ArrowDown, FileText, Ruler, MapPin } from 'lucide-react';

interface HeroProps {
  language: 'es' | 'en';
}

export function Hero({ language }: HeroProps) {
  const content = {
    es: {
      title: 'Lentes listos para tu ritmo en el centro de Santiago',
      subtitle: 'Atención rápida y precisa para profesionales: trabajamos con receta, medimos y ajustamos tus lentes para que salgas seguro.',
      ctaPrimary: 'Llamar ahora',
      ctaSecondary: 'Ver servicios',
      chip1: 'Atención con receta',
      chip2: 'Ajuste y medición de lentes',
      chip3: 'A pasos de La Moneda'
    },
    en: {
      title: 'Eyewear that keeps up with your day in downtown Santiago',
      subtitle: 'Fast, accurate service for professionals: prescription-based attention with lens measurement and fitting.',
      ctaPrimary: 'Call now',
      ctaSecondary: 'See services',
      chip1: 'Prescription-based service',
      chip2: 'Lens fitting & measurement',
      chip3: 'Steps from La Moneda'
    }
  };

  const t = content[language];

  const scrollToServices = () => {
    const element = document.getElementById('servicios');
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
    <section className="relative pt-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[var(--charcoal)]">
                {t.title}
              </h1>
              <p className="text-lg sm:text-xl text-[var(--gray-text)] max-w-xl">
                {t.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+56966333039"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--gold)] text-white rounded-lg hover:bg-[var(--gold-dark)] transition-all shadow-lg hover:shadow-xl text-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                {t.ctaPrimary}
              </a>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--charcoal)] text-[var(--charcoal)] rounded-lg hover:bg-[var(--charcoal)] hover:text-white transition-all text-lg font-medium"
              >
                {t.ctaSecondary}
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[var(--gray-border)] rounded-lg shadow-sm">
                <FileText className="w-5 h-5 text-[var(--gold)]" />
                <span className="text-sm font-medium text-[var(--charcoal)]">{t.chip1}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[var(--gray-border)] rounded-lg shadow-sm">
                <Ruler className="w-5 h-5 text-[var(--gold)]" />
                <span className="text-sm font-medium text-[var(--charcoal)]">{t.chip2}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[var(--gray-border)] rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-[var(--gold)]" />
                <span className="text-sm font-medium text-[var(--charcoal)]">{t.chip3}</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1651199922386-60da638de82b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvcHRpY2FsJTIwZXlld2VhciUyMGZyYW1lcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzY5NzkyMzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Premium optical frames display"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--gold)]/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
