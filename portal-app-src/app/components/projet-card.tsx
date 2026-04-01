type ProjetCardProps = {
  href: string;
  tag: string;
  title: string;
  description: string;
  tech: string;
  flagship?: boolean;
  external?: boolean;
};

export function ProjetCard({
  href,
  tag,
  title,
  description,
  tech,
  flagship = false,
  external = false,
}: ProjetCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      className={`block border rounded-lg p-5 transition-colors ${
        flagship
          ? "border-violet-200 dark:border-violet-500/25 bg-violet-50/50 dark:bg-violet-500/[0.03] hover:border-violet-300 dark:hover:border-violet-500/45"
          : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[0.68rem] uppercase tracking-wide text-violet-600 dark:text-violet-400">
          {tag}
        </span>
        <span className="text-zinc-400 dark:text-zinc-600 text-sm transition-transform group-hover:translate-x-0.5">
          &nearr;
        </span>
      </div>
      <h3 className="font-heading font-semibold text-[1.1rem] mb-1">{title}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>
      <p className="font-mono text-[0.72rem] text-zinc-400 dark:text-zinc-600 mt-2">
        {tech}
      </p>
    </a>
  );
}
