import { cv } from "../assets";

export default function Hero() {
  return (
    <div className="flex justify-center md:block my-20 lg:my-44 p-10 md:p-0  ">
      <div className="md:pr-40 md:text-left text-center lg:w-1/2 md:w-2/3">
        <h1 className="text-white text-left ">
          Hello, I'm <br />
          <span className="text-center font-bold text-5xl">Mariana Cruz</span>
          <br />
          <span className="font-bold text-xl ">
            Creative Frontend Developer
          </span>
          <p className="mt-8 md:mt-6 ">
            Passionate about technology and always on the lookout for innovative
            solutions in web-development. My main focus is bringing your designs
            to life with some front-end magic, mixing creativity with user
            experience.
          </p>
          <div className="flex justify-center md:justify-start items-center mx-auto mt-8 md:mt-6 mx-auto">
            <a
              href={cv}
              target="_blank"
              className="rounded-md text-center p-6 bg-[#EAC84E] text-[#455C5E] font-bold hover:bg-[#F1DC8E] w-1/2 "
            >
              Download CV
            </a>
            <a
              href=""
              target="_blank"
              className="flex items-center justify-center w-1/2 text-center self-stretch rounded-md ml-4 p-6 border border-[#EAC84E] text-[#EAC84E] font-bold  hover:opacity-50"
            >
              Contact
            </a>
          </div>
        </h1>
      </div>
    </div>
  );
}
