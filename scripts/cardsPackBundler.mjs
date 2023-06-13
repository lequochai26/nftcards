import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

    const packAddress = "0x2F81D44E8BaFC90032F11E2Df8c25759D574195e";
    const cardAddress = "0x2653Ef780BD199138c991825f1353BE0D0ADA531";

    const pack = sdk.getContract(packAddress, "pack");
    const card = sdk.getContract(cardAddress, "edition");

    (await card).setApprovalForAll(packAddress, true);
    console.log("Approved contract!");

    const packImage = "ipfs://Qmavwv1fXwMJyBktQynBVZCW6YoN5DWzmmfFX5spJ5sco5/QuanLyBanHangIcon.png";

    console.log("Creating pack!");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "Cards Pack",
            description: "My first cards pack!",
            image: packImage
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 0,
                quantityPerReward: 1,
                totalRewards: 25
            },
            {
                contractAddress: cardAddress,
                tokenId: 1,
                quantityPerReward: 1,
                totalRewards: 10
            },
            {
                contractAddress: cardAddress,
                tokenId: 2,
                quantityPerReward: 1,
                totalRewards: 5
            },
            {
                contractAddress: cardAddress,
                tokenId: 3,
                quantityPerReward: 1,
                totalRewards: 3
            },
            {
                contractAddress: cardAddress,
                tokenId: 4,
                quantityPerReward: 1,
                totalRewards: 1
            }
        ],
        rewardsPerPack: 4
    });

    console.log("Packs created!");
})();