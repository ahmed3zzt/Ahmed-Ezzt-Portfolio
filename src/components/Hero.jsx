import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <>
      <div
        className="md:container mx-auto flex  "
        style={{ height: "calc(100vh - 72px)" }}
        id="home"
      >
        <div className=" flex flex-col justify-center gap-4 md:gap-8 md:pl-36 pl-8">
          <h4 className="text-3xl">Welcome ❤🙂</h4>
          <h1 className="text-4xl md:text-7xl">
            <span className="text-primary">
              I'm.
              <br />
            </span>
            Ahmed Ezzt Sabet
          </h1>
          <div className="text-4xl text-primary flex gap-2 md:gap-4">
            <div className="text-darkText ">Work As </div>
            <Typewriter
              options={{
                strings: ["Front End Developer", "Mobile Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
