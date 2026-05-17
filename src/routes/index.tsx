import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Differentials } from "@/components/site/Differentials";
import { About } from "@/components/site/About";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { BusinessLaborLaw } from "@/components/site/BusinessLaborLaw";
import { LocationOnline } from "@/components/site/LocationOnline";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Dra. Rafaella Borges | Advocacia Trabalhista Empresarial em Cascavel/PR",
      },
      {
        name: "description",
        content:
          "Atuação jurídica estratégica para empresas em Direito Trabalhista Empresarial, com foco em segurança jurídica, prevenção de riscos e suporte profissional em Cascavel/PR e online para todo o Brasil.",
      },
      {
        name: "keywords",
        content:
          "advogada trabalhista empresarial em Cascavel PR, advocacia trabalhista empresarial em Cascavel, advogada trabalhista para empresas em Cascavel, consultoria trabalhista para empresas, direito trabalhista empresarial, advogada previdenciária em Cascavel PR, advogada cível em Cascavel PR, atendimento jurídico online para empresas",
      },
      {
        property: "og:title",
        content:
          "Dra. Rafaella Borges | Advocacia Trabalhista Empresarial em Cascavel/PR",
      },
      {
        property: "og:description",
        content:
          "Atuação jurídica estratégica para empresas em Direito Trabalhista Empresarial, com foco em segurança jurídica e prevenção de riscos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Dra. Rafaella Borges | Advocacia Trabalhista Empresarial em Cascavel/PR",
      },
      {
        name: "twitter:description",
        content:
          "Atuação jurídica estratégica para empresas em Direito Trabalhista Empresarial.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Dra. Rafaella Borges - Advocacia Trabalhista Empresarial",
          description:
            "Advocacia Trabalhista Empresarial em Cascavel/PR com atendimento online para todo o Brasil.",
          areaServed: "BR",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Paraná, 4330",
            addressLocality: "Cascavel",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          telephone: SITE.phone,
          email: SITE.email,
        }),
      },
    ],
  }),
});

function Index() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Differentials />
        <About />
        <PracticeAreas />
        <BusinessLaborLaw />
        <LocationOnline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
