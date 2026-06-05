import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const items = [
  {
    q: 'Meu banco já negou crédito. Ainda faz sentido?',
    a: 'Sim. Atuamos com estruturas além do modelo bancário tradicional, acessando mercado de capitais, investidores institucionais e estruturas híbridas que não dependem de aprovação bancária.',
  },
  {
    q: 'Preciso entender de mercado financeiro?',
    a: 'Não. A COFAN conduz todo o processo técnico — da estruturação a captação. Voce precisa apenas conhecer profundamente o seu negócio.',
  },
  {
    q: 'Qual o prazo para captação?',
    a: 'Depende da complexidade da operação. O processo e estruturado para atender o timing do negócio — safra, expansão, energia — nao uma burocracia bancária.',
  },
  {
    q: 'Atende projetos de energia e infraestrutura?',
    a: 'Sim. São, inclusive, algumas das principais demandas que atendemos, com estruturas específicas de crédito vinculado a projetos.',
  },
  {
    q: 'Existe custo inicial?',
    a: 'Não. A análise inicial é realizada sem custo e sem compromisso. Só avançamos quando identificamos uma oportunidade real para o seu negócio.',
  },
  {
    q: 'Atende apenas produtores rurais?',
    a: 'Não. Atendemos também empresas do agronegócio, grupos em expansão e gestores financeiros do setor que buscam otimização de crédito.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-cofan-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4 font-inter">
            Perguntas Frequentes
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-cofan-navy leading-tight font-playfair">
            Tire suas dúvidas
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {items.map(({ q, a }, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-cofan-navy text-base font-inter leading-snug">
                  {q}
                </span>

                <ChevronDown
                  size={20}
                  className={`text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a
            href="#formulario"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-inter"
          >
            Solicitar análise gratuita do meu projeto
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
