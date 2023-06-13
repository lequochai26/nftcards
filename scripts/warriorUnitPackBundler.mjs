import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

    const packAddress = "0x74476e7f180599310eF9FBFf4dEDaFe851Bd9E54";
    const cardAddress = "0xD18274c7F16B9FcAD5637a363D8b2BC4b0d8C9dB";

    const pack = sdk.getContract(packAddress, "pack");
    const card = sdk.getContract(cardAddress, "edition");

    (await card).setApprovalForAll(packAddress, true);
    console.log("Approved contract!");

    const packImage = "ipfs://QmcccwqBbK6m3XR6iCRFiW6MduS3scAW4H89UVaFgFxfAW/Pack.webp";

    console.log("Creating pack!");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "Warrior Unit Pack",
            image: packImage
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 5,
                quantityPerReward: 1,
                totalRewards: 5
            },
            {
                contractAddress: cardAddress,
                tokenId: 6,
                quantityPerReward: 1,
                totalRewards: 10
            },
            {
                contractAddress: cardAddress,
                tokenId: 7,
                quantityPerReward: 1,
                totalRewards: 10
            },
            {
                contractAddress: cardAddress,
                tokenId: 8,
                quantityPerReward: 1,
                totalRewards: 50
            },
            {
                contractAddress: cardAddress,
                tokenId: 9,
                quantityPerReward: 1,
                totalRewards: 10
            }
        ],
        rewardsPerPack: 5
    });

    console.log("Packs created!");
})();