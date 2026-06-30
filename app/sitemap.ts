import type { MetadataRoute } from "next";
import { essays } from "@/lib/content";

const BASE = "https://arabella-grace-media.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/essays",
    "/notes",
    "/about",
    "/work-with-me",
    "/subscribe",
    "/listen",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const essayRoutes = essays.map((e) => ({
    url: `${BASE}/essays/${e.slug}`,
    lastModified: new Date(e.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...essayRoutes];
}
