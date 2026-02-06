import Link from "next/link";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Blog | ${profile.name}`,
  description: "Technical essays and systems thinking."
};

const posts: Array<{ title: string; date: string; href: string; summary: string }> = [];

export default function BlogPage() {
  return (
    <Section eyebrow="Writing" title="Technical essays and field notes">
      {posts.length === 0 ? (
        <div className="border border-border bg-surface p-6 text-sm text-muted">
          New essays are in development. Expect deep dives on fintech architecture,
          product reliability, and engineering leadership.
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="border border-border bg-surface p-6 transition-colors hover:border-fg"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {post.date}
              </p>
              <h2 className="mt-3 font-display text-2xl text-fg">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-muted">{post.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
