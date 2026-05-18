import { SITE } from "@/lib/site";
import { GraduationCap, MapPin, Globe, Scale } from "lucide-react";

const blocks = [
  { icon: Scale, label: "Registro profissional", value: SITE.oab },
  { icon: MapPin, label: "Atuação local", value: "Cascavel/PR" },
  { icon: Globe, label: "Atendimento online", value: "Todo o Brasil" },
  {
    icon: GraduationCap,
    label: "Foco principal",
    value: "Direito Trabalhista Empresarial",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 right-0 h-80 w-80 rounded-full bg-wine/5 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-start relative">
        <div className="lg:col-span-6 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-wine/70">
              Perfil profissional
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-wine-deep leading-[1.1]">
            Sobre a Dra. <span className="italic">Rafaella Borges</span>
          </h2>

          <div className="hairline-gold my-8 max-w-xs" />

          <p className="text-foreground/80 leading-relaxed text-[15px] md:text-base">
            A Dra. Rafaella Borges atua com foco em Direito Trabalhista Empresarial, oferecendo
            suporte jurídico para empresas que buscam conduzir suas relações de trabalho com maior
            segurança, organização e responsabilidade técnica.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed text-[15px] md:text-base">
            Sua atuação é pautada pela análise individualizada de cada demanda, clareza na
            comunicação e compromisso com uma condução jurídica estratégica, tanto na esfera
            consultiva quanto contenciosa.
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-foreground/50">
            Espaço reservado para formação acadêmica e especializações.
          </p>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {blocks.map((b, i) => (
              <div
                key={b.label}
                className={`reveal reveal-delay-${i + 1} bg-background border border-border/70 rounded-sm p-6 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-wine-deep text-primary-foreground mb-5">
                  <b.icon size={16} strokeWidth={1.6} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/55 mb-1.5">
                  {b.label}
                </div>
                <div className="font-serif text-lg text-wine-deep leading-snug">{b.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 reveal reveal-delay-4 glass rounded-sm p-6 border border-gold/20">
            <div className="text-[11px] uppercase tracking-[0.22em] text-wine/70 mb-2">
              Compromisso
            </div>
            <p className="font-serif text-lg text-wine-deep leading-snug">
              “Atuação técnica, discreta e orientada à segurança jurídica das decisões
              empresariais.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
