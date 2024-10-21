# CLI App

Welcome to the Eat the Pie CLI App User Guide! This powerful command-line interface provides in-depth access to all features of the Eat the Pie Ethereum lottery. Below, you'll find a comprehensive list of available commands and their purposes.

## Installation

To install the CLI app, use npm:

```bash
npm install -g eatthepie-cli
```

## Available Commands

### General Information

1. `setup`

   - Description: Set up your environment for using the CLI app.
   - Usage: `eatthepie-cli setup`

2. `current-game`

   - Description: Get information about the current ongoing game.
   - Usage: `eatthepie-cli current-game`

3. `past-game`

   - Description: Retrieve information about a past game.
   - Usage: `eatthepie-cli past-game <gameId>`

4. `difficulty-info`
   - Description: Get information about the current difficulty level.
   - Usage: `eatthepie-cli difficulty-info`

### User-specific Commands

5. `user-winning-info`

   - Description: Get information about a user's winnings.
   - Usage: `eatthepie-cli user-winning-info <userAddress>`

6. `did-i-win`

   - Description: Check if you've won in a specific game.
   - Usage: `eatthepie-cli did-i-win <gameId>`

7. `ticket-history`

   - Description: View your ticket purchase history.
   - Usage: `eatthepie-cli ticket-history`

8. `claim-prize`

   - Description: Claim your prize for a winning ticket.
   - Usage: `eatthepie-cli claim-prize <gameId>`

9. `mint-nft`
   - Description: Mint an NFT for a winning ticket.
   - Usage: `eatthepie-cli mint-nft <gameId>`

### Game Administration Commands

10. `initiate-draw`

    - Description: Initiate the drawing process for the current game.
    - Usage: `eatthepie-cli initiate-draw`

11. `set-random`

    - Description: Set the random number for the current game.
    - Usage: `eatthepie-cli set-random <randomNumber>`

12. `submit-vdf-proof`

    - Description: Submit a VDF proof for the current game.
    - Usage: `eatthepie-cli submit-vdf-proof <proof>`

13. `verify-vdf`

    - Description: Verify a VDF proof.
    - Usage: `eatthepie-cli verify-vdf <proof>`

14. `calculate-payouts`

    - Description: Calculate payouts for the current game.
    - Usage: `eatthepie-cli calculate-payouts`

15. `change-difficulty`
    - Description: Change the difficulty level for future games.
    - Usage: `eatthepie-cli change-difficulty <newDifficulty>`

## Getting Help

You can always use the `--help` flag with any command to get more information about its usage and options. For example:

```bash
eatthepie-cli --help
eatthepie-cli current-game --help
```

## Notes

- Ensure you have the necessary permissions and your wallet is properly configured before using commands that interact with the blockchain.
- Some commands may require additional arguments or options. Use the `--help` flag with each command to see its specific requirements.
- For security-sensitive operations, you may be prompted to confirm actions or provide additional authentication.

Remember to keep your CLI app updated to the latest version to access all features and security improvements. Happy playing with Eat the Pie!
