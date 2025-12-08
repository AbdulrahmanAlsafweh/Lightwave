const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lightwave.sy";
const metadataBaseUrl = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
const now = new Date();

export default function sitemap() {
  const routes = [
    "/ar",
    "/ar/services",
    "/ar/about",
    "/ar/contact",
    "/en",
    "/en/services",
    "/en/about",
    "/en/contact",
  ];

  return routes.map((path) => ({
    url: `${metadataBaseUrl.replace(/\/$/, "")}${path}`,
    lastModified: now,
  }));
}
