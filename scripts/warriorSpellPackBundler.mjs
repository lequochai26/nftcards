import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

    const packAddress = "0xAa07fB86C92e43972CE9E417C6ED85e6508C21b8";
    const cardAddress = "0xe37d80769255720BA96942AD5bb173d5766567dd";

    const pack = sdk.getContract(packAddress, "pack");
    const card = sdk.getContract(cardAddress, "edition");

    (await card).setApprovalForAll(packAddress, true);
    console.log("Approved contract!");

    const packImage = "ipfs://QmcccwqBbK6m3XR6iCRFiW6MduS3scAW4H89UVaFgFxfAW/Pack.webp";

    console.log("Creating pack!");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "WARRIOR SPELL PACK",
            image: packImage
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 11,
                quantityPerReward: 1,
                totalRewards: 10
            },
            {
                contractAddress: cardAddress,
                tokenId: 12,
                quantityPerReward: 1,
                totalRewards: 20
            },
            {
                contractAddress: cardAddress,
                tokenId: 13,
                quantityPerReward: 1,
                totalRewards: 20
            },
            {
                contractAddress: cardAddress,
                tokenId: 14,
                quantityPerReward: 1,
                totalRewards: 500
            },
            {
                contractAddress: cardAddress,
                tokenId: 15,
                quantityPerReward: 1,
                totalRewards: 20
            }
        ],
        rewardsPerPack: 5
    });

    console.log("Packs created!");
})();