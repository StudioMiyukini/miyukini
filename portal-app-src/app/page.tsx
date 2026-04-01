import { Nav } from "./components/nav";
import { ProjetCard } from "./components/projet-card";

const projets = [
  {
    href: "https://github.com/StudioMiyukini/mip",
    tag: "Protocole",
    title: "MIP v2",
    description:
      "Protocole de développement gouverné par IA — 10 agents, 7 phases, portes de qualité.",
    tech: "IA · DevOps · Gouvernance",
    external: true,
  },
  {
    href: "https://github.com/StudioMiyukini/miyukiniclaw",
    tag: "Assistant IA",
    title: "MiyukiniClaw",
    description: "Votre assistant IA personnel. Tous OS, toutes plateformes.",
    tech: "TypeScript · Multi-plateforme",
    external: true,
  },
  {
    href: "https://github.com/StudioMiyukini/bevy-COG",
    tag: "Moteur",
    title: "Bevy COG",
    description:
      "Moteur de jeu data-driven en Rust, adapté pour l'écosystème COG.",
    tech: "Rust · ECS · Game Engine",
    external: true,
  },
  {
    href: "https://github.com/StudioMiyukini/phpbb-COG",
    tag: "Communauté",
    title: "phpBB COG",
    description: "Forums communautaires pour l'écosystème Miyukini.",
    tech: "PHP · Forum",
    external: true,
  },
  {
    href: "https://catakana.fr",
    tag: "Festival",
    title: "Catakana",
    description: "Festival dédié à la culture japonaise et au manga.",
    tech: "Événementiel · Culture JP",
    external: true,
  },
];

const experience = [
  {
    date: "2018 — Présent",
    title: "Directeur-fondateur, Studio Miyukini",
    desc: "Édition manga et BD. Création de l'écosystème numérique COG.",
  },
  {
    date: "2024 — Présent",
    title: "Président, Festival Catakana",
    desc: "Création d'un festival culture japonaise.",
  },
  {
    date: "2020 — 2022",
    title: "Fondateur, Virtual Market FR",
    desc: "Marché virtuel français.",
  },
  {
    date: "2021 — 2022",
    title: "Directeur, La Table d'Argent",
    desc: "Restaurant à Léguevin, Occitanie.",
  },
  {
    date: "7 ans",
    title: "Service militaire",
    desc: "Compétences de terrain, discipline, leadership.",
  },
];

const formation = [
  { date: "2011 — 2012", title: "CNAM-IPST Toulouse", desc: "BAC Science" },
  {
    date: "2005 — 2007",
    title: "Studio M — École Art & Multimédia",
    desc: "CRM Art et Infographie",
  },
  {
    date: "2004 — 2005",
    title: "Lycée Gabriel Péri",
    desc: "BEP Vente Action Marchande",
  },
];

const competences = [
  "Direction artistique",
  "Gestion de projet",
  "Illustration",
  "Édition",
  "Bande dessinée",
  "Marketing",
  "Management",
  "Commerce",
  "Développement produit",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/StudioMiyukini" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/van-jean-nguyen/" },
  { label: "Discord", href: "https://discord.gg/miyukini" },
  { label: "Email", href: "mailto:contact@miyukini.com" },
  { label: "cog.miyukini.com", href: "https://cog.miyukini.com" },
  { label: "catakana.fr", href: "https://catakana.fr" },
];

function Separator() {
  return (
    <hr className="border-zinc-200 dark:border-zinc-800 transition-colors" />
  );
}

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener"
      className="text-sm border border-zinc-200 dark:border-zinc-800 rounded-md px-3.5 py-1.5 hover:border-violet-500 transition-colors"
    >
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <main className="max-w-[720px] mx-auto px-5 sm:px-6">
      <Nav />

      {/* Intro */}
      <section className="pt-12 sm:pt-16 pb-10">
        <p className="font-mono text-[0.78rem] text-zinc-500 dark:text-zinc-400 mb-4">
          Studio Miyukini — Toulouse, France
        </p>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl tracking-tighter leading-[1.1] mb-4">
          Van Jean NGUYEN
        </h1>
        <p className="text-[1.05rem] text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
          Fondateur &amp; directeur du Studio Miyukini.
          <br />
          Édition manga, écosystèmes numériques souverains, culture japonaise.
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {socialLinks.slice(0, 4).map((l) => (
            <LinkPill key={l.label} {...l} />
          ))}
        </div>
      </section>

      <Separator />

      {/* À propos */}
      <section className="py-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-start">
        <div className="space-y-3">
          <p className="text-[0.95rem] text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Aventurier dans l&apos;âme, passionné de BD japonaise depuis
            toujours. J&apos;ai servi 7 ans sous les drapeaux, dirigé un
            restaurant, fondé un marché virtuel, et créé le Studio Miyukini pour
            y faire mûrir des talents et des projets.
          </p>
          <p className="text-[0.95rem] text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Aujourd&apos;hui je construis des outils numériques souverains — où
            chaque utilisateur est maître de ses données. Pas de cloud, pas de
            compromis.
          </p>
        </div>
        <div className="flex sm:flex-col gap-6 sm:gap-4 sm:text-right">
          {[
            ["7+", "ans de studio"],
            ["6", "projets actifs"],
            ["3", "langues"],
          ].map(([num, label]) => (
            <div key={label}>
              <strong className="font-heading text-2xl font-bold block leading-tight">
                {num}
              </strong>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Projets */}
      <section id="projets" className="py-10">
        <h2 className="font-heading font-bold text-xl tracking-tight mb-5">
          Projets
        </h2>

        <ProjetCard
          href="https://cog.miyukini.com"
          tag="Flagship"
          title="Miyukini COG"
          description="Cores Orchestrated Governance — Un espace de vie numérique souverain. Pas un logiciel, pas un cloud. Votre environnement, vos règles."
          tech="Rust · Offline-first · 8 Cores · Fédéré"
          flagship
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {projets.map((p) => (
            <ProjetCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <Separator />

      {/* Parcours */}
      <section id="parcours" className="py-10">
        <h2 className="font-heading font-bold text-xl tracking-tight mb-5">
          Parcours
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">
              Expérience
            </h3>
            <div className="space-y-4">
              {experience.map((e) => (
                <div key={e.title}>
                  <span className="font-mono text-[0.72rem] text-zinc-400 dark:text-zinc-600 block">
                    {e.date}
                  </span>
                  <strong className="font-heading text-[0.92rem] font-semibold block">
                    {e.title}
                  </strong>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">
              Formation
            </h3>
            <div className="space-y-4">
              {formation.map((f) => (
                <div key={f.title}>
                  <span className="font-mono text-[0.72rem] text-zinc-400 dark:text-zinc-600 block">
                    {f.date}
                  </span>
                  <strong className="font-heading text-[0.92rem] font-semibold block">
                    {f.title}
                  </strong>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-sm mt-8 mb-3">
              Compétences
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {competences.map((c) => (
                <span
                  key={c}
                  className="text-xs text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded px-2.5 py-1 transition-colors"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section id="contact" className="py-10">
        <h2 className="font-heading font-bold text-xl tracking-tight mb-2">
          Contact
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
          Basé à Saint-Orens-de-Gameville, Occitanie.
        </p>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((l) => (
            <LinkPill key={l.label} {...l} />
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-xs text-zinc-400 dark:text-zinc-600 transition-colors">
        &copy; 2026 Studio Miyukini
      </footer>
    </main>
  );
}
