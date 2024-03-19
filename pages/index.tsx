import Image from "next/image";
import { Inter } from "next/font/google";
import { BsTwitterX ,BsSearch ,BsBell ,BsBookmarkStar ,BsFillPeopleFill,BsPerson } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { BiEnvelope } from "react-icons/bi";
import React from "react";
import TweetComp from "@/components/tweet/TweetComp";


const inter = Inter({ subsets: ["latin"] });

interface sideBarButtonsInterface {
  title: string;
  icon: React.ReactNode;
}

const sideMenuItems: sideBarButtonsInterface[] = [
  {title:"Home",
  icon:<GoHome size={40}/>},
  {title:"Explore",
  icon:<BsSearch size={40}/>},
  {title:"Notifications",
  icon:<BsBell size={40}/>},
  {title:"Messages",
  icon:<BiEnvelope size={40}/>},
  {title:"Bookmarks",
  icon:<BsBookmarkStar size={40}/>},
  {title:"Communities",
  icon:<BsFillPeopleFill size={40}/>},
  {title:"Profile",
  icon:<BsPerson size={40}/>}

]

export default function Home() {
  return (

    <div className="grid grid-cols-12 h-screen px-32">
      <span className="col-span-3 flex flex-col">
        <div className="flex flex-col items-center justify-start hover:bg-gray-800 cursor-pointer rounded-full p-5 w-fit">
          <BsTwitterX size={40} />   
        </div>
     
          <ul className="flex flex-col gap-2">
          {sideMenuItems.map((item)=>(
          <li key={item.title} className="flex flex-row items-center justify-start hover:bg-gray-800 cursor-pointer rounded-2xl p-3 w-fit gap-2 text-xl">
            <span className="flex items-center justify-center"> {item.icon}</span>
            <span className="flex items-center justify-center">{item.title}</span>
          </li>
          ))}
          </ul>

          <button className="bg-[#1E9BF0] text-white px-24 py-3 hover:bg-[#70abd3] ml-1 w-fit rounded-3xl text-xl mt-10">Post</button>

      
          
   
      </span>
      <span className="col-span-6 border-x-[1px] border-x-slate-500 overflow-x-scroll">
        <TweetComp/>
        <TweetComp/>
        <TweetComp/>
        <TweetComp/>
        <TweetComp/>
        <TweetComp/>
        <TweetComp/>
    

      </span>
      <span className="col-span-3 "></span>
    </div>
  );
}
