import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/site";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Solicitar Orçamento — Meta Filtros" },
      { name: "description", content: "Peça um orçamento gratuito para instalação ou manutenção de filtros de água em Luanda e Angola." },
      { property: "og:title", content: "Solicitar Orçamento — Meta Filtros" },
      { property: "og:description", content: "Orçamento gratuito e sem compromisso para filtros de água." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Orçamento" title="Solicite o seu orçamento gratuito" text="Preencha os dados e responderemos o mais rápido possível." />
      <section className="mx-auto max-w-4xl px-5 py-24"><Reveal><QuoteForm /></Reveal></section>
    </>
  ),
});
