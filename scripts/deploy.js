const hre = require("hardhat");

async function main() {
  const Create = await hre.ethers.getContractFactory("Create");
  const create = await Create.deploy();

  await create.waitForDeployment();

  console.log("CONTRACT_ADDRESS:", await create.getAddress());
}

//npx hardhat run scripts/deploy.js --network polygon_amoy
//npx hardhat run scripts/deploy.js --network localhost

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
