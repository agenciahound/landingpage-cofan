import { AlertCircle, ArrowRight } from 'lucide-react';

const painPoints = [
  'O banco limita, demora e exige garantias desproporcionais',
  'Crédito condicionado a produtos que não fazem sentido para sua operação',
  'Histórico sólido, mas acesso ao capital certo continua travado',
  'Projetos de longo prazo sem financiamento adequado',
];

export default function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4 font-inter">
              O Cenario Atual
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-cofan-navy mb-6 font-playfair">
              Você já conhece o cenário.
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
              O banco limita, demora, exige garantias desproporcionais e ainda
              condiciona crédito a produtos que não fazem sentido para sua
            operação. Mesmo com histórico sólido, o acesso ao capital certo
              continua travado — principalmente quando o projeto exige visão de
              longo prazo.
            </p>
            <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
              Enquanto isso, o mercado oferece alternativas mais eficientes...
              mas poucos sabem como acessá-las.
            </p>
            <div className="p-6 bg-cofan-light border-l-4 border-amber-500 rounded-r-xl">
              <p className="text-cofan-navy font-semibold font-inter">
                A COFAN atua diretamente na estruturação e captação de crédito
                para o agronegócio, conectando produtores e empresas a
                operações no mercado financeiro e de capitais — com estratégia,
                velocidade e inteligência.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 font-inter">
              Problemas que resolvemos
            </div>
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 p-5 bg-red-50 border border-red-100 rounded-xl"
              >
                <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-inter text-sm leading-relaxed">{point}</p>
              </div>
            ))}

            <div className="mt-8 p-6 bg-cofan-navy rounded-xl text-white">
              <p className="text-lg font-semibold mb-2">
                Não se trata de mais um financiamento.
              </p>
              <p className="text-white/70 text-sm font-inter">
                Trata-se de estruturar o crescimento do seu negócio com capital
                adequado ao seu ciclo produtivo.
              </p>
              <a
                href="#formulario"
                className="mt-4 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors font-inter"
              >
                Solicitar análise gratuita <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
