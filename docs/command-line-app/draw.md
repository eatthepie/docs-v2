# Draw & Verification Commands

<details>
<summary><h3>🚀 Initiate Draw</h3>Start the drawing process.</summary>

```sh
$ eatthepie initiate-draw
```

When you execute the command and all conditions are met:

```sh
Transaction Hash: 0x123...abc
Draw initiated successfully!
```

#### Tips 💡

- Make sure both conditions are met before initiating:
  - Minimum time interval has passed (check with `status` command)
- The draw can only be initiated once per game
</details>

<details>
<summary><h3>🎲 Complete Draw</h3>Set the random numbers.</summary>

```sh
$ eatthepie complete-draw
```

When you execute the command, you'll first be prompted for the game:

```sh
Enter the game number to set the random numbers for: 2
```

If all conditions are met:

```sh
Transaction Hash: 0x123...abc
```

#### Tips 💡

- Make sure draw has been initiated first using the `initiate-draw` command
- Witnet random numbers may take a bit of time to be generated. This command will only work once the random numbers are generated.
</details>

<details>
<summary><h3>💰 Calculate Payouts</h3>Calculate prize distributions after a round is complete.</summary>

```sh
$ eatthepie calculate-payouts
```

When you execute the command, you'll first be prompted for the game:

```sh
Enter the game number to calculate payouts for: 2

Calculating payouts...
Transaction Hash: 0x123...abc
Payouts calculation submitted!

Waiting for transaction to be confirmed...
Block Number: 1234567
Transaction confirmed successfully!

Fetching payout information...
Game 2 Payouts:
Prize Pool: 15.5 WLD
Jackpot Winners: 1 (10.0 WLD each)
3-in-a-row Winners: 2 (2.5 WLD each)
2-in-a-row Winners: 2 (1.0 WLD each)
```

#### Tips 💡

- Make sure the game's VDF proof has been submitted and validated first
- Once calculated, players can claim prizes

</details>
