import React, { useState, useRef } from "react";
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
  messagemail,
  billing,
  html,
} from "../assets";

export default function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  function handleMouseEnter(index) {
    if (videoRefs[index].current) {
      videoRefs[index].current.play();
    }
  }

  function handleOpenModal(projectIndex) {
    setModalIsOpen(true);
    setActiveProject(projectIndex);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="mt-50 lg:mt-72">
      <h2 className="font-bold text-4xl text-white text-nunito">Projects</h2>
      <div className="grid grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-3 mt-20">
        <div>
          <video
            ref={videoRefs[0]}
            className="w-full rounded-t-md"
            src={messagemail}
            muted="muted"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => videoRefs[0].current.pause()}
          />
          <div className="md:text-left bg-[#CAD7D8] p-6 rounded-b-md font-bold text-lg text-[#455c5e] text-center">
            Message Mail
            <div className="md:flex  items-center ">
              <div className="flex justify-center items-center mt-4">
                <img className="h-8 w-8" src={react} alt="" />
                <img className="h-8 w-8 ml-2" src={tailwind} alt="" />
              </div>
              <div className="flex justify-center md:ml-auto md:mt-0 mt-4">
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
            ref={videoRefs[1]}
            className="w-full rounded-t-md"
            src={duck}
            muted="muted"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => videoRefs[1].current.pause()}
          />
          <div className="md:text-left bg-[#CAD7D8] text-center p-6 rounded-b-md font-bold text-lg text-[#455c5e]">
            My Website
            <div className="md:flex  items-center ">
              <div className="flex justify-center items-center mt-4">
                <img className="h-8 w-8" src={react} alt="" />
                <img className="h-8 w-8 ml-2" src={tailwind} alt="" />
                <img className="h-8 w-8 ml-2" src={threejs} alt="" />
                <img className="h-8 w-8 ml-2" src={blender} alt="" />
              </div>
              <div className="flex justify-center md:ml-auto md:mt-0 mt-4">
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
            ref={videoRefs[2]}
            className="w-full rounded-t-md"
            muted="muted"
            src={billing}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => videoRefs[2].current.pause()}
          />
          <div className="bg-[#CAD7D8] p-6 rounded-b-md font-bold text-lg text-[#455c5e] text-center md:text-left">
            Billing Page
            <div className="md:flex  items-center ">
              <div className="flex justify-center items-center mt-4">
                <img className="h-8 w-8" src={javaScript} alt="" />
                <img className="h-8 w-8 ml-2" src={html} alt="" />
                <img className="h-8 w-8 ml-2" src={css} alt="" />
                <img className="h-8 w-8 ml-2" src={tailwind} alt="" />
              </div>

              <div className="flex justify-center md:ml-auto md:mt-0 mt-4">
                <button
                  onClick={() => handleOpenModal(2)}
                  className="font-bold text-sm p-2 bg-[#455c5e] text-white  rounded-md hover:bg-transparent hover:outline hover:outline-[#455c5e] hover:text-[#455c5e]"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          closeModal={handleCloseModal}
          activeProject={activeProject}
        />
      </div>
      <div className="flex justify-center items-center mx-auto my-20 md:mt-40">
        <a
          href={cv}
          target="_blank"
          className="rounded-md mb-20 text-center p-6 bg-[#EAC84E] text-[#455C5E] font-bold hover:bg-[#F1DC8E] md:w-1/4 w-1/2"
        >
          Download CV
        </a>
        <a
          href="https://calendly.com/mbspcruz/30min"
          target="_blank"
          className="text-center mb-20 rounded-md ml-4 p-6 border border-[#EAC84E] text-[#EAC84E] font-bold  hover:opacity-50 md:w-1/4 w-1/2"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
