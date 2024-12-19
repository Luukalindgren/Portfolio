import React from "react";
import ProjectItem from "./ProjectItem";
import kisakalenteriImg from "../assets/kisakalenteri.png";
import BlogImg from "../assets/Blogi.png";
import vicKuljetustahvo from "../assets/vic_kuljetustahvo.png";
import courseSelectorImg from "../assets/course_selector_home_page.png";

const Projects = () => {
  return (
    <div id="projects" className="section md:px-20">
      <h2>Projects</h2>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem
          img={courseSelectorImg}
          title="Course Selector"
          desc="MERN -stack project"
          link="https://github.com/Luukalindgren/course-selector-utu"
        />
        <ProjectItem
          img={vicKuljetustahvo}
          title="Route Planner"
          desc="Fullstack project (Paid)"
          link="https://github.com/Luukalindgren/VIC_Kuljetustahvo"
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
          <p className="p-3 text-lg font-semibold text-white bg-[#4B1300] rounded-lg cursor-pointer px-8 relative hover:scale-105 ease-in duration-200 ">
            All projects
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
