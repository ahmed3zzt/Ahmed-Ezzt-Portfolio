import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="dark">
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
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
