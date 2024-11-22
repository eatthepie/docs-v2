---
sidebar_label: Live on World Chain
---

# Layer 2 Deployment

Eat the Pie is now also available on World Chain (an Ethereum L2), offering the same lottery experience at a more affordable price point.

## World Chain vs Ethereum Mainnet

The core game mechanics remain identical, with these key differences:

- **Price**: 1 WLD (instead of 0.1 ETH)
- **Prize Pool Threshold**: 100,000 WLD
- **Token**: Uses WLD instead of ETH for tickets and payouts
- **Randomness**: Uses blockhash + VDFs (instead of RANDAO + VDFs)

## Security

While L2s don't match Ethereum's base layer security, the use of VDFs as our primary source of randomness maintains the lottery's high security standards.

## Contract Addresses

```
Game Contract: 0xB3406E515b7fA46c0Ba0E8A65e15D459A44E2de4
VDF Verifier: 0xF8dd992D8742D735C308f22650Ce9Fee5D61bc28
```

The same CLI commands work for both networks - just ensure your're connected to World Chain to partcipate on L2.
