# NFT

## Overview

The NFTPrize contract is an ERC721-compliant smart contract that represents winning lottery tickets as unique, dynamically generated NFTs. This contract is a crucial component of the EatThePie Lottery system, creating visually appealing and informative tokens for jackpot winners.

## Key Features

- 🎨 Dynamic SVG generation for each NFT
- 🔢 Unique visual representation of winning numbers
- 🏆 Stores game number, winning numbers, and payout for each token
- 🔐 Minting restricted to the main Lottery contract
- 🖼️ On-chain storage of SVG paths for numbers

## Contract Structure

### Inheritance

- ERC721: Standard implementation of the ERC721 Non-Fungible Token Standard

### Key State Variables

- `numberSVGs`: Mapping of digits to their SVG representations
- `lotteryContract`: Address of the authorized Lottery contract
- `tokenGameNumbers`: Mapping of token IDs to their respective game numbers
- `tokenWinningNumbers`: Mapping of token IDs to the winning numbers
- `tokenPayouts`: Mapping of token IDs to payout amounts

## Core Functionality

### Initialization

The contract is initialized with SVG paths for digits 0-9 in the constructor. The Lottery contract address must be set separately using `setLotteryContract`.

### NFT Minting

```solidity
function mintNFT(address winner, uint256 tokenId, uint256 gameNumber, uint256[4] calldata winningNumbers, uint256 payout) external
```

This function mints a new NFT representing a winning lottery ticket. It can only be called by the authorized Lottery contract.

### Token URI Generation

```solidity
function tokenURI(uint256 tokenId) public view virtual override returns (string memory)
```

Generates a base64-encoded JSON metadata string for each token, including:

- Name
- Description
- Dynamically generated SVG image
- Attributes (Game Number, Payout, Winning Numbers)

### SVG Generation

The contract dynamically generates SVG images for each NFT, featuring:

- A quadrant layout with different colors
- Winning numbers displayed in each quadrant
- Centered and scaled number representations

## Key Functions

### `generateImageURI`

Constructs the complete SVG image and encodes it as a data URI.

### `generateQuadrantSVG`

Creates the main SVG structure with colored quadrants.

### `generateQuadrants`

Generates individual quadrants with numbers.

### `generateNumberSVG`

Produces SVG representation for a single number within a quadrant.

### `getDigitPaths` and `getTotalWidth`

Helper functions for assembling and sizing number SVGs.

## Security Measures

- Only the authorized Lottery contract can mint NFTs
- Contract must be initialized with the Lottery contract address before minting
- Use of `_safeMint` to prevent minting to non-receiving addresses

## Unique Aspects

1. **On-Chain SVG Generation**: All image data is generated and stored on-chain, ensuring permanent availability.
2. **Dynamic Styling**: Each NFT has a unique appearance based on its winning numbers.
3. **Efficient Storage**: SVG paths for digits are stored once and reused, optimizing gas costs.
4. **Quadrant Design**: The four-quadrant layout provides a visually appealing and information-rich representation.

## Use Cases

1. **Proof of Winning**: Serves as a verifiable proof of winning a jackpot in the EatThePie Lottery.
2. **Collectible Item**: Unique and visually appealing NFTs that can be collected or traded.
3. **Historical Record**: Provides an on-chain record of lottery winners and their winning numbers.

## Conclusion

The NFTPrize contract adds significant value to the EatThePie Lottery ecosystem by creating unique, visually appealing, and informative NFTs for jackpot winners. Its on-chain SVG generation and efficient storage mechanisms make it a noteworthy implementation of dynamic NFT creation in the blockchain space.
