import Skills from "./Skills";
import Hero from "./Hero";

export default function Overlay() {
  return (
    <div className="m-10 md:m-20 md:w-1/2 ">
      <Hero />
      <Skills />
    </div>
  );
}
