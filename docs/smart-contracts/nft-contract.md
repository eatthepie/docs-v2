# NFT

Github Link: [https://github.com/eatthepie/contracts/blob/main/src/NFTPrize.sol](https://github.com/eatthepie/contracts/blob/main/src/NFTPrize.sol)

The NFT contract implements an ERC721 contract to mint NFTs for jackpot winners. Each NFT features dynamically generated SVG artwork displaying the winning numbers in a unique quadrant-based design.

## Key Features

- 🎨 Dynamic SVG generation
- 🔢 Custom number rendering system

## Contract Structure

### Inheritance

- `ERC721`: OpenZeppelin's ERC721 implementation

### Dependencies

- `@openzeppelin/contracts/token/ERC721/ERC721.sol`
- `@openzeppelin/contracts/utils/Base64.sol`
- `@openzeppelin/contracts/utils/Strings.sol`

### Key Data Structures

```solidity
struct NumberSVG {
    bytes path;
    uint256 width;
}
```

- `path`: SVG path data for rendering a number
- `width`: Width of the number's SVG representation

### State Variables

```solidity
mapping(uint256 => NumberSVG) private numberSVGs;
address public lotteryContract;
bool private initialized;
mapping(uint256 => uint256) private tokenGameNumbers;
mapping(uint256 => uint256[4]) private tokenWinningNumbers;
mapping(uint256 => uint256) private tokenPayouts;
```

## Core Functionality

### Initialization

```solidity
function setLotteryContract(address _lotteryContract) external
```

- Sets the authorized lottery contract address
- Can only be called once
- Required before minting can begin

### NFT Minting

```solidity
function mintNFT(
    address winner,
    uint256 tokenId,
    uint256 gameNumber,
    uint256[4] calldata winningNumbers,
    uint256 payout
) external
```

- Only callable by lottery contract
- Mints NFT to winner's address
- Stores game details and winning numbers
- Records payout amount

### Metadata Generation

```solidity
function tokenURI(uint256 tokenId) public view returns (string memory)
```

- Returns base64-encoded JSON metadata
- Includes:
  - Name with game number
  - Description
  - Dynamic SVG image
  - Game attributes
  - Winning numbers
  - Payout amount
