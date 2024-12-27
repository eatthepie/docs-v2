# Lottery

Github Link: [https://github.com/eatthepie/contracts-layer2/blob/main/src/Lottery.sol](https://github.com/eatthepie/contracts-layer2/blob/main/src/Lottery.sol)

This contract implements the core features of the Eat The Pie L2 lottery system.

## Key Features

- 🎟️ Multiple ticket purchase support (up to 100 tickets per transaction)
- 🔢 Three difficulty levels affecting number ranges (Easy, Medium, Hard)
- 🎲 Secure random number generation using Witnet
- 💰 Three-tiered prize system (Gold, Silver, Bronze)
- 🏆 NFT minting for jackpot winners
- 🔄 Automatic difficulty adjustment based on win patterns
- 💸 Configurable token-based ticket pricing with scheduled changes
- 🛡️ Comprehensive security measures with Permit2 integration
- 💎 Prize pool management with excess handling
- 🔍 Detailed game information tracking and querying
- ⏮️ Emergency refund system

## Contract Structure

### Inheritance

- `Ownable`: Provides basic authorization control functions
- `ReentrancyGuard`: Prevents reentrant calls to functions

### Dependencies

- `IWitnetRandomness`: Contract for secure randomness generation
- `NFTPrize`: Contract for minting prize NFTs
- `IERC20`: Interface for ERC20 token payments
- `IPermit2`: Interface for gasless approvals

### Constants

- `BASIS_POINTS`: 10000 (for percentage calculations)
- `GOLD_PERCENTAGE`: 6000 (60% of prize pool)
- `SILVER_PLACE_PERCENTAGE`: 2500 (25% of prize pool)
- `BRONZE_PLACE_PERCENTAGE`: 1400 (14% of prize pool)
- `FEE_PERCENTAGE`: 100 (1% of prize pool)
- `FEE_MAX_IN_TOKENS`: 1,000,000 tokens
- Difficulty-based number ranges:
  - Easy: 1-25 (main), 1-10 (etherball)
  - Medium: 1-50 (main), 1-10 (etherball)
  - Hard: 1-75 (main), 1-10 (etherball)
- `DRAW_MIN_TIME_PERIOD`: 4 days

### Key State Variables

- `currentGameNumber`: Current game identifier
- `ticketPrice`: Price of a single ticket in tokens
- `lastDrawTime`: Timestamp of the last draw
- `consecutiveJackpotGames`: Counter for consecutive games with jackpot winners
- `consecutiveNonJackpotGames`: Counter for consecutive games without jackpot winners
- Prize pool and game state mappings
- Winner tracking mappings for each prize tier

## Core Functionality

### Ticket Purchase

```solidity
function buyTickets(
    uint256[4][] calldata tickets,
    IPermit2.PermitTransferFrom calldata permit,
    bytes calldata signature
) external nonReentrant
```

- Allows purchase of up to 100 tickets in one transaction
- Uses Permit2 for gasless token approvals
- Each ticket requires 4 numbers (3 main numbers + 1 etherball)
- Automatically tracks tickets for all prize tiers
- Emits `TicketPurchased` and `TicketsPurchased` events

### Drawing Process

1. Draw Initiation

```solidity
function initiateDraw() external payable nonReentrant
```

- Requires minimum time period (4 days)
- Initiates Witnet randomness request
- Starts the next game
- Emits `DrawInitiated` event

2. Random Value Setting

```solidity
function setRandomAndWinningNumbers(uint256 gameNumber) external
```

- Fetches randomness from Witnet
- Sets winning numbers
- Emits `WinningNumbersSet` event

3. Payout Calculation

```solidity
function calculatePayouts(uint256 gameNumber) external nonReentrant
```

- Calculates prizes for each tier
- Handles excess fee management
- Transfers remaining prize pool to next game
- Emits payout information

### Prize Claiming

```solidity
function claimPrize(uint256 gameNumber) external nonReentrant
```

- Allows winners to claim their prizes
- Prevents double claiming
- Emits `PrizeClaimed` event

```solidity
function mintWinningNFT(uint256 gameNumber) external nonReentrant
```

- Available only to gold tier winners
- Mints unique NFT through NFTPrize contract
- Emits `NFTMinted` event

### Emergency Functions

```solidity
function stopGameAndEnableRefunds(uint256 targetGame) external onlyOwner
```

- Allows owner to stop current or next game
- Enables refund mechanism for players

```solidity
function refundTickets(uint256 gameNumber) external nonReentrant
```

- Allows players to refund tickets for stopped games
- Updates prize pool accordingly
- Emits `TicketsRefunded` event

### Difficulty Management

```solidity
function changeDifficulty() external
```

- Automatically adjusts difficulty based on win patterns
- Requires 3 consecutive games for adjustment
- Changes take effect on the next game
- Emits `DifficultyChanged` event

### Administrative Functions

- `setTicketPrice`: Schedules ticket price changes
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
function getBasicGameInfo(uint256 startGameId, uint256 endGameId)
    external view returns (GameBasicInfo[] memory)
```

```solidity
function getDetailedGameInfo(uint256 gameId)
    external view returns (GameDetailedInfo memory)
```

```solidity
function getUserGameWinnings(uint256 gameNumber, address user)
    external view returns (bool, bool, bool, uint256, bool)
```

## Events

- `TicketPurchased`: Individual ticket purchase details
- `TicketsPurchased`: Bulk ticket purchase information
- `DrawInitiated`: Start of drawing process
- `RandomSet`: Initial random value set
- `WinningNumbersSet`: Final winning numbers
- `DifficultyChanged`: Difficulty level updates
- `TicketPriceChangeScheduled`: Future price changes
- `ExcessPrizePoolTransferred`: Prize pool management
- `GamePrizePayoutInfo`: Prize distribution details
- `FeeRecipientChanged`: Fee recipient updates
- `PrizeClaimed`: Winner prize claims
- `NFTMinted`: NFT prize creation
- `GameStopped`: Emergency game stoppage
- `GameRefundsEnabled`: Refund availability
- `TicketsRefunded`: Ticket refund processing
