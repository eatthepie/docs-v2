import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Eat The Pie Overview",
      items: ["eat-the-pie-overview/what-is-it"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Game & Rules",
      items: [
        "game-rules/overview",
        "game-rules/how-to-play",
        "game-rules/rules",
        "game-rules/claiming-prizes",
        "game-rules/nft-minting",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Security",
      items: [
        "security/open-source",
        "security/not-upgradable",
        "security/drawing-delay",
        "security/vdf-randomness",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Smart Contract Modules",
      items: [
        "smart-contracts/lottery-contract",
        "smart-contracts/vdf-contract",
        "smart-contracts/nft-contract",
      ],
      collapsed: false,
    },
    "deployments/main",
    "links/main",
  ],
};

export default sidebars;
