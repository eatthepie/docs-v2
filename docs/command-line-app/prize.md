# Prize & NFT Commands

<details>
<summary><h3>💰 Claim Prize</h3>Claim your winnings from a game you've won.</summary>

```sh
$ eatthepie claim-prize
```

When you execute the command, you'll be prompted to enter the game number:

```sh
Enter the game number for which you want to claim the prize: 2
```

If you have a prize to claim, you'll see the transaction process:

```sh
Transaction Hash: 0x123...abc
Prize claimed successfully!
```

## Tips 💡

- Make sure the game draw is completed before attempting to claim
- You can only claim a prize once
- Use the `did-i-win` command first to check if you have any prizes to claim
- Double-check your wallet has enough ETH for gas fees
</details>

<details>
<summary><h3>🎨 Mint NFT</h3>Mint a special NFT commemorating your jackpot win.</summary>

```sh
$ eatthepie mint-nft
```

When you execute the command, you'll be prompted to specify the winning game:

```sh
Enter the game number for which you want to mint the winning NFT: 2
```

If you're eligible and the transaction succeeds:

```sh
Transaction Hash: 0x123...abc
Winning NFT minted successfully!
```

If you weren't a jackpot winner:

```sh
Only jackpot winners can mint a NFT.
```

## Tips 💡

- Make sure you have enough ETH in your wallet to cover gas fees
- The NFT will appear in your wallet once the transaction is confirmed
- You can view the NFT on popular NFT marketplaces like OpenSea
</details>
