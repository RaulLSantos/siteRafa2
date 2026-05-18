import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-wine-deep text-primary-foreground/85">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-serif text-2xl text-primary-foreground">{SITE.name}</div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-gold-soft mt-2">
              {SITE.oab}
            </div>
            <div className="hairline-gold my-5 max-w-[120px] opacity-60" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Advocacia Trabalhista Empresarial
              <br />
              {SITE.city} · Atendimento online para todo o Brasil
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-gold-soft mb-4">
              Contato
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold-soft transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-soft transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-soft transition-colors"
                >
                  {SITE.instagram}
                </a>
              </li>
              <li>
                <a
                  href={SITE.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-soft transition-colors"
                >
                  {SITE.address}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-gold-soft mb-4">
              Institucional
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="hover:text-gold-soft transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <a href="#trabalhista" className="hover:text-gold-soft transition-colors">
                  Trabalhista Empresarial
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-gold-soft transition-colors">
                  Contato profissional
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline-gold my-10 opacity-40" />

        <p className="text-[11px] leading-relaxed text-primary-foreground/55 max-w-4xl">
          As informações disponibilizadas neste site possuem caráter exclusivamente informativo, não
          constituem promessa de resultado e não substituem a análise jurídica individualizada por
          profissional habilitado.
        </p>
        <p className="mt-4 text-[11px] text-primary-foreground/40">
          © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
