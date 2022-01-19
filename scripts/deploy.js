async function main() {
    const larvaLords = await ethers.getContractFactory("LarvaLords")
    // Start deployment, returning a promise that resolves to a contract object
    const larva = await larvaLords.deploy();
    console.log("Contract deployed to address:", larva.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  