import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();
  const normalizedProgress = progress / 100;

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <progress
        value={normalizedProgress}
        max={100}
        style={{
          width: "300px",
          height: "100px",
          borderRadius: "15px",
          border: "2px solid #fff",
          background: "transparent",
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
            border-radius: 10px;
          }
          
          /* Set the color of the progress bar background */
          progress::-webkit-progress-bar {
            background-color: #455c5e;;
            border-radius: 15px;
          }
        `}
      </style>
      <p
        style={{
          fontSize: 40,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}
