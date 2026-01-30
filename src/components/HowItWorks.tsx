import { FileCheck, Frame, Check, MessageCircle } from 'lucide-react';

interface HowItWorksProps {
  language: 'es' | 'en';
}

export function HowItWorks({ language }: HowItWorksProps) {
  const content = {
    es: {
      title: '¿Cómo funciona?',
      subtitle: 'Proceso simple y rápido para que obtengas tus lentes en tiempo récord',
      steps: [
        {
          icon: FileCheck,
          title: 'Trae tu receta',
          description: 'Llega con tu prescripción vigente de un oftalmólogo u optometrista.'
        },
        {
          icon: Frame,
          title: 'Elige marco y cristal',
          description: 'Selecciona el marco que mejor se ajuste a tu estilo y el tipo de cristal que necesitas.'
        },
        {
          icon: Check,
          title: 'Medimos, ajustamos y listo',
          description: 'Verificamos las medidas, ajustamos tu marco y sales con tus lentes perfectos.'
        }
      ],
      cta: 'Confirmar disponibilidad por WhatsApp'
    },
    en: {
      title: 'How it works?',
      subtitle: 'Simple and fast process to get your eyewear in record time',
      steps: [
        {
          icon: FileCheck,
          title: 'Bring your prescription',
          description: 'Arrive with your current prescription from an ophthalmologist or optometrist.'
        },
        {
          icon: Frame,
          title: 'Choose frame and lens',
          description: 'Select the frame that best fits your style and the type of lens you need.'
        },
        {
          icon: Check,
          title: "We measure, adjust and you're ready",
          description: 'We verify measurements, adjust your frame and you leave with your perfect eyewear.'
        }
      ],
      cta: 'Confirm availability on WhatsApp'
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-[var(--gray-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--charcoal)] mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-[var(--gray-text)]">
            {t.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line (desktop) */}
                {index < t.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-[var(--gray-border)]"></div>
                )}
                
                <div className="relative text-center space-y-4">
                  {/* Number Badge */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 bg-white rounded-full border-2 border-[var(--gold)] flex items-center justify-center shadow-md">
                        <Icon className="w-10 h-10 text-[var(--gold)]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--charcoal)] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--gray-text)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/56966333039"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--charcoal)] text-[var(--charcoal)] rounded-lg hover:bg-[var(--charcoal)] hover:text-white transition-all font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
