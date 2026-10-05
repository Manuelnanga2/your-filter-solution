import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake } from "lucide-react";
import tecnico from "@/assets/tecnico.jpg";
import { PageHero, Reveal, CtaBand } from "@/components/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Meta Filtros Angola" },
      { name: "description", content: "Conheça a Meta Filtros, especialista em purificação e tratamento de água em Luanda e Angola." },
      { property: "og:title", content: "Sobre Nós — Meta Filtros Angola" },
      { property: "og:description", content: "Soluções modernas de filtragem para famílias, empresas e instituições em Angola." },
    ],
  }),
  component: Sobre,
});

const values = [
  { i: Target, t: "Missão", d: "Levar água limpa, segura e saudável a cada lar e empresa angolana." },
  { i: Eye, t: "Visão", d: "Ser a referência nacional em soluções de filtragem e tratamento de água." },
  { i: HeartHandshake, t: "Valores", d: "Confiança, rigor técnico, rapidez e proximidade com o cliente." },
];

function Sobre() {
  return (
    <>
      <PageHero eyebrow="Sobre Nós" title="Especialistas em água pura em Angola" text="Soluções modernas de filtragem para famílias, empresas e instituições." />
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2">
        <Reveal>
          <p className="text-lg text-muted-foreground">
            A Meta Filtros é uma empresa especializada na instalação, manutenção e venda de filtros de água. Trabalhamos com soluções modernas para garantir água limpa, segura e saudável para famílias, empresas e instituições em Angola.
          </p>
          <div className="mt-10 grid gap-5">
            {values.map(({ i: I, t, d }) => (
              <div key={t} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary"><I className="h-5 w-5" /></span>
                <div><h3 className="font-semibold">{t}</h3><p className="text-muted-foreground">{d}</p></div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}><img src={tecnico} alt="Equipa técnica Meta Filtros" width={1024} height={1024} loading="lazy" className="w-full rounded-3xl object-cover shadow-soft" /></Reveal>
      </section>
      <CtaBand />
    </>
  );
}
