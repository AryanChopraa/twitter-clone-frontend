import Image from 'next/image'
import React from 'react'
import { FaRegComment,FaRetweet } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";


const TweetComp:React.FC = () => {
  return (
    <div className='grid grid-cols-12 py-4 pl-4 pr-10 border-b-[1px] border-b-gray-500' >
        <span className='col-span-1'>
            <Image
            alt='profile picture'
            src='https://avatars.githubusercontent.com/u/68810601?s=400&u=49e196ff12498baf872f11cbfd0d7233578efd4a&v=4'
            width="50"
            height="50"
            className='rounded-full'
            />
        </span>
        <span className='ml-5 col-span-11 flex flex-col gap-5 '>
            <div>Aryan Chopra @aryanchopra</div>
            <div>In the light of recent events, shared a few things I feel about work culture, pressure and toxic environments (Hindi video only).</div>
            <div className='flex flex-row justify-between'>
            <FaRegComment size={20} className='cursor-pointer'/>
            <AiOutlineRetweet size={23} className='cursor-pointer'/>
            <FaRegHeart size={20} className='cursor-pointer'/>
            <FiShare size={20} className='cursor-pointer'/>


            </div>

        </span>
    </div>
  )
}

export default TweetComp