import React from "react";
import img from "../assets/images/About.png";

function About() {
  return (
    <div id="about">
      <div className="flex flex-col w-full items-center my-8 flex-wrap">
        <h1 class="text-3xl font-semibold text-gray-800 uppercase lg:text-4xl dark:text-white">
          About ME
        </h1>

        <div class="mt-2">
          <span class="inline-block w-40 h-1 rounded-full bg-primary"></span>
          <span class="inline-block w-3 h-1 ml-1 rounded-full bg-primary"></span>
          <span class="inline-block w-1 h-1 ml-1 rounded-full bg-primary"></span>
        </div>
      </div>
      <div className="container mx-auto flex flex-col-reverse md:flex-row  md:items-center gap-4">
        <div className="p-4 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl">Short Story</h2>
          <br />
          <p className="text-gray-10 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quasi, praesentium quis asperiores dolor numquam vitae perferendis,
            consequuntur tempora porro esse illum repudiandae? Fugiat natus ipsa
            illum, esse aliquid explicabo consequatur officiis suscipit fuga
            voluptatem hic cupiditate libero! Ipsum accusamus laboriosam
            explicabo sint a incidunt iste libero totam optio et aspernatur quis
            repellendus odio accusantium dolorum amet illum harum quaerat fugit
            consequuntur neque eos, saepe rerum quae. Eum nam amet beatae
            ratione magni, asperiores iure esse eius, accusamus quis labore
            iusto fugiat. Distinctio, aliquid adipisci. Labore minima inventore
            voluptatibus distinctio explicabo voluptates, commodi numquam error
            deserunt itaque deleniti consectetur expedita impedit enim
            reiciendis accusantium assumenda doloremque soluta. Perspiciatis,
            illum praesentium? Dolores sed, minima nostrum suscipit
            exercitationem a quaerat et nemo!
          </p>
          <br />
          <div className="flex gap-2">
            <h5 className="text-xl">Writer :- </h5>
            <h5 className="text-xl text-primary">Ahmed Ezzt</h5>
          </div>
        </div>
        <div className="md:w-1/2 text-center">
          <img src={img} alt="" className="w-3/4 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
