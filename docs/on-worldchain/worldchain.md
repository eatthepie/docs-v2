---
sidebar_label: Live on World Chain
---

# Layer 2 Deployment

Eat the Pie is now also available on World Chain (an Ethereum L2), offering the same lottery experience at a more affordable price point.

## World Chain vs Ethereum Mainnet

The core game mechanics remain identical, with these key differences:

- **Price**: 1 WLD (instead of 0.1 ETH)
- **Round Duration**: 4 days instead of 1 week
- **Prize Pool Threshold**: No threshold
- **Token**: Uses WLD instead of ETH for tickets and payouts
- **Randomness**: Uses blockhash + VDFs (instead of RANDAO + VDFs)

## Security

While L2s don't match Ethereum's base layer security, the use of VDFs as our primary source of randomness maintains the lottery's high security standards.

## Contract Addresses

```
Game Contract: 0x44B340051a31D216f83428B447DBa2C102DFF373
VDF Verifier: 0x9F95C35934E74ffEa3EAEfd82Aac8AFCb37080ea
```

The same CLI commands work for both networks - just ensure your're connected to World Chain to partcipate on L2.
