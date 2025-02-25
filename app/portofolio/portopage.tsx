"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import UjianDigitalNSI from "@/public/assets/portofolio/ujiandigitalnsi.webp";
import MentalKu from "@/public/assets/portofolio/mentalku.webp";
import WorkSlideBtn from "@/components/WorkSlideBtn";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Mentalku",
    description:
      "An interactive web built with React JS and Tailwind CSS, showcasing my projects and skills in web development. Access the live demo and source code via the links below.",
    image: MentalKu,
    live: "https://mentalku.vercel.app/",
    github:
      "https://github.com/dzikryalfian14/MentalKu",
    stack: [
      {
        name: "React Js Vite",
      },
      {
        name: "Tailwind Css",
      },
    ],
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Ujian Digital",
    description:
      "Ujian Digital NSI I developed using Code Igniter 4 and Bootstrap is a modern solution for users who want to efficiently manage their tasks. By combining the power of PHP in web development with the responsive design of Bootstrap, this application offers an intuitive and enjoyable user experience.",
    image: UjianDigitalNSI,
    live: "",
    github: "https://github.com/dzikryalfian14/ujiandigitalnsi",
    stack: [
      {
        name: "Code Igniter 4",
      },
      {
        name: "Bootstrap 3",
      },
    ],
  },
];

const PortofolioPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="flex flex-col justify-center md:py-12 lg:pb-32"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[58%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-4 md:gap-[30px]">
              {/* Outline num */}
              <div className="flex items-center justify-between">
                <div className="text-3xl md:text-6xl leading-none font-extrabold text-transparent text-outline dark:text-outlinedark">
                  {project.num}
                </div>
                <p className="text-primary dark:text-white text-sm md:text-balance font-semibold py-1 md:py-1 px-2 md:px-4 bg-accent/80">
                  {project.category} Project
                </p>
              </div>

              {/* Project Category */}
              <h2 className="text-2xl md:text-4xl font-bold  text-primary dark:text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* Project Description */}
              <p className="text-primary/60 dark:text-white/60 text-sm md:text-balance">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-sm bg-accent/80 dark:bg-white/20 px-2 py-1 text-primary md:text-balance font-medium dark:text-accent"
                    >
                      {item.name}
                      {/* remove the las coma */}
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-primary/20 dark:border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[34px] h-[34px] md:w-[56px] md:h-[56px] rounded-full bg-primary/20 dark:bg-[#232329] flex justify-center items-center group">
                          <BsArrowUpRight className="text-primary dark:text-white text-md md:text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Github Project button */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[34px] h-[34px] md:w-[56px] md:h-[56px] rounded-full bg-primary/20 dark:bg-[#232329] flex justify-center items-center group">
                          <BsGithub className="text-primary dark:text-white text-md md:text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-6 md:mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[150px] sm:h-[300px] w-full md:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-primary/5 lg:border-y-[6px] lg:border-accent z-10"></div>

                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorkSlideBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-8 h-8 md:w-[44px] md:h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortofolioPage;