import React from "react";
import WorkItem from "./WorkItem";

const workData = [
  {
    id: 7,
    title: "Research Assistant / Software Developer",
    company: "University of Turku",
    description: "Working as a research assistant at Software Engineering Lab at Faculty of Technology. Main tasks are developing software and helping with other research related tasks. We had the freedom to do the Course Selector project with my coworker from start to finish. We designed, developed, tested and hosted the project by ourselves. Learned a lot about software development, teamwork and research work.",
    duration: "On going",
    year: "2024-2025",
  },
  {
    id: 6,
    title: "Co-Founder",
    company: "Liten Group Oy",
    description: "Co-founded a company with my brother. We are currently developing websites and web applications for our customers. We have other projects in the works as well, like few different e-commerce stores and a renting platform. Trying to learn important entrepreneurship and business skills for the future.",
    duration: "On going",
    year: "2023",
  },
  {
    id: 5,
    title: "Car Driver",
    company: "Biila Solutions Oy",
    description:
      "Same as in Ajoakatemia Oy, just with different company. I currently work here, doing few drives a month. I'm also studying full time, so this is a great way to earn some extra money.",
    duration: "On going",
    year: "2023",
  },
  {
    id: 4,
    title: "Car Driver",
    company: "Ajoakatemia Oy",
    description:
      "Worked as a car driver as a part time job. I was light entrepreneur, so I had to take care of my own drives and billings. Learned a lot about handling own schedules and working independently.",
    duration: "9 months",
    year: "2022",
  },
  {
    id: 3,
    title: "Service Advisor",
    company: "Delta Auto Oy",
    description:
      "Worked as a Service Advisor at a car dealership. I was responsible for greeting customers, writing up repair orders, selling maintenance services, handling warranty claims and managing mechanics time. Learned a lot about customer service, prioritizing and working under pressure",
    duration: "2 years",
    year: "2020-2022",
  },
  {
    id: 2,
    title: "Tank Mechanic Leader",
    company: "Finnish Defence Forces",
    description:
      "Served my 1 year mandatory military service as a tank mechanic leader. Top of my class. I was responsible for maintaining and repairing tanks and other military vehicles. I was also responsible for training new recruits and leading them during their service. End of the service I was entitled as a Corporal. Learned a lot about leadership and teamwork.",
    duration: "1 year",
    year: "2019-2020",
  },
  {
    id: 1,
    title: "Different occasional jobs",
    company: "Various companies",
    description:
      "Worked as a warehouse worker, construction worker, moving assistant, finnish baseball referee etc. Learned a lot about different kind of jobs and working with different kind of people.",
    duration: "3 years",
    year: "2017-2019",
  },
];

const Work = () => {
  return (
    <div id="work" className="section md:px-20">
      <h2>Work</h2>
      {workData.map((work) => (
        <WorkItem
          key={work.id}
          title={work.title}
          company={work.company}
          description={work.description}
          duration={work.duration}
          year={work.year}
        />
      ))}
    </div>
  );
};

export default Work;
