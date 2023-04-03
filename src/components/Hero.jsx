import { cv } from "../assets";

export default function Hero() {
  return (
    <div className="flex justify-center md:block my-20 lg:my-44  ">
      <div className="md:pr-40 md:text-left lg:w-1/2 md:w-2/3">
        <h1 className="text-white text-left  lg:text-md text-sm ">
          <span className="text-center font-bold text-5xl">Mariana Cruz</span>
          <br />
          <span className="font-bold text-xl ">
            Creative Frontend Developer
          </span>
        </h1>
        <p className="mt-8 md:mt-6 md:text-lg text-sm text-white">
          Passionate about technology and always on the lookout for innovative
          solutions in web-development. My main focus is bringing your designs
          to life with some front-end magic, mixing creativity with user
          experience.
        </p>
        <div className="flex justify-center md:justify-start items-center mx-auto mt-8 md:mt-6 lg:text-md text-sm">
          <a
            href={cv}
            target="_blank"
            className="rounded-md text-center p-4 lg:p-6 bg-[#EAC84E] text-[#455C5E] font-bold hover:bg-[#F1DC8E] w-1/2"
          >
            Download CV
          </a>
          <a
            href="https://calendly.com/mbspcruz/30min"
            target="_blank"
            className="flex items-center justify-center w-1/2 text-center self-stretch rounded-md ml-4  p-4 lg:p-6 border border-[#EAC84E] text-[#EAC84E] font-bold  hover:opacity-50"
          >
            Contact
          </a>
        </div>
        <div className="flex mt-10 ">
          <a
            href="https://www.linkedin.com/in/mariana-cruz42/"
            target="_blank"
            className="text-[#CAD7D8] hover:text-[#EAC84E] mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/mbspcruz"
            target="_blank"
            className="text-[#CAD7D8] hover:text-[#EAC84E]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
