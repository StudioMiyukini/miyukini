import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-4 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-md border-b border-transparent">
      <a href="/" className="font-heading font-bold text-lg tracking-tight">
        miyukini
      </a>
      <div className="flex items-center gap-5">
        <a href="#projets" className="hidden sm:inline text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projets</a>
        <a href="#a-propos" className="hidden sm:inline text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">À propos</a>
        <a href="#contact" className="hidden sm:inline text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
