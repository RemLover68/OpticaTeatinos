import { Clock, CreditCard, Banknote, Smartphone } from 'lucide-react';

interface HoursAndPaymentProps {
  language: 'es' | 'en';
}

export function HoursAndPayment({ language }: HoursAndPaymentProps) {
  const content = {
    es: {
      title: 'Horarios y Medios de Pago',
      hoursTitle: 'Horarios de atención',
      paymentTitle: 'Medios de pago',
      hoursNote: 'Horarios sujetos a confirmación. Por favor llámanos para verificar.',
      paymentNote: 'Medios de pago disponibles (confirmar al contactar)',
      schedule: [
        { day: 'Lunes - Viernes', hours: 'Por confirmar' },
        { day: 'Sábado', hours: 'Por confirmar' },
        { day: 'Domingo y Festivos', hours: 'Por confirmar' }
      ],
      payments: [
        { icon: Banknote, label: 'Efectivo', note: '(confirmar)' },
        { icon: CreditCard, label: 'Tarjetas débito/crédito', note: '(confirmar)' },
        { icon: Smartphone, label: 'Transferencia', note: '(confirmar)' }
      ]
    },
    en: {
      title: 'Hours & Payment Methods',
      hoursTitle: 'Business hours',
      paymentTitle: 'Payment methods',
      hoursNote: 'Hours subject to confirmation. Please call us to verify.',
      paymentNote: 'Available payment methods (confirm when contacting)',
      schedule: [
        { day: 'Monday - Friday', hours: 'To confirm' },
        { day: 'Saturday', hours: 'To confirm' },
        { day: 'Sunday & Holidays', hours: 'To confirm' }
      ],
      payments: [
        { icon: Banknote, label: 'Cash', note: '(confirm)' },
        { icon: CreditCard, label: 'Debit/Credit cards', note: '(confirm)' },
        { icon: Smartphone, label: 'Transfer', note: '(confirm)' }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="horarios" className="py-20 bg-[var(--gray-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--charcoal)] mb-4">
            {t.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hours */}
          <div className="bg-white rounded-xl border border-[var(--gray-border)] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-[var(--gold)]" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--charcoal)]">
                {t.hoursTitle}
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              {t.schedule.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-[var(--gray-border)] last:border-0">
                  <span className="font-medium text-[var(--charcoal)]">{item.day}</span>
                  <span className="text-[var(--gray-text)]">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-900">
                {t.hoursNote}
              </p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-xl border border-[var(--gray-border)] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[var(--gold)]" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--charcoal)]">
                {t.paymentTitle}
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              {t.payments.map((payment, index) => {
                const Icon = payment.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-[var(--gray-light)] rounded-lg">
                    <Icon className="w-6 h-6 text-[var(--charcoal)]" />
                    <div>
                      <p className="font-medium text-[var(--charcoal)]">{payment.label}</p>
                      <p className="text-sm text-[var(--gray-text)]">{payment.note}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                {t.paymentNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
