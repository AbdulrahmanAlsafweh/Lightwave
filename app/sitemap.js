import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lightwave.sy";
const metadataBaseUrl = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services",
    "/about",
    "/contact",
    "/ar",
    "/ar/services",
    "/ar/about",
    "/ar/contact",
  ];

  return routes.map((path) => ({
    url: `${metadataBaseUrl.replace(/\/$/, "")}${path}`,
    lastModified: now,
  }));
}
