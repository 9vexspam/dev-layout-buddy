import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Droplets, Wind, Cog, Car, CircleDot, PanelTop, Sparkles, Shield, Wrench, Lightbulb,
  Eraser, Layers, Sofa, Footprints, Armchair, CloudRain, Bus, FlaskConical, Users, Timer,
  Star, MapPin, Clock, Instagram, Facebook, MessageCircle, Menu, X,
} from "lucide-react";
import civic from "@/assets/unnamed.webp.asset.json";
import polo from "@/assets/unnamed_1.webp.asset.json";
import vonixx from "@/assets/unnamed_2.webp.asset.json";
import hrv from "@/assets/unnamed_3.webp.asset.json";
import moto from "@/assets/unnamed_4.webp.asset.json";
import bmw from "@/assets/unnamed_5.webp.asset.json";
import motor from "@/assets/unnamed_6.webp.asset.json";

const WA =
  "https://wa.me/5511974370653?text=" +
  encodeURIComponent(
    "Olá! Vi o site e gostaria de agendar uma lavagem para meu veículo. Qual o valor e disponibilidade?",
  );

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lava Rápido São Roque | Estética Automotiva Da-Bandeirantes" },
      {
        name: "description",
        content:
          "Lava rápido em São Roque: lavagem detalhada, lavagem de moto, polimento, restauração de farol e estética automotiva. Agende pelo WhatsApp.",
      },
      { name: "keywords", content: "lava rápido São Roque, estética automotiva Da-Bandeirantes, lavagem detalhada, lavagem de moto, restauração de farol" },
      { property: "og:title", content: "Da-Bandeirantes | Estética Automotiva em São Roque" },
      { property: "og:description", content: "Seu carro merece um brilho de showroom. Agende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { cat: "Lavagem e Limpeza", items: [
    [Droplets, "Lava-rápido"], [Wind, "Lavagem a seco"], [Cog, "Lavagem de motores"],
    [Car, "Limpeza geral de veículos"], [CircleDot, "Limpeza de pneu e roda"], [PanelTop, "Limpeza de janelas"],
  ]},
  { cat: "Estética e Pintura", items: [
    [Sparkles, "Acabamento espelhado"], [Layers, "Enceramento"], [Sparkles, "Polimento"],
    [Shield, "Proteção de pintura"], [Eraser, "Remoção de arranhões"], [Lightbulb, "Restauração de farol"],
    [PanelTop, "Restauração de para-brisa"], [Wrench, "Barra descontaminante"],
  ]},
  { cat: "Limpeza Interna", items: [
    [Wind, "Aspiração interna"], [Footprints, "Limpeza de carpetes"], [Armchair, "Couro e camurça"],
  ]},
  { cat: "Serviços Especiais", items: [[CloudRain, "Limpeza após inundação"], [Bus, "Vans"]] },
] as const;

const diffs = [
  { icon: FlaskConical, t: "Produtos de Alta Performance", d: "Utilizamos químicos Vonixx e tecnologia de ponta.", img: vonixx.url },
  { icon: Users, t: "Equipe Especializada", d: "Cuidado manual e atenção aos detalhes.", img: motor.url },
  { icon: Timer, t: "Agilidade e Cuidado", d: "Seu tempo é valioso. Processos otimizados.", img: moto.url },
];

const reviews = [
  { n: "Ricardo M.", t: "Levei meu Civic e voltou parecendo zero. Atendimento rápido e muito caprichoso." },
  { n: "Fernanda L.", t: "A restauração de farol ficou impressionante. Recomendo de olhos fechados!" },
  { n: "Carlos A.", t: "Lavo minha moto aqui toda semana. Cuidado com cada detalhe, preço justo." },
];

const hours = [
  ["Segunda a Quinta", "08:00 – 17:00"], ["Sexta-feira", "08:00 – 16:00"],
  ["Sábado", "08:00 – 14:00"], ["Domingo", "Fechado"],
];

const nav = [["Início", "#inicio"], ["Serviços", "#servicos"], ["Diferenciais", "#diferenciais"], ["Galeria", "#galeria"], ["Contato", "#contato"]];

function CTA({ children, big }: { children: React.ReactNode; big?: boolean }) {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary font-bold text-primary-foreground shadow-glow transition hover:scale-[1.03] ${big ? "px-8 py-5 text-lg" : "px-6 py-3.5"}`}>
      <MessageCircle className="h-5 w-5" />{children}
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const gallery = [hrv.url, bmw.url, civic.url, polo.url, motor.url, moto.url];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" className="font-display text-lg font-black tracking-tight">
            DA-<span className="text-primary">BANDEIRANTES</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-foreground">{l}</a>)}
          </nav>
          <div className="hidden md:block"><CTA>Agendar Lavagem</CTA></div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 md:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-lg">{l}</a>)}
          </nav>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden pb-24 pt-28 md:items-center">
        <img src={civic.url} alt="Honda Civic prata após lavagem detalhada" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-5">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-foreground">
            <Star className="h-3.5 w-3.5 fill-current text-primary-bright" /> 4,8 no Google · São Roque
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] sm:text-6xl md:text-7xl">
            Seu carro merece um brilho de <span className="text-ember">showroom.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Lavagem detalhada, rápida e sem riscos. Agende pelo WhatsApp e retire seu carro impecável.
          </p>
          <div className="mt-8"><CTA big>Agendar Agora mesmo</CTA></div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-6xl px-5 py-24">
        <div className="reveal mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-bright">Serviços</p>
          <h2 className="mt-2 text-3xl font-black sm:text-5xl">Cuidado completo, <span className="text-silver">do motor ao couro.</span></h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((g) => (
            <div key={g.cat} className="reveal rounded-3xl border border-border bg-card p-6">
              <h3 className="mb-5 text-xl font-extrabold">{g.cat}</h3>
              <ul className="grid grid-cols-2 gap-3">
                {g.items.map(([Icon, label]) => (
                  <li key={label} className="flex items-center gap-3 rounded-2xl bg-secondary p-3 text-sm font-medium">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/25 text-primary-bright"><Icon className="h-4.5 w-4.5" strokeWidth={2.5} /></span>
                    <span className="min-w-0">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="diferenciais" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="reveal mb-12 text-3xl font-black sm:text-5xl">Por que nos <span className="text-primary">escolher?</span></h2>
          <div className="grid gap-6 md:grid-cols-3">
            {diffs.map((d) => (
              <article key={d.t} className="reveal overflow-hidden rounded-3xl border border-border bg-card">
                <img src={d.img} alt={d.t} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <d.icon className="mb-3 h-7 w-7 text-primary-bright" />
                  <h3 className="text-lg font-extrabold">{d.t}</h3>
                  <p className="mt-2 text-muted-foreground">{d.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="py-24">
        <div className="reveal mx-auto mb-10 max-w-6xl px-5">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-bright">Galeria</p>
          <h2 className="mt-2 text-3xl font-black sm:text-5xl">Cada detalhe <span className="text-silver">conta.</span></h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...gallery, ...gallery].map((src, i) => (
              <img key={i} src={src} alt="Resultado de estética automotiva Da-Bandeirantes" loading="lazy"
                className="h-64 w-96 rounded-3xl object-cover sm:h-80 sm:w-[30rem]" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-black sm:text-5xl">Quem lava, <span className="text-primary">volta.</span></h2>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3">
            <span className="font-display text-3xl font-black">4,8</span>
            <div><div className="flex text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="text-xs text-muted-foreground">Nota no Google</p></div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.n} className="reveal rounded-3xl border border-border bg-card p-6">
              <div className="mb-3 flex text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="text-foreground">"{r.t}"</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-muted-foreground">{r.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden border-t border-border py-24">
        <img src={polo.url} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div className="reveal">
            <h2 className="text-4xl font-black sm:text-5xl">Pronto para transformar <span className="text-silver">seu carro?</span></h2>
            <div className="mt-8"><CTA big>Chamar no WhatsApp (11) 97437-0653</CTA></div>
            <p className="mt-8 flex gap-3 text-muted-foreground"><MapPin className="h-5 w-5 shrink-0 text-primary-bright" />
              Av. Bandeirantes, 481 - Jardim Bandeirantes, São Roque - SP, 18134-220</p>
          </div>
          <div className="reveal rounded-3xl border border-border bg-card/90 p-6 backdrop-blur">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-extrabold"><Clock className="h-5 w-5 text-primary" /> Horário de Funcionamento</h3>
            <ul className="divide-y divide-border">
              {hours.map(([d, h]) => (
                <li key={d} className="flex justify-between py-3"><span>{d}</span>
                  <span className={h === "Fechado" ? "text-destructive font-semibold" : "font-semibold"}>{h}</span></li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-secondary p-3 text-sm text-muted-foreground">Dia de Nossa Senhora Aparecida: o horário pode mudar.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border pb-28 pt-10 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Da-Bandeirantes Estética Automotiva. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook /></a>
          </div>
        </div>
      </footer>

      <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow md:hidden">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
