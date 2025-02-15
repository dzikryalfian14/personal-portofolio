"use client";

import Link from "next/link";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiLaravel } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { DiReact } from "react-icons/di";

import { motion } from "framer-motion";

const currentTech = [
  {
    icon: <BiLogoTypescript />,
    path: "https://www.typescriptlang.org/",
  },
  {
    icon: <RiNextjsFill />,
    path: "https://nextjs.org/",
  },
  {
    icon: <DiReact />,
    path: "https://reactjs.org/",
  },
  {
    icon: <SiTailwindcss />,
    path: "https://tailwindcss.com/",
  },
  {
    icon: <SiLaravel />,
    path: "https://laravel.com/",
  },
  {
    icon: <SiMysql />,
    path: "https://mysql.com/",
  },
  {
    icon: <DiNodejs />,
    path: "https://nodejs.com/",
  },
];
const CurrentTech = () => {
  return (
    <div className="w-80 overflow-hidden">
      <motion.div
        className="flex gap-6 text-[30px] lg:text-[36px] whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }} 
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} 
      >
        {currentTech.map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.2 }}>
            <Link
              href={item.path}
              className="text-primary/70 hover:text-accent dark:hover:text-white transition-all dark:text-white/30"
            >
              {item.icon}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CurrentTech;