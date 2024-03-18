import React from 'react'
import { motion } from "framer-motion"
import { Button } from './ui/button'
type Props = {
    step: number,
    title: string,
    content: string
}

const Card = ({step, title, content}: Props) => {
  return (
    <div className='flex mt-40 mb-96 justify-center items-center'>
    <motion.div initial={{opacity: 0, scale:0.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1}} exit={{opacity:0}} className='w-[500px] h-[200px] bg-white text-black p-5 rounded-lg border border-slate-300'>
        <div className='flex-col gap-10'>
            <h1 className='text-xl font-bold font-manrope'>Step {step}</h1>
            <h1 className='text-lg mt-1 font-medium font-manrope'>{title}</h1>
            <h1 className='text-sm font-manrope'>{content}</h1>
            <Button variant="outline" color='white' className='text-white mt-5'>Connect Wallet</Button>
        </div>

    </motion.div>
</div>
  )
}

export default Card