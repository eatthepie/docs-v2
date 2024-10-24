# Lottery

Github Link: [https://github.com/eatthepie/contracts/blob/main/src/Lottery.sol](https://github.com/eatthepie/contracts/blob/main/src/Lottery.sol)

This contract implements the core features of the Eat The Pie lottery.

## Key Features

- 🎟️ Multiple ticket purchase support (up to 100 tickets per transaction)
- 🔢 Three difficulty levels affecting number ranges (Easy, Medium, Hard)
- 🔐 Secure random number generation using VDFs and RANDAO
- 💰 Three-tiered prize system (Gold, Silver, Bronze)
- 🏆 NFT minting for jackpot winners
- 🔄 Automatic difficulty adjustment based on win patterns
- 💸 Configurable ticket pricing with scheduled changes
- 🛡️ Comprehensive security measures
- 💎 Prize pool management with excess handling
- 🔍 Detailed game information tracking and querying

## Contract Structure

### Inheritance

- `Ownable`: Provides basic authorization control functions
- `ReentrancyGuard`: Prevents reentrant calls to functions

### Dependencies

- `VDFPietrzak`: Contract for VDF calculations and verification
- `NFTPrize`: Contract for minting prize NFTs
- `BigNumbers`: Library for handling large number operations

### Constants

- `BASIS_POINTS`: 10000 (for percentage calculations)
- `GOLD_PERCENTAGE`: 6000 (60% of prize pool)
- `SILVER_PLACE_PERCENTAGE`: 2500 (25% of prize pool)
- `BRONZE_PLACE_PERCENTAGE`: 1400 (14% of prize pool)
- `FEE_PERCENTAGE`: 100 (1% of prize pool)
- `FEE_MAX_IN_ETH`: 100 ether
- Difficulty-based number ranges:
  - Easy: 1-50 (main), 1-5 (etherball)
  - Medium: 1-100 (main), 1-10 (etherball)
  - Hard: 1-150 (main), 1-15 (etherball)
- `DRAW_MIN_PRIZE_POOL`: 500 ether
- `DRAW_MIN_TIME_PERIOD`: 1 week
- `DRAW_DELAY_SECURITY_BUFFER`: 128 blocks

### Key State Variables

- `currentGameNumber`: Current game identifier
- `ticketPrice`: Price of a single ticket
- `lastDrawTime`: Timestamp of the last draw
- `consecutiveJackpotGames`: Counter for consecutive games with jackpot winners
- `consecutiveNonJackpotGames`: Counter for consecutive games without jackpot winners
- Prize pool and game state mappings
- Winner tracking mappings for each prize tier

## Core Functionality

### Ticket Purchase

```solidity
function buyTickets(uint256[4][] calldata tickets) external payable
```

- Allows purchase of up to 100 tickets in one transaction
- Each ticket requires 4 numbers (3 main numbers + 1 etherball)
- Automatically tracks tickets for all prize tiers
- Emits `TicketPurchased` and `TicketsPurchased` events

### Drawing Process

1. Draw Initiation

```solidity
function initiateDraw() external
```

- Requires minimum prize pool (500 ETH)
- Requires minimum time period (1 week)
- Sets up security delay buffer
- Starts the next game

2. Random Value Setting

```solidity
function setRandom(uint256 gameNumber) external
```

- Uses Ethereum's PREVRANDAO for initial randomness
- Must be called after security buffer period

3. VDF Proof Submission

```solidity
function submitVDFProof(uint256 gameNumber, BigNumber[] memory v, BigNumber memory y) external
```

- Verifies VDF proof by calling the [VDF contract](smart-contracts/vdf-contract.md)
- Generates final winning numbers
- Sets game status to completed

4. Payout Calculation

```solidity
function calculatePayouts(uint256 gameNumber) external
```

- Calculates prizes for each tier
- Handles excess fee management
- Transfers remaining prize pool to next game
- Emits payout information

### Prize Claiming

```solidity
function claimPrize(uint256 gameNumber) external
```

- Allows winners to claim their prizes
- Supports multiple prize tier winnings
- Prevents double claiming
- Emits `PrizeClaimed` event

```solidity
function mintWinningNFT(uint256 gameNumber) external
```

- Available only to gold tier winners
- Mints unique NFT by calling the [NFT contract](smart-contracts/nft-contract)
- Emits `NFTMinted` event

### Difficulty Management

```solidity
function changeDifficulty() external
```

- Automatically adjusts difficulty based on win patterns
- Requires 3 consecutive games for adjustment
- Changes take effect after a delay
- Emits `DifficultyChanged` event

### Administrative Functions

- `setTicketPrice`: Schedules ticket price changes
- `setNewVDFContract`: Updates VDF contract with delay
- `setFeeRecipient`: Updates fee recipient address

### Query Functions

```solidity
function getCurrentGameInfo() external view returns (
    uint256 gameNumber,
    Difficulty difficulty,
    uint256 prizePool,
    uint256 drawTime,
    uint256 timeUntilDraw
)
```

```solidity
function getBasicGameInfo(uint256 startGameId, uint256 endGameId) external view returns (GameBasicInfo[] memory)
```

```solidity
function getDetailedGameInfo(uint256 gameId) external view returns (GameDetailedInfo memory)
```

```solidity
function getUserGameWinnings(uint256 gameNumber, address user) external view
```

## Security Features

1. **Reentrancy Protection**

   - Uses OpenZeppelin's ReentrancyGuard
   - Applied to all state-modifying functions

2. **Drawing Security**

   - 128-block delay after draw initiation
   - VDF verification for randomness
   - PREVRANDAO as additional entropy source

3. **Prize Distribution**

   - Automatic excess fee handling
   - Secure prize claiming mechanism
   - Protection against double-claiming

4. **Administrative Controls**
   - Time-locked changes for critical parameters
   - Limited owner functions
   - Transparent fee management

## Events

- `TicketPurchased`: Individual ticket purchase details
- `TicketsPurchased`: Bulk ticket purchase information
- `DrawInitiated`: Start of drawing process
- `RandomSet`: Initial random value set
- `VDFProofSubmitted`: VDF verification complete
- `WinningNumbersSet`: Final winning numbers
- `DifficultyChanged`: Difficulty level updates
- `TicketPriceChangeScheduled`: Future price changes
- `ExcessPrizePoolTransferred`: Prize pool management
- `GamePrizePayoutInfo`: Prize distribution details
- `FeeRecipientChanged`: Fee recipient updates
- `PrizeClaimed`: Winner prize claims
- `NFTMinted`: NFT prize creation
