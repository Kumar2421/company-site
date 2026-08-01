import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { BlogIndex } from "@/components/sections/blog-index";
import { FinalCta } from "@/components/sections/final-cta";

const TITLE = "Resources";
const DESCRIPTION =
  "Engineering notes and delivery playbooks from the MLForge Studio team.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/category/all" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/category/all" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function CategoryAllPage() {
  return (
    <>
      {/* <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-card focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a> */}

      <BlogIndex>
        <FinalCta />
      </BlogIndex>

      <SiteFooter />
    </>
  );
}
