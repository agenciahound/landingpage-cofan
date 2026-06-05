import { Search, Settings, FileText, Link, Zap } from 'lucide-react';

const steps = [
  {
    icon: Search,
    num: '01',
    title: 'Diagnóstico Estratégico',
    subtitle: 'Sem custo',
    desc: 'Análise completa da operação, estrutura financeira e objetivo de captação',
  },
  {
    icon: Settings,
    num: '02',
    title: 'Estruturação da Operação',
    subtitle: '',
    desc: 'Definição do modelo ideal de crédito: mercado de capitais, híbrido ou bancário estruturado',
  },
  {
    icon: FileText,
    num: '03',
    title: 'Preparação e Modelagem',
    subtitle: '',
    desc: 'Organização de documentação, tese de investimento e estrutura financeira',
  },
  {
    icon: Link,
    num: '04',
    title: 'Conexão com o Mercado',
    subtitle: '',
    desc: 'Apresentação do projeto a investidores e instituições qualificadas',
  },
  {
    icon: Zap,
    num: '05',
    title: 'Captação e Execução',
    subtitle: '',
    desc: 'Acompanhamento até a liberação do recurso e fechamento da operação',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4 font-inter">
            Processo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cofan-navy mb-5 font-playfair">
            Como funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-inter">
            Um processo estruturado e transparente do diagnóstico a captação.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-500 via-cofan-navy to-amber-500 hidden md:block" />

          <div className="space-y-6">
            {steps.map(({ icon: Icon, num, title, subtitle, desc }) => (
              <div
                key={num}
                className="relative flex items-start gap-6 p-6 bg-cofan-light rounded-2xl border border-blue-50 hover:border-amber-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-cofan-navy group-hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center shadow-md">
                    <Icon size={24} className="text-amber-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="pt-1 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-amber-600 font-inter">{num}</span>
                    {subtitle && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full font-inter">
                        {subtitle}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-cofan-navy mb-1.5 font-inter">{title}</h3>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
