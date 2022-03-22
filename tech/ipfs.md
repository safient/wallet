## ETHDenver bounty details for IPFS:

Durability of data is an important factor for Safient wallets where user wallets are not stored at one particular place. Along with ThreadDB p2p database, we make use of IPFS to store wallet metadata, proofs and encrypted data on IPFS data storage. This helps us to easily retrieve the data when not available on p2p database and allows easy verification of wallet proofs, recovery proofs by anyone on our network.

Here is a sample meta data of a Safient Wallet: https://ipfs.safient.io/ipfs/QmeGNuvt8Q13fteriMxeZAR9j5CaahyeEeRY8hRTAiyz6g


This is the [PR](https://github.com/safient/core-js/pull/60) that allowed integration of IPFS to Safient Wallet.


[Demo video at this time](https://youtu.be/19Dph5wR0DM?t=127) shows the IPFS metadata created while a new wallet was created.
