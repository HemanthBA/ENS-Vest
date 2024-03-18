'use client'
import React, { useEffect } from 'react'
import {Clipboard, ClipboardCheck} from "lucide-react"
import { useToast } from "@/components/ui/use-toast";
const Documentation = () => {
    const { toast } = useToast();
  
    
  return (
    <div className=''>
        <div className='flex justify-center'>
        <h1 className="font-ibm text-3xl font-bold text-center text-white">
          Documentation
        </h1>
      </div>
      <div className='text-lg font-medium font-ubuntu text-white mt-12'>
      <span className="font-ibm text-md rounded-lg text-[#D2A8FF] p-1 bg-[#262626]">
          ens name
        </span> is a package that allows developers to plugin and query the blockchain for getting their ENS (Ethereum Name Service) name. This functionality can be widely used to simplify blockchain transactions and provide user identification on their platform, among other things.
      </div>
      <div className='mt-10 font-ibm text-3xl font-bold text-left text-[#D2A8FF]'>
        Installation
      </div>
      <div style={{width: '400px', background: '#262626', marginTop: '20px', borderColor: '#292829'}} className='p-3 bg-slate-200 text-slate-300 border flex items-center justify-between rounded-lg'>
        <h1 className='font-source'>
           {'>'} npm install ens-name
        </h1>
        <Clipboard onClick={() => {
            toast({
                title: "Copied"
              });
              navigator.clipboard.writeText("npm install ens-name")
        }} className='cursor-pointer' size={20} />
      </div>
      <div className='mt-10 font-ibm text-3xl font-bold text-left text-[#D2A8FF]'>
        Example
      </div>
      <div style={{marginTop: "20px"}}>
        <img src='/code.svg' />
      </div>
      <div className='mt-10 font-ibm text-3xl font-bold text-left text-[#D2A8FF]'>
        What it returns
      </div>
      <div style={{marginTop: "20px"}}>
        <img src='/result.svg' />
      </div>
    </div>
  )
}

export default Documentation