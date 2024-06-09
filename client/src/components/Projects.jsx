import React from "react";
import ProjectItem from "./ProjectItem";
import kisakalenteriappImg from "../assets/kisakalenteri-app-github.png";
import kisakalenteriImg from "../assets/kisakalenteri.png";
import BlogImg from "../assets/Blogi.png";
import LitenDevImg from "../assets/litendev_homepage.png";
import vicKuljetustahvo from "../assets/vic_kuljetustahvo.png";

const Projects = () => {
  return (
    <div id="projects" className="section md:px-20">
      <h2>Projects</h2>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem
          img={vicKuljetustahvo}
          title="Route Planner"
          desc="Paid Fullstack project"
          link="https://github.com/Luukalindgren/VIC_Kuljetustahvo"
        />
        <ProjectItem
          img={LitenDevImg}
          title="LitenDev"
          desc="Webflow project"
          link="https://www.liten.dev"
        />
        <ProjectItem
          img={BlogImg}
          title="Blog site"
          desc="Next.js project"
          link="https://github.com/Luukalindgren/blog-nextjs"
        />
        <ProjectItem
          img={kisakalenteriImg}
          title="Competition calendar"
          desc="MERN -stack project"
          link="https://github.com/Luukalindgren/Competition-calendar"
        />
      </div>
      <div className="relative flex items-center justify-center pt-10 ">
        <a
          href="https://github.com/Luukalindgren"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="p-3 text-lg font-semibold text-white bg-[#4B1300] rounded-lg cursor-pointer px-8 relative ">
            All projects
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
