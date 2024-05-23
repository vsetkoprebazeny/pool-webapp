import s from "./render.module.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import Camera from "./Camera";
import Loader from "./Loader";
import MobileEnv from "../Enviroment/MobileEnv";
import Setup from "./Setup";

const Render = () => {
  const globalState = useSnapshot(store);

  return (
    <div className={s.main}>
      <div className={s.main_logo} />
      <MobileEnv />
      <Suspense fallback={<Loader />}>
        <Canvas shadows={"soft"} camera={{ position: [0, 0, 3] }}>
          <Setup />
          {globalState.mode === "day" && (
            <directionalLight intensity={2.5} castShadow position={[0, 2, 0]} />
          )}
          <Camera />
          <OrbitControls
            enablePan={false}
            enableDamping={false}
            maxPolarAngle={Math.PI * 0.45}
            minDistance={0.8}
            maxDistance={2}
          />
          <Environment
            files={
              globalState.mode === "night"
                ? "/night.hdr"
                : globalState.mode === "day"
                ? "/day.hdr"
                : "/cloudy.hdr"
            }
            background
          />
          {/* <Sail
            rotation-y={Math.PI * 1.1}
            scale={0.6}
            position={[0.3, -0.3, -0.05]}
          /> */}

          {/* <Chair
            rotation-y={-Math.PI * 1.1}
            scale={0.23}
            position={[-0.2, 0.018, 0.85]}
          /> */}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Render;
