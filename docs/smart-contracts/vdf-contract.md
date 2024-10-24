# VDF

Github Link: [https://github.com/eatthepie/contracts/blob/main/src/VDFPietrzak.sol](https://github.com/eatthepie/contracts/blob/main/src/VDFPietrzak.sol)

The VDFPietrzak contract implements the [VDF Pietzrak Library](smart-contracts/pietzrak-library.md). This contract uses the [RSA-2048 Factoring Challenge number](https://en.wikipedia.org/wiki/RSA_numbers#RSA-2048) as its modulus, providing a trusted setup for the VDF calculations.

## Key Features

- 🔒 Based on RSA-2048 Factoring Challenge
- ✅ Fast verification process
- 🔄 Sequential computation requirement
- 🛡️ Cryptographically secure parameters

## Contract Structure

### Dependencies

- `PietrzakLibrary`: Library implementing the core VDF calculations
- `BigNumbers`: Library for handling large number operations

### Constants

#### RSA Modulus

```solidity
bytes public constant nBytes = hex"c7970ceedcc3b0754490201a7aa613cd73911081c790f5f1a8726f463550bb5b7ff0db8e1ea1189ec72f93d1650011bd721aeeacc2acde32a04107f0648c2813a31f5b0b7765ff8b44b4b6ffc93384b646eb09c7cf5e8592d40ea33c80039f35b4f14a04b51f7bfd781be4d1673164ba8eb991c2c4d730bbbe35f592bdef524af7e8daefd26c66fc02c479af89d64d373f442709439de66ceb955f3ea37d5159f6135809f85334b5cb1813addc80cd05609f10ac6a95ad65872c909525bdad32bc729592642920f24c61dc5b3c3b7923e56b16a4d9d373d8721f24a3fc0f1b3131f55615172866bccc30f95054c824e733a5eb6817f7bc16399d48c6361cc7e5"
```

- Uses the RSA-2048 Factoring Challenge number
- Provides a widely trusted and verifiable modulus
- 2048-bit length ensures strong security

#### VDF Parameters

- `nBitLength`: 2048 (bit length of RSA modulus)
- `delta`: 4 (verification skip parameter)
- `T`: 1048576 (2^20) (total iterations)

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

### RSA Modulus

The contract uses the RSA-2048 Factoring Challenge number as its modulus, which provides several benefits:

- Widely studied and trusted
- No known factorization
- Public verification of parameters
- Adequate size for security
