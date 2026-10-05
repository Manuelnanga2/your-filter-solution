import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export const WHATSAPP_NUMBER = "244900000000";
export const PHONE_DISPLAY = "+244 900 000 000";
export const EMAIL = "geral@metafiltros.ao";
export const waLink = (text = "Olá Meta Filtros, gostaria de mais informações.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/servicos", label: "Serviços" },
  { to: "/produtos", label: "Produtos" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logo} alt="Meta Filtros" width={40} height={40} className="h-10 w-10 object-contain" />
      <span className={`font-display text-xl font-bold ${light ? "text-deep-foreground" : "text-foreground"}`}>
        Meta<span className="text-secondary">Filtros</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <Link to="/orcamento" className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105">
            Solicitar Orçamento
          </Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t bg-background px-5 py-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium hover:bg-muted">
              {n.label}
            </Link>
          ))}
          <Link to="/orcamento" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gradient-brand px-5 py-3 text-center font-semibold text-primary-foreground">
            Solicitar Orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm opacity-75">
            Instalação, manutenção e venda de filtros de água em Luanda e em todo o território angolano.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" aria-label="Rede social" className="rounded-full border border-deep-foreground/20 p-2.5 transition-colors hover:bg-secondary">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-75">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:opacity-100">{n.label}</Link></li>)}
            <li><Link to="/orcamento">Solicitar Orçamento</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contactos</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-75">
            <li className="flex gap-2"><Phone className="h-4 w-4" />{PHONE_DISPLAY}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4" />{EMAIL}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4" />Luanda, Angola</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-deep-foreground/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Meta Filtros. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition-transform hover:scale-110">
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-deep pb-20 pt-36 text-deep-foreground">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg opacity-80">{text}</p>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-secondary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 py-20">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl bg-gradient-brand px-8 py-14 text-center text-primary-foreground shadow-soft">
        <h2 className="text-3xl font-bold md:text-4xl">Pronto para ter água pura em casa ou na empresa?</h2>
        <p className="max-w-xl opacity-90">Peça um orçamento gratuito e sem compromisso. Respondemos rapidamente.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/orcamento" className="rounded-full bg-background px-7 py-3.5 font-semibold text-primary transition-transform hover:scale-105">Solicitar Orçamento</Link>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-primary-foreground/70 px-7 py-3.5 font-semibold transition-colors hover:bg-primary-foreground/10">Falar no WhatsApp</a>
        </div>
      </Reveal>
    </section>
  );
}

export const services = [
  { t: "Instalação de filtros de água", d: "Instalação profissional e segura em residências, empresas e instituições." },
  { t: "Manutenção preventiva", d: "Visitas programadas para garantir o desempenho contínuo do seu sistema." },
  { t: "Manutenção corretiva", d: "Diagnóstico e reparação rápida de avarias e fugas." },
  { t: "Troca de refis", d: "Substituição de refis e velas originais no prazo certo." },
  { t: "Limpeza de sistemas de filtragem", d: "Higienização completa de reservatórios e sistemas de filtragem." },
  { t: "Consultoria para tratamento de água", d: "Análise das suas necessidades e escolha da melhor solução." },
];

export const products = [
  { t: "Filtros UV", d: "Eliminam bactérias e vírus por radiação ultravioleta." },
  { t: "Filtros residenciais", d: "Compactos e eficientes para a cozinha da sua casa." },
  { t: "Filtros empresariais", d: "Alta capacidade para escritórios, escolas e clínicas." },
  { t: "Purificadores de água", d: "Água gelada e natural, purificada no momento." },
  { t: "Sistemas de osmose reversa", d: "Purificação avançada que remove até 99% das impurezas." },
  { t: "Refis e acessórios", d: "Peças e consumíveis para manter o seu sistema a funcionar." },
];
