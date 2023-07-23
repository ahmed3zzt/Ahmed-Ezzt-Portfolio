import React from "react";
import img from "../assets/images/Services.png";

function Services() {
  return (
    <section className="mt-24 dark:bg-gray-900">
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
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-primary bg-lightBackground rounded-xl md:mx-4 dark:text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Copy &amp; paste components
                </h1>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-primary bg-lightBackground rounded-xl md:mx-4 dark:text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Zero Configrations
                </h1>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-primary bg-lightBackground rounded-xl md:mx-4 dark:text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  elegant Dark Mode
                </h1>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
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
