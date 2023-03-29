import Skills from "./Skills";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Overlay() {
  return (
    <div className="m-10 md:m-20">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
