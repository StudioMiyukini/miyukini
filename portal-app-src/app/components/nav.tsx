"use client";

import { useTheme } from "./theme-provider";

export function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-5 bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
      <a href="#" className="font-heading font-bold text-lg tracking-tight">
        miyukini
      </a>
      <div className="flex items-center gap-5">
        <a href="#projets" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          Projets
        </a>
        <a href="#parcours" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          Parcours
        </a>
        <a href="#contact" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
          Contact
        </a>
        <button
          onClick={toggle}
          aria-label="Changer le thème"
          className="p-1.5 border border-zinc-200 dark:border-zinc-800 rounded-md text-zinc-500 dark:text-zinc-400 hover:border-violet-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          {theme === "dark" ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
