# MINERTOPIA
Minertopia builds community-run digital nations on EVM blockchains with NFTs as citizenship, dual-tokenomics for equal & contribution-based rewards, and a buyback system to fuel the Minertopia token economy.

Check the dapp in: https://botanix.minertopia.xyz

## How It Work
- To join Minertopia, user need to mint citizen NFT for 0.0001 $BTC
- Citizen NFT owner can contribute/donate any amount $BTC to treasury
- Every 24 hours some amount token will be minted (Minertopia Token $MTK)
- 30% minted token will be shared equally to every nft holders
- 70% minted token will distributed proportional to contribution from every nft holders
- minted token $MTK can be swapped to $BTC, or staked in vault to earn more $MTK

## How To Build

### Smart Contracts
1. Enter folder sc
2. Copy .env-example file to .env file. Replace PRIVATE_KEY_TESTNET=yourprivatekey
3. Run: npm install
4. Run: npx hardhat compile
5. Run: npx hardhat run --network btctest scripts/deploy.js
6. Run: npx hardhat run --network btctest scripts/update.js
7. Run: npx hardhat run --network btctest scripts/setup.js
8. Above process will generate file config.json. Rename to config3636.json
9. Copy and replace file in folder client: [project-root]/client/src/contracts/json/config3636.json
 
### Client
1. Enter folder client
2. Run: npm install
3. Run: npm run start
4. Open page http://localhost:3000