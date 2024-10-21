# VDF

## Overview

The VDFPietrzak contract implements Pietrzak's Verifiable Delay Function (VDF), a crucial component in generating provably random and unpredictable outcomes for the EatThePie Lottery system. This contract leverages the RSA-2048 Factoring Challenge for its security properties.

## Key Concepts

- 🕰️ **Verifiable Delay Function (VDF)**: A function that takes a guaranteed minimum time to compute, even on a parallel computer, but can be quickly verified.
- 🔢 **RSA-2048 Challenge**: A large semiprime number used as the modulus for VDF computations, providing a strong cryptographic foundation.
- ⏳ **Time-Hardness**: The VDF ensures a delay between input and output, crucial for preventing manipulation in lottery systems.

## Contract Structure

### Libraries

- `BigNumbers`: Used for handling large number arithmetic operations.
- `PietrzakLibrary`: Contains the core VDF verification logic.

### Key Constants

- `nBytes`: The RSA-2048 challenge number in bytes.
- `nBitLength`: The bit length of the RSA modulus (2048 bits).
- `delta`: Number of iterations to skip in verification (4).
- `T`: Total number of iterations in VDF computation (2^20 = 1,048,576).

### Structs

- `BigNumberInput`: Represents large numbers with their byte value and bit length.

## Core Functionality

### VDF Verification

```solidity
function verifyPietrzak(
    BigNumberInput[] memory v,
    BigNumberInput memory x,
    BigNumberInput memory y
) external view returns (bool)
```

This function verifies a Pietrzak VDF proof:

- `v`: Array of intermediate values in the VDF computation.
- `x`: Initial input to the VDF.
- `y`: Purported output of the VDF.
- Returns `true` if the proof is valid, `false` otherwise.

## How It Works

1. **Setup**:

   - Uses the RSA-2048 challenge number as the modulus (n).
   - Defines parameters like delta (skip factor) and T (total iterations).

2. **Verification Process**:

   - Converts input parameters to `BigNumber` format.
   - Calls `PietrzakLibrary.verify()` to perform the actual verification.

3. **PietrzakLibrary.verify()**:
   - Implements the Pietrzak VDF verification algorithm.
   - Performs a series of modular exponentiations and multiplications.
   - Uses a challenge-response mechanism to verify the computation's integrity.

## Security Considerations

1. **RSA-2048 Challenge**:

   - Provides a trusted, large semiprime number.
   - Factoring this number is considered computationally infeasible, ensuring the security of the VDF.

2. **Time-Hardness**:

   - The large number of iterations (T = 2^20) ensures a significant delay between input and output.
   - This delay prevents players or validators from predicting or manipulating lottery outcomes.

3. **Verification Efficiency**:
   - The `delta` parameter allows for efficient verification by skipping iterations.
   - Balances the trade-off between prover computation time and verifier efficiency.

## Use in the Lottery System

1. **Random Number Generation**:

   - VDF is applied to a public, unpredictable input (e.g., block hash).
   - The output serves as the source of randomness for lottery draws.

2. **Fairness Guarantee**:

   - Ensures that lottery outcomes cannot be predicted or manipulated, even by the contract deployer or miners.

3. **Verifiable Fairness**:
   - Anyone can verify the correctness of the lottery draw by checking the VDF proof.

## Technical Notes

- The contract uses advanced cryptographic concepts and big number arithmetic.
- Gas consumption for verification can be high due to complex calculations.
- The security of the system relies on the continued difficulty of factoring the RSA-2048 number.

## Conclusion

The VDFPietrzak contract is a critical component of the EatThePie Lottery system, providing a cryptographically secure and verifiable source of randomness. Its implementation of Pietrzak's VDF ensures that lottery outcomes are fair, unpredictable, and resistant to manipulation, while still being publicly verifiable.
