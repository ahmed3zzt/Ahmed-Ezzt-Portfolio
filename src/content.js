import project1 from "../assets/images/projects/modern-tempelate.png";
import project2 from "../assets/images/projects/personal.png";
import project3 from "../assets/images/projects/elzero-tempelate.png";
import project4 from "../assets/images/projects/landing-2.png";
import project5 from "../assets/images/projects/education.png";
import project6 from "../assets/images/projects/dr.png";

import { DiWebplatform } from "react-icons/di";
import { AiOutlineMobile } from "react-icons/ai";
import { BiLogoWordpress } from "react-icons/bi";

export const Developer = {
  name: "Ahmed Ezzt Sabet",
  about:
    "I am Ahmed Ezzt Egyption Frontend Developer , i Have An Experience In HTNL CSS JAVASCRIPT AND REACT js , I Have 2 Years Of experience in Front End Field , I Build alot of Projects In Deffrience Fields Mobile Web CMS ",
  mainSkills: [
    { title: "HTML", precent: "90" },
    { title: "CSS", precent: "80" },
    { title: "JAVASCRIPT", precent: "70" },

    { title: "SASS", precent: "80" },
    { title: "TAILWINDCSS", precent: "80" },
    { title: "REACT JS", precent: "70" },
    { title: "NEXT JS", precent: "60" },
  ],
  generalSkills: [
    { title: "PYTHON", precent: "80" },
    { title: "LINUX", precent: "60" },
    { title: "WORDPRESS DEVELOPMENT", precent: "70" },
    { title: "SERVERS", precent: "50" },
    { title: "MOBILE DEVELOPMENT", precent: "70" },
  ],
  projects: [
    {
      title: "Modern Tempelate",
      image: project1,
      desc: "Tempelate Build In Bootstrap , this tempelate has amazing Design i used Figma in This Project",
      link: "https://ahmed3zzt.github.io/Modern-Tempelate/",
      gitLink: "https://github.com/ahmed3zzt/Modern-Tempelate",
    },
    {
      title: "Personail Website",
      image: project2,
      desc: "This Is Personal Website I Made By Bootstrap ",
      link: "https://ahmed3zzt.github.io/Landing-Page-3-Personal-Website/",
      gitLink: "https://github.com/ahmed3zzt/Landing-Page-3-Personal-Website",
    },
    {
      title: "Elzero Front End Course Tempelate",
      image: project3,
      desc: "This Is Tempelate From ELzero Course ",
      link: "https://ahmed3zzt.github.io/Landing-Page-Tempelate-1/",
      gitLink: "https://github.com/ahmed3zzt/Landing-Page-Tempelate-1",
    },
    {
      title: "Simple Landing Page",
      image: project4,
      desc: "Simple Landing Page HTML CSS3",
      link: "https://ahmed3zzt.github.io/Landing-Page-template-2/",
      gitLink: "https://github.com/ahmed3zzt/Landing-Page-template-2",
    },
    {
      title: "Simple Education Platform ",
      image: project5,
      desc: "Simple Education Platform Build In WordPress CMS",
      link: "http://ahmed3zzt.byethost7.com/",
      gitLink: "/",
    },
    {
      title: "Simple Clicic",
      image: project6,
      desc: "Simple Clicic Platform Build In WordPress CMS",
      link: "https://dr-osama-hamdy.byethost8.com/",
      gitLink: "/",
    },
  ],
  services: [
    {
      icon: <DiWebplatform />,
      title: "Front End Developer",
      desc: "I Can Build An Amazing And Modern UI BY Front End Technology",
    },
    {
      icon: <AiOutlineMobile />,
      title: "Mobile Developer",
      desc: "I Have A great Experience In Build Apps By Flutter",
    },
    {
      icon: <BiLogoWordpress />,
      title: "Wordpress Developer",
      desc: "I Build Many Projects In Wordpress CMS so I Have Experience In Build Websites By WordPress",
    },
  ],
};
