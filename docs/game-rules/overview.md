# Overview

The lottery is designed with these key features

- fun and simple. maximize rewards to players.
- game mechanics and ticket costs must make sense taking into account the properties of Ethereum (gas and fees)
  - gameplay must fit within the confines of ethereum gas limitations.
- must be able to run fully autonomously on Ethereum. anybody can run the game - no admins needed.
- immutable smart contracts. cannot be changed (see 2 minor exceptions)
- security over speed. because our game is played on a weekly basis, we can take extra time for the random numbers to be generated, to maximize the tamper proof nature of the game. (VDFS)
-

With that in mind, here's an overview of the game. Players can buy ticket(s) to the lottery, priced at 0.1 ETH per ticket (min ticket price considering gas fees). You pick 4 numbers (3 regular numbers + 1 etherball number) from a preset range (which is determined based on the currently difficulty of the game - this depends on how much traffic the lottery is getting (we want to make sure jackpots are always hard so the reward is meaningful!)). Once a week + when the jackpot is at least 500ETH, anybody can call the smart contract to initiate a drawing. We wait a few hours for the VDF computation and get the lottery numbers. There are 4 prize pools (jackpot - all correct, 3 in a row, 2 in a row, and loyalty prize pool). if your lottery tickets were in any of the prize pools, you can claim your ETH prize! and if you won the big jackpot, you can even mint an NFT of your ticket!
