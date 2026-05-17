import { SITE } from "@/lib/site";
import { MapPin, Globe, ExternalLink } from "lucide-react";

export function LocationOnline() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-wine/70">
              Atendimento
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-wine-deep leading-tight">
            Atuação em Cascavel/PR <br />
            e <span className="italic">atendimento online</span>
          </h2>
          <div className="hairline-gold my-8 max-w-xs" />
          <p className="text-foreground/75 leading-relaxed">
            Com atuação em Cascavel/PR e atendimento online para empresas em
            todo o Brasil, a advocacia é conduzida com organização, clareza na
            comunicação e análise individualizada de cada demanda.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            A estrutura de atendimento permite suporte jurídico a empresas
            locais e também a negócios localizados em outras regiões, sempre
            com foco em responsabilidade técnica, segurança e discrição
            profissional.
          </p>
        </div>

        <div className="lg:col-span-6 reveal reveal-delay-2">
          <div className="relative">
            {/* stylised map card */}
            <div className="relative aspect-[5/4] rounded-sm overflow-hidden border border-border bg-background shadow-elegant">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                  opacity: 0.5,
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 60% 45%, oklch(0.74 0.08 80 / 0.18), transparent 55%)",
                }}
              />
              {/* pin */}
              <div className="absolute top-[42%] left-[58%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <span className="absolute inset-0 -m-3 rounded-full bg-wine/20 animate-ping" />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-wine-deep text-primary-foreground border-2 border-gold/60 shadow-elegant">
                    <MapPin size={16} />
                  </span>
                </div>
              </div>
            </div>

            {/* floating address card */}
            <div className="absolute -bottom-8 left-4 md:left-8 right-4 md:right-auto md:w-[420px] bg-background border border-border rounded-sm shadow-elegant p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-wine-deep text-primary-foreground">
                  <MapPin size={16} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/55 mb-1">
                    Escritório
                  </div>
                  <div className="font-serif text-base text-wine-deep leading-snug">
                    {SITE.address}
                  </div>
                  <a
                    href={SITE.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs tracking-wide text-wine hover:text-gold transition-colors"
                  >
                    Ver localização no Google Maps
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-border flex items-center gap-3 text-xs text-foreground/65">
                <Globe size={14} className="text-gold" />
                Atendimento online para todo o Brasil
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
