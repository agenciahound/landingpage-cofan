import { Mail, Phone, MapPin } from 'lucide-react';
import { FOOTER_LINKS, CTA_LABEL, CONTACT_INFO } from '../config/site';

export default function Footer() {
  return (
    <footer className="bg-cofan-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="/COFAN_LOGO.png" alt="COFAN logo" className="h-8 w-auto mb-4" />
            <p className="text-white/60 text-sm font-inter leading-relaxed">
              Inteligência financeira aplicada ao agronegócio. Estruturação e captação de crédito para grandes produtores.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm font-inter">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-amber-400 transition-colors font-inter"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm font-inter">Informações</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-amber-400 transition-colors font-inter">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <span className="font-inter">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="font-inter">{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm font-inter">Análise Gratuita</h4>
            <p className="text-white/60 text-sm font-inter mb-4">
              Solicite uma avaliação estratégica do seu projeto sem custo.
            </p>
            <a
              href="#formulario"
              className="inline-block px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-lg transition-all font-inter"
            >
              {CTA_LABEL}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs font-inter">
              &copy; {new Date().getFullYear()} COFAN. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: 'Politica de Privacidade', href: '#' },
                { label: 'Termos de Uso', href: '#' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-white/50 hover:text-white text-xs font-inter transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
