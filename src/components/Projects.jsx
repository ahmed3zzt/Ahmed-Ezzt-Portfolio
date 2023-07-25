import React from "react";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { DeveloperInfo } from "../content";
function Projects() {
  return (
    <div id="projects">
      <div className="flex flex-col w-full items-center my-8 flex-wrap">
        <h1 class="text-3xl font-semibold text-gray-800 uppercase lg:text-4xl dark:text-white">
          My Projects
        </h1>
        <div class="mt-2">
          <span class="inline-block w-40 h-1 rounded-full bg-primary"></span>
          <span class="inline-block w-3 h-1 ml-1 rounded-full bg-primary"></span>
          <span class="inline-block w-1 h-1 ml-1 rounded-full bg-primary"></span>
        </div>
      </div>
      <div className="container">
        <div className="flex gap-4 flex-wrap justify-center">
          {DeveloperInfo.projects.map((project, index) => (
            <div
              className="project p-4 w-full md:w-[30%] bg-darkSecondary rounded-lg"
              key={index}
            >
              <img
                src={project.image}
                alt=""
                className="w-full object-cover rounded-lg"
              />
              <h1 className="text-3xl my-4">{project.title}</h1>
              <hr />
              <p className="desc text-base my-4">{project.desc}</p>
              <ul className="flex gap-3 my-2">
                <li className="link bg-darkBackground text-darkText p-4 rounded-full ">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <BiLinkExternal size={20} />
                  </a>
                </li>
                <li className="link bg-darkBackground text-darkText p-4 rounded-full ">
                  <a href={project.gitLink} target="_blank" rel="noreferrer">
                    <BiLogoGithub size={20} />
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
