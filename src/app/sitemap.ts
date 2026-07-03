import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bhanuworks.com";
  const routes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/work",
    "/work/qarpul",
    "/work/tapserve",
    "/work/hvr-media-house",
    "/book-consultation",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
