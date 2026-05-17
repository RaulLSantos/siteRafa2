import { ArrowUpRight, Building2, FileCheck, Users2 } from "lucide-react";

const areas = [
  {
    icon: Building2,
    title: "Direito Trabalhista Empresarial",
    text: "Atuação voltada à orientação e defesa de empresas em questões trabalhistas, com foco em prevenção de riscos, análise de documentos, adequação de rotinas internas, acompanhamento de demandas judiciais e suporte jurídico para decisões empresariais.",
    featured: true,
  },
  {
    icon: FileCheck,
    title: "Direito Previdenciário",
    text: "Atuação em demandas relacionadas a benefícios previdenciários, aposentadorias, revisões, análise documental e orientações junto ao INSS.",
  },
  {
    icon: Users2,
    title: "Direito Civil",
    text: "Atuação em questões envolvendo contratos, cobranças, responsabilidade civil, obrigações e relações jurídicas entre particulares ou empresas.",
  },
];

export function PracticeAreas() {
  return (
    <section id="atuacao" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-wine/70">
                Áreas de atuação
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-wine-deep leading-tight">
              Áreas de Atuação
            </h2>
          </div>
          <p className="md:max-w-sm text-foreground/70 text-sm leading-relaxed">
            Atuação técnica orientada por análise individualizada, com foco
            estratégico em Direito Trabalhista Empresarial.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {areas.map((a, i) => {
            const Icon = a.icon;
            if (a.featured) {
              return (
                <article
                  key={a.title}
                  className="reveal lg:row-span-1 lg:col-span-2 relative group rounded-sm overflow-hidden bg-wine-deep text-primary-foreground p-9 md:p-12 shadow-elegant"
                >
                  <div
                    aria-hidden
                    className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-8 bg-gold" />
                      <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">
                        Foco principal
                      </span>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-gold/40 text-gold mb-6">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4">
                      {a.title}
                    </h3>
                    <p className="text-primary-foreground/80 leading-relaxed max-w-xl">
                      {a.text}
                    </p>
                    <a
                      href="#trabalhista"
                      className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-gold-soft hover:text-gold transition-colors"
                    >
                      Conhecer a atuação
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              );
            }
            return (
              <article
                key={a.title}
                className={`reveal reveal-delay-${i + 1} bg-card border border-border/70 rounded-sm p-8 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500`}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-cream border border-border text-wine-deep mb-6">
                  <Icon size={18} strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-xl text-wine-deep mb-3 leading-tight">
                  {a.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {a.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
