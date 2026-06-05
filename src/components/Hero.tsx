import { ArrowRight, TrendingUp, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cofan-navy">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-cofan-navy via-cofan-navy-light/95 to-cofan-navy-light/90" />

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
            <Award size={14} className="text-amber-400" />
            <span className="text-white/90 text-sm font-medium font-inter">
              Mais de 150 fazendas e empresas atendidas
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair">
            Estruturação e{' '}
            <span className="text-amber-400">Captação de Crédito</span>{' '}
            para o Agronegócio
          </h1>

          <p className="text-xl md:text-2xl text-white/70 font-light mb-10 max-w-2xl font-inter">
            Capital sob medida para grandes produtores, sem dependência das
            limitações do crédito tradicional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-inter"
            >
              Solicitar análise gratuita do meu projeto
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Award, value: '150+', label: 'Operações estruturadas' },
              { icon: TrendingUp, value: '+15 anos', label: 'Experiência no mercado financeiro' },
              { icon: Shield, value: '1,4bi', label: 'Captados por ano' },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-inter">{value}</div>
                  <div className="text-xs text-white/60 font-inter">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
