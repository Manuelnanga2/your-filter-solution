import { createFileRoute, Link } from "@tanstack/react-router";
import industrial from "@/assets/industrial.jpg";
import { PageHero, Reveal, CtaBand, products } from "@/components/site";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Filtros, Purificadores e Osmose Reversa | Meta Filtros" },
      { name: "description", content: "Filtros UV, residenciais e empresariais, purificadores, sistemas de osmose reversa, refis e acessórios em Angola." },
      { property: "og:title", content: "Produtos de purificação de água — Meta Filtros" },
      { property: "og:description", content: "Sistemas de tratamento de água para casas e empresas em Luanda e Angola." },
    ],
  }),
  component: Produtos,
});

function Produtos() {
  return (
    <>
      <PageHero eyebrow="Produtos" title="Sistemas de tratamento de água" text="Equipamentos de qualidade para cada necessidade — da cozinha à indústria." />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal className="mb-14 overflow-hidden rounded-3xl">
          <img src={industrial} alt="Sistema de osmose reversa industrial" width={1024} height={1024} loading="lazy" className="h-72 w-full object-cover md:h-96" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.t} delay={i * 80} className="flex flex-col rounded-2xl border bg-card p-7">
              <div className="h-1.5 w-12 rounded-full bg-gradient-brand" />
              <h2 className="mt-5 text-xl font-semibold">{p.t}</h2>
              <p className="mt-2 flex-1 text-muted-foreground">{p.d}</p>
              <Link to="/orcamento" className="mt-6 font-semibold text-primary hover:underline">Pedir orçamento →</Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
