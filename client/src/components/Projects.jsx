import React from "react";
import ProjectItem from "./ProjectItem";
import kisakalenteriappImg from "../assets/kisakalenteri-app-github.png";
import githubImg from "../assets/github.png";
import kisakalenteriImg from "../assets/kisakalenteri.png";
import BlogImg from "../assets/Blogi.png";
import LitenDevImg from "../assets/LitenDev_homepage.png"

const Projects = () => {
  return (
    <div id="projects" className="section md:px-20">
      <h2>Projects</h2>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem
          img={kisakalenteriImg}
          title="Competition calendar"
          desc="MERN -stack project"
          link="https://github.com/Luukalindgren/Competition-calendar"
        />
        <ProjectItem
          img={BlogImg}
          title="Blog site"
          desc="Next.js project"
          link="https://github.com/Luukalindgren/blog-nextjs"
        />
        <ProjectItem
          img={kisakalenteriappImg}
          title="Mobile app"
          desc="React Native project"
          link="https://github.com/Luukalindgren/kisakalenteri-app"
        />
        <ProjectItem
          img={LitenDevImg}
          title="LitenDev"
          desc="Webflow project"
          link="https://liten.dev"
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
