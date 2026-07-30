import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { BlogIndex } from "@/components/sections/blog-index";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "All — MLForge Studio Resources",
  description: "Engineering notes and delivery playbooks from the MLForge Studio team.",
};

export default function CategoryAllPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-card focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <BlogIndex>
        <FinalCta />
      </BlogIndex>

      <SiteFooter />
    </>
  );
}
