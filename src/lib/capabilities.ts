import { Smartphone, Globe, Monitor, Puzzle, Bot, Workflow, Server, Blocks, type LucideIcon } from "lucide-react";

/*
 * What Devian Labs builds for clients. `proof` lists product slugs (lib/products.ts)
 * that show the capability in production.
 */
export const capabilities: { name: string; icon: LucideIcon; desc: string; proof: string[] }[] = [
  {
    name: "Mobile apps",
    icon: Smartphone,
    desc: "Android and iOS apps in Flutter, offline-first when it matters, with payments and store releases handled.",
    proof: ["mohur", "campfyr", "khao"],
  },
  {
    name: "Web applications",
    icon: Globe,
    desc: "Products, dashboards, admin consoles and storefronts in React and Next.js, fast and search-friendly.",
    proof: ["khao", "mohur"],
  },
  {
    name: "Desktop apps",
    icon: Monitor,
    desc: "Native apps for macOS, Windows and Linux with Tauri and Rust: small, fast and auto-updating.",
    proof: ["devian-desktop", "betelgeuse"],
  },
  {
    name: "Extensions",
    icon: Puzzle,
    desc: "Browser and editor extensions that put your product inside the tools people already have open.",
    proof: [],
  },
  {
    name: "Plugins and integrations",
    icon: Blocks,
    desc: "Plugins, webhooks, importers and third-party API integrations that connect systems that don't talk to each other.",
    proof: ["betelgeuse", "devian-desktop"],
  },
  {
    name: "AI agents and MCP",
    icon: Bot,
    desc: "MCP servers, agent tooling and LLM features with structured output, built with permissions in mind.",
    proof: ["devian-desktop", "betelgeuse", "campfyr"],
  },
  {
    name: "Automations",
    icon: Workflow,
    desc: "Workflows, scheduled jobs, data pipelines and internal tools that take repetitive work off your team.",
    proof: [],
  },
  {
    name: "Backends and APIs",
    icon: Server,
    desc: "APIs, auth, databases, sync engines, security rules and edge workers, designed to be secure and cheap to run.",
    proof: ["campfyr", "mohur"],
  },
];
