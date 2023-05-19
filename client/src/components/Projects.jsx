import React from "react";
import ProjectItem from "./ProjectItem";
import discord_bottiImg from "../assets/discord_botti.png";
import githubImg from "../assets/github.png";
import kisakalenteriImg from "../assets/kisakalenteri.png";
import LLImg from "../assets/LL.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#4B1300]">
        Projects
      </h1>
      <p className="text-center py-8">
        Projects that I have done in my free time or as a school project:
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={kisakalenteriImg}
          title="Kisakalenteri"
          desc="MERN -stack project"
          link="https://github.com/Luukalindgren/Competition-calendar"
        />
        <ProjectItem
          img={discord_bottiImg}
          title="Discord bot"
          desc="Python project"
          link="https://github.com/Luukalindgren/labrakurssi_tyo2"
        />
        <ProjectItem
          img={githubImg}
          title="GitHub"
          desc="Kaikki projects"
          link="https://github.com/Luukalindgren"
        />
        <ProjectItem
          img={LLImg}
          title="Luuka Lindgren -Logo"
          desc="Illustrator project"
          link="#projects"
        />
      </div>
    </div>
  );
};

export default Projects;
