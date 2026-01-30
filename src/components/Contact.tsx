import { Phone } from 'lucide-react';

interface ContactProps {
  language: 'es' | 'en';
}

export function Contact({ language }: ContactProps) {
  const content = {
    es: {
      title: 'Contacto',
      subtitle: 'Estamos aquí para ayudarte',
      phoneLabel: 'Teléfono',
      description: 'Para cotizaciones rápidas, llama y cuéntanos tu receta y qué necesitas.',
      ctaButton: 'Llamar ahora'
    },
    en: {
      title: 'Contact',
      subtitle: "We're here to help",
      phoneLabel: 'Phone',
      description: 'For quick quotes, call us and tell us your prescription and what you need.',
      ctaButton: 'Call now'
    }
  };

  const t = content[language];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--charcoal)] mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-[var(--gray-text)]">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--charcoal)] to-black rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">
                  {t.phoneLabel}
                </p>
                <a
                  href="tel:+56966333039"
                  className="text-3xl sm:text-4xl font-semibold hover:text-[var(--gold)] transition-colors"
                >
                  +56 9 6633 3039
                </a>
              </div>

              <p className="text-gray-300 max-w-md mx-auto">
                {t.description}
              </p>

              <a
                href="tel:+56966333039"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-white rounded-lg hover:bg-[var(--gold-dark)] transition-all shadow-lg hover:shadow-xl font-medium text-lg"
              >
                <Phone className="w-5 h-5" />
                {t.ctaButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
