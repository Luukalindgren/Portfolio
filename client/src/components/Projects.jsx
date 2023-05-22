import React from "react";
import ProjectItem from "./ProjectItem";
import discord_bottiImg from "../assets/discord_botti.png";
import githubImg from "../assets/github.png";
import kisakalenteriImg from "../assets/kisakalenteri.png";
import LLImg from "../assets/LL.png";

const Projects = () => {
  return (
    <div id="projects" className="section md:px-20">
      <h2>Projects</h2>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem
          img={kisakalenteriImg}
          title="Competition calendar"
          desc="MERN -stack project"
          link="https://luukalindgren.github.io/Competition-calendar/"
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
          desc="All projects"
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
