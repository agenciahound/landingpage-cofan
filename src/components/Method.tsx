import { BarChart3, Users, Globe, Layers, Star } from 'lucide-react';

const sources = [
  { icon: BarChart3, title: 'Mercado de Capitais', desc: 'CRA, CPR Financeira, Fundos especializados em agronegocio' },
  { icon: Users, title: 'Investidores Institucionais', desc: 'Nacionais e internacionais com apetite para o setor' },
  { icon: Layers, title: 'Estruturas Hibridas', desc: 'Combinacao entre instrumentos bancarios e de mercado' },
  { icon: Globe, title: 'Credito por Projeto', desc: 'Infraestrutura, energia, expansao — vinculados ao ativo' },
];

const differentials = [
  '+15 anos de experiência em instituições financeiras',
  'Estruturação 100% personalizada para cada operação',
  'Atuação estratégica, não apenas operacional',
  'Conhecimento profundo do agro + mercado financeiro',
];

export default function Method() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4 font-inter">
            Nosso Método
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cofan-navy mb-5 font-playfair">
            Metodo COFAN de Estruturação de Crédito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Enquanto o modelo tradicional oferece linhas prontas, nós desenhamos
            a operação ideal para o seu crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl">
            <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5 font-inter">
              Modelo Tradicional
            </div>
            <ul className="space-y-3">
              {[
                'Limites de crédito padronizados',
                'Burocracia do Plano Safra',
                'Depende de aprovação bancária',
                'Altas taxas de inadimplência',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-inter">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs flex-shrink-0">&#x2715;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-cofan-navy border border-cofan-navy-light rounded-2xl">
            <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-5 font-inter">
              COFAN
            </div>
            <ul className="space-y-3">
              {[
                'Operações sob medida para o seu ciclo',
                'Acesso a múltiplas fontes de capital',
                'Atuação estratégica de longo prazo',
                'Alongamento de dívida em até 10 anos',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80 font-inter">
                  <span className="w-5 h-5 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center text-xs flex-shrink-0">&#x2713;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-xl font-bold text-cofan-navy mb-8 font-playfair">
            Fontes de capital que acessamos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sources.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 bg-cofan-light border border-blue-100 rounded-xl hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cofan-navy flex items-center justify-center mb-4">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <div className="font-semibold text-cofan-navy mb-2 font-inter text-sm">{title}</div>
                <div className="text-gray-500 text-xs font-inter leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cofan-navy to-cofan-navy-light rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-bold text-white mb-8 text-center font-playfair">
            Nossos Diferenciais
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((d) => (
              <div key={d} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                <Star size={18} className="text-amber-400 flex-shrink-0" />
                <span className="text-white/90 text-sm font-inter">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
