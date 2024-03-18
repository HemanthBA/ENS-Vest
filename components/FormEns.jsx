'use client'
import React, {useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { ethers } from "ethers";
import { contractAddress } from "@/utils/contractAddress";
import { contractABI } from "@/utils/contractABI";
import User from "@/models/user";
import { useAppSelector } from "@/hooks/hooks";
import { ColorRing, Audio } from "react-loader-spinner";
import { useToast } from "@/components/ui/use-toast";

const FormEns = ({handleEns, handleSetEns}) => {
  const [input, setInput] = useState("");
  const state = useAppSelector((state) => state.account.publicAddress);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const [availability, setAvailability] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handelApiCall = async (val) => {
    setIsLoading(true);
    if (val.length > 0) {

        const res = await contract.ensPresent(val+'.eth');
        res ? setAvailability(false) : setAvailability(true);
  }
  setIsLoading(false);
  ;}


  const debouncedCallback = useDebounce({
    callback: handelApiCall,
    delay: 1000,
  });

  const handleInput = (event) => {
    const inputValue = event.target.value;

    const regex = /^[a-zA-Z0-9]*$/;
    if (!regex.test(inputValue)) {
      return;
    }
    setInput(inputValue);
    debouncedCallback(inputValue);

    if(input.lenght == 0) {
      setAvailability(false);
    }
  };

  const handleClick = async () => {
    const valueToSend = ethers.utils.parseEther("0.0001");
    const res = await contract
      .registerENS(input+'.eth', { value: valueToSend })
      .then( async () =>{
        handleEns();
        const ensName = await contract.addressMap(state);
        handleSetEns(ensName);
        toast({
          title: "Success",
          description: "Successfully connected to metamask wallet",
        });
      })
      .catch((err) => alert("error is " + err));
    console.log({ res });
  };


  return (
    <Dialog>
      <DialogTrigger>
      <div className="px-3 py-2 text-sm font-ibm  hover:scale-95 transition-all cursor-pointer delay-75 text-white rounded-lg bg-[#c25eff] ">
                Register Your ENS
              </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buy your ENS</DialogTitle>

          <Tabs
            style={{
              marginTop: "20px",
              width: "full",
            }}
            defaultValue="account"
            className="w-[400px]"
          >
            <TabsList style={{marginBottom: '50px'}}>
              <TabsTrigger value="account">Check Availability</TabsTrigger>
              <TabsTrigger value="password">Make Payment</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="ml-1">
                <h1 className="text-xs font-light">
                  Check availability (Just the name we'll take care of .eth)
                </h1>
              </div>
              <div className="mt-2 w-full max-w-sm items-center space-x-2">
                <Input
                  value={input}
                  onChange={handleInput}
                  type="email"
                  placeholder=".eth"
                />
                <div style={{marginTop: "10px"}} className="flex gap-5">
                <ColorRing
  visible={isLoading}
  height="20"
  width="20"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#000000', '#000000', '#000000', '#000000', '#000000']}
  />
  {input.length !== 0 && (availability ? (<h1 style={{color: "green"}} className="text-sm text-green-500">The ENS name is availabel</h1>) : (<h1 style={{color: "red"}} className="text-sm text-red-500">The ENS name is not availabel</h1>)) }
                </div>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="mt-10 ml-1">
                <h1 className="text-xs font-light">
                  You're one step from buying your own ENS name.
                </h1>
                <h1 className="text-md font-light">
                  Pay <span style={{color: "green"}} className="text-emerald-500">0.0001</span> ETH to
                  purchase
                </h1>
              </div>
              <div className="flex mt-2 w-full max-w-sm items-center space-x-2">
                {availability && input.length !== 0 ? (<Button onClick={handleClick} type="submit">
                  Buy Now
                </Button>) : (<Button type="submit">
                Check for available names
                </Button>)}
              </div>
            </TabsContent>
          </Tabs>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};



export default FormEns;
