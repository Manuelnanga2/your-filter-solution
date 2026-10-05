import { createFileRoute } from "@tanstack/react-router";
import { Wrench, CalendarCheck, Hammer, RefreshCw, Sparkles, ClipboardList } from "lucide-react";
import { PageHero, Reveal, CtaBand, services } from "@/components/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Instalação e Manutenção de Filtros | Meta Filtros" },
      { name: "description", content: "Instalação de filtros de água, manutenção preventiva e corretiva, troca de refis e consultoria em tratamento de água em Luanda." },
      { property: "og:title", content: "Serviços de instalação e manutenção de filtros — Meta Filtros" },
      { property: "og:description", content: "Instalação, manutenção, troca de refis e consultoria para tratamento de água em Angola." },
    ],
  }),
  component: Servicos,
});

const icons = [Wrench, CalendarCheck, Hammer, RefreshCw, Sparkles, ClipboardList];

function Servicos() {
  return (
    <>
      <PageHero eyebrow="Serviços" title="Instalação e manutenção de filtros de água" text="Uma equipa técnica pronta para cuidar do seu sistema, do primeiro dia em diante." />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const I = icons[i] ?? Wrench;
          return (
            <Reveal key={s.t} delay={i * 80} className="rounded-2xl border bg-card p-8 transition-shadow hover:shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground"><I className="h-6 w-6" /></span>
              <h2 className="mt-5 text-xl font-semibold">{s.t}</h2>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </Reveal>
          );
        })}
      </section>
      <CtaBand />
    </>
  );
}
