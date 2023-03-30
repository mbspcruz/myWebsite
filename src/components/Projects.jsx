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
        <div className="cursor-pointer" onClick={() => handleOpenModal(0)}>
          <video
            className="w-full h-full object-cover rounded-md"
            src={duck}
            autoPlay
          />
          <div className="">
            Message Mail
            <div className="flex">
              <img className="h-8 w-8" src={react} alt="" />
              <img className="h-8 w-8 ml-2" src={tailwind} alt="" />
            </div>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => handleOpenModal(1)}>
          <video
            className="w-full h-full object-cover rounded-md"
            src={duck}
            controls
          />
          <div className="">
            My Website
            <div className="flex">
              <img className="h-8 w-8" src={react} alt="" />
              <img className="h-8 w-8 ml-2" src={tailwind} alt="" />
              <img className="h-8 w-8 ml-2" src={threejs} alt="" />
              <img className="h-8 w-8 ml-2" src={blender} alt="" />
              <img className="h-8 w-8 ml-2" src={css} alt="" />
            </div>
          </div>
        </div>
        <div>
          <video
            className="w-full h-full object-cover rounded-t-md"
            src={duck}
            controls
          />
          <div className="bg-[#CAD7D8] p-6 rounded-b-md font-bold text-[#455c5e]">
            Billing Page
            <div className="flex mt-2">
              <img className="h-8 w-8" src={javaScript} alt="" />
              <img className="h-8 w-8 ml-2" src={tailwind} alt="" />
              <img className="h-8 w-8 ml-2" src={css} alt="" />{" "}
              <div className="ml-auto">
                <button
                  onClick={() => handleOpenModal(2)}
                  className="font-light text-sm p-2 border rounded-md"
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
    </div>
  );
}
