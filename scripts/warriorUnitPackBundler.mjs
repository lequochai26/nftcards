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
            name: "WARRIOR UNIT PACK",
            image: packImage
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 16,
                quantityPerReward: 1,
                totalRewards: 20
            },
            {
                contractAddress: cardAddress,
                tokenId: 17,
                quantityPerReward: 1,
                totalRewards: 250
            },
            {
                contractAddress: cardAddress,
                tokenId: 18,
                quantityPerReward: 1,
                totalRewards: 250
            },
            {
                contractAddress: cardAddress,
                tokenId: 19,
                quantityPerReward: 1,
                totalRewards: 20
            },
            {
                contractAddress: cardAddress,
                tokenId: 20,
                quantityPerReward: 1,
                totalRewards: 10
            }
        ],
        rewardsPerPack: 5
    });

    console.log("Packs created!");
})();