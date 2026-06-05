import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'A COFAN atua para nós, não apenas como uma intermediadora de crédito, mas também como uma consultoria financeira, proporcionando suporte e acesso a outras instituições ou fundos, incluindo operações mais estruturadas e não convencionais, como o CRA.',
    author: 'Micael Bonini',
    location: 'Grupo Bonini',
    sector: 'Maranhão',
  },
  {
    quote:
      'Um grande diferencial, na minha percepção, é o acompanhamento contínuo após a liberação do crédito. Não se trata apenas de intermediar e viabilizar a captação de recursos, mas de oferecer um suporte completo durante toda a vigência do contrato. Desde a aprovação do crédito até a finalização do pagamento, a equipe está presente para auxiliar, esclarecer dúvidas e garantir a melhor experiência possível. Para mim, esse suporte e essencial.',
    author: 'Patricia Daroit',
    location: 'Grupo Aysu',
    sector: 'Mato Grosso',
  },
  {
    quote:
      'A experiência foi bem positiva. Um trabalho muito bem feito pelo Padilha que abriu novos recursos financeiros com taxas mais baixas e agilidade nos processos. O conhecimento dos procedimentos facilitou muito. As vezes você começa a captar um recurso, mas acaba no meio do caminho porque não sabia tudo o que vinha pela frente e a Cofan ajudou muito, pois já chegava para a nossa equipe dizendo que documentacoes iria precisar, certidões, vinha uma lista de informações necessárias numa única etapa. Quando a gente entra captando recursos, tentando alguma coisa diferenciada, não temos essa prática e o processo acaba sendo lento, mas a Cofan está no meio de campo e com isso se ganha muito tempo.',
    author: 'Eduardo Zorzi',
    location: 'Grupo Fuhr',
    sector: 'Sorriso/MT',
  },
  {
    quote:
      'Nós do Grupo FUHR estamos plenamente satisfeitos com os serviços prestados pela Cofan, fomos auxiliados nos nossos objetivos, que era conseguir recurso para custear as atividades agrícolas desenvolvidas. Os serviços prestados atenderam as necessidades do grupo e inclusive superaram as expectativas, por este motivo ficamos muito satisfeitos com os resultados, tanto que já indicamos e indicaremos a outros produtores.',
    author: 'Adreane Fuhr',
    location: 'Grupo Bavaresco',
    sector: 'Sorriso/MT',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4 font-inter">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cofan-navy mb-5 font-playfair">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map(({ quote, author, location, sector }) => (
            <div
              key={author}
              className="relative p-8 bg-cofan-light rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <Quote size={36} className="text-amber-500/30 mb-4" />
              <blockquote className="text-gray-700 text-base font-inter leading-relaxed mb-6 italic">
                "{quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src="/avatar_cofan.jpg"
                  alt={`Foto de ${author}`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <div className="font-semibold text-cofan-navy text-sm font-inter">{author}</div>
                  <div className="text-gray-500 text-xs font-inter">
                    {sector} · {location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '150+', label: 'Operações estruturadas' },
            { value: '+15 anos', label: 'Experiência no setor' },
            { value: 'R$1,4 bi', label: 'Em crédito captado' },
            { value: '100%', label: 'Personalização das operações' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-6 bg-cofan-navy rounded-2xl">
              <div className="text-2xl font-bold text-amber-400 font-inter mb-1">{value}</div>
              <div className="text-white/70 text-xs font-inter">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
