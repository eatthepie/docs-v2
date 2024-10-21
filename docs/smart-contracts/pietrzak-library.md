# Pietrzak VDF

The PietrzakLibrary contains the core logic for verifying the Verifiable Delay Function (VDF) proof. Let's break down its key components and the verification process.

### Key Functions

1. `verify`: The main function that implements the VDF verification algorithm.
2. `log2`: Computes the base-2 logarithm of a number.
3. `_hash128`: Generates a 128-bit hash from three byte arrays.

### Verification Process Explained

The `verify` function is the heart of the VDF verification. Here's a step-by-step breakdown of how it works:

1. **Initialization**:

   - `tau = log2(T)`: Calculates the number of iterations in the binary representation of T.
   - `iMax = tau - delta`: Determines the number of verification steps to perform.

2. **Main Verification Loop**:
   The loop runs `iMax` times, each iteration representing a halving of the remaining iterations.

   a. **Challenge Generation**:

   - `_r = _hash128(x.val, y.val, v[i].val)`: Creates a random challenge based on the current state.

   b. **State Update**:

   - `x = (x^r * v[i]) mod n`: Updates x using modular exponentiation and multiplication.
   - `y = ((v[i]^r) * y) mod n`: Updates y similarly.
   - If T is odd, an additional squaring of y is performed.

   c. **Iteration Halving**:

   - `T = T >> 1`: Halves the remaining iterations.

3. **Final Verification**:
   - Computes `2^delta` to account for the skipped iterations.
   - Checks if `y == x^(2^(2^delta)) mod n`.

### Key Concepts in the Verification

1. **Iterative Halving**:
   The algorithm doesn't verify every step of the VDF computation. Instead, it halves the problem size in each iteration, allowing for efficient verification.

2. **Random Challenges**:
   The `_r` value introduces randomness in each step, making it computationally infeasible to forge a proof without actually computing the full VDF.

3. **Modular Arithmetic**:
   All operations are performed modulo n (the RSA modulus), leveraging the hardness of the RSA problem for security.

4. **Skipping with Delta**:
   The `delta` parameter allows skipping the last few iterations, significantly reducing verification time with minimal security impact.

### Security Properties

1. **Soundness**:
   The random challenges and the final check ensure that it's computationally infeasible to produce a valid proof without computing the entire VDF.

2. **Completeness**:
   A correctly computed VDF will always pass the verification process.

3. **Time-Hardness**:
   The repeated squaring operations in the full VDF computation (not shown in the verification) ensure a minimum computation time.

### Efficiency Considerations

- The verification is much faster than the full VDF computation, typically by a factor of about `T / log(T)`.
- The use of `delta` further reduces verification time, especially for large T values.
- Modular exponentiations are the most computationally expensive operations in the verification.

## Conclusion

The PietrzakLibrary implements a clever and efficient verification algorithm for the VDF. By using iterative halving and random challenges, it achieves a balance between security and efficiency. This verification process is crucial for ensuring the integrity and unpredictability of the lottery outcomes in the EatThePie system.
