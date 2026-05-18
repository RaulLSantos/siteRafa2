import { SITE } from "@/lib/site";
import { ArrowUpRight, Mail, Phone, Instagram, MapPin, ExternalLink } from "lucide-react";

const items = [
  { icon: Mail, label: "E-mail", value: SITE.email, href: `mailto:${SITE.email}` },
  {
    icon: Phone,
    label: "Telefone/WhatsApp",
    value: SITE.phone,
    href: SITE.whatsapp,
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: SITE.instagram,
    href: SITE.instagramUrl,
    external: true,
  },
  { icon: MapPin, label: "Endereço", value: SITE.address, href: SITE.maps, external: true },
];

export function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-wine/70">Contato</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-wine-deep leading-tight">Contato</h2>
          <p className="mt-5 text-foreground/70">
            Dados profissionais para contato com a Dra. Rafaella Borges.
          </p>
        </div>

        <div className="reveal reveal-delay-2 bg-cream border border-border rounded-sm shadow-elegant p-8 md:p-12 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
          />
          <div className="relative">
            <div className="text-center mb-8">
              <div className="font-serif text-2xl md:text-3xl text-wine-deep">{SITE.name}</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 mt-2">
                {SITE.oab}
              </div>
            </div>

            <div className="hairline-gold mb-8" />

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.external ? "_blank" : undefined}
                  rel={it.external ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 p-5 bg-background border border-border/70 rounded-sm hover:border-gold/40 hover:shadow-soft transition-all"
                >
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-wine-deep text-primary-foreground">
                    <it.icon size={15} strokeWidth={1.6} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/55 mb-0.5">
                      {it.label}
                    </div>
                    <div className="text-sm text-wine-deep font-medium break-words">{it.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-wine-deep text-primary-foreground px-8 py-4 rounded-sm text-sm tracking-wide hover:bg-wine transition-colors shadow-soft"
              >
                Contato profissional
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-wine hover:text-gold transition-colors"
              >
                Ver localização no Google Maps
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
