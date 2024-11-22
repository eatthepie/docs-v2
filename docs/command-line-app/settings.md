# Game Settings

<details>
<summary><h3>📊 Difficulty Info</h3>View current game difficulty, number ranges, and potential difficulty changes.</summary>

```sh
$ eatthepie difficulty-info
```

When you execute the command, you'll see the current difficulty settings and statistics:

```sh
Current Difficulty: Easy (0)
Number Range: 1 to 25
Etherball Range: 1 to 10

Consecutive Statistics:
Consecutive Games With Jackpot: 2
Consecutive Games Without Jackpot: 0

Difficulty Change Potential:
1 more consecutive jackpot needed to increase difficulty

When buying tickets, choose numbers within these ranges.
```

The difficulty levels have different number ranges:

```sh
# Easy Mode
Number Range: 1 to 25
Etherball Range: 1 to 10

# Medium Mode
Number Range: 1 to 50
Etherball Range: 1 to 10

# Hard Mode
Number Range: 1 to 75
Etherball Range: 1 to 10
```

</details>

<details>
<summary><h3>🔄 Change Difficulty</h3>Manually trigger a difficulty change when conditions are met.</summary>

```sh
$ eatthepie change-difficulty
```

When conditions are met and the command succeeds:

```sh
Transaction Hash: 0x123...abc
Note: If the conditions for a difficulty change are met, the change will take effect in the next game.
Difficulty change initiated successfully!
```

If conditions aren't met:

```sh
Cannot change difficulty yet. Not enough games played or too soon since last change.
```

#### Tips 💡

- Conditions required for difficulty change:
  - Easy → Medium: 3 consecutive jackpot wins
  - Medium → Hard: 3 consecutive jackpot wins
  - Hard → Medium: 3 consecutive games without jackpot
  - Medium → Easy: 3 consecutive games without jackpot
- Use the `difficulty-info` command first to check if change is possible
- The change takes effect in the next game round
</details>
