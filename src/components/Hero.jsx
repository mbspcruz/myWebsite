export default function Hero() {
  return (
    <div className="md:pr-40 md:text-left text-center">
      <h1 className="text-white ">
        Hello, I'm <br />
        <span className="font-bold text-5xl">Mariana Cruz</span> <br />
        <span className="font-bold text-xl ">Creative Frontend Developer</span>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          recusandae dolores obcaecati, deserunt mollitia eos dolor eum nulla?
          Cumque maxime architecto ea provident quod. Dolores tempore doloremque
          fugiat cum hic voluptatibus, ad consequuntur repellendus non facere
          deserunt aut ratione mollitia eius id dicta aliquam reiciendis sed
          tenetur quae aspernatur iusto?
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="mt-8 p-6 bg-[#EAC84E] text-[#455C5E] font-bold w-1/3 hover:bg-[#F1DC8E]">
            Download CV
          </button>
          <button className="mt-8 ml-4 p-6 border border-[#EAC84E] text-[#EAC84E] font-bold w-1/3 hover:opacity-50">
            Contact
          </button>
        </div>
      </h1>
    </div>
  );
}
