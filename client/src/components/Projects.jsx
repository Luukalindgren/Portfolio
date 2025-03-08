import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import kisakalenteriImg from "../assets/kisakalenteri_thumbnail.webp";
import BlogImg from "../assets/blog_thumbnail.webp";
import vicKuljetustahvoImg from "../assets/reittilaskuri_thumbnail.webp";
import courseSelectorImg from "../assets/kurssivalitsin_thumbnail.webp";
import aaltocampersImg from "../assets/aaltocampers_thumbnail.webp";
import variationtoolImg from "../assets/variationtool_thumbnail.webp";
import maalausliikeilmeImg from "../assets/maalausliikeilme_thumbnail.webp";
import litendevImg from "../assets/litendev_thumbnail.webp";
import jobpostsImg from "../assets/jobposts_thumbnail.webp";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleOverlay = (title) => {
    if (window.innerWidth > 1024) return;
    if (activeProject === title) {
      setActiveProject(null);
      return;
    } else {
      setActiveProject(title);
    }
  };

  return (
    <div id="projects" className="section md:px-20">
      <h2 className="py-12">Fullstack Web Projects</h2>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem
          img={courseSelectorImg}
          title="Course Selector"
          desc="MERN -stack project"
          link="https://github.com/Luukalindgren/course-selector-utu"
          showOverlay={activeProject === "Course Selector"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={jobpostsImg}
          title="Job Postings"
          desc="Fullstack project (UTU)"
          link="https://github.com/Luukalindgren/jobposts-utu"
          showOverlay={activeProject === "Job Postings"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={variationtoolImg}
          title="Variation Tool"
          desc="Fullstack project (UTU)"
          link="https://github.com/Luukalindgren/variation-generator-utu"
          showOverlay={activeProject === "Variation Tool"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={vicKuljetustahvoImg}
          title="Route Planner"
          desc="Fullstack project (Paid)"
          link="https://github.com/Luukalindgren/VIC_Kuljetustahvo"
          showOverlay={activeProject === "Route Planner"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={BlogImg}
          title="Blog site"
          desc="Next.js project"
          link="https://github.com/Luukalindgren/blog-nextjs"
          showOverlay={activeProject === "Blog site"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={kisakalenteriImg}
          title="Competition calendar"
          desc="MERN -stack project"
          link="https://github.com/Luukalindgren/Competition-calendar"
          showOverlay={activeProject === "Competition calendar"}
          onClick={toggleOverlay}
        />
      </div>
      <h2 className="py-12">Low-code projects</h2>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem
          img={litendevImg}
          title="LitenDev Homepage"
          desc="Wordpress Elementor"
          link="https://litendev.com/"
          showOverlay={activeProject === "LitenDev Homepage"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={aaltocampersImg}
          title="Aaltocampers E-commerce"
          desc="Shopify Project"
          link="https://aaltocampers.com/"
          showOverlay={activeProject === "Aaltocampers E-commerce"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={maalausliikeilmeImg}
          title="Maalausliikeilme"
          desc="Wordpress Project (Paid)"
          link="https://www.maalausliikeilme.fi/"
          showOverlay={activeProject === "Maalausliikeilme"}
          onClick={toggleOverlay}
        />
      </div>
      <br />
      <h2 className="py-12">Other projects</h2>
      <div className="grid gap-12 sm:grid-cols-2"></div>
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
