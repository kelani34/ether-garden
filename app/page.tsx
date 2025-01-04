import Image from "next/image";

export default function Home() {

  const { ethers, network } = require("hardhat");

		async function main() {
			// Create a random wallet
			const wallet = ethers.Wallet.createRandom();
			console.log("New account address:", wallet.address);
			console.log("Private key:", wallet.privateKey);

			// Get the first signer (default account) from Hardhat
			const [deployer] = await ethers.getSigners();

			// Set the balance of the new account to 10 ETH (10 * 10^18 wei)
			const balance = "0x8ac7230489e80000";
			await network.provider.send("hardhat_setBalance", [
				wallet.address,
				balance,
			]);

			console.log("Funded new account with 10 ETH");
		}

		main()
			.then(() => process.exit(0))
			.catch((error) => {
				console.error(error);
				process.exit(1);
			});


      
		return (
			<div className="">
				<Image
					src="/images/nextjs.png"
					alt="Next.js Logo"
					width={500}
					height={500}
				/>
			</div>
		);
}
