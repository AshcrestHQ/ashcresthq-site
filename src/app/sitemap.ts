import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ashcresthq.dpdns.org";
  const pages = [
    "",
    "projects",
    "docs",
    "contribute",
    "community",
    "blog",
    "team",
    "aegis/privacy",
    "aegis/terms",
  ];

  return pages.map((page) => ({
    url: page === "" ? base : `${base}/${page}`,
    lastModified: new Date(),
  }));
}
