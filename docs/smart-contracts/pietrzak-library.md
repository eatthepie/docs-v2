# VDF Pietrzak Library

Github Link: [https://github.com/eatthepie/contracts/blob/main/src/libraries/PietrzakLibrary.sol](https://github.com/eatthepie/contracts/blob/main/src/libraries/PietrzakLibrary.sol)

The PietrzakLibrary implements the core verification logic for Pietrzak's Verifiable Delay Function (VDF). This library provides the mathematical operations and verification procedures necessary for validating VDF proofs in an efficient and secure manner.

_Adapted from [usgeeus/Pietrzak-VDF-solidity-verifier](https://github.com/usgeeus/Pietrzak-VDF-solidity-verifier)_

## Core Functions

### VDF Verification

```solidity
function verify(
    BigNumber[] memory v,
    BigNumber memory x,
    BigNumber memory y,
    BigNumber memory n,
    uint256 delta,
    uint256 T
) internal view returns (bool)
```

#### Parameters

- `v`: Array of intermediate values in the VDF computation
- `x`: Initial input value (RANDAO value)
- `y`: Claimed output value
- `n`: RSA modulus
- `delta`: Number of iterations to skip in verification
- `T`: Total number of iterations

#### Returns

- `bool`: True if the proof is valid, false otherwise

#### Verification Process

1. **Initialization**

   - Calculates tau (log2 of total iterations)
   - Determines maximum iterations for verification
   - Sets up BigNumber representation of 2

2. **Main Verification Loop**

   - Computes random challenges using \_hash128
   - Updates x and y based on challenges and intermediate values
   - Performs modular arithmetic operations
   - Halves T in each iteration

3. **Final Verification**
   - Computes 2^delta efficiently
   - Verifies final relationship between x and y

### Helper Functions

#### Log2 Calculation

```solidity
function log2(uint256 value) internal pure returns (uint256)
```

- Efficiently computes base-2 logarithm
- Uses bit manipulation for performance
- Processes in power-of-2 steps (128, 64, 32, etc.)

#### Hash128 Generation

```solidity
function _hash128(
    bytes memory a,
    bytes memory b,
    bytes memory c
) internal pure returns (BigNumber memory)
```

- Computes 128-bit hash from three inputs
- Uses keccak256 for hashing
- Returns last 16 bytes as BigNumber

#### Boolean to Uint Conversion

```solidity
function toUint(bool b) internal pure returns (uint256 u)
```

- Converts boolean to uint256 (0 or 1)
- Uses assembly for gas optimization
- Memory-safe implementation
