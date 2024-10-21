# Lottery

## Overview

The Lottery smart contract is the core component of a decentralized lottery system built on the Ethereum blockchain. It implements a fair and transparent lottery game using Verifiable Delay Functions (VDFs) for randomness generation and incorporates NFT prizes for winners.

## Key Features

- 🎟️ Multiple ticket purchase support
- 🔢 Three difficulty levels affecting number ranges
- 🔐 Secure random number generation using VDFs
- 💰 Tiered prize system (Gold, Silver, Bronze)
- 🏆 NFT minting for jackpot winners
- 🔄 Dynamic difficulty adjustment
- 💸 Configurable ticket pricing
- 🛡️ Robust security measures

## Contract Structure

### Inheritance

- Ownable: Provides basic authorization control functions
- ReentrancyGuard: Prevents reentrant calls to a function

### Dependencies

- VDFPietrzak: Contract for VDF calculations
- NFTPrize: Contract for minting prize NFTs

### Key State Variables

- `currentGameNumber`: The current game's identifier
- `ticketPrice`: The price of a single ticket
- `gamePrizePool`: Mapping of game numbers to their prize pools
- `gameWinningNumbers`: Mapping of game numbers to their winning numbers
- `gameDifficulty`: Mapping of game numbers to their difficulty levels

## Core Functionality

### Ticket Purchase

Users can buy multiple tickets (up to 100) in a single transaction using the `buyTickets` function. Each ticket consists of three main numbers and one "etherball" number.

### Drawing Process

1. `initiateDraw()`: Starts the drawing process for the current game
2. `setRandom()`: Sets the initial random value using Ethereum's `block.prevrandao`
3. `submitVDFProof()`: Submits and verifies the VDF proof to generate the final random numbers
4. `calculatePayouts()`: Calculates and sets the payouts for each prize tier

### Prize Claiming

Winners can claim their prizes using the `claimPrize` function. Jackpot (Gold tier) winners can also mint an NFT using `mintWinningNFT`.

### Game Difficulty

The contract supports three difficulty levels: Easy, Medium, and Hard. The difficulty affects the range of numbers that can be chosen for tickets. The `changeDifficulty` function can automatically adjust the difficulty based on consecutive wins or losses.

## Security Measures

- ReentrancyGuard for preventing reentrancy attacks
- Delay mechanism in the drawing process to prevent manipulation
- Use of VDFs for provably fair random number generation
- Limited administrative functions with time-locks for changes

## Administrative Functions

- `setTicketPrice`: Allows the owner to set a new ticket price
- `setNewVDFContract`: Allows updating the VDF contract address
- `setFeeRecipient`: Sets the address to receive fees

## Events

The contract emits various events to track important actions:

- TicketPurchased
- DrawInitiated
- RandomSet
- VDFProofSubmitted
- WinningNumbersSet
- PrizeClaimed
- NFTMinted
- DifficultyChanged
- TicketPriceChangeScheduled

## Querying Functions

The contract provides several view functions for querying game information:

- `getCurrentGameInfo`: Returns information about the current game
- `getBasicGameInfo`: Retrieves basic information for a range of games
- `getDetailedGameInfo`: Gets detailed information for a specific game
- `hasUserWon`: Checks if a user has won any prize in a specific game
- `getUserGameWinnings`: Gets detailed information about a user's winnings

## Technical Considerations

- The contract uses OpenZeppelin's `Ownable` and `ReentrancyGuard` for enhanced security
- It interacts with external contracts for VDF calculations and NFT minting
- The contract implements a complex prize distribution system with multiple tiers
- It uses keccak256 hashing for ticket validation and winner determination

## Conclusion

The Lottery smart contract provides a robust, fair, and engaging lottery system on the Ethereum blockchain. Its use of VDFs for randomness, tiered prize system, and integration with NFTs make it a unique and secure implementation of a decentralized lottery.
