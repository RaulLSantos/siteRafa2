import { Briefcase, ShieldCheck, FileSearch, Globe2 } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Atuação estratégica para empresas",
    text: "Orientação jurídica voltada a decisões empresariais com previsibilidade e responsabilidade técnica.",
  },
  {
    icon: ShieldCheck,
    title: "Prevenção de riscos trabalhistas",
    text: "Análise de rotinas, documentos e práticas internas para reduzir exposição a passivos.",
  },
  {
    icon: FileSearch,
    title: "Análise técnica e comunicação clara",
    text: "Demandas tratadas de forma individualizada, com linguagem objetiva e parecer fundamentado.",
  },
  {
    icon: Globe2,
    title: "Presencial em Cascavel/PR e online no Brasil",
    text: "Estrutura de atendimento adaptável à realidade da sua empresa, presencial ou remota.",
  },
];

export function Differentials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-wine/70">
              Diferenciais
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-wine-deep leading-tight">
            Uma advocacia voltada à segurança das relações de trabalho.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Orientação técnica para empresas que buscam conduzir suas decisões
            com responsabilidade e previsibilidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`reveal reveal-delay-${i + 1} group relative bg-card border border-border/70 rounded-sm p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500`}
            >
              <div className="absolute top-0 left-7 h-px w-10 bg-gold/70 group-hover:w-16 transition-all" />
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-cream border border-border text-wine-deep">
                <it.icon size={18} strokeWidth={1.6} />
              </div>
              <h3 className="font-serif text-lg text-wine-deep mb-2 leading-snug">
                {it.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {it.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
