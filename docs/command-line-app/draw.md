# Draw & Verification Commands

<details>
<summary><h3>🎲 Initiate Draw</h3>Start the drawing process for the current game round.</summary>

```sh
$ eatthepie initiate-draw
```

When you execute the command and all conditions are met:

```sh
Transaction Hash: 0x123...abc
Draw initiated successfully!
```

## Tips 💡

- Make sure both conditions are met before initiating:
  - Minimum time interval has passed (check with `status` command)
  - Prize pool threshold has been reached (check with `status` command)
- The draw can only be initiated once per game
</details>

<details>
<summary><h3>🎲 Set RANDAO Value</h3>Set the RANDAO value to complete the drawing process.</summary>

```sh
$ eatthepie set-randao
```

When you execute the command, you'll first be prompted for the game:

```sh
Enter the game number to set the RANDAO value for: 2
```

If all conditions are met:

```sh
Transaction Hash: 0x123...abc
RANDAO value set successfully!
```

## Tips 💡

- RANDAO values can only be set after the buffer period (128 blocks) has passed
- Make sure draw has been initiated first using the `initiate-draw` command
</details>

<details>
<summary><h3>📝 Submit VDF Proof</h3>Submit VDF proof to reveal lottery numbers.</summary>

```sh
$ eatthepie submit-vdf-proof
```

When you execute the command, you'll be prompted for two inputs:

```sh
Enter the game number to submit the VDF proof for: 2
Enter the path to the proof file (proof.json): ~/proof.json

Submitting VDF proof...
Transaction Hash: 0x123...abc
VDF proof submitted successfully!
```

## Tips 💡

- Make sure the RANDAO value has been set before submitting the VDF proof
- The proof file (proof.json) must be generated using the [VDF prover tool](https://github.com/eatthepie/vdfs)
</details>

<details>
<summary><h3>✅ Verify VDF</h3>Verify a VDF proof for a past game.</summary>

```sh
$ eatthepie verify-vdf
```

When you execute the command, you'll be prompted for inputs:

```sh
Enter the game number to verify the VDF proof for: 1
Enter the path to the proof.json file: ~/proof.json

Verifying VDF proof...
Game 1 VDF verified successfully!
Winning Numbers: 7, 23, 25, 12
```

## Tips 💡

- This command is used to verify proofs of past games
- To submit a proofs for the current game, use the `submit-vdf-proof` command instead
</details>

<details>
<summary><h3>💰 Calculate Payouts</h3>Calculate prize distribution for a completed game round.</summary>

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
Prize Pool: 15.5 ETH
Jackpot Winners: 1 (10.0 ETH each)
3-in-a-row Winners: 2 (2.5 ETH each)
2-in-a-row Winners: 2 (1.0 ETH each)
```

## Tips 💡

- Make sure the game's VDF proof has been submitted and validated first
- Once calculated, players can claim prizes

</details>
