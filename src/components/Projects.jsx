import React, { useState } from "react";
import Modal from "./Modal";
import {
  blender,
  css,
  duck,
  javaScript,
  react,
  tailwind,
  threejs,
  cv,
} from "../assets";

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  function handleOpenModal(projectIndex) {
    setModalIsOpen(true);
    setActiveProject(projectIndex);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="mt-72">
      <h2 className="font-bold text-4xl text-white text-nunito">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-20">
        <div>
          <video
            className="w-full h-full object-cover rounded-md"
            src={duck}
            autoPlay
          />
          <div className="bg-[#CAD7D8] p-6 rounded-b-md font-bold text-lg text-[#455c5e]">
            Message Mail
            <div className="flex mt-4">
              <img className="h-8 w-8" src={react} alt="" />
              <img className="h-8 w-8 ml-2" src={tailwind} alt="" />
              <div className="ml-auto">
                <button
                  onClick={() => handleOpenModal(0)}
                  className="font-bold text-sm p-2 bg-[#455c5e] text-white  rounded-md hover:bg-transparent hover:outline hover:outline-[#455c5e] hover:text-[#455c5e]"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <video
            className="w-full h-full object-cover rounded-md"
            src={duck}
            controls
          />
          <div className="bg-[#CAD7D8] p-6 rounded-b-md font-bold text-lg text-[#455c5e]">
            My Website
            <div className="flex mt-4">
              <img className="h-8 w-8" src={react} alt="" />
              <img className="h-8 w-8 ml-2" src={tailwind} alt="" />
              <img className="h-8 w-8 ml-2" src={threejs} alt="" />
              <img className="h-8 w-8 ml-2" src={blender} alt="" />
              <img className="h-8 w-8 ml-2" src={css} alt="" />
              <div className="ml-auto">
                <button
                  onClick={() => handleOpenModal(1)}
                  className="font-bold text-sm p-2 bg-[#455c5e] text-white  rounded-md hover:bg-transparent hover:outline hover:outline-[#455c5e] hover:text-[#455c5e]"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <video
            className="w-full h-full object-cover rounded-t-md"
            src={duck}
            controls
          />
          <div className="bg-[#CAD7D8] p-6 rounded-b-md font-bold text-lg text-[#455c5e]">
            Billing Page
            <div className="flex mt-4">
              <img className="h-8 w-8" src={javaScript} alt="" />
              <img className="h-8 w-8 ml-2" src={tailwind} alt="" />
              <img className="h-8 w-8 ml-2" src={css} alt="" />{" "}
              <div className="ml-auto">
                <button
                  onClick={() => handleOpenModal(2)}
                  className="font-bold text-sm p-2 bg-[#455c5e] text-white  rounded-md hover:bg-transparent hover:outline hover:outline-[#455c5e] hover:text-[#455c5e]"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center mx-auto mt-6">
            <a
              href={cv}
              target="_blank"
              className="rounded-md text-center p-6 bg-[#EAC84E] text-[#455C5E] font-bold hover:bg-[#F1DC8E] w-1/2"
            >
              Download CV
            </a>
            <a
              href=""
              target="_blank"
              className="w-1/2 text-center rounded-md ml-4 p-6 border border-[#EAC84E] text-[#EAC84E] font-bold  hover:opacity-50"
            >
              Contact
            </a>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          closeModal={handleCloseModal}
          activeProject={activeProject}
        />
      </div>
    </div>
  );
}
