import { Metadata } from "next";
import PortofolioPage from "./portopage";


export const metadata: Metadata = {
  title: "Dzikry Alfian | Work",
  description:
    "Hi! my name is Bima Sanjaya - Explore the various projects and achievements I've worked on as a Software Engineer. This page showcases a range of my work, including software development projects, innovative solutions, and key contributions to the tech industry.",
};
const Portofolio = () => {
  return <PortofolioPage />;
};

export default Portofolio;