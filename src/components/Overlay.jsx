import { Skills, Hero, Projects } from ".";

export default function Overlay() {
  return (
    <>
      <div className="w-full h-2 bg-[#EAC84E] top-0" />
      <div className="m-10 md:m-20">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
