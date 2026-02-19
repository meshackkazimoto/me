import Link from "next/link";
import type { Project } from "@/data/profile";

type ProjectLinksProps = {
  project: Project;
  className?: string;
};

function isExternalLink(href: string) {
  return /^https?:\/\//.test(href);
}

export function ProjectLinks({ project, className }: ProjectLinksProps) {
  const projectUrl = project.projectUrl?.trim();
  const githubUrl = project.githubUrl?.trim();
  const hasProjectUrl = Boolean(projectUrl);
  const hasGithubUrl = Boolean(githubUrl);
  const isClosedSource = project.openSource === false;
  const shouldRender = hasProjectUrl || hasGithubUrl || isClosedSource;

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={
        className ??
        "mt-5 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em]"
      }
    >
      {hasProjectUrl && projectUrl ? (
        <Link
          href={projectUrl}
          target={isExternalLink(projectUrl) ? "_blank" : undefined}
          rel={isExternalLink(projectUrl) ? "noreferrer" : undefined}
          className="text-muted underline underline-offset-4 hover:text-fg"
        >
          Live project
        </Link>
      ) : null}
      {hasGithubUrl && githubUrl ? (
        <Link
          href={githubUrl}
          target={isExternalLink(githubUrl) ? "_blank" : undefined}
          rel={isExternalLink(githubUrl) ? "noreferrer" : undefined}
          className="text-muted underline underline-offset-4 hover:text-fg"
        >
          GitHub
        </Link>
      ) : null}
      {isClosedSource ? (
        <span className="text-muted">Closed source</span>
      ) : null}
    </div>
  );
}
