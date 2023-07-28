import React from "react";
import { DeveloperInfo } from "../content";
import "./skill.css";

function Skills() {
  return (
    <div id="skills">
      <div className="flex flex-col w-full items-center my-8 flex-wrap">
        <h1 className="text-3xl font-semibold text-gray-800 uppercase lg:text-4xl dark:text-white">
          My Skills
        </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 rounded-full bg-primary"></span>
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-primary"></span>
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-primary"></span>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center gap-4 flex-col md:flex-row ">
          <div className="md:w-1/2 rounded-3xl bg-lightBackground shadow-md dark:bg-darkSecondary h-[500px] p-4">
            <h1 className="text-2xl">MAIN SKILLS</h1>
            {DeveloperInfo.mainSkills.map((skill) => (
              <div className="flex gap-2 my-8 items-center" key={skill.title}>
                <p className="tech text-lg">{skill.title}</p>
                <progress
                  className="bg-lightSecondary flex-grow"
                  value={skill.precent}
                  max="100"
                  color="#000"
                ></progress>

                <p>{skill.precent}%</p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 rounded-3xl bg-lightBackground shadow-md dark:bg-darkSecondary h-[500px] p-4">
            <h1 className="text-2xl">GENERAL SKILLS</h1>
            {DeveloperInfo.generalSkills.map((skill) => (
              <div className="flex gap-2 my-8 items-center" key={skill.title}>
                <p className="tech text-lg">{skill.title}</p>
                <progress
                  className="progress progress-flat-primary flex-grow"
                  value={skill.precent}
                  max="100"
                ></progress>
                <p>{skill.precent}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
