import { ReactNode } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiAppwrite,
  SiClerk,
  SiNextdotjs,
  SiSanity,
  SiShadcnui,
  SiStreamlit,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";

const Vite = {
  name: "Vite",
  icon: <SiVite />,
};
const ReactTech = {
  name: "React",
  icon: <FaReact />,
};
const Next = {
  name: "Next.js",
  icon: <SiNextdotjs />,
};
const Typescript = {
  name: "Typescript",
  icon: <SiTypescript />,
};
const TailwindCSS = {
  name: "Tailwind CSS",
  icon: <SiTailwindcss />,
};
const Shadcn = {
  name: "Shadcn",
  icon: <SiShadcnui />,
};
const Clerk = {
  name: "Clerk",
  icon: <SiClerk />,
};
const Stream = {
  name: "Stream",
  icon: <SiStreamlit />,
};
const Sanity = {
  name: "Sanity",
  icon: <SiSanity />,
};
const SCSS = {
  name: "SCSS",
  icon: <BsFiletypeScss />,
};
const Appwrite = {
  name: "Appwrite",
  icon: <SiAppwrite />,
};
const Plaid = {
  name: "Plaid",
  icon: (
    <img
      rel="noreferrer"
      className="size-6"
      src="/public/assets/Plaid.png"
      alt="plaid"
    />
  ),
};
const Dwolla = {
  name: "Dwolla",
  icon: (
    <img
      rel="noreferrer"
      className="size-6"
      src="/public/assets/Dwolla.png"
      alt="dwolla"
    />
  ),
};

export type WebsiteTypes = "linkedin" | "github" | "website";

export type Links = {
  link: string;
  type: WebsiteTypes;
};

export type Tech = {
  name: string;
  icon: ReactNode;
};

export type WebsiteProps = {
  header: string;
  subhead: string;
  image: string;
  techstack?: Tech[];
  info: string[];
  links: Links[];
};

export const welcomeDetails: WebsiteProps = {
  header: "Hi. I'm Chris.",
  subhead: "Welcome to my site.",
  image: "/assets/codegif.gif",
  info: [
    "I'm a young (30 is still young!) web developer that's always looking to improve his skills.",
    "This website serves as a hub, where I can showcase some of my work.",
    "In the expandable header above you can check out my work.",
  ],
  links: [
    {
      link: "https://github.com/GenorTG/KrK-Portfolio_gl",
      type: "github",
    },
  ],
};

export const gpt3Details: WebsiteProps = {
  header: "GPT3 Blog",
  subhead: "Welcome page",
  image: "/assets/gpt3.png",
  info: [
    "This is a front page for a blog-like website I made following a course by Javascript Mastery on YT.",
    "This website is made using Vite + React + Typescript, using custom written SCSS styles following a BEM naming convention.",
    "This site is meant to be a purely presentational skeleton, so no additional functionality was developed.",
  ],
  links: [
    {
      link: "https://gpt3-mockup-blog.vercel.app/",
      type: "website",
    },
    {
      link: "https://github.com/GenorTG/GPT3-mockup-blog",
      type: "github",
    },
  ],
  techstack: [Vite, ReactTech, Typescript, SCSS],
};

export const PetPinsDetails: WebsiteProps = {
  header: "PetPins",
  subhead: "A social media website",
  image: "/assets/DoggyLogo.png",
  info: [
    "This is a 'Pinterest' like looking social media website I made following an older Javascript Mastery course.",
    "This website is made using Vite + React, using tailwind for most of it's styles.",
    "The hosting server for the files is Sanity. Users can login using their google account (no sensitive data is being stored), post pins, save the pins they like, and comment on other people's pins.",
  ],
  links: [
    {
      link: "https://petpins.vercel.app/",
      type: "website",
    },
    {
      link: "https://github.com/GenorTG/PetPins/tree/main/petpins_frontend",
      type: "github",
    },
  ],
  techstack: [Vite, ReactTech, TailwindCSS, Sanity],
};

export const veedItDetails: WebsiteProps = {
  header: "VeedIt",
  subhead: "A video conferencing app",
  image: "/assets/veedit.svg",
  info: [
    'This is a clone of "zoom", with basic video conferencing functionalities.',
    "The app is built using next JS. The sign in is done using Clerk, and the video conferencing runs on Stream's services.",
    "Currently the app allows you to setup instant calls, schedule calls in advance, check your schedule of calls, send call links to others, record calls and watch those recordings.",
    "Built using Typescript, Shadcn components library and Tailwind for styles.",
  ],
  links: [
    {
      link: "https://veed-it.vercel.app/",
      type: "website",
    },
    {
      link: "https://github.com/GenorTG/VeedIt",
      type: "github",
    },
  ],
  techstack: [Next, ReactTech, Typescript, TailwindCSS, Shadcn, Clerk, Stream],
};

export const horizonDetails: WebsiteProps = {
  header: "Horizon",
  subhead: "An amazing banking app",
  image: "/assets/horizon.svg",
  info: [
    "This is a banking app that you can use to connect your bank accounts and manage your finances.",
    "The app is built using next JS. It uses Appwrite services for document storage, Plaid for banking authentication and dwolla for a sandbox to play with.",
    `You can create an account, log in, and add bank accounts. You can use the test credentials on the login screen, or make your own new account. To connect a sandbox fake banking account, insert "user_good" and "pass_good" as your credentials when asked to.`,
    "You can check your transactions, make new transactions between horizon ID accounts, and see what you spend your money on the most.",
    "Built using Typescript, Shadcn components library and Tailwind for styles.",
  ],
  links: [
    {
      link: "https://krk-horizon.vercel.app/",
      type: "website",
    },
    {
      link: "https://github.com/GenorTG/banking_jsm",
      type: "github",
    },
  ],
  techstack: [Next, Dwolla, Typescript, TailwindCSS, Shadcn, Appwrite, Plaid],
};
