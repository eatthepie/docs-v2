# VDF Proving

This guide will walk you through the process of computing and verifying Verifiable Delay Function (VDF) proofs for the Eat the Pie Ethereum lottery.

## 📁 VDF Prover Repository

To get started, you'll need to access our VDF prover repository on GitHub:

[Eat the Pie VDF Prover Repository](https://github.com/eatthepie/vdf-prover)

Clone this repository to your local machine to proceed with the setup and usage.

## 🛠️ Setup

### Prerequisites

Ensure you have Python installed on your system. This prover is compatible with Python 3.7+.

### Installing Dependencies

1. Navigate to the cloned repository folder in your terminal.
2. Install the required Python dependencies by running:

```bash
pip install -r requirements.txt
```

## 🚀 Usage

### Computing a VDF Proof

To compute a VDF proof:

1. Navigate to the `python` folder within the repository.
2. Run the following command:

```bash
python prover.py [randomValue]
```

Replace `[randomValue]` with the actual random value you want to use for proof computation.

Example:

```bash
python prover.py 123456789
```

The prover will output the computed VDF proof.

### Verifying a VDF Proof

To verify a VDF proof:

1. Ensure you're still in the `python` folder.
2. Run the following command:

```bash
python verifier.py
```

Follow the prompts to input the necessary information for verification.

## 📝 Notes

- The computation time for the VDF proof may vary depending on your system's processing power.
- Ensure you're using the correct random value as provided by the Eat the Pie smart contract for the current game.
- The verifier will confirm whether the provided proof is valid or not.

For any issues or further questions, please refer to the documentation in the GitHub repository or contact our support team.

Happy proving! 🥧
