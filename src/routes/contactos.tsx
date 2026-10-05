import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero, Reveal, PHONE_DISPLAY, EMAIL } from "@/components/site";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — Meta Filtros Luanda" },
      { name: "description", content: "Contacte a Meta Filtros em Luanda por telefone, email ou WhatsApp para filtros e purificação de água." },
      { property: "og:title", content: "Contactos — Meta Filtros Luanda" },
      { property: "og:description", content: "Fale connosco sobre filtros de água em Angola." },
    ],
  }),
  component: Contactos,
});

function Contactos() {
  const items = [
    { i: Phone, t: "Telefone / WhatsApp", d: PHONE_DISPLAY },
    { i: Mail, t: "Email", d: EMAIL },
    { i: MapPin, t: "Localização", d: "Luanda, Angola" },
    { i: Clock, t: "Horário", d: "Seg – Sáb, 8h às 18h" },
  ];
  return (
    <>
      <PageHero eyebrow="Contactos" title="Fale connosco" text="Estamos prontos para responder às suas dúvidas e preparar a melhor solução." />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-3">
        <Reveal className="space-y-4">
          {items.map(({ i: I, t, d }) => (
            <div key={t} className="flex gap-4 rounded-2xl border bg-card p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary"><I className="h-5 w-5" /></span>
              <div><p className="text-sm text-muted-foreground">{t}</p><p className="font-semibold">{d}</p></div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={150} className="lg:col-span-2"><QuoteForm /></Reveal>
      </section>
    </>
  );
}
