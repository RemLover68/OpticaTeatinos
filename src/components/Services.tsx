import { Eye, Glasses, RefreshCw, Ruler, Settings, Sun, AlertCircle } from 'lucide-react';

interface ServicesProps {
  language: 'es' | 'en';
}

export function Services({ language }: ServicesProps) {
  const content = {
    es: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones completas para tu visión, con atención profesional y rápida',
      disclaimer: 'No realizamos examen visual. Atención con receta.',
      services: [
        {
          icon: Eye,
          title: 'Lentes ópticos con receta',
          description: 'Monofocales y progresivos con tecnología de última generación para una visión nítida y cómoda.'
        },
        {
          icon: Glasses,
          title: 'Marcos y asesoría de ajuste',
          description: 'Selección de monturas premium con asesoría personalizada para un fit perfecto, cómodo y estético.'
        },
        {
          icon: RefreshCw,
          title: 'Cambio de cristales',
          description: 'Mantén tu marco favorito y renueva tu visión con cristales nuevos adaptados a tu receta actual.'
        },
        {
          icon: Ruler,
          title: 'Medición de lentes (lensómetro)',
          description: 'Medición precisa del aumento de tus lentes actuales para replicar o auditar tu prescripción.'
        },
        {
          icon: Settings,
          title: 'Ajustes y mantención',
          description: 'Servicio técnico especializado: ajuste de tornillos, plaquetas, nivelación y calibración de marcos.'
        },
        {
          icon: Sun,
          title: 'Lentes de sol y filtros',
          description: 'Opciones con protección UV completa, polarizados y filtros especializados para diferentes actividades.'
        }
      ]
    },
    en: {
      title: 'Our Services',
      subtitle: 'Complete vision solutions with professional and fast service',
      disclaimer: "We don't perform eye exams. Prescription required.",
      services: [
        {
          icon: Eye,
          title: 'Prescription optical lenses',
          description: 'Single vision and progressive lenses with cutting-edge technology for sharp, comfortable vision.'
        },
        {
          icon: Glasses,
          title: 'Frames & fitting consultation',
          description: 'Premium frame selection with personalized advice for a perfect, comfortable, and aesthetic fit.'
        },
        {
          icon: RefreshCw,
          title: 'Lens replacement',
          description: 'Keep your favorite frame and renew your vision with new lenses adapted to your current prescription.'
        },
        {
          icon: Ruler,
          title: 'Lens measurement (lensometer)',
          description: 'Precise measurement of your current lenses power to replicate or audit your prescription.'
        },
        {
          icon: Settings,
          title: 'Adjustments & maintenance',
          description: 'Specialized technical service: screw adjustment, nose pads, frame leveling and calibration.'
        },
        {
          icon: Sun,
          title: 'Sunglasses & filters',
          description: 'Options with full UV protection, polarized and specialized filters for different activities.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="servicios" className="py-20 bg-white">
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

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white border border-[var(--gray-border)] rounded-xl hover:shadow-lg hover:border-[var(--gold)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--gold)]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--gray-text)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-900 font-medium">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
