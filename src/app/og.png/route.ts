import { buildOgImage } from "@/lib/og";

/* The default share image, at a .png URL so crawlers can tell its format from the link. */

export const dynamic = "force-static";

export function GET() {
  return buildOgImage("We build, launch and scale software.", "Powerful software doesn't have to be complex or expensive.", "cyan");
}
