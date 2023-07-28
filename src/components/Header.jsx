import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Header(props) {
  const [mobileMenu, setMobileMenu] = useState("hidden");
  const [togglePostion, setTogglePostion] = useState("left-1 top-1");
  const showMobile = () => {
    setMobileMenu("flex");
  };
  const hideMobile = () => {
    setMobileMenu("hidden");
  };
  useEffect(() => {
    if (props.theme === "light") {
      setTogglePostion("left-1 top-1");
    } else {
      setTogglePostion("right-1 top-1");
    }
  });
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
      setTogglePostion("right-1 top-1");
      localStorage.setItem("theme", "dark");
    } else {
      props.setTheme("light");
      setTogglePostion("left-1 top-1");
      localStorage.setItem("theme", "light");
    }
  };
  const links = [
    { title: "About", link: "#about" },
    { title: "Projects", link: "#projects" },
    { title: "Services", link: "#services" },
    { title: "Skills", link: "#skills" },
    { title: "Contact", link: "#contact" },
  ];
  return (
    <>
      <header className="text-gray-600 body-font fixed w-full z-50 dark:bg-darkBackground dark:text-darkText bg-white shadow-sm mb-4">
        <div className="container mx-auto flex flex-wrap p-5  md:flex-row items-center justify-between">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 text-primary text-xl"
            href="/"
            style={{ fontFamily: "'Lumanosimo', cursive" }}
          >
            Ahmed Ezzt
          </a>
          <div className="hidden md:flex justify-between items-center">
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              {links.map((link, index) => (
                <a
                  className="mr-5 hover:text-gray-900"
                  key={index}
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </nav>
            <div className="flex flex-row justify-between toggle">
              <label
                htmlFor="dark-toggle"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    name="dark-mode"
                    id="dark-toggle"
                    className="checkbox hidden"
                    onClick={changeTheme}
                  />
                  <div className="block border-[1px] dark:border-white border-darkSecondary w-14 h-8 rounded-full"></div>
                  <div
                    className={`dot absolute ${togglePostion} dark:bg-white bg-darkSecondary w-6 h-6 rounded-full transition`}
                  ></div>
                </div>
                <div className="ml-3 dark:text-white text-gray-900 font-medium">
                  {props.theme === "light" ? "Dark Mode" : "Light Mode"}
                </div>
              </label>
            </div>
          </div>
          <AiOutlineMenu
            size={`30px`}
            className="md:hidden block"
            onClick={showMobile}
          />
          <div
            className={`${mobileMenu} w-full h-screen absolute top-0 left-0 items-center justify-center bg-white dark:bg-darkBackground transition-all duration-500 flex-col`}
          >
            <nav className="flex flex-col gap-6 text-3xl">
              {links.map((link, index) => (
                <a
                  className="mr-5 hover:text-gray-900"
                  key={index}
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </nav>
            <div className="flex flex-row justify-between toggle mt-4">
              <label
                htmlFor="dark-toggle"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    name="dark-mode"
                    id="dark-toggle"
                    className="checkbox hidden"
                    onClick={changeTheme}
                  />
                  <div className="block border-[1px] dark:border-white border-darkSecondary w-14 h-8 rounded-full"></div>
                  <div
                    className={`dot absolute ${togglePostion} dark:bg-white bg-darkSecondary w-6 h-6 rounded-full transition`}
                  ></div>
                </div>
                <div className="ml-3 dark:text-white text-gray-900 font-medium">
                  {props.theme === "light" ? "Dark Mode" : "Light Mode"}
                </div>
              </label>
            </div>
            <AiOutlineClose
              size={`30px`}
              className="absolute right-10 top-10"
              onClick={hideMobile}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
