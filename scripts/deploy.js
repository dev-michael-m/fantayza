async function main() {
    const fantazya = await ethers.getContractFactory("Fantazya")
    // Start deployment, returning a promise that resolves to a contract object
    const fanta = await fantazya.deploy();
    console.log("Contract deployed to address:", fanta.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  