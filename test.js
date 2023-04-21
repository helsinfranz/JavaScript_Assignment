// create a variable to hold your NFT's
let nftCount = 0;
let all_nft = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, image) {
  const nft = {
    name,
    description,
    image,
  };
  all_nft.push(nft);
  nftCount++;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  all_nft.forEach((nft) => {
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
  });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + nftCount);
}

// call your functions below this line

// create some NFTs
mintNFT("NFT1", "This is the first NFT", "nft1.jpg");
mintNFT("NFT2", "This is the second NFT", "nft2.jpg");
mintNFT("NFT3", "This is the third NFT", "nft3.jpg");

// list the NFTs
listNFTs();

// print the total number of NFTs
getTotalSupply();
