import { CheckCircle, XCircle } from 'lucide-react';

const forWho = [
  'Produtores rurais com área acima de 2.000 hectares',
  'Propriedades próprias com ativos consolidados',
  'Empresas do agronegócio em expansão',
  'Grupos que demandam capital estruturado para infraestrutura, energia ou aquisição de terras',
  'Gestores financeiros do agro buscando otimização de crédito',
];

const notForWho = [
  'Pequenos produtores fora do perfil de escala',
  'Operações sem estrutura mínima ou organização financeira',
  'Negócios sem ativos consolidados',
  'Quem busca crédito imediato sem planejamento',
];

export default function TargetAudience() {
  return (
    <section id="publico" className="py-24 bg-cofan-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4 font-inter">
            Qualificação
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cofan-navy font-playfair">
            Para quem é a COFAN
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle size={18} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-cofan-navy font-inter">Para quem é</h3>
            </div>
            <ul className="space-y-4">
              {forWho.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-inter leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle size={18} className="text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-cofan-navy font-inter">Para quem não é</h3>
            </div>
            <ul className="space-y-4">
              {notForWho.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-inter leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
