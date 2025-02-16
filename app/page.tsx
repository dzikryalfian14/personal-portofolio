import CurrentTech from "@/components/CurrentTech";
import DownloadCv from "@/components/DownloadCV";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dzikry Alfian",
  description: "Dzikry Alfian Portofolio",
};
const Home = () => {
  return (
    <section className="h-full">
      <link rel="icon" href="/icons.ico" sizes="any" />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-12">
          {/* Aboute me */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <h2 className="h2 text-accent mb-2">Dzikry Alfian</h2>
            <span className="h3">Software Engineer</span>
            <p className="text-primary mt-4 dark:text-white leading-relaxed text-sm text-justify lg:text-left lg:mr-14 text-md md:text-lg">
              I am a web developer with one year of experience, 
              specializing in frontend development using React.js and Vue.js. 
              I have expertise in building responsive and interactive user interfaces 
              while seamlessly integrating with backend services 
              such as RESTful APIs
            </p>

            {/* Tech yang disukai */}
            <div className="text-sm md:text-md font-bold text-primary mt-4 dark:text-white">
              Tech experience:
              <div className="text-center mt-1 dark:text-white">
                <CurrentTech />
              </div>
            </div>

            {/* Button and social media */}
            <div className="flex mt-8 flex-col lg:flex-row items-center gap-8">
              <DownloadCv />
              <div className="mb-8 lg:mb-0">
                <Social  
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent 
                  rounded-full flex justify-center items-center 
                  text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo  */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;