import { featuredClient, localBusinessSites, mvpClients, type ClientProject } from "./clients";

/*
 * The ways clients work with Devian Labs. Each entry renders a page at
 * /services/<slug> through components/site/ServicePage.tsx.
 */

export type Service = {
  slug: string;
  /** Short label for cards and nav. */
  name: string;
  /** Search title (without the site suffix) and description. */
  seo: { title: string; description: string };
  /** Page <h1>. Wrap a word in *asterisks* for the serif italic accent. */
  headline: string;
  summary: string;
  /** One-line description used on cards and in metadata. */
  card: string;
  /** Who it's for, shown on cards. */
  forWho: string;
  problem: { heading: string; body: string[] };
  included: { heading: string; items: { title: string; desc: string }[] };
  process: { heading: string; steps: { title: string; desc: string }[] };
  fit: { good: string[]; notGood: string[] };
  /** Case studies or client work shown as proof on the page. */
  proof?: { heading: string; items: ClientProject[] };
  cta: string;
};

export const services: Service[] = [
  {
    slug: "software-development",
    name: "Custom software",
    seo: {
      title: "Custom Software Development: Mobile, Web and Desktop",
      description: "End-to-end custom software from one team: mobile apps, web apps, desktop apps, browser extensions, plugins, automations and backends.",
    },
    headline: "Custom software, *on any platform.*",
    summary:
      "End-to-end delivery for teams who know what they need. Mobile, web, desktop, browser extensions, plugins, automations and backends, all from one team that ships its own products on the same platforms.",
    card: "A defined project, built end to end. Mobile, web, desktop, extensions, plugins, automations and backends.",
    forWho: "Teams with a clear brief",
    problem: {
      heading: "One team, every surface.",
      body: [
        "Most projects touch more than one platform: an app and its backend, a desktop tool and its updater, a SaaS product and the browser extension that feeds it. Hand each piece to a different vendor and the gaps between them become your problem.",
        "We build the whole thing. Our own products run on macOS, Windows, Linux, Android, iOS and the web, with Rust, TypeScript, Dart and serverless backends behind them. Client work gets the same engineering.",
      ],
    },
    included: {
      heading: "What we build.",
      items: [
        { title: "Mobile apps", desc: "Android and iOS apps in Flutter, with offline support, push notifications, in-app purchases and store releases handled." },
        { title: "Web applications", desc: "Customer-facing products, dashboards, admin panels and SaaS platforms in React and Next.js." },
        { title: "Desktop apps", desc: "Native cross-platform apps with Tauri and Rust: fast to start and small to ship, on macOS, Windows and Linux." },
        { title: "Extensions and plugins", desc: "Browser extensions, editor plugins, MCP servers and integrations that put your product inside the tools people already use." },
        { title: "Automations", desc: "Workflows, data pipelines, scheduled jobs and AI agents that take repetitive work off your team." },
        { title: "Backends and APIs", desc: "APIs, databases, auth, payments, webhooks and edge workers, designed to be secure and cheap to run." },
      ],
    },
    process: {
      heading: "Transparent, milestone-driven delivery.",
      steps: [
        { title: "Requirements and scope", desc: "We understand the problem before writing code. Requirements, success criteria and scope are agreed in writing, so there are no surprises later." },
        { title: "Architecture", desc: "Data models, API contracts and infrastructure are designed before the build starts. This is where most projects go wrong, so we don't rush it." },
        { title: "Iterative build", desc: "We build in milestones and you see working software every week. If scope changes, we tell you the time and cost impact before we proceed." },
        { title: "Deploy and hand over", desc: "We deploy to your infrastructure, document the system and walk your team through the code. You own everything, with no lock-in." },
      ],
    },
    fit: {
      good: [
        "Team with clear requirements who needs execution",
        "Startup scaling past MVP that needs a proper technical foundation",
        "Company with an internal problem off-the-shelf software doesn't solve",
        "Product that needs a new platform: a desktop app, an extension, a mobile client",
      ],
      notGood: [
        "No defined requirements yet (see MVP from idea)",
        "Need 24/7 support or on-call engineering",
        "Looking for the lowest possible hourly rate",
      ],
    },
    proof: {
      heading: "Software people actually use.",
      items: [featuredClient],
    },
    cta: "Send us a brief on what you need built.",
  },
  {
    slug: "mvp-from-idea",
    name: "MVP from idea",
    seo: {
      title: "MVP Development: From Idea to Launch in Weeks",
      description: "We turn your idea into a working web or mobile product in 4 to 8 weeks: tightly scoped, shipped to real users, with code you own.",
    },
    headline: "From idea to *shipped product*, in weeks.",
    summary:
      "You have an idea and a deadline. We turn it into a working product you can put in front of users. Not an over-engineered v1, but the lean version that tests your assumptions.",
    card: "Your idea, scoped tightly and shipped as a working product in 4 to 8 weeks.",
    forWho: "Founders and new ventures",
    problem: {
      heading: "Most MVPs are built wrong from the start.",
      body: [
        "Either the team spends six months building something complete before anyone has tested whether people want it, or they hire an agency that bills by the hour and has every reason to make things complex.",
        "The right MVP is the smallest thing that tests your core assumption. One problem, one user flow, shipped fast enough that you still have budget left to act on what you learn. It's how we launch our own products too.",
      ],
    },
    included: {
      heading: "A working product you can put in front of users.",
      items: [
        { title: "A shipped product", desc: "A live web or mobile application that real users can use. Not a prototype or a demo." },
        { title: "A clean codebase", desc: "Code you own completely, documented and structured so your next engineer can pick it up." },
        { title: "Fast turnaround", desc: "4 to 8 weeks depending on scope. We scope tightly so the timeline doesn't slip." },
        { title: "Direct communication", desc: "You work with the people building your product. No account managers, no handoffs." },
      ],
    },
    process: {
      heading: "Three steps. No surprises.",
      steps: [
        { title: "Scope call", desc: "60 to 90 minutes on your idea, your users and what success looks like. You leave with a written scope: what we're building, what we're not, and why." },
        { title: "Build", desc: "Short cycles, with a working version on staging every week. You see progress constantly, and scope changes are handled in the open." },
        { title: "Launch", desc: "We deploy to production, hand over the code with documentation, and stay available for a month after launch." },
      ],
    },
    fit: {
      good: [
        "Founder with an idea and a 6 to 10 week window",
        "Company team testing a new product line",
        "Side project that needs to ship before momentum runs out",
        "Existing product that needs a specific new feature fast",
      ],
      notGood: [
        "No clarity yet on who the user is or what problem you're solving",
        "Expecting a complete product with every feature in week one",
        "Looking for the cheapest possible option",
      ],
    },
    proof: {
      heading: "Built with exactly this process.",
      items: mvpClients,
    },
    cta: "Tell us about your idea. We reply within a day.",
  },
  {
    slug: "technology-partner",
    name: "Technology partner",
    seo: {
      title: "Technology Partner: Your Long-Term Product Team",
      description: "A long-term engineering partner on a monthly retainer. We build, run and grow your product with you, across every platform it lives on.",
    },
    headline: "Your long-term *product team.*",
    summary:
      "Some products don't end at launch. We join as your ongoing engineering team on a monthly retainer, and we build, run and grow the product with you over years, not sprints.",
    card: "An ongoing product team on a monthly retainer. We build, run and grow your product with you.",
    forWho: "Businesses in it for the long run",
    problem: {
      heading: "Software is never finished.",
      body: [
        "Launch is where the real work starts: users ask for things, platforms change, the backend needs to scale and the bugs that only show up in production need someone who knows the code.",
        "Hiring a full in-house team is slow and expensive, and project-by-project agencies forget everything between contracts. A technology partner gives you a team that knows your product, stays with it, and thinks about where it should be next year.",
        "It's how we run our own products. Devian Desktop, Betelgeuse, Mohur and Campfyr are all built and maintained by the same team, release after release.",
      ],
    },
    included: {
      heading: "What a partnership looks like.",
      items: [
        { title: "A dedicated team", desc: "The same engineers every month, who know your codebase, your users and your business." },
        { title: "Roadmap together", desc: "We plan with you each month: what to build next, what to fix, what to leave alone." },
        { title: "Build and run", desc: "New features, releases, infrastructure, monitoring and fixes, across every platform your product lives on." },
        { title: "Product thinking", desc: "We bring what we've learned shipping our own products: what to measure, what to cut, when to rebuild." },
        { title: "Predictable cost", desc: "A fixed monthly retainer, sized to the work. No surprise invoices, and you can scale it up or down." },
        { title: "You own everything", desc: "Code, infrastructure, accounts and data stay in your name. Documented, so you're never locked in." },
      ],
    },
    process: {
      heading: "How we start.",
      steps: [
        { title: "Get to know each other", desc: "A conversation about your product, your goals for the next year and how you like to work." },
        { title: "Audit or kickoff", desc: "For an existing product, we review the code and infrastructure first. For a new one, we scope the first release." },
        { title: "First month", desc: "We agree a monthly plan and retainer, ship the first milestone, and set up a rhythm of weekly updates and monthly planning." },
        { title: "Grow together", desc: "Each month we review what shipped and what's next, and adjust the team as the product grows." },
      ],
    },
    fit: {
      good: [
        "Business whose product is core to how it makes money",
        "Founder who needs an engineering team but isn't ready to hire one",
        "Company with a live product and no one left who knows the code",
        "Team that wants a partner thinking about the product, not just tickets",
      ],
      notGood: [
        "One-off project with a fixed end date (see Custom software)",
        "Looking for individual contractors to staff your team",
        "Need 24/7 on-call operations",
      ],
    },
    cta: "Tell us where you want your product to be in a year.",
  },
  {
    slug: "helping-biz-go-digital",
    name: "Go digital",
    seo: {
      title: "Website Design for Local Businesses",
      description: "Fast, mobile-first websites that help local businesses get found on Google and turn searches into visits, calls and sales.",
    },
    headline: "Bring your business *online.*",
    summary:
      "Your customers look you up before they walk in. We build fast, modern websites that make local businesses easy to find, easy to trust and easy to buy from.",
    card: "Fast, modern websites for shops, hotels and service businesses that bring in customers.",
    forWho: "Local businesses",
    problem: {
      heading: "A great business with no online presence is invisible.",
      body: [
        "Most local businesses still rely on word of mouth and a phone number. But customers search before they decide, and if you don't show up, or show up with a slow, dated site, they pick the competitor who does.",
        "You don't need a 50-page website. You need a fast, trustworthy one that answers what customers ask, works perfectly on a phone, and turns a search into a visit, a call or a sale.",
      ],
    },
    included: {
      heading: "A website that works for your business.",
      items: [
        { title: "Fast and modern", desc: "Pages that load instantly and look current, built on the same stack we use for our products." },
        { title: "Mobile-first", desc: "Most of your customers are on a phone. Your site is designed for that screen first." },
        { title: "Found on search", desc: "Set up to rank for local searches, so customers in your area find you." },
        { title: "Yours to keep", desc: "Your own domain and your own site. No monthly platform lock-in and no surprise fees." },
      ],
    },
    process: {
      heading: "Live in a couple of weeks.",
      steps: [
        { title: "Talk", desc: "We learn about your business, your customers and what you want people to do when they find you." },
        { title: "Design and build", desc: "We write, design and build the site, and share a preview link for your feedback." },
        { title: "Go live", desc: "We connect your domain, set up search and analytics, and hand everything over to you." },
      ],
    },
    fit: {
      good: [
        "Local business with no website, or a dated one",
        "Shop or agency that relies on walk-ins and referrals",
        "Service provider who wants to be found on Google",
        "Anyone who needs a clean, credible online presence fast",
      ],
      notGood: [
        "Large e-commerce catalogue with complex inventory",
        "Custom web app or internal tool (see Custom software)",
        "Looking for the cheapest template you can find",
      ],
    },
    proof: {
      heading: "Real sites for real local businesses.",
      items: localBusinessSites,
    },
    cta: "Tell us about your business. We reply within a day.",
  },
];

export function getService(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
