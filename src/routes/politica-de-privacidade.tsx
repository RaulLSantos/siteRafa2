import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Dra. Rafaella Borges" },
      {
        name: "description",
        content:
          "Política de Privacidade do site institucional da Dra. Rafaella Borges, advogada em Cascavel/PR.",
      },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.22em] text-wine hover:text-gold transition-colors"
        >
          ← Voltar ao início
        </Link>
        <h1 className="mt-8 font-serif text-4xl md:text-5xl text-wine-deep leading-tight">
          Política de Privacidade
        </h1>
        <div className="hairline-gold my-8 max-w-xs" />

        <div className="space-y-6 text-foreground/80 leading-relaxed text-[15px]">
          <p>
            Esta Política de Privacidade descreve, de forma clara e objetiva,
            como o site institucional da Dra. Rafaella Borges trata informações
            de seus visitantes.
          </p>

          <section>
            <h2 className="font-serif text-2xl text-wine-deep mb-3">
              1. Caráter informativo
            </h2>
            <p>
              Este site possui caráter exclusivamente informativo. Não coleta,
              armazena ou processa dados pessoais por meio de formulários,
              cadastros ou bancos de dados próprios.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-wine-deep mb-3">
              2. Links externos
            </h2>
            <p>
              O site pode conter links para serviços externos, como WhatsApp,
              Google Maps e Instagram. Eventuais dados compartilhados nesses
              canais seguem exclusivamente as políticas de privacidade das
              respectivas plataformas, sobre as quais este site não exerce
              controle.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-wine-deep mb-3">
              3. Comunicação profissional
            </h2>
            <p>
              Informações trocadas em contato direto com a advogada são
              tratadas com sigilo profissional, observando o Código de Ética e
              Disciplina da OAB e a legislação aplicável.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-wine-deep mb-3">
              4. Cookies
            </h2>
            <p>
              O site não utiliza cookies de rastreamento ou ferramentas de
              perfilamento publicitário.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-wine-deep mb-3">
              5. Atualizações
            </h2>
            <p>
              Esta Política poderá ser atualizada a qualquer momento para
              refletir mudanças nas práticas do site ou na legislação
              aplicável.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
