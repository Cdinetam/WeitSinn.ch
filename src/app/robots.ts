import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.weitsinn.ch/sitemap.xml",
    host: "https://www.weitsinn.ch",
  };
}
