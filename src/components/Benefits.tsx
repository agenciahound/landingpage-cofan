import { TrendingUp, Target, Clock, Shield, BarChart2, ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Capital Estruturado e Escalável',
    desc: 'Acesso à volumes compatíveis com o tamanho real da sua operação, sem limitações artificiais.',
  },
  {
    icon: Target,
    title: 'Condições Mais Competitivas',
    desc: 'Taxas e prazos superiores as linhas tradicionais, estruturados para o seu ciclo produtivo.',
  },
  {
    icon: Clock,
    title: 'Alinhamento com o Agronegócio',
    desc: 'Operações desenhadas com o timing do agro — safra, expansão, energia — não o do banco.',
  },
  {
    icon: Shield,
    title: 'Menos Dependência Bancária',
    desc: 'Diversificação das fontes de capital para reduzir vulnerabilidade ao crédito tradicional.',
  },
  {
    icon: BarChart2,
    title: 'Estratégia Financeira de Longo Prazo',
    desc: 'Visão além do imediato: estruturamos crescimento sustentável para o seu negócio.',
  },
  {
    icon: ArrowUpRight,
    title: 'De Busca de Crédito a Estruturação de Crescimento',
    desc: 'Voce deixa de apenas buscar crédito... e passa a estruturar crescimento.',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-cofan-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4 font-inter">
            Benefícios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cofan-navy mb-5 font-playfair">
            O que voce ganha
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-inter">
            Resultados concretos para operações que precisam de capital além do padrão.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-amber-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cofan-navy group-hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center mb-5">
                <Icon size={22} className="text-amber-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-cofan-navy mb-2 font-inter leading-snug">{title}</h3>
              <p className="text-gray-600 text-sm font-inter leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
