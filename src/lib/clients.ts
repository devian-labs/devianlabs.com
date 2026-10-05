/* Client projects shown on the site. Only clients who agreed to be displayed. */

export type ClientProject = {
  name: string;
  kind: string;
  desc: string;
  href?: string;
  image?: string;
  stat?: string;
};

export const featuredClient: ClientProject = {
  name: "Nolia",
  kind: "Cloud kitchen · Built end to end",
  desc: "An artisanal dessert storefront where customers craft and order their own treats. Designed and built end to end, and live with real customers since launch.",
  href: "https://thenolia.com",
  image: "/clients/nolia.png",
  stat: "₹1.5 lakh+ in orders",
};

export const mvpClients: ClientProject[] = [
  {
    name: "Carryman",
    kind: "Human assistance · MVP",
    desc: "A human-assistance product that helps people get things done, from shopping runs to medical assistance and everyday errands.",
  },
];

export const localBusinessSites: ClientProject[] = [
  { name: "Aveline Homes", kind: "Real estate", desc: "", href: "https://avelinehomes.in/", image: "/clients/realestate.png" },
  { name: "The Balkrishna Palace", kind: "Hotel · Jeypore", desc: "", href: "https://balkrishnapalace.com/", image: "/clients/balkrishnapalace.png" },
  { name: "Siridi Sai Mobiles", kind: "Electronics store", desc: "", href: "https://devian-labs.github.io/Siridi-Sai-Mobiles/", image: "/clients/electronics.png" },
  { name: "Sri Ganesh Bike Point", kind: "Bike servicing · Jeypore", desc: "", href: "https://devian-labs.github.io/Sri-Ganesh-Bike-Point/", image: "/clients/bikepoint.png" },
];
