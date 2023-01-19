async function main() {
  const [deployer] = await ethers.getSigners();

  const MockStarknetMessaging = await ethers.getContractFactory("MockStarknetMessaging", deployer);
  const mockStarknetMessaging = await MockStarknetMessaging.deploy(200000000000000);
  await mockStarknetMessaging.deployed();
  console.log("MockStarknetMessaging address:", mockStarknetMessaging.address);

  const L1L2 = await ethers.getContractFactory("L1L2", deployer);
  const l1l2 = await L1L2.deploy(mockStarknetMessaging.address);
  await l1l2.deployed();

  console.log("L1L2 address:", l1l2.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });