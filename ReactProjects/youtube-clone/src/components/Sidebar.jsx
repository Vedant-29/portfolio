import React from "react";
import { AiFillHome } from "react-icons/ai";

import {
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdWatchLater,
} from "react-icons/md";

import { CiVideoOn } from "react-icons/ci";

import { FaThumbsUp } from "react-icons/fa";

export default function Sidebar() {

    const mainLinks = [
        {
            icon: <AiFillHome />,
            title: "Home",
        },
        {
            icon: <MdSubscriptions />,
            title: "Subscriptions",
        },
        {
            icon: <MdOutlineVideoLibrary />,
            title: "Library",
        }
    ]

    const otherLinks = [
        {
            icon: <MdOutlineHistory />,
            title: "History",
        },
        {
            icon: <MdWatchLater />,
            title: "Watch Later",
        },
        {
            icon: <CiVideoOn />,
            title: "Your Videos",
        },
        {
            icon: <FaThumbsUp />,
            title: "Liked Videos",
        }
    ]

  return (
    <div className="w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen">
        <ul className="flex flex-col border-b-2 border-gray-700	">
            {
                mainLinks.map(({icon, title}) => {
                    return (
                        <li key={title} className={`pl-6 py-3 hover:bg-zinc-600 ${title === "Home" ? "bg-slate-900" : " "} rounded-xl`}>
                            <a href="#" className="flex items-center gap-5">
                                {icon}
                                <span className="text-sm tracking-wider">{title}</span>
                            </a>
                            
                        </li>
                    )
                
                })
            }
        </ul>
        <ul className="flex flex-col border-b-1 border-gray-800">
            {
                otherLinks.map(({icon, title}) => {
                    return (
                        <li key={title} className={`pl-6 py-3 hover:bg-zinc-600 rounded-xl`}>
                            <a href="#" className="flex items-center gap-5">
                                {icon}
                                <span className="text-sm tracking-wider">{title}</span>
                            </a>
                            
                        </li>
                    )
                
                })
            }
        </ul>
    </div>
  );
}
