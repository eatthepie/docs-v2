import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "eat-the-pie-overview/what-is-it",
    {
      type: "category",
      label: "🎮 Gameplay",
      items: [
        "gameplay/rules",
        "gameplay/prizes",
        "gameplay/odds",
        "gameplay/how-to-play",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "💻 Comand Line App",
      items: [
        "command-line-app/install",
        "command-line-app/setup",
        "command-line-app/core",
        "command-line-app/prize",

        "command-line-app/draw",
        "command-line-app/settings",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "🛡️ Security",
      items: ["security/drawing-numbers", "security/open-source"],
      collapsed: true,
    },
    {
      type: "category",
      label: "⛓️ Smart Contracts",
      items: [
        "smart-contracts/lottery-contract",
        "smart-contracts/vdf-contract",
        "smart-contracts/pietrzak-library",
        "smart-contracts/nft-contract",
      ],
      collapsed: true,
    },
    "deployments/main",
    "links/main",
  ],
};

export default sidebars;
