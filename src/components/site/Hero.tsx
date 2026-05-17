import heroImg from "@/assets/hero.jpg";
import { SITE } from "@/lib/site";
import { ArrowUpRight, ShieldCheck, Scale } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden gradient-cream"
    >
      {/* decorative */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-[0.07] bg-wine blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -left-32 h-72 w-72 rounded-full opacity-[0.10] bg-gold blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7 reveal">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-wine/70">
              Advocacia Trabalhista Empresarial
            </span>
          </div>

          <h1 className="font-serif text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] text-wine-deep">
            Advocacia Trabalhista
            <br />
            <span className="italic text-wine">Empresarial</span> em
            <br className="hidden sm:block" /> Cascavel/PR
          </h1>

          <p className="mt-7 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
            Atuação jurídica estratégica para empresas, com foco em segurança
            nas relações de trabalho, prevenção de riscos e suporte técnico em
            demandas consultivas e contenciosas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-wine-deep text-primary-foreground px-7 py-4 rounded-sm text-sm tracking-wide hover:bg-wine transition-colors shadow-elegant"
            >
              Contato profissional
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="pl-0 sm:pl-6 sm:border-l border-border">
              <div className="font-serif text-lg text-wine-deep">
                {SITE.name}
              </div>
              <div className="text-xs tracking-[0.18em] uppercase text-foreground/55">
                {SITE.oab}
              </div>
            </div>
          </div>
        </div>

        {/* visual */}
        <div className="lg:col-span-5 relative reveal reveal-delay-2">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <div className="absolute inset-0 rounded-sm overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Ambiente profissional de advocacia corporativa"
                className="w-full h-full object-cover"
                width={1080}
                height={1440}
              />
            </div>

            {/* gold frame */}
            <div className="absolute -inset-3 border border-gold/40 rounded-sm pointer-events-none" />

            {/* floating card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 glass rounded-sm shadow-soft p-5 w-56">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-sm bg-wine-deep/95 text-primary-foreground flex items-center justify-center">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                    Prevenção
                  </div>
                  <div className="font-serif text-sm text-wine-deep">
                    Segurança jurídica
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 md:-right-10 glass rounded-sm shadow-soft p-5 w-56">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-sm border border-gold/50 text-wine-deep flex items-center justify-center">
                  <Scale size={16} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                    Atuação
                  </div>
                  <div className="font-serif text-sm text-wine-deep">
                    Consultiva & Contenciosa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
