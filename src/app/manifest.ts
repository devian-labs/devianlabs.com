import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Devian Labs",
    short_name: "Devian Labs",
    description: "A software studio that builds its own products and takes on client work on every platform.",
    start_url: "/",
    display: "browser",
    background_color: "#09090a",
    theme_color: "#09090a",
    icons: [
      { src: "/icon.png", sizes: "1024x1024", type: "image/png" },
      { src: "/apple-icon.png", sizes: "1024x1024", type: "image/png", purpose: "any" },
    ],
  };
}
