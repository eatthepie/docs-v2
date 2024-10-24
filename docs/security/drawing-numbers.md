# Drawing Numbers

## 🎯 Introduction

At the heart of every lottery is its random number generation - the crucial mechanism that determines winners. While traditional lotteries rely on central authorities, Eat the Pie harnesses Ethereum's decentralized network of validators and Verifiable Delay Functions (VDFs) to ensure true randomness. This creates a provably fair system where no single entity can influence the outcome.

## 🌐 Why Ethereum?

Ethereum stands out as the ideal platform for this lottery system due to its nature as a truly decentralized blockchain. In this ecosystem:

- 🔒 No single entity can control or manipulate the system.
- 👁️ Transactions and smart contract executions are transparent and verifiable.
- 🏗️ The network's inherent properties provide a foundation for building provably fair systems.

## 🛡️ Enhancing Security with VDFs

Running a transparent lottery on a blockchain faces one critical challenge: achieving 100% random outcomes that no party can predict. This raises two key questions: How can validators be prevented from gaining any advantage? And how can the settling block's validator's integrity be ensured?

Eat the Pie solves this through Verifiable Delay Functions (VDFs), creating a calculated time barrier between game completion and number generation. This engineered delay effectively neutralizes any potential validator influence. While this means waiting slightly longer for results, it guarantees absolute fairness and trustworthiness in every draw.

## 🔢 The Drawing Process

Let's break down the intricate process of how random winning numbers are generated:

<br />
<img src="/img/security.svg" alt="Eat The Pie Process" width="800" />
<br />

1. **🚀 Initiating the Draw**

   - Game threshold is met and function: <b>`initiateDraw()`</b> gets called.
   - At a predetermined block (let's call it block X), this function is called to start the drawing process.
   - The system waits 4 epochs (~30 minutes) before using the [RANDAO value](https://eth2book.info/bellatrix/part2/building_blocks/randomness/) from <b>`block.prevrandao`</b>.
   - Purpose of Delay: To minimize the predictability and biasability of <b>`block.prevrandao`</b>.

2. **🎲 Setting the Random Value**

   - Once the 4 epochs delay has passed, function: <b>`setRandom()`</b> gets called.
   - This sets the <b>`block.prevrandao`</b> value that will serve as the input of the VDF function.
   - At this point, the game is settled, but nobody knows the numbers until somebody solves the VDF.

3. **⏳ VDF Computation**

   - The VDF gets computed offchain (by anyone) using the <b>`block.prevrandao`</b> from above.
   - The parameters of the VDF have been intentionally set to make this computation time-intensive (depending on hardware, can range from several hours to a day).
   - This extended computation time is a critical security feature, ensuring that improvements in future hardware and software implementation still make this unbreakable.

4. **✅ Submitting and Verifying the VDF Proof**

   - Someone finally has a proof and submits it onchain via the function: <b>`submitVDFProof()`</b>
   - Only if the proof is valid do the numbers then get revealed and committed.

5. **🏁 Finalizing the Draw**
   - Anyone can now call the function <b>`calculatePayouts()`</b>, which settles the prizes and winners.
   - The round is over and users can then claim their prizes.

> **Note**: The entire process is public and permissionless. Any participant can help progress the game state by calling these functions.

## 🧠 Key Concepts Explained

### 🔢 RANDAO and block.prevrandao

<b>`block.prevrandao`</b> serves as Ethereum's built-in randomness source, powered by the beacon chain's RANDAO mechanism:

- Generated from thousands of validator contributions
- Changes every block (~12 seconds)
- Manipulation-resistant by design
- Unpredictable beyond one epoch
- Provides verifiable randomness at the protocol level

Want to learn more? Check out these resources:

- [Deep dive into RANDAO](https://eth2book.info/bellatrix/part2/building_blocks/randomness/)
- [EIP 4399: Supplant DIFFICULTY opcode with PREVRANDAO](https://eips.ethereum.org/EIPS/eip-4399)
- [Video explanation of RANDAO](https://www.youtube.com/watch?v=rUOBPu4W28c)

### ⏱️ VDF (Verifiable Delay Function)

The lottery implements the [Pietrzak VDF](https://eprint.iacr.org/2018/627.pdf), a cryptographic function that enforces a time delay between input and output. Think of it as a cryptographic time-lock that ensures fairness through forced computation time.

#### Key Properties

1. **Sequential Computation**

   - Operations must be performed in order
   - Cannot be parallelized or shortened
   - Hardware improvements don't significantly impact minimum time

2. **Efficient Verification**

   - Verification takes milliseconds
   - On-chain verification possible
   - Compact proofs (~1kb)
   - Low gas costs for submission

3. **Deterministic Security**
   - Consistent input/output mapping
   - Future-proof design principles
   - No hidden randomness in computation

Want to learn more? Check out these resources:

- [VDF Research Blog](https://vdfresearch.org/)
- [Video explanation of VDFs](https://www.youtube.com/watch?v=qf1CN5n8aHM)

## 🤔 Why This Approach Matters

### 1. 🛡️ Validator Neutralization

The combination of RANDAO and VDF ensures that validators cannot predict or influence the outcome, maintaining true randomness in the drawing process.

### 2. 🔒 Front-Running Prevention

The mandatory computation delay creates a temporal barrier that prevents any form of front-running or last-minute exploitation.

### 3. 🔍 Complete Verifiability

Every step in the process can be independently verified on-chain, ensuring transparency without compromising security.

### 4. 💪 Future-Proof Design

The time-locked nature of VDF computation maintains security even as computational power advances, protecting against future technological improvements.
