import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";
import Projects from "./components/Projects";
import { useLayoutEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    setTheme(localStorage.getItem("theme"));
  }, []);
  return (
    <div className={`${theme}`}>
      {loading ? (
        <div className="absolute bg-white dark:bg-darkBackground w-full h-screen top-0 left-0 flex items-center justify-center">
          <Circles
            height="100"
            width="100"
            color="#2b65e0"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="dark:bg-darkBackground dark:text-darkText">
          <AnimatedCursor
            innerSize={8}
            outerSize={42}
            color="0 , 114 , 245 "
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={2}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              "img",
              ".text-primary",
            ]}
          />
          <Header theme={theme} setTheme={setTheme} />
          <Hero />
          <About />
          <Projects />
          <Services />
          <Skills />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
