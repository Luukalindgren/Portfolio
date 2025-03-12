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
import capstoneImg from "../assets/capstone_thumbnail.webp";

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
          desc="React + Express + MongoDB + Linux Server "
          sourceLink="https://github.com/Luukalindgren/course-selector-utu"
          secondaryLink="https://kurssivalitsin.utu.fi/"
          showOverlay={activeProject === "Course Selector"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={jobpostsImg}
          title="Job Postings"
          desc="React + FastAPI + MariaDB + Linux Server"
          sourceLink="https://github.com/Luukalindgren/jobposts-utu"
          secondaryLink="https://jobposts.swengcyber.utu.fi/"
          showOverlay={activeProject === "Job Postings"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={variationtoolImg}
          title="Variation Tool"
          desc="Angular + SCSS + Express + Linux Server "
          sourceLink="https://github.com/Luukalindgren/variation-generator-utu"
          secondaryLink="https://variationtool.utu.fi/"
          showOverlay={activeProject === "Variation Tool"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={vicKuljetustahvoImg}
          title="Route Planner"
          desc="React + Bootstrap + Supabase + Azure"
          sourceLink="https://github.com/Luukalindgren/VIC_Kuljetustahvo"
          secondaryLink="https://vic.kuljetustahvo.fi/"
          showOverlay={activeProject === "Route Planner"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={BlogImg}
          title="Blog site"
          desc="Next.js + Tailwindcss + Supabase"
          sourceLink="https://github.com/Luukalindgren/blog-nextjs"
          secondaryLink="https://blog.luuka.codes/"
          showOverlay={activeProject === "Blog site"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={kisakalenteriImg}
          title="Competition calendar"
          desc="React + Express + MongoDB"
          sourceLink="https://github.com/Luukalindgren/Competition-calendar"
          secondaryLink="https://kisakalenteri.luuka.codes/"
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
          secondaryLink="https://litendev.com/"
          showOverlay={activeProject === "LitenDev Homepage"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={aaltocampersImg}
          title="Aaltocampers"
          desc="Shopify E-commerce"
          secondaryLink="https://aaltocampers.com/"
          showOverlay={activeProject === "Aaltocampers"}
          onClick={toggleOverlay}
        />
        <ProjectItem
          img={maalausliikeilmeImg}
          title="Maalausliikeilme"
          desc="Wordpress Elementor"
          secondaryLink="https://www.maalausliikeilme.fi/"
          showOverlay={activeProject === "Maalausliikeilme"}
          onClick={toggleOverlay}
        />
      </div>
      <br />
      <h2 className="py-12">Other projects</h2>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem
          img={capstoneImg}
          title="Spåtalytics"
          desc="Capstone Project"
          secondaryLink="https://capstone.utu.fi/en-spatalytics"
          showOverlay={activeProject === "Spåtalytics"}
          onClick={toggleOverlay}
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
