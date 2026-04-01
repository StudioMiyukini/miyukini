type Props = {
  href: string;
  tag: string;
  title: string;
  description: string;
  tech: string;
  flagship?: boolean;
};

export function ProjetCard({ href, tag, title, description, tech, flagship }: Props) {
  const base = "group block rounded-xl border p-5 transition-all duration-200";
  const style = flagship
    ? `${base} border-violet-200 dark:border-violet-500/25 bg-violet-50/40 dark:bg-violet-500/[0.03] hover:border-violet-300 dark:hover:border-violet-500/40 hover:shadow-sm`
    : `${base} border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-white/[0.02] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm`;

  return (
    <a href={href} target="_blank" rel="noopener" className={style}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[0.68rem] uppercase tracking-wider text-violet-600 dark:text-violet-400">{tag}</span>
        <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-violet-500 transition-colors">&nearr;</span>
      </div>
      <h3 className="font-heading font-semibold text-base mb-1">{title}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">{description}</p>
      <span className="font-mono text-[0.7rem] text-zinc-400 dark:text-zinc-600">{tech}</span>
    </a>
  );
}
