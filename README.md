# TaDAO

TaDAO solves many painful problems in DeFi
* Traditional investors don't have the time or confidence to invest profitably in DeFi

* Reporting individual transactions is extremely painful and time consuming. due to immature infrastructure (for ex. reconciling transactions across multiple chains which may or may not have adequate block explorers, finding historical prices of LP token, etc.)

* It is difficult for groups of friends to pool together funds in an investment DAO that can execute arbitrary strategies ()

* Existing investment management solutions needlessly limit the assets and chains available to managers, or are so focused on bridging traditional finance concepts on-chain that they miss out on the world-changing affordances of DeFi - permisionlessness, trustlessness, and privacy for all.

TaDAO solves all of these problems with its crypto-native investment DAO product.

TaDAO enables individuals and groups to create Investment DAOs that can _safely_ move in and out of positions on any protocol on any EVM chain, while using a fractionalizable NFT to represent a user's contribution to the Investment DAO so that portions of or their entire investment position can be sold in a secondary market

## Setup Instructions

## Misc

Diagram inspo by Rai
https://viewer.diagrams.net/?target=blank&highlight=0000ff&layers=1&nav=1&title=GEB_overview.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1nIcaY8N8StVCfyAL_ztbmETJX2bvY3a9%26export%3Ddownload

p5
https://editor.p5js.org/codingtrain/sketches/sy1p1vnQn

used this to render in react app
https://www.npmjs.com/package/react-p5

#### Babylon Contracts

> src: https://docs.babylon.finance/protocol/deployments

* BABController
    > src: https://etherscan.io/address/0xd4a5b5fcb561daf3adf86f8477555b92fba43b5f

    Looks like upgradeability proxy, just for deploying/pointing to other contracts

* Ishtar Gate
    > src: https://etherscan.io/address/0x77d200eca7fd0a3db27e96d7b24cf7613b0a2a12#code

    "Contract that implements guestlists for Babylon Finance using an NFT"


* Marduk Gate
    > src: https://etherscan.io/address/0x6504227a2f6c44e951289179de769b8c9898c075#code

    "Contract that implements guestlists without NFT and checks Ishtar Gate when needed"

q: wtf? where are the strategies kept track of? babcontroller?

###### BABController

https://etherscan.io/address/0x6504227a2f6c44e951289179de769b8c9898c075#code

## Main Challenges

For V1, investor -> manager relation will be 1-1. Users can be their own managers. The manager wallet has free reign to do as it pleases.
Txs are masked to retain privacy. Investor gets some kind of proof of investment (mirrorshares, or an NFT)


#### [v1] Allow manager to execute arbitrary txs through smart wallet on arbitrary dapp.

Could use an iFrame. Manager executes all txs through the main site, iFrame intercepts metamask requests, routes txs through the smart wallet

Chrome extension. same ideas as iframe. middleware to catch metamask requests txs, route them through the managers smartwallet.
if manager has multiple wallets, extension lets you switch your active smart wallet to route txs through


#### [v2] Notifying investors when the manager wants to make a new tx
  * Use EPNS?
  * Use discord?


#### [v2] Gas fees for approvals
  * If abilities are kept track of in the proxy contract, each permission added will be an additional gas cost
  * Can we encourage managers to batch these?

