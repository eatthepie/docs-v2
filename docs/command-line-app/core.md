# Core Game Commands

<details>
<summary><h3>🎟️ Buy Tickets</h3>Purchase your lottery tickets with custom or auto-generated numbers.</summary>

```sh
$ eatthepie buy
```

When you execute the command, you'll be guided through the buy process:

```sh
Current ticket price: 0.1 ETH
Current difficulty: Easy (1-25)
Valid number range: 1-25, Etherball: 1-10

How many tickets do you want to buy? (1-100): 2

Do you want to provide your own numbers or auto-generate?
❯ Provide own
  Auto-generate

Enter 4 numbers for ticket 1 (comma-separated, last is Etherball): 7,23,5,9
Enter 4 numbers for ticket 2 (comma-separated, last is Etherball): 3,15,20,8
```

Review your tickets before purchase:

```sh
Tickets to purchase:
Ticket 1: 7, 23, 5, 9
Ticket 2: 3, 15, 20, 8
Total cost: 0.2 ETH

Do you want to proceed with the purchase? (Y/n)
```

Transaction Done 📝

```sh
Transaction Hash: 0x123...abc
Purchase submitted!

Waiting for transaction to be confirmed...
Block Number: 1234567
Transaction confirmed successfully!
```

## Tips 💡

- Make sure the numbers you pick are within the valid ranges
- Make sure your wallet has enough ETH to cover the purchase amount and gas fees
</details>

<details>
<summary><h3>📊 Status</h3>Check the current game status including prize pool, difficulty, and draw time.</summary>

```sh
$ eatthepie status
```

When you execute the command, you'll see the status of the currentt ongoing round:

```sh
Status:
Current Game Round: 2
Difficulty: Easy (1-25)
Prize Pool: 10.5 ETH
Next Possible Draw Time: 10/29/2024, 3:00:00 PM
Time Until Draw: 2 hours, 15 minutes
```

</details>

<details>
<summary><h3>ℹ️ Game Info</h3>View detailed information about any past or current game.</summary>

```sh
$ eatthepie game-info
```

When you execute the command, you'll be asked to enter a game number:

```
Enter the past game number you want to view: 2
```

The output will show all game information:

```sh
Game 2 Information:
Status: Completed
Prize Pool: 15.5 ETH
Difficulty: Easy (1-25)
Draw Initiated Block: 1234567
RANDAO Block: 1234568
RANDAO Value: 123456789

Winning Numbers: 7, 23, 45, 12
Number of Winners: 5 (Jackpot: 1, 3 in-a-row: 2, 2 in-a-row: 2)
Payouts: Jackpot: 10.0 ETH, 3 in-a-row: 2.5 ETH, 2 in-a-row: 1.0 ETH
```

</details>

<details>
<summary><h3>🏆 Did I Win</h3>Check if you (or any other wallet) won.</summary>

```sh
$ eatthepie did-i-win
```

When you execute the command, you'll be prompted for:

```sh
Enter the game number you want to check: 2
Enter wallet address: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
```

If you won, you'll see:

```sh
Congratulations, you won!
Jackpot: Yes
3 in-a-row: No
2 in-a-row: No
Total Prize: 10.5 ETH
Claimed: No

Don't forget to claim your prize!
```

If you didn't win:

```sh
Sorry, you didn't win in this game. Better luck next time!
```

</details>

<details>
<summary><h3>🎟️ Ticket History</h3>View all tickets purchased for a specific game.</summary>

```sh
$ eatthepie ticket-history
```

When you execute the command, you'll be prompted for:

```sh
Enter the game number: 2
Enter wallet address: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
```

If you have tickets, you'll see:

```sh
Tickets:
Ticket 1: 7, 23, 45, 12
Ticket 2: 3, 15, 42, 8
Ticket 3: 11, 27, 39, 15

Total Tickets: 3
```

If you have no tickets:

```sh
No tickets found.
```

</details>
