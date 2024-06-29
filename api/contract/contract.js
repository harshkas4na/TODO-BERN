const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("https://radial-warmhearted-friday.ethereum-sepolia.quiknode.pro/90e276b508b001698fc6560f5bc36a072e4fab7e/")
const contractAddress = "0xbB42297BBb0df25fd20ea76b0E77EAE5AaaA605B";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}
