import React from "react";
import WorkItem from "./WorkItem";

const workData = [
  {
    id: 1,
    title: "Car Driver",
    company: "Ajoakatemia Oy",
    description:
      "Worked as a car driver as a part time job. I was light entrepreneur, so I had to take care of my own drives and billings.",
    duration: "9 months",
    year: "2022",
  },
  {
    id: 2,
    title: "Service Advisor",
    company: "Delta Auto Oy",
    description:
      "Worked as a Service Advisor at a car dealership. I was responsible for greeting customers, writing up repair orders, selling maintenance services, handling warranty claims and managing mechanics time.",
    duration: "2 years",
    year: "2020-2022",
  },
  {
    id: 3,
    title: "Tank Mechanic",
    company: "Finnish Defence Forces",
    description:
      "Served my 1 year mandatory military service as a tank mechanic. Top of my class. I was responsible for maintaining and repairing tanks and other military vehicles. I was also responsible for training new recruits and leading them during their service. End of the service I was entitled as a Corporal.",
    duration: "1 year",
    year: "2019-2020",
  },
  {
    id: 4,
    title: "Different occasional jobs",
    company: "Various companies",
    description:
      "Worked as a warehouse worker, construction worker, moving assistant, finnish baseball referee etc.",
    duration: "3 years",
    year: "2017-2019",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-stone-100">
      <h1 className="text-4xl font-bold text-center text-[#4B1300] pb-8">
        Work
      </h1>
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
