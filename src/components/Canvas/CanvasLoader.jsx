import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <>
      <Html
        as="div"
        center
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transition: "",
        }}
      >
        <span className="canvas-loader"></span>
        <progress
          value={progress}
          max={100}
          style={{
            width: "300px",
            height: "20px",
            marginTop: "10px",
            marginBottom: "20px",
            borderRadius: "30px",
          }}
        />
        <style>
          {`
          /* Remove the default styling of the progress element */
          progress {
            appearance: none;
            -webkit-appearance: none;
          }
          
          /* Set the color of the progress bar */
          progress::-webkit-progress-value {
            background-color: #ffffff;
            border-radius: 15px;
            transition: width 0.5s linear;
          }
          
          /* Set the color of the progress bar background */
          progress::-webkit-progress-bar {
            background-color: "transparent";
            border-radius: 15px;
          }
        `}
        </style>
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 0,
          }}
        >
          {progress}%
        </p>
      </Html>
    </>
  );
}
