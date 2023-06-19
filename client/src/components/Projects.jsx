import React from "react";
import ProjectItem from "./ProjectItem";
import kisakalenteriappImg from "../assets/kisakalenteri-app-github.png";
import githubImg from "../assets/github.png";
import kisakalenteriImg from "../assets/kisakalenteri.png";
import BlogImg from "../assets/Blogi.png";

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
          img={githubImg}
          title="GitHub"
          desc="All projects"
          link="https://github.com/Luukalindgren"
        />
      </div>
    </div>
  );
};

export default Projects;
