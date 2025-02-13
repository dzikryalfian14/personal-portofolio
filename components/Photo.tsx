"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../public/assets/photo-circle.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.2,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        <div className="w-[230px] h-[230px] lg:h-[498px] lg:w-[498px] dark:mix-blend-lighten absolute">
          <Image
            src={profile}
            priority
            quality={100}
            fill
            className="object-contain"
            alt="dzikry alfian photo"
          />
        </div>

        {/* Circle */}
        <motion.svg
          className="w-[230px] lg:w-[498px] h-[230px] lg:h-[498px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#0284C7"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;