import { cv } from "../assets";

export default function Hero() {
  return (
    <div className="md:pr-40 md:text-left text-center w-1/2 my-50">
      <h1 className="text-white ">
        Hello, I'm <br />
        <span className="font-bold text-5xl">Mariana Cruz</span> <br />
        <span className="font-bold text-xl ">Creative Frontend Developer</span>
        <p className="mt-6 text-justify">
          Passionate about technology and always on the lookout for innovative
          solutions in web-development. My main focus is bringing your designs
          to life with some front-end magic, mixing creativity with user
          experience.
        </p>
        <div className="flex justify-center md:justify-start items-center mx-auto mt-6">
          <a
            href={cv}
            target="_blank"
            className="rounded-md text-center p-6 bg-[#EAC84E] text-[#455C5E] font-bold hover:bg-[#F1DC8E] w-1/2"
          >
            Download CV
          </a>
          <a className="w-1/2 text-center rounded-md ml-4 p-6 border border-[#EAC84E] text-[#EAC84E] font-bold  hover:opacity-50">
            Contact
          </a>
        </div>
      </h1>
    </div>
  );
}
