---
slug: /
---

# The World Lottery

- blurb about this being the first world autonomous lottery

- players are ensured the game integrity
- fees are 1%, capped at 100ETH
- global, transparent, and runs forever
- how does the lottery work
  - players but tickets via their ethereum wallet
  - when a threshold of 1 week + 500ETH min prize pool are reached, the smart contract can be called to initiate a draw (random number generation event)
  - this process is done securely with the use of block.prevrando as a seed to the VDF func
  - once the VDF proof has been verified in the smart contract, prize pool payouts are calculated
  - players can then claim their prize pool + mint an NFT if they won the jackpot!
  - this process continues as the rounds increment. any prize pool without a winner, it gets rolled over to the next week. any prizes that aren't claimed within 1 year go back into the prize pool.
