export default function Hero() {
  return (
    <div className="md:pr-40 md:text-left text-center w-1/2 my-56">
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
        <div className="flex justify-center md:justify-start mt-6">
          <button className="rounded-md p-6 bg-[#EAC84E] text-[#455C5E] font-bold w-1/3 hover:bg-[#F1DC8E]">
            Download CV
          </button>
          <button className="rounded-md ml-4 p-6 border border-[#EAC84E] text-[#EAC84E] font-bold w-1/3 hover:opacity-50">
            Contact
          </button>
        </div>
      </h1>
    </div>
  );
}
