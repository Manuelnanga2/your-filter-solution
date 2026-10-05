import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Droplets, Sparkles, Wrench, Zap, Building2, Star, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import tecnico from "@/assets/tecnico.jpg";
import industrial from "@/assets/industrial.jpg";
import { Reveal, SectionTitle, CtaBand, services, waLink } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meta Filtros — Filtros de Água em Angola | Instalação e Manutenção" },
      { name: "description", content: "Filtros de água em Angola: instalação, manutenção e venda de filtros, osmose reversa e purificação de água em Luanda para casas e empresas." },
      { property: "og:title", content: "Meta Filtros — Água pura para sua casa e empresa" },
      { property: "og:description", content: "Especialistas em instalação, manutenção e venda de filtros de água em Luanda e Angola." },
      { name: "keywords", content: "filtros de água em Angola, manutenção de filtros, instalação de filtros de água, purificação de água em Luanda, sistemas de tratamento de água" },
    ],
  }),
  component: Index,
});

const benefits = [
  { i: Droplets, t: "Água mais saudável" },
  { i: ShieldCheck, t: "Redução de impurezas" },
  { i: Sparkles, t: "Melhor sabor da água" },
  { i: Wrench, t: "Assistência técnica especializada" },
  { i: Zap, t: "Atendimento rápido" },
  { i: Building2, t: "Soluções para residências e empresas" },
];

const testimonials = [
  { n: "Ana M.", r: "Talatona, Luanda", q: "Instalaram o filtro em menos de uma hora. A água ficou com outro sabor — recomendo!" },
  { n: "Clínica Vida+", r: "Maianga", q: "Manutenção sempre a tempo e técnicos muito profissionais. Confiança total." },
  { n: "Paulo D.", r: "Viana", q: "Atendimento rápido pelo WhatsApp e preço justo. A família inteira notou a diferença." },
];

function Index() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img src={hero} alt="Água pura a sair da torneira com sistema de filtragem" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 text-deep-foreground">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-deep-foreground/10 px-4 py-1.5 text-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-secondary" /> Filtros de água em Angola
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] md:text-7xl">
              ÁGUA PURA PARA SUA CASA E EMPRESA
            </h1>
            <p className="mt-6 text-lg opacity-85 md:text-xl">
              Especialistas em instalação, manutenção e venda de filtros de água para residências, empresas, escolas, clínicas e instituições.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/orcamento" className="rounded-full bg-gradient-brand px-7 py-4 font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105">Solicitar Orçamento</Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-whatsapp px-7 py-4 font-semibold text-primary-foreground transition-transform hover:scale-105">Falar no WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2">
        <Reveal>
          <img src={tecnico} alt="Técnico Meta Filtros em manutenção de filtro" width={1024} height={1024} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
        </Reveal>
        <Reveal delay={150}>
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Sobre Nós</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Água limpa, segura e saudável</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A Meta Filtros é uma empresa especializada na instalação, manutenção e venda de filtros de água. Trabalhamos com soluções modernas para garantir água limpa, segura e saudável para famílias, empresas e instituições em Angola.
          </p>
          <Link to="/sobre" className="mt-8 inline-block font-semibold text-primary hover:underline">Conheça a nossa história →</Link>
        </Reveal>
      </section>

      <section className="bg-muted px-5 py-24">
        <SectionTitle eyebrow="Serviços" title="Cuidamos de todo o ciclo da sua água" />
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 80} className="rounded-2xl bg-card p-7 transition-shadow hover:shadow-soft">
              <span className="font-display text-sm font-bold text-secondary">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-24">
        <SectionTitle eyebrow="Benefícios" title="Porquê escolher a Meta Filtros" />
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ i: I, t }, k) => (
            <Reveal key={t} delay={k * 80} className="flex items-center gap-4 rounded-2xl border p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground"><I className="h-6 w-6" /></span>
              <span className="font-semibold">{t}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted px-5 py-24">
        <SectionTitle eyebrow="Galeria" title="O nosso trabalho" />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3 md:grid-rows-2">
          <Reveal className="md:col-span-2 md:row-span-2"><img src={industrial} alt="Sistema industrial de osmose reversa instalado" width={1024} height={1024} loading="lazy" className="h-full w-full rounded-3xl object-cover" /></Reveal>
          <Reveal delay={100}><img src={tecnico} alt="Técnico a realizar manutenção" width={1024} height={1024} loading="lazy" className="aspect-video h-full w-full rounded-3xl object-cover" /></Reveal>
          <Reveal delay={200}><img src={hero} alt="Filtro residencial e água cristalina" width={1600} height={1008} loading="lazy" className="aspect-video h-full w-full rounded-3xl object-cover" /></Reveal>
        </div>
      </section>

      <section className="px-5 py-24">
        <SectionTitle eyebrow="Depoimentos" title="O que dizem os nossos clientes" />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.n} delay={i * 100} className="rounded-2xl border bg-card p-7">
              <div className="flex gap-1 text-secondary">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /><b>{t.n}</b><span className="text-muted-foreground">· {t.r}</span></div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
