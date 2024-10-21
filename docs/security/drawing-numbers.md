# Drawing Numbers

## 🎯 Introduction

The integrity of any lottery system hinges on one crucial aspect: how the winning numbers are drawn. For a lottery to be trustworthy, this process must be provably fair, meaning it's both random and beyond anyone's control. Achieving this level of fairness is an incredibly complex challenge, but through the combination of Ethereum's blockchain technology and Verifiable Delay Functions (VDFs), we've created a system that sets a new standard for lottery security.

## 🌐 Why Ethereum?

Ethereum stands out as the ideal platform for our lottery system due to its nature as a truly decentralized blockchain. In this ecosystem:

- 🔒 No single entity can control or manipulate the system.
- 👁️ Transactions and smart contract executions are transparent and verifiable.
- 🏗️ The network's inherent properties provide a foundation for building provably fair systems.

## 🛡️ Enhancing Security with VDFs

While Ethereum provides a robust base, we've added an extra layer of security by implementing Verifiable Delay Functions (VDFs). This technology prevents any possibility of validator collusion, further solidifying the integrity of our lottery.

## 🔢 The Drawing Process: A Deep Dive

Let's break down the intricate process of how we generate our random winning numbers:
<br />
<img src="/img/security.svg" alt="Eat The Pie Process" width="900" />
<br />

1. **🚀 Initiating the Draw**

   - Function: `initiateDraw()`
   - At a predetermined block (let's call it block X), this function is called to start the drawing process.
   - We implement a delay of approximately 4 epochs (~30 minutes) before using the randomness output from the Ethereum block.
   - Purpose of Delay: To minimize the potential for validators to influence the `block.prevrandao` value, preventing any actors from gaining an unfair advantage by purchasing tickets right before the draw.

2. **🎲 Setting the Random Value**

   - Function: `setRandom()`
   - After the delay period (at block Y), we capture the `block.prevrandao` value.
   - This value serves as the input for our Pietrzak VDF function.

3. **⏳ VDF Computation**

   - The VDF output is computed off-chain.
   - We've intentionally set the parameters to make this computation time-intensive (several hours to a day).
   - This extended computation time is a critical security feature, ensuring the integrity of the game even as hardware and software improvements accelerate computation speeds.

4. **✅ Submitting and Verifying the VDF Proof**

   - Function: `submitVDFProof()`
   - At block Z, an actor submits the results of the VDF function.
   - Our on-chain VDF verifier checks the validity of this output.

5. **🏁 Finalizing the Draw**
   - If the VDF proof is correct, the winning numbers are computed and set.
   - The system calculates payouts based on these numbers.
   - Users can then claim their prizes.

## 🧠 Key Concepts Explained

### 🔢 block.prevrandao

`block.prevrandao` is a value in Ethereum blocks that provides a source of randomness. It's derived from the beacon chain's randomness and is considered secure against most forms of manipulation.

### ⏱️ VDF (Verifiable Delay Function)

A VDF is a function that takes a minimum amount of time to compute, even on a parallel computer, but can be quickly verified. In our lottery, it serves as a crucial tool to prevent any form of prediction or manipulation of the winning numbers.

## 🤔 Why This Approach is Necessary

1. **🚫 Eliminates Insider Advantages**: No one, not even the lottery operators, can predict or influence the outcome.
2. **🏃‍♂️ Prevents Front-Running**: The delay and VDF computation time prevent actors from gaining an advantage by quickly buying tickets right before the draw.
3. **🔍 Ensures Verifiability**: Every step of the process can be independently verified, ensuring transparency.
4. **💪 Resists Technological Advances**: The time-intensive nature of the VDF computation ensures security even as computing power increases.

By combining Ethereum's decentralized nature with the security properties of VDFs, we've created a lottery system that sets new standards for fairness, transparency, and security in the world of digital gambling. 🎉
