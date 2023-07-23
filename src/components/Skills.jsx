import React from "react";

function Skills() {
  const Skills = [
    { title: "HTML", precent: "90" },
    { title: "CSS", precent: "80" },
    { title: "JAVASCRIPT", precent: "70" },
    { title: "SASS", precent: "80" },
    { title: "TAILWINDCSS", precent: "80" },
    { title: "REACT JS", precent: "70" },
    { title: "NEXT JS", precent: "60" },
  ];
  const SkillsMobile = [
    { title: "DART", precent: "80" },
    { title: "FLUTTER", precent: "85" },
    { title: "PROVIDER", precent: "70" },
    { title: "FIREBASE", precent: "60" },
    { title: "BLOC", precent: "75" },
  ];
  return (
    <>
      <div className="flex flex-col w-full items-center my-8 flex-wrap">
        <h1 class="text-3xl font-semibold text-gray-800 uppercase lg:text-4xl dark:text-white">
          My Skills
        </h1>

        <div class="mt-2">
          <span class="inline-block w-40 h-1 rounded-full bg-primary"></span>
          <span class="inline-block w-3 h-1 ml-1 rounded-full bg-primary"></span>
          <span class="inline-block w-1 h-1 ml-1 rounded-full bg-primary"></span>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center gap-4 flex-col md:flex-row ">
          <div className="md:w-1/2 rounded-3xl bg-darkSecondary h-[500px] p-4">
            <h1 className="text-2xl">WEB SKILLS</h1>
            {Skills.map((skill) => (
              <div className="flex gap-2 my-8 items-center" key={skill.title}>
                <p className="tech text-lg">{skill.title}</p>
                <progress
                  class="progress progress-flat-primary flex-grow"
                  value={skill.precent}
                  max="100"
                ></progress>
                <p>{skill.precent}%</p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 rounded-3xl bg-darkSecondary h-[500px] p-4">
            <h1 className="text-2xl">MOBILE SKILLS</h1>
            {SkillsMobile.map((skill) => (
              <div className="flex gap-2 my-8 items-center" key={skill.title}>
                <p className="tech text-lg">{skill.title}</p>
                <progress
                  class="progress progress-flat-primary flex-grow"
                  value={skill.precent}
                  max="100"
                ></progress>
                <p>{skill.precent}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
