# Drawing Numbers

## 🎯 Introduction

At the heart of every lottery is its random number generation - the crucial mechanism that determines winners. While traditional lotteries rely on central authorities, Eat the Pie uses Witnet's oracles on World Chain to ensure true randomness. This creates a provably fair system where no single entity can influence the outcome.

# 🔢 The Drawing Process

Let's break down the intricate process of how random winning numbers are generated:

<br />
<img src="/img/security.svg" alt="Eat The Pie Process" width="700" />
<br />
<br />

<details>
<summary><h2>1. 🚀 Initiating the Draw</h2> - command <code>initiate-draw</code> using the <a href="https://github.com/eatthepie/cli">CLI app</a></summary>

- At a predetermined block (let's call it block X), this function is called to start the drawing process.
- The function will call the witness contract to ask to generate random bytes.
- Ref: [smart contract](https://github.com/eatthepie/contracts-layer2/blob/main/src/Lottery.sol#L328-L347).
</details>

<details>
<summary><h2>2. 🎲 Completing the Draw</h2> - command <code>complete-draw</code> using the <a href="https://github.com/eatthepie/cli">CLI app</a></summary>

- Once the witnet contract has generated the random numbers, function: `setRandomAndWinningNumbers()` can get called.
- This will fetch the randomness from the witnet contract and set the winning numbers.
- Ref: [smart contract](https://github.com/eatthepie/contracts-layer2/blob/main/src/Lottery.sol#L375-L384).
</details>

<details>
<summary><h2>3. 🏁 Finalizing the Draw</h2> - command <code>calculate-payouts</code> using the <a href="https://github.com/eatthepie/cli">CLI app</a></summary>

- The function `calculatePayouts()` can now get called, which settles the prizes and winners.
- The round is over and users can claim their prizes.
- Ref: [smart contract](https://github.com/eatthepie/contracts-layer2/blob/main/src/Lottery.sol#L432-L455).
</details>
