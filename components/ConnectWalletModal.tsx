"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { updateAccountAddress } from "@/provider/Account";
import { useAppSelector, useAppDispatcher } from "@/hooks/hooks";
import { ethers } from "ethers";
import FormEns from "./FormEns";
import { contractAddress } from "@/utils/contractAddress";
import { contractABI } from "@/utils/contractABI";

type Props = {};

const ConnectWalletModal = (props: Props) => {
  const state = useAppSelector((state) => state.account.publicAddress);
  const dispatchAddress = useAppDispatcher();

  const { toast } = useToast();
  const [address, setAddress] = useState("");
  const [connected, setConnected] = useState<boolean>(false);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const [hasEns, setHasEns] = useState(false);
  const [ens, setEns] = useState("");

  const handleSetEns = (val: string) => {
    setEns(val);
  };

  const accountChangedHandler = async (newAccount: any) => {
    const address = await newAccount.getAddress();
    setAddress(address);
    dispatchAddress(updateAccountAddress(address));
    const res = await contract.isAddresspresent(address);
    res ? setHasEns(true) : setHasEns(false);
    const ensName = await contract.addressMap(address);
    setEns(ensName);
  };

  const handleSetHasEns = () => {
    setHasEns(true);
  };

  const handleClick = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.send("eth_requestAccounts", []).then(async () => {
        await accountChangedHandler(provider.getSigner());
      });
      console.log("the address - " + address);
      setConnected(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (!connected) {
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <div>
            {address == "" && (
              <div className="px-3 py-2 text-sm font-ibm  hover:scale-95 transition-all cursor-pointer delay-75 text-white rounded-lg bg-[#c25eff] ">
                Connect Wallet
              </div>
            )}
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Connect to Wallet</AlertDialogTitle>
            <Card className="p-3 flex gap-6">
              <div style={{ height: "60px", width: "60px" }}>
                <img src="/metamask.png" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">MetaMask</h1>
                <div className="flex gap-2 mt-2 border-b cursor-pointer">
                  <h1 className="text-sm font-light">
                    Connect to MetaMask wallet
                  </h1>
                  <div className="flex flex-col-reverse relative bottom-[4px]">
                    <Wallet size={10} />
                  </div>
                </div>
              </div>
            </Card>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                handleClick();
                toast({
                  title: "Success",
                  description: "Successfully connected to metamask wallet",
                });
              }}
            >
              Connect Wallet
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  } else {
    return (
      <>
        {!hasEns ? (
          <FormEns handleEns={handleSetHasEns} handleSetEns={handleSetEns} />
        ) : (
          <div className="px-3 py-2 text-sm font-ibm  hover:scale-95 transition-all cursor-pointer delay-75 text-white rounded-lg bg-[#c25eff] ">
            You have ENS - {ens}
          </div>
        )}
      </>
    );
  }
};

export default ConnectWalletModal;
