# VDF

Github Link: [https://github.com/eatthepie/contracts/blob/main/src/VDFPietrzak.sol](https://github.com/eatthepie/contracts/blob/main/src/VDFPietrzak.sol)

The VDF contract implements the [VDF Pietzrak Library](smart-contracts/pietzrak-library.md).

## Contract Structure

### Dependencies

- `PietrzakLibrary`: Library implementing the core VDF calculations
- `BigNumbers`: Library for handling large number operations

### Constants

Below are the parameters used for our implementation in the lottery:

| Parameter      | Value             | Description                                                                                                                                                                                                                                  |
| -------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **N**          | `c7970ce...cc7e5` | The RSA-2048 challenge number used as the modulus. This massive 2048-bit number has no known prime factors, making it ideal for cryptographic security. ([Learn more about RSA-2048](https://en.wikipedia.org/wiki/RSA_Factoring_Challenge)) |
| **nBitLength** | `2048`            | The bit length of our RSA modulus                                                                                                                                                                                                            |
| **delta**      | `10`              | Number of iterations to skip during verification, optimizing the trade-off between prover and verifier computation time                                                                                                                      |
| **T**          | `67108864` (2²⁶)  | Total number of sequential iterations required for the VDF computation. This parameter is set to create a ~5 hour delay on modern hardware                                                                                                   |

## Core Functionality

### VDF Verification

```solidity
function verifyPietrzak(
    BigNumber[] memory v,
    BigNumber memory x,
    BigNumber memory y
) external view returns (bool)
```

#### Parameters

- `v`: Array of intermediate values in the VDF computation
- `x`: Initial input to the VDF (RANDAO value)
- `y`: Purported output of the VDF

#### Returns

- `bool`: True if the proof is valid, false otherwise

#### Process

1. Creates BigNumber representation of RSA modulus
2. Delegates verification to PietrzakLibrary
3. Performs efficient proof verification

## Technical Details

### VDF Properties

1. **Fast Verification**

   - Uses skip parameter (delta) for efficient verification
   - Verification time logarithmic in total iterations
   - Much faster than computation time

2. **Security Guarantees**
   - Based on time-lock puzzles
   - Uses trusted RSA modulus
   - Provably secure under standard assumptions
