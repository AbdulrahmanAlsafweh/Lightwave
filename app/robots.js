const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lightwave.sy";
const metadataBaseUrl = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${metadataBaseUrl.replace(/\/$/, "")}/sitemap.xml`,
    host: metadataBaseUrl.replace(/\/$/, ""),
  };
}
