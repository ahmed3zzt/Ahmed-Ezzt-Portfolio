import React from "react";
import img from "../assets/images/Services.png";
import { DeveloperInfo } from "../content";

function Services() {
  return (
    <section className="mt-24 dark:bg-gray-900" id="services">
      <div className="container mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2 ">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                My Services
              </h1>
              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-primary" />
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-primary" />
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-primary" />
              </div>
            </div>
            <div className="container">
              {DeveloperInfo.services.map((service, index) => (
                <div
                  className="md:flex md:items-start md:-mx-4 m-6"
                  key={index}
                >
                  <span className="inline-block p-2 text-white bg-primary rounded-xl md:mx-4 dark:text-white ">
                    {service.icon}
                  </span>
                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                      {service.title}
                    </h1>
                    <p className="mt-1 text-gray-500 dark:text-gray-300">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img
              className="w-[35rem] h-[35rem] object-cover xl:w-[40rem] xl:h-[40rem]"
              src={img}
              alt="Any Thing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
