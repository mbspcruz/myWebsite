import React, { useState } from "react";
import { Html } from "@react-three/drei";
import Modal from "./Modal";
import * as THREE from "three";

export default function Cubes() {
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
    <>
      <group>
        <mesh
          position={[0, -60, 0]}
          rotation={[0, Math.PI * 0.2, 0]}
          side={THREE.DoubleSide}
          onClick={() => handleOpenModal(1)}
        >
          <planeGeometry />
          <meshNormalMaterial />
        </mesh>
        <mesh position={[3, -60, -2]} onClick={() => handleOpenModal(0)}>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
        <mesh position={[-3, -60, 2]} onClick={() => handleOpenModal(2)}>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>

        <Html>
          <Modal
            isOpen={modalIsOpen}
            closeModal={handleCloseModal}
            activeProject={activeProject}
          />
        </Html>
      </group>
    </>
  );
}
