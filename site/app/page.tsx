import { Nav } from "./components/nav";
import { ProjetCard } from "./components/projet-card";

const projets = [
  { href: "https://github.com/StudioMiyukini/mip", tag: "Protocole", title: "MIP v2", description: "Protocole de développement gouverné par IA — 10 agents, 7 phases, portes de qualité.", tech: "IA · DevOps · Gouvernance" },
  { href: "https://github.com/StudioMiyukini/miyukiniclaw", tag: "Assistant IA", title: "MiyukiniClaw", description: "Votre assistant IA personnel. Tous OS, toutes plateformes.", tech: "TypeScript · Multi-plateforme" },
  { href: "https://github.com/StudioMiyukini/bevy-COG", tag: "Moteur", title: "Bevy COG", description: "Moteur de jeu data-driven en Rust, adapté pour l'écosystème COG.", tech: "Rust · ECS · Game Engine" },
  { href: "https://github.com/StudioMiyukini/phpbb-COG", tag: "Communauté", title: "phpBB COG", description: "Forums communautaires pour l'écosystème Miyukini.", tech: "PHP · Forum" },
  { href: "https://catakana.fr", tag: "Festival", title: "Catakana", description: "Festival dédié à la culture japonaise et au manga.", tech: "Événementiel · Culture JP" },
];

function Pill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener"
      className="text-sm border border-zinc-200 dark:border-zinc-800 rounded-lg px-3.5 py-1.5 text-zinc-700 dark:text-zinc-300 hover:border-violet-400 dark:hover:border-violet-500 transition-colors">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-5">
      <Nav />

      {/* === Hero === */}
      <section className="pt-16 sm:pt-24 pb-16">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400 tracking-wider uppercase mb-4">Souveraineté numérique</p>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[1.08] mb-5">
          Studio Miyukini
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl mb-8">
          Nous construisons des écosystèmes numériques où chaque utilisateur est maître de ses données, de son identité et de son environnement.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projets" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors">
            Voir les projets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
          <a href="https://github.com/StudioMiyukini" target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* === Projets === */}
      <section id="projets" className="py-16">
        <h2 className="font-heading font-bold text-2xl tracking-tight mb-6">Projets</h2>

        <ProjetCard
          href="https://cog.miyukini.com"
          tag="Flagship"
          title="Miyukini COG"
          description="Cores Orchestrated Governance — Un espace de vie numérique souverain. Pas un logiciel, pas un cloud. Votre environnement, vos règles."
          tech="Rust · Offline-first · 8 Cores · Fédéré"
          flagship
        />

        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          {projets.map((p) => <ProjetCard key={p.title} {...p} />)}
        </div>
      </section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* === À propos === */}
      <section id="a-propos" className="py-16">
        <h2 className="font-heading font-bold text-2xl tracking-tight mb-6">À propos</h2>
        <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-start">
          <div className="space-y-4 text-[0.95rem] text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              Le Studio Miyukini a été fondé en 2018 à Toulouse par <strong className="text-zinc-800 dark:text-zinc-200">Van Jean NGUYEN</strong>. Passionné de BD japonaise, ancien militaire, entrepreneur — chaque expérience a nourri la vision du studio.
            </p>
            <p>
              Aujourd&apos;hui nous éditons des mangas, organisons le festival <a href="https://catakana.fr" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Catakana</a>, et construisons des outils numériques souverains — offline-first, open-source, fédérés.
            </p>
          </div>
          <div className="flex sm:flex-col gap-6 sm:gap-3 sm:text-right">
            <div>
              <strong className="font-heading text-2xl font-bold block leading-tight">7+</strong>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">ans</span>
            </div>
            <div>
              <strong className="font-heading text-2xl font-bold block leading-tight">6</strong>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">projets</span>
            </div>
            <div>
              <strong className="font-heading text-2xl font-bold block leading-tight">3</strong>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">langues</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* === Contact === */}
      <section id="contact" className="py-16">
        <h2 className="font-heading font-bold text-2xl tracking-tight mb-2">Contact</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">Toulouse, Occitanie, France.</p>
        <div className="flex flex-wrap gap-2">
          <Pill href="mailto:contact@miyukini.com">contact@miyukini.com</Pill>
          <Pill href="https://github.com/StudioMiyukini">GitHub</Pill>
          <Pill href="https://www.linkedin.com/in/van-jean-nguyen/">LinkedIn</Pill>
          <Pill href="https://discord.gg/miyukini">Discord</Pill>
          <Pill href="https://cog.miyukini.com">COG</Pill>
          <Pill href="https://catakana.fr">Catakana</Pill>
        </div>
      </section>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-xs text-zinc-400 dark:text-zinc-600">
        &copy; 2026 Studio Miyukini
      </footer>
    </div>
  );
}
