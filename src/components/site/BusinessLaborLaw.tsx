import { SITE } from "@/lib/site";
import {
  ArrowUpRight,
  ClipboardCheck,
  ShieldAlert,
  Gavel,
  FileText,
  Users,
  Handshake,
} from "lucide-react";

const cards = [
  {
    icon: ClipboardCheck,
    title: "Consultoria trabalhista para empresas",
    text: "Orientação preventiva para reduzir riscos nas relações de trabalho.",
  },
  {
    icon: ShieldAlert,
    title: "Prevenção de passivos trabalhistas",
    text: "Análise de práticas internas, documentos e rotinas empresariais para maior segurança jurídica.",
  },
  {
    icon: Gavel,
    title: "Defesa em ações trabalhistas",
    text: "Atuação contenciosa em demandas judiciais envolvendo relações de trabalho.",
  },
  {
    icon: FileText,
    title: "Análise de contratos e documentos",
    text: "Avaliação de contratos, termos, políticas internas e documentos relacionados à relação empregatícia.",
  },
  {
    icon: Users,
    title: "Suporte para RH e gestão",
    text: "Orientação jurídica para decisões empresariais envolvendo empregados, prestadores e rotinas internas.",
  },
  {
    icon: Handshake,
    title: "Acordos e negociações trabalhistas",
    text: "Atuação técnica em negociações, estratégias de composição e condução de conflitos trabalhistas.",
  },
];

export function BusinessLaborLaw() {
  return (
    <section
      id="trabalhista"
      className="relative bg-wine-deep text-primary-foreground"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, var(--gold), transparent 40%), radial-gradient(circle at 80% 80%, var(--gold), transparent 40%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-12 gap-12 relative">
        {/* sticky left */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">
                Foco principal
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Direito Trabalhista
              <br />
              <span className="italic text-gold-soft">Empresarial</span>
            </h2>
            <div className="hairline-gold my-8 max-w-xs opacity-70" />
            <p className="text-primary-foreground/75 leading-relaxed max-w-md">
              Suporte jurídico estratégico para empresas que buscam segurança
              nas relações de trabalho, prevenção de passivos e condução
              técnica de demandas trabalhistas.
            </p>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-gold/50 text-gold-soft hover:bg-gold hover:text-wine-deep px-7 py-3.5 rounded-sm text-sm tracking-wide transition-colors"
            >
              Contato profissional
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* dynamic cards */}
        <div className="lg:col-span-7 space-y-5">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className={`reveal reveal-delay-${(i % 4) + 1} glass-dark rounded-sm p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40`}
              style={{ marginLeft: i % 2 === 0 ? 0 : "auto", maxWidth: "94%" }}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-gold/40 text-gold">
                  <c.icon size={18} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary-foreground leading-snug mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
