import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Eat The Pie Docs",
  tagline: "The world lottery on Ethereum",
  favicon: "img/favicon.ico",
  url: "https://docs.eatthepie.xyz",
  baseUrl: "/",
  organizationName: "eatthepie",
  projectName: "docs",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/header.png",
    navbar: {
      title: "Eat The Pie Documentation",
      logo: {
        alt: "Eat The Pie Logo",
        src: "img/logo.png",
      },
    },
    sidebar: {
      hideable: false,
      sidebarCollapsible: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  // plugins: [
  //   [
  //     "@docusaurus/plugin-client-redirects",
  //     {
  //       redirects: [
  //         {
  //           from: "/",
  //           to: "/eat-the-pie-overview/what-is-it",
  //         },
  //       ],
  //     },
  //   ],
  // ],
};

export default config;
