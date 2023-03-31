import { Skills, Hero, Projects } from ".";

export default function Overlay() {
  return (
    <div className="m-10 md:m-20">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
