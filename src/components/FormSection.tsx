import LeadForm from './LeadForm';

export default function FormSection() {
  return (
    <section id="formulario" className="py-24 bg-cofan-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-400 blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-400 blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:pt-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4 font-inter">
              Análise Estratégica Gratuita
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
              Solicite uma análise para seu negócio
            </h2>
            <p className="text-white/70 text-lg mb-10 font-inter leading-relaxed">
              Nossa equipe ira avaliar sua operação e identificar as melhores
              possibilidades de estruturação de crédito — sem custo e sem
              compromisso.
            </p>

            <div className="space-y-5">
              {[
                { num: '01', title: 'Diagnóstico completo', desc: 'Análise da sua operação, estrutura financeira e objetivo de captação' },
                { num: '02', title: 'Sem burocracia', desc: 'Processo simplificado, conduzido inteiramente pela nossa equipe' },
                { num: '03', title: 'Resultado real', desc: 'Identificamos operações que o modelo bancário tradicional não oferece' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold text-sm font-inter">
                    {num}
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-0.5 font-inter">{title}</div>
                    <div className="text-white/60 text-sm font-inter">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
