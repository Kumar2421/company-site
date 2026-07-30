"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { BlogHeader } from "@/components/blog-header";
import { MonoLabel } from "@/components/ui/mono-label";
import { NovaButton } from "@/components/ui/nova-button";
import { Star } from "@/components/icons";
import {
  CATEGORY_STYLES,
  FEATURED,
  GRID_POSTS,
  OTHER_POSTS,
  type Category,
  type Post,
} from "@/lib/posts";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

export function BlogIndex({ children }: { children?: ReactNode }) {
  const [active, setActive] = useState<string>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const matches = (post: Post) => active === "All" || post.category === active;

  // Lists are a handful of items — filtering per render is cheaper than memo bookkeeping.
  const featured = matches(FEATURED) ? FEATURED : null;
  const grid = GRID_POSTS.filter(matches);
  const others = OTHER_POSTS.filter(matches);

  const shown = others.slice(0, visible);
  const isEmpty = !featured && grid.length === 0 && others.length === 0;

  function select(category: string) {
    setActive(category);
    setVisible(PAGE_SIZE);
  }

  return (
    <>
      <BlogHeader active={active} onSelect={select} />

      <main id="main" className="flex-1">
        <section className="pt-20 pb-20 sm:pt-28 sm:pb-28">
          <div className="container-column">
            <h1 className="text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.02] font-medium tracking-[-0.04em]">
              {active}
            </h1>

            {isEmpty && (
              <p className="mt-10 text-lead text-ink-60">
                No posts in this category yet.
              </p>
            )}

            {featured && (
              <Reveal
                delay={50}
                className="mt-12 overflow-hidden rounded-card bg-white shadow-card"
              >
                <a href="#post-featured" className="grid md:grid-cols-2 md:items-stretch">
                  <Image
                    src={featured.image!}
                    alt={featured.alt!}
                    width={872}
                    height={848}
                    priority
                    sizes="(max-width: 768px) 100vw, 436px"
                    className="aspect-[436/424] w-full object-cover md:h-full"
                  />

                  <div className="flex flex-col p-8">
                    <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-ink-08 px-3 py-1.5">
                      <Star className="size-3.5" />
                      <MonoLabel className="text-ink-60">Featured</MonoLabel>
                    </span>

                    <h2 className="mt-6 max-w-[22ch] text-h3 text-balance">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-lead text-ink-60">
                      Where enterprise AI budgets actually go.
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-12">
                      <span className="flex items-center gap-3">
                        <Image
                          src="/images/author-clara.jpg"
                          alt=""
                          width={40}
                          height={40}
                          className="size-10 rounded-full object-cover"
                        />
                        <MonoLabel className="text-ink">
                          <span className="block">{featured.author}</span>
                          <span className="block text-ink-56">{featured.date}</span>
                        </MonoLabel>
                      </span>

                      <CategoryPill category={featured.category} />
                    </div>
                  </div>
                </a>
              </Reveal>
            )}

            {grid.length > 0 && (
              <ul className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
                {grid.map((post, i) => (
                  <Reveal as="li" key={post.title} delay={(i % 3) * 50}>
                    <a href="#post" className="group block">
                      <Image
                        src={post.image!}
                        alt={post.alt!}
                        width={600}
                        height={358}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 275px"
                        className="aspect-[275/164] w-full rounded-card object-cover"
                      />

                      <h2 className="mt-5 text-lead font-medium text-balance transition-colors duration-150 group-hover:text-brand">
                        {post.title}
                      </h2>

                      <span className="mt-3 flex flex-wrap items-center gap-3">
                        <CategoryPill category={post.category} />
                        <MonoLabel>
                          {post.author} &nbsp; {post.date}
                        </MonoLabel>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>
            )}

            {others.length > 0 && (
              <>
                <Reveal className="mt-20">
                  <MonoLabel className="flex items-center gap-2 text-ink">
                    <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                    Others
                  </MonoLabel>
                </Reveal>

                <ul className="mt-6">
                  {shown.map((post, i) => (
                    <Reveal
                      as="li"
                      key={`${post.title}-${post.date}`}
                      delay={Math.min(i, 4) * 50}
                      className="border-t border-ink-08 last:border-b"
                    >
                      <a
                        href="#post"
                        className="flex flex-wrap items-center justify-between gap-4 px-2 py-6 transition-colors duration-150 hover:bg-ink-08/50"
                      >
                        <span className="text-lead">{post.title}</span>

                        <span className="flex flex-wrap items-center gap-6">
                          <MonoLabel>
                            {post.author} &nbsp; {post.date}
                          </MonoLabel>
                          <CategoryPill category={post.category} />
                        </span>
                      </a>
                    </Reveal>
                  ))}
                </ul>

                {visible < others.length && (
                  <div className="mt-10 flex justify-center">
                    <NovaButton
                      variant="soft"
                      size="md"
                      onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    >
                      Load more
                    </NovaButton>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {children}
      </main>
    </>
  );
}

function CategoryPill({ category }: { category: Category }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 font-mono text-label tracking-[0.06em] uppercase",
        CATEGORY_STYLES[category],
      )}
    >
      {category}
    </span>
  );
}
