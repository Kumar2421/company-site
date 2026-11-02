import type { MetadataRoute } from "next";

const BASE_URL = "https://home.mlforge.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/company", "/support", "/udumalpet", "/category/all", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date("2026-07-31"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.6,
  }));
}
