import { MapPin, Navigation } from 'lucide-react';

interface LocationProps {
  language: 'es' | 'en';
}

export function Location({ language }: LocationProps) {
  const content = {
    es: {
      title: 'Ubicación',
      subtitle: 'En pleno corazón de Santiago, cerca de tu oficina',
      address: 'Teatinos 465, 8320000 Santiago, Región Metropolitana',
      microcopy: 'Ideal si trabajas cerca de La Moneda o vienes al centro por trámites.',
      ctaButton: 'Cómo llegar'
    },
    en: {
      title: 'Location',
      subtitle: 'In the heart of Santiago, close to your office',
      address: 'Teatinos 465, 8320000 Santiago, Metropolitan Region',
      microcopy: 'Perfect if you work near La Moneda or are visiting downtown.',
      ctaButton: 'Get directions'
    }
  };

  const t = content[language];

  return (
    <section id="ubicacion" className="py-20 bg-white">
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

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Address Info */}
          <div className="space-y-6">
            <div className="p-6 bg-[var(--gray-light)] rounded-xl border border-[var(--gray-border)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2">
                    Óptica Teatinos
                  </h3>
                  <p className="text-[var(--gray-text)] mb-4">
                    {t.address}
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Teatinos+465,+Santiago,+Chile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--charcoal)] text-white rounded-lg hover:bg-black transition-colors font-medium"
                  >
                    <Navigation className="w-4 h-4" />
                    {t.ctaButton}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-900">
                {t.microcopy}
              </p>
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg border border-[var(--gray-border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3245!2d-70.6536!3d-33.4423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzMyLjMiUyA3MMKwMzknMTMuMCJX!5e0!3m2!1sen!2scl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Óptica Teatinos"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
