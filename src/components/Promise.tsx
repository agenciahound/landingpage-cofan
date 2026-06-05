import { CheckCircle } from 'lucide-react';

const items = [
  'Seu crédito já tenha sido limitado por bancos ou pelo Plano Safra',
  'Sua operação seja complexa ou fora dos padrões tradicionais',
  'Você precise de prazos, carência ou volumes fora do convencional',
  'Seu projeto envolva expansão, infraestrutura ou energia',
  'Sua empresa tenha estrutura societária sofisticada',
];

export default function Promise() {
  return (
    <section className="py-24 bg-cofan-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4 font-inter">
            Nossa Promessa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cofan-navy max-w-2xl mx-auto font-playfair">
            Isso é possível mesmo que:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle size={18} className="text-amber-600" />
              </div>
              <p className="text-gray-700 font-inter text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
