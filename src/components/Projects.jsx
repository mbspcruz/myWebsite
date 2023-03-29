import React, { useState } from "react";
import Modal from "./Modal";
import { duck } from "../assets";

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
        </div>
        <div className="cursor-pointer" onClick={() => handleOpenModal(1)}>
          <video
            className="w-full h-full object-cover rounded-md"
            src={duck}
            controls
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleOpenModal(2)}>
          <video
            className="w-full h-full object-cover rounded-md"
            src={duck}
            controls
          />
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
