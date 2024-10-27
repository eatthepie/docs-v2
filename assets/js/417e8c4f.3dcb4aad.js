"use strict";(self.webpackChunkEat_The_Pie_docs=self.webpackChunkEat_The_Pie_docs||[]).push([[879],{6447:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=i(4848),s=i(8453);const t={},l="Lottery",c={id:"smart-contracts/lottery-contract",title:"Lottery",description:"Github Link//github.com/eatthepie/contracts/blob/main/src/Lottery.sol",source:"@site/docs/smart-contracts/lottery-contract.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/lottery-contract",permalink:"/smart-contracts/lottery-contract",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open and Permanent Code",permalink:"/security/open-source"},next:{title:"VDF",permalink:"/smart-contracts/vdf-contract"}},a={},d=[{value:"Key Features",id:"key-features",level:2},{value:"Contract Structure",id:"contract-structure",level:2},{value:"Inheritance",id:"inheritance",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Constants",id:"constants",level:3},{value:"Key State Variables",id:"key-state-variables",level:3},{value:"Core Functionality",id:"core-functionality",level:2},{value:"Ticket Purchase",id:"ticket-purchase",level:3},{value:"Drawing Process",id:"drawing-process",level:3},{value:"Prize Claiming",id:"prize-claiming",level:3},{value:"Difficulty Management",id:"difficulty-management",level:3},{value:"Administrative Functions",id:"administrative-functions",level:3},{value:"Query Functions",id:"query-functions",level:3},{value:"Events",id:"events",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"lottery",children:"Lottery"})}),"\n",(0,r.jsxs)(n.p,{children:["Github Link: ",(0,r.jsx)(n.a,{href:"https://github.com/eatthepie/contracts/blob/main/src/Lottery.sol",children:"https://github.com/eatthepie/contracts/blob/main/src/Lottery.sol"})]}),"\n",(0,r.jsx)(n.p,{children:"This contract implements the core features of the Eat The Pie lottery."}),"\n",(0,r.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud83c\udf9f\ufe0f Multiple ticket purchase support (up to 100 tickets per transaction)"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udd22 Three difficulty levels affecting number ranges (Easy, Medium, Hard)"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udd10 Secure random number generation using VDFs and RANDAO"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcb0 Three-tiered prize system (Gold, Silver, Bronze)"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfc6 NFT minting for jackpot winners"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udd04 Automatic difficulty adjustment based on win patterns"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcb8 Configurable ticket pricing with scheduled changes"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udee1\ufe0f Comprehensive security measures"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udc8e Prize pool management with excess handling"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udd0d Detailed game information tracking and querying"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"contract-structure",children:"Contract Structure"}),"\n",(0,r.jsx)(n.h3,{id:"inheritance",children:"Inheritance"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Ownable"}),": Provides basic authorization control functions"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ReentrancyGuard"}),": Prevents reentrant calls to functions"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"VDFPietrzak"}),": Contract for VDF calculations and verification"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NFTPrize"}),": Contract for minting prize NFTs"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BigNumbers"}),": Library for handling large number operations"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BASIS_POINTS"}),": 10000 (for percentage calculations)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GOLD_PERCENTAGE"}),": 6000 (60% of prize pool)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SILVER_PLACE_PERCENTAGE"}),": 2500 (25% of prize pool)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BRONZE_PLACE_PERCENTAGE"}),": 1400 (14% of prize pool)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FEE_PERCENTAGE"}),": 100 (1% of prize pool)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FEE_MAX_IN_ETH"}),": 100 ether"]}),"\n",(0,r.jsxs)(n.li,{children:["Difficulty-based number ranges:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Easy: 1-50 (main), 1-5 (etherball)"}),"\n",(0,r.jsx)(n.li,{children:"Medium: 1-100 (main), 1-10 (etherball)"}),"\n",(0,r.jsx)(n.li,{children:"Hard: 1-150 (main), 1-15 (etherball)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DRAW_MIN_PRIZE_POOL"}),": 500 ether"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DRAW_MIN_TIME_PERIOD"}),": 1 week"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DRAW_DELAY_SECURITY_BUFFER"}),": 128 blocks"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"key-state-variables",children:"Key State Variables"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"currentGameNumber"}),": Current game identifier"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ticketPrice"}),": Price of a single ticket"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lastDrawTime"}),": Timestamp of the last draw"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"consecutiveJackpotGames"}),": Counter for consecutive games with jackpot winners"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"consecutiveNonJackpotGames"}),": Counter for consecutive games without jackpot winners"]}),"\n",(0,r.jsx)(n.li,{children:"Prize pool and game state mappings"}),"\n",(0,r.jsx)(n.li,{children:"Winner tracking mappings for each prize tier"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"core-functionality",children:"Core Functionality"}),"\n",(0,r.jsx)(n.h3,{id:"ticket-purchase",children:"Ticket Purchase"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function buyTickets(uint256[4][] calldata tickets) external payable\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allows purchase of up to 100 tickets in one transaction"}),"\n",(0,r.jsx)(n.li,{children:"Each ticket requires 4 numbers (3 main numbers + 1 etherball)"}),"\n",(0,r.jsx)(n.li,{children:"Automatically tracks tickets for all prize tiers"}),"\n",(0,r.jsxs)(n.li,{children:["Emits ",(0,r.jsx)(n.code,{children:"TicketPurchased"})," and ",(0,r.jsx)(n.code,{children:"TicketsPurchased"})," events"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"drawing-process",children:"Drawing Process"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Draw Initiation"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function initiateDraw() external\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Requires minimum prize pool (500 ETH)"}),"\n",(0,r.jsx)(n.li,{children:"Requires minimum time period (1 week)"}),"\n",(0,r.jsx)(n.li,{children:"Sets up security delay buffer"}),"\n",(0,r.jsx)(n.li,{children:"Starts the next game"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Random Value Setting"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function setRandom(uint256 gameNumber) external\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Uses Ethereum's block.prevrandao for randomness"}),"\n",(0,r.jsx)(n.li,{children:"Must be called after security buffer period"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"VDF Proof Submission"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function submitVDFProof(uint256 gameNumber, BigNumber[] memory v, BigNumber memory y) external\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Verifies VDF proof by calling the ",(0,r.jsx)(n.a,{href:"/smart-contracts/vdf-contract",children:"VDF contract"})]}),"\n",(0,r.jsx)(n.li,{children:"Generates final winning numbers"}),"\n",(0,r.jsx)(n.li,{children:"Sets game status to completed"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Payout Calculation"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function calculatePayouts(uint256 gameNumber) external\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Calculates prizes for each tier"}),"\n",(0,r.jsx)(n.li,{children:"Handles excess fee management"}),"\n",(0,r.jsx)(n.li,{children:"Transfers remaining prize pool to next game"}),"\n",(0,r.jsx)(n.li,{children:"Emits payout information"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"prize-claiming",children:"Prize Claiming"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function claimPrize(uint256 gameNumber) external\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allows winners to claim their prizes"}),"\n",(0,r.jsx)(n.li,{children:"Prevents double claiming"}),"\n",(0,r.jsxs)(n.li,{children:["Emits ",(0,r.jsx)(n.code,{children:"PrizeClaimed"})," event"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function mintWinningNFT(uint256 gameNumber) external\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Available only to gold tier winners"}),"\n",(0,r.jsxs)(n.li,{children:["Mints unique NFT by calling the ",(0,r.jsx)(n.a,{href:"smart-contracts/nft-contract",children:"NFT contract"})]}),"\n",(0,r.jsxs)(n.li,{children:["Emits ",(0,r.jsx)(n.code,{children:"NFTMinted"})," event"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"difficulty-management",children:"Difficulty Management"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function changeDifficulty() external\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Automatically adjusts difficulty based on win patterns"}),"\n",(0,r.jsx)(n.li,{children:"Requires 3 consecutive games for adjustment"}),"\n",(0,r.jsx)(n.li,{children:"Changes take effect on the next game"}),"\n",(0,r.jsxs)(n.li,{children:["Emits ",(0,r.jsx)(n.code,{children:"DifficultyChanged"})," event"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"administrative-functions",children:"Administrative Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"setTicketPrice"}),": Schedules ticket price changes"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"setNewVDFContract"}),": Updates VDF contract with delay"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"setFeeRecipient"}),": Updates fee recipient address"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"query-functions",children:"Query Functions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function getCurrentGameInfo() external view returns (\n    uint256 gameNumber,\n    Difficulty difficulty,\n    uint256 prizePool,\n    uint256 drawTime,\n    uint256 timeUntilDraw\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function getBasicGameInfo(uint256 startGameId, uint256 endGameId) external view returns (GameBasicInfo[] memory)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function getDetailedGameInfo(uint256 gameId) external view returns (GameDetailedInfo memory)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"function getUserGameWinnings(uint256 gameNumber, address user) external view\n"})}),"\n",(0,r.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TicketPurchased"}),": Individual ticket purchase details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TicketsPurchased"}),": Bulk ticket purchase information"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DrawInitiated"}),": Start of drawing process"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RandomSet"}),": Initial random value set"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"VDFProofSubmitted"}),": VDF verification complete"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WinningNumbersSet"}),": Final winning numbers"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DifficultyChanged"}),": Difficulty level updates"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TicketPriceChangeScheduled"}),": Future price changes"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ExcessPrizePoolTransferred"}),": Prize pool management"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GamePrizePayoutInfo"}),": Prize distribution details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FeeRecipientChanged"}),": Fee recipient updates"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PrizeClaimed"}),": Winner prize claims"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NFTMinted"}),": NFT prize creation"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var r=i(6540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);