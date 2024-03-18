// import { NextRequest, NextResponse } from "next/server";
// import { ethers } from "ethers";
// // import { useAppSelector } from "@/hooks/hooks";
// import { contractAddress } from "@/utils/contractAddress";
// import { contractABI } from "@/utils/contractABI";
// import Web3 from "web3";


// export const POST = async (req) => {
//     try {
//         const body = await req.json();
//         const state = useAppSelector((state) => state.account.publicAddress);
//     const ethereum = window.ethereum;
//     const web3 = new Web3(window.ethereum);
//     console.log(ethereum +  "....... "  + web3 + "...." + state);
//         console.log("inside provider check")
//     //     const provider = new ethers.providers.Web3Provider(ethereum);
//     //   const signer = provider.getSigner();
//       const EnsSmartContract = new ethers.Contract(contractAddress, contractABI, state);
//       const hasEns = await EnsSmartContract.addressMap('0xa721eDb6A224D25dd7194d5E6a3651DD07F54750');
//       return NextResponse.json({ hasEns: hasEns }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ message: "no proper contract connection" }, { status: 400 })
//     }

// }

import { contractABI } from "@/utils/contractABI";
import { contractAddress } from "@/utils/contractAddress";
import { NextRequest, NextResponse } from "next/server";
import {ethers} from "ethers";
import Web3 from "web3";
export const POST = async (req) => {
    try {
        // const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/SwxJCwZdNAGdq86c7JkduTzcKFqVBcVt");
        // const provider = new ethers.BrowserProvider(window.ethereum)
    // const signer = provider.getSigner();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const contract = new ethers.Contract(contractAddress, contractABI, signer);

// const result = await contract.isAddresspresent("0xa721eDb6A224D25dd7194d5E6a3651DD07F54750");
// await window.ethereum.enable();
// const web3 =  new Web3(window.ethereum);
// const contract =  new web3.eth.Contract(contractABI, contractABI);   

return NextResponse.json({ "hasEns": provider }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "no proper contract connection" }, { status: 400 })    
    }

}