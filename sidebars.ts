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
