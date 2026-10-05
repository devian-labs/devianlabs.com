/*
 * Products Devian Labs designs, builds and runs in-house.
 * Single source for the home page, /products and each /products/<slug> case study.
 * Facts here come from each product's repo, docs and website; keep them that way.
 */

export type ProductVisual =
  | { kind: "desktop"; src: string; alt: string }
  | { kind: "phones"; screens: { src: string; alt: string }[] };

export type Product = {
  slug: string;
  name: string;
  icon: string;
  /** Extra classes for icons that need help standing off the dark background. */
  iconClass?: string;
  /** Accent used for glows and dots on the case study. */
  accent: string;
  category: string;
  tagline: string;
  summary: string;
  platforms: string[];
  status: string;
  openSource?: boolean;
  stack: string[];
  /** Capabilities this product demonstrates, matching names in lib/capabilities.ts. */
  proves: string[];
  links: { label: string; href: string }[];
  github?: string;
  install?: string;
  visual: ProductVisual;
  gallery?: { src: string; alt: string; caption: string }[];
  problem: string[];
  quote?: string;
  built: { title: string; desc: string }[];
  engineering: { title: string; desc: string }[];
  decisions: { title: string; desc: string }[];
  statusNote: string;
  next?: string[];
};

export const products: Product[] = [
  {
    slug: "devian-desktop",
    name: "Devian Desktop",
    icon: "/products/devian-desktop.png",
    accent: "#658cc2",
    category: "Developer tools",
    tagline: "A control center for the AI coding agents on your machine.",
    summary:
      "Devian shows what Claude Code, Codex, Cursor, OpenCode and Antigravity actually did on your machine: every session, command and file edit, the servers they left running, what they remember and how many tokens they used. Free, open source and fully local.",
    platforms: ["macOS", "Windows", "Linux"],
    status: "Version 2.0",
    openSource: true,
    stack: ["Rust", "Tauri 2", "React 19", "TypeScript", "SQLite", "MCP"],
    proves: ["Desktop apps", "Plugins and integrations", "AI agents and MCP"],
    links: [
      { label: "devian.app", href: "https://devian.app" },
      { label: "Download", href: "https://github.com/devian-labs/devian/releases/latest" },
    ],
    github: "https://github.com/devian-labs/devian",
    install: "brew install --cask devian-labs/tap/devian-desktop",
    visual: { kind: "desktop", src: "/products/devian-desktop/dashboard.png", alt: "Devian Desktop overview: recent agent sessions, risky actions, leftover servers and token usage" },
    problem: [
      "AI coding agents now do a lot of work on developers' machines, and most of it happens out of sight. An agent runs commands, edits files, starts dev servers and Docker containers, writes to its own memory and burns through tokens. When the session ends, you're left to piece together what happened.",
      "Every agent keeps its history in its own format, in its own folder. There was no single place to see what they did, what they left running, or how close you are to your plan limits.",
    ],
    built: [
      { title: "Sessions", desc: "One timeline across every agent: prompts, each command run and each file edited, with risky actions flagged." },
      { title: "Runtime", desc: "Processes, ports and Docker containers traced back to the session that started them. Leftovers stop in one click." },
      { title: "Memory", desc: "Everything agents load into context, from CLAUDE.md and AGENTS.md to Cursor rules and Codex memories. Read it, edit it or forget it." },
      { title: "Usage and plan limits", desc: "Tokens per day, agent, project and model, plus Claude and Codex 5-hour and weekly limits with their reset times." },
      { title: "Cleanup", desc: "Old transcripts, checkpoints, node_modules, build artifacts and Docker leftovers, moved to the Trash so nothing is lost." },
      { title: "MCP server", desc: "Read-only tools that let agents check running servers, find a free port and see what other agents did, instead of guessing." },
    ],
    engineering: [
      { title: "One adapter per agent", desc: "Each agent stores sessions differently. A Rust adapter per agent (Claude Code, Codex, OpenCode, Cursor, Antigravity) normalises them into one timeline, including several Claude Code accounts side by side." },
      { title: "Risk detection", desc: "A rules engine scans agent transcripts for force pushes, sudo, rm -rf outside the project, curl | sh, .env edits and global installs, and surfaces them for review." },
      { title: "Process lineage", desc: "Processes, ports and containers are traced back to the agent session that spawned them, so a server still running after the session ended shows up as a leftover." },
      { title: "Token accounting", desc: "Usage is broken down by day, agent, project and model, including cache reads and writes, and priced at API-equivalent rates." },
      { title: "An MCP server for agents", desc: "devian-desktop --mcp exposes read-only tools such as list_dev_servers, get_free_port and recent_agent_activity. Setup is one click, and it backs up each agent's config first." },
      { title: "Safe by default", desc: "Memory edits keep version history with conflict detection, cleanup goes to the Trash, and auto-updates from GitHub Releases are verified against a signing key." },
    ],
    decisions: [
      { title: "Local only", desc: "Agent history contains prompts, code and secrets. Devian reads it where it already lives and never uploads it. There are no accounts." },
      { title: "Read-only by default", desc: "Devian observes agents rather than controlling them, and the MCP server only exposes read-only tools." },
      { title: "One view across agents", desc: "Developers rarely use one agent. Devian puts five side by side." },
      { title: "Native and cross-platform", desc: "A Rust backend with a React frontend on Tauri, so it starts fast and runs on macOS, Windows and Linux." },
    ],
    statusNote:
      "Devian started as a control center for a cluttered dev machine: projects, ports, Docker and disk. Version 2.0 rebuilt it around AI coding agents. It's available for macOS through Homebrew or a direct download, with Windows and Linux builds in testing. Every feature is free.",
  },
  {
    slug: "betelgeuse",
    name: "Betelgeuse",
    icon: "/products/betelgeuse-icon.png",
    accent: "#e2541f",
    category: "Productivity",
    tagline: "Notes, docs and databases that stay yours.",
    summary:
      "A block-based workspace where every page is a plain Markdown file in a git repository on your own computer, and your AI agents can read only the pages you choose to share.",
    platforms: ["macOS", "Windows", "Linux"],
    status: "Early preview · v0.2",
    openSource: true,
    stack: ["Rust", "Tauri 2", "React 19", "TipTap", "Git", "MCP", "Next.js"],
    proves: ["Desktop apps", "AI agents and MCP", "Backends and APIs"],
    links: [
      { label: "betelgeuse.devianlabs.com", href: "https://betelgeuse.devianlabs.com" },
      { label: "Download", href: "https://github.com/devian-labs/betelgeuse/releases/latest" },
    ],
    github: "https://github.com/devian-labs/betelgeuse",
    visual: { kind: "desktop", src: "/products/betelgeuse/editor.jpg", alt: "The Betelgeuse editor with the Welcome guide open" },
    gallery: [
      { src: "/products/betelgeuse/board.jpg", alt: "A Betelgeuse database in board view", caption: "Databases with table, board and calendar views" },
      { src: "/products/betelgeuse/history.jpg", alt: "Per-page history in Betelgeuse", caption: "Every save is a git commit you can preview and restore" },
      { src: "/products/betelgeuse/agents.jpg", alt: "Connecting AI agents to Betelgeuse over MCP", caption: "Connect Claude, Cursor or any MCP client in one step" },
      { src: "/products/betelgeuse/slash.jpg", alt: "The slash command menu in the Betelgeuse editor", caption: "Type / for any block" },
    ],
    problem: [
      "Workspaces like Notion keep your knowledge in a proprietary database, behind an account and a subscription. Getting it out means an export ritual, and what comes out is rarely what went in.",
      "AI makes it worse. Agents are most useful when they can read your notes, but most tools give them everything or nothing. There was no way to say: this page, not that one.",
    ],
    quote: "Your knowledge deserves a home, not a subscription.",
    built: [
      { title: "A block editor", desc: "Type / for headings, to-dos, callouts, tables, columns, toggles and code. Wikilinks, backlinks, covers, tabs and a command palette." },
      { title: "Databases", desc: "Table, board and calendar views over pages, with properties and relations." },
      { title: "History and sync", desc: "Auto-commits as you write, per-page history with restore, and sync to GitHub, GitLab or any git remote." },
      { title: "AI on your terms", desc: "Claude, Cursor or any MCP client can search, read and update notes. You choose which pages they see." },
      { title: "Import", desc: "Bring in a Notion export or an Obsidian vault, databases and all." },
    ],
    engineering: [
      { title: "Markdown and git as the database", desc: "A shared Rust engine, betelgeuse-core, reads and writes pages, frontmatter, databases, links and trash as plain files. It auto-commits after a few idle seconds and syncs with the system's own git credentials." },
      { title: "A permissioned MCP server", desc: "Eleven tools, from search_notes to query_database. Visibility is enforced on every one of them, including listings, search, backlinks, history and database rows, and hiding a page hides its sub-pages too." },
      { title: "Every agent edit is a commit", desc: "Each change an agent makes lands as its own git commit, so you can review it or undo it. Commit messages for hidden pages say \"private page\", so the git log never leaks their titles." },
      { title: "High-fidelity Notion import", desc: "Rebuilds Notion databases with their property types and views, keeps icons, covers, colours, toggles and columns, and downloads remote images so every page is fully local." },
      { title: "One engine, every shell", desc: "The core crate is shared by the desktop app and a mobile shell for iOS and Android that is in progress." },
    ],
    decisions: [
      { title: "Files over databases", desc: "Pages are Markdown files in a folder you own. Open them in any editor, any time, even if Betelgeuse disappears." },
      { title: "Agents see only what you share", desc: "A workspace policy chooses between \"everything except hidden pages\" and \"only shared pages\", and the server enforces it." },
      { title: "Free and open source", desc: "MIT licensed. Sponsorship funds signed builds." },
    ],
    statusNote:
      "Betelgeuse is an early preview for macOS, Windows and Linux. Builds aren't code-signed yet, so the first launch asks you to confirm.",
    next: ["Faster full-text search", "Database formulas", "Signed builds", "Mobile apps", "Simultaneous edits by you and an agent"],
  },
  {
    slug: "mohur",
    name: "Mohur",
    icon: "/products/mohur.png",
    iconClass: "p-1 bg-gradient-to-br from-zinc-700 to-zinc-900 ring-1 ring-amber-300/30",
    accent: "#c9a227",
    category: "Community",
    tagline: "Coin collecting, for people who see history in coins.",
    summary:
      "A home for your collection, a catalogue of the coins that were actually issued, short lessons on the history behind them, and a community that verifies coins without ever putting a price on them.",
    platforms: ["Android", "iOS (coming)"],
    status: "Open beta on Android",
    stack: ["Flutter", "Dart", "Firebase", "Cloudflare Workers", "R2", "Next.js"],
    proves: ["Mobile apps", "Backends and APIs", "Web applications"],
    links: [
      { label: "mohur.devianlabs.com", href: "https://mohur.devianlabs.com" },
      { label: "Join the Android beta", href: "https://groups.google.com/g/mohur-beta-testers" },
    ],
    visual: {
      kind: "phones",
      screens: [
        { src: "/products/mohur/feed.webp", alt: "Mohur community feed with the coin of the day" },
        { src: "/products/mohur/catalogue.webp", alt: "Mohur catalogue progress by country" },
        { src: "/products/mohur/album.webp", alt: "A collector's coins grouped by era in Mohur" },
      ],
    },
    gallery: [
      { src: "/products/mohur/leaderboard.webp", alt: "Mohur leaderboard ranked by XP", caption: "Reputation earned by verifying coins well" },
      { src: "/products/mohur/chats.webp", alt: "Mohur chats and community spaces", caption: "Chats and community spaces for collectors" },
    ],
    problem: [
      "Most coin collections start by accident: a tin from a grandparent, a coin that turned up in your change. Somewhere along the way it stops being money and starts being a story.",
      "Then the hobby gets hard. Half the coins are in a biscuit tin and nobody remembers what's there. When you want to know if a coin is real, everyone you could ask is trying to sell you something. Collectors had spreadsheets, dealer websites and scattered forums, but not one place built for them.",
    ],
    built: [
      { title: "Album", desc: "Every coin you own, photographed, graded and noted with where it came from and why it matters." },
      { title: "Catalogue", desc: "The coin types that were actually issued, from punch-marked karshapanas to the first Republic rupee, so you can see what you're missing." },
      { title: "Learn", desc: "Short lessons on who struck these coins, when and why, written as history rather than reference tables." },
      { title: "Community verification", desc: "Share a coin and fellow collectors vote on whether it's genuine and how it grades. Never a price tag." },
      { title: "Museum", desc: "Published coins to browse by period, metal and verdict, with a featured coin every day." },
      { title: "Admin console", desc: "A web console where the team writes courses and lessons and sends notifications to collectors." },
    ],
    engineering: [
      { title: "Reputation-weighted verification", desc: "A vote's weight combines the voter's level, their track record in that era and their role, capped at 8×. Consensus needs two quorums and 70% agreement. A coin with no agreement after six votes is marked Disputed." },
      { title: "Server-side reputation", desc: "XP is recomputed on the server and verified against the user's Firebase ID token. Security rules stop clients from writing their own XP." },
      { title: "Privacy as a data rule", desc: "A coin's public view strips its financial details, and 879 lines of tested Firestore rules enforce the same boundary on the server." },
      { title: "Private images at the edge", desc: "A Cloudflare Worker serves coin photos from a private R2 bucket only to signed-in users, verifying each Firebase token's signature, while keeping URLs stable for the app's image cache." },
      { title: "Clean, testable layers", desc: "Features, data and a pure-Dart domain, with an in-memory backend that can be swapped for Firestore. That keeps 600+ app tests fast." },
    ],
    decisions: [
      { title: "Story first", desc: "Every screen starts from a feeling a collector already knows, and only then says what Mohur does about it." },
      { title: "No prices in the community", desc: "The moment coins are valued in public, the conversation turns to selling. Mohur keeps it about the coins and their history." },
      { title: "Built with collectors", desc: "An open beta on Android lets the people who care about the hobby shape it before the wider launch." },
      { title: "Free, with a fair model", desc: "Ads support the app and a one-time purchase removes them. No subscription." },
    ],
    statusNote:
      "Mohur is in open beta on Android: join the testers group, opt in on Google Play and install it like any other app. iPhone comes later.",
  },
  {
    slug: "campfyr",
    name: "Campfyr",
    icon: "/products/campfyr-icon.png",
    accent: "#f85915",
    category: "Travel",
    tagline: "One shared home for a group trip.",
    summary:
      "The plan, the people, the money and every photo, in one app that keeps working when the signal doesn't. Plan day by day with real road routes, keep tickets and stays in one wallet, split expenses and settle up by UPI, and share photos phone to phone.",
    platforms: ["Android", "iOS"],
    status: "Pre-release",
    stack: ["Flutter", "Dart", "SQLite", "Firebase", "Mapbox", "OpenStreetMap", "Claude API"],
    proves: ["Mobile apps", "Backends and APIs", "AI agents and MCP"],
    links: [{ label: "campfyr.devianlabs.com", href: "https://campfyr.devianlabs.com" }],
    visual: {
      kind: "phones",
      screens: [
        { src: "/products/campfyr/trips.webp", alt: "Campfyr trips list with illustrated destinations" },
        { src: "/products/campfyr/trip.webp", alt: "A trip's day view with weather and the next stop" },
        { src: "/products/campfyr/money.webp", alt: "Group expenses and settle-up in Campfyr" },
      ],
    },
    gallery: [
      { src: "/products/campfyr/plan.webp", alt: "Day plan with stops and photos", caption: "Plan day by day, with photos from each stop" },
      { src: "/products/campfyr/wallet.webp", alt: "Trip wallet with stays and contacts", caption: "Tickets, stays and contacts in one wallet" },
      { src: "/products/campfyr/day.webp", alt: "Day view with distance covered", caption: "Real road routes and distance covered" },
    ],
    problem: [
      "A group trip lives in five apps at once: the plan in WhatsApp, the tickets in Drive, the route in Maps, the money in a spreadsheet and the photos on six different phones. Nothing agrees, and half of it doesn't work when the signal drops in the hills.",
    ],
    quote: "800 photos across six phones. You want about 30 of them.",
    built: [
      { title: "Plan", desc: "A day strip and day map with real road routes, distance and drive time per leg, and stops for part of the group." },
      { title: "Trip wallet", desc: "Tickets, stays, transport, contacts and documents as cards with a copyable PNR, Call and Directions." },
      { title: "Expenses", desc: "Paise-exact equal and custom splits, balances, settle-up in the fewest payments, and Pay via UPI." },
      { title: "Photo memories", desc: "Photos shared phone to phone, with duplicates and near-duplicates caught, so the group keeps the 30 that matter." },
      { title: "Trip experience", desc: "Offline weather, rain nudges, and peaks, viewpoints, food and fuel discovered along the route." },
      { title: "Recap", desc: "Days, places, kilometres and spend after the trip, with shareable story cards." },
    ],
    engineering: [
      { title: "A local-first sync engine", desc: "Every change is an operation in an append-only log, ordered by a Lamport clock. Each field is its own last-writer-wins register, and peers compare version vectors to send only what's missing. Applying operations is commutative and idempotent." },
      { title: "An encrypted phone-to-phone mesh", desc: "Phones find each other over mDNS and talk over a WebSocket mesh. Every frame is sealed with ChaCha20-Poly1305 using a per-trip 256-bit key that travels only in the invite QR." },
      { title: "A cloud that can't read your trip", desc: "The operation log is mirrored to the cloud already encrypted. Membership is proven with a key-derived proof checked by security rules, tested in the emulator and against production." },
      { title: "Bandwidth-aware photo sharing", desc: "Phones gossip a thumbnail catalogue and pull originals only on request, in 64 KB chunks. SHA-256 catches identical files and a 64-bit perceptual hash catches near-duplicates." },
      { title: "Procedural destination art", desc: "Each trip gets a living illustration rendered from code: destination, landmarks, weather, local time, sun and moon position, moon phase and hemisphere-aware seasons." },
    ],
    decisions: [
      { title: "Offline first, sync second", desc: "Everything works without internet as the baseline. Connectivity is a bonus, not a requirement." },
      { title: "Privacy through encryption", desc: "The trip key never leaves the group, so the server stores data it cannot read." },
      { title: "Fair pricing", desc: "The first trip is free and joining a trip is always free." },
    ],
    statusNote:
      "Campfyr grew out of an earlier prototype for offline group travel. It's now in pre-release on Android and iOS, with store listings coming soon.",
  },
  {
    slug: "khao",
    name: "Khao",
    icon: "/products/khao.png",
    accent: "#dc2626",
    category: "Small business",
    tagline: "QR menus and table ordering for small food businesses.",
    summary:
      "Khao turns any Android phone into a live control room for table QR codes, waiter alerts, kitchen tickets and orders. Diners scan the table and order from their browser, with no app to install.",
    platforms: ["Android", "Web"],
    status: "Version 1.0",
    stack: ["Flutter", "Dart", "Firebase", "Next.js", "RevenueCat"],
    proves: ["Mobile apps", "Web applications", "Backends and APIs"],
    links: [{ label: "khao.app", href: "https://khao.app" }],
    visual: {
      kind: "phones",
      screens: [
        { src: "/products/khao/orders.webp", alt: "Khao orders by table, from incoming to done" },
        { src: "/products/khao/tables.webp", alt: "A QR code for every table, ready to print" },
        { src: "/products/khao/menu.webp", alt: "Khao menu items with availability toggles" },
      ],
    },
    gallery: [
      { src: "/products/khao/customise.webp", alt: "Khao menu customisation with a live customer preview", caption: "Brand the menu and preview it exactly as customers see it" },
      { src: "/products/khao/print.webp", alt: "Khao print-sized QR sheet", caption: "Print-ready QR sheets for the counter or each table" },
      { src: "/products/khao/staff.webp", alt: "Khao staff management", caption: "Staff sign in with their own number and see their role's view" },
    ],
    problem: [
      "Tea stalls, cafés, food trucks and small restaurants run on tight margins. They can't afford a point-of-sale system or a delivery platform that takes a cut of every order.",
      "Their customers are used to QR menus and table ordering from bigger chains. The gap between a large restaurant and a small one isn't because the technology is expensive. Nobody had built it for the small vendor.",
    ],
    built: [
      { title: "Digital menu", desc: "Items with photos, prices and categories. Mark something sold out in a tap, or import a menu from another shop." },
      { title: "A QR code per table", desc: "Print-ready QR posters for every table, so orders arrive at the right place." },
      { title: "Live orders", desc: "Orders move from Incoming to Accepted to Done, in real time on the vendor's phone." },
      { title: "Call waiter and bill", desc: "Diners can call a waiter or ask for the bill from the same page." },
      { title: "Staff roles", desc: "Owners, waiters and cooks each get their own view, including a kitchen display." },
      { title: "Your brand", desc: "Shop logo, colours and layout, previewed exactly as customers will see it." },
    ],
    engineering: [
      { title: "Zero-install ordering", desc: "The diner's menu is a fast web page. Orders and requests are written live to Firestore and appear on the vendor's phone instantly." },
      { title: "Phone-number identity", desc: "Owners and staff sign in with an OTP on their own phone number, and the app shows each person the view for their role." },
      { title: "Built for low-tech settings", desc: "Large tap targets, a five-minute setup flow and printable QR posters, designed for a stall, not a head office." },
      { title: "Separate environments", desc: "Development and production data are kept apart from day one, so testing never touches a real shop's orders." },
    ],
    decisions: [
      { title: "No app for diners", desc: "Asking a customer to install an app kills the order. Khao works in any phone browser." },
      { title: "Priced for 20 covers a day", desc: "The digital menu is free, and table ordering is a ₹49 Pro upgrade." },
      { title: "Fast to set up", desc: "Upload a menu, print a QR code, done." },
    ],
    statusNote: "Khao 1.0 runs on Android, with the diner menu on the web. It's being tested with small vendors.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
