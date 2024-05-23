import { useSnapshot } from "valtio";
import PointLights from "../Render/PointLights";
import { Light } from "./Light";
import { store } from "../../store";

const Lights = () => {
  const { lighting, mode, width, length, extendDirection } = useSnapshot(store);
  let minusLenght =
    length === 4
      ? 0.35
      : length === 5
      ? 0.3
      : length === 6
      ? 0.22
      : length === 7
      ? 0.3
      : length === 8
      ? 0.2
      : 0;

  return (
    <>
      {/* <pointLight
        visible={mode === "night"}
        color={"white"}
        intensity={1}
        distance={0.6}
        power={15}
        position={[-0.56, 0.4, 0.3]}
      /> */}

      {extendDirection === "right" ? (
        <group
          visible={lighting !== undefined}
          position-z={width > 3 ? -0.07 : 0}
          position-x={minusLenght}
        >
          <PointLights />
          <Light
            visible={!(length <= 6)}
            rotation-x={Math.PI * 0.5}
            position={[-1, -0.06, 0.992]}
          />
          <Light rotation-x={Math.PI * 0.5} position={[-0.65, -0.06, 0.992]} />
        </group>
      ) : (
        <group
          visible={lighting !== undefined}
          position-z={width > 3 ? 0.07 : 0}
          position-x={minusLenght}
        >
          <PointLights changeDirection />
          <Light
            visible={!(length <= 6)}
            rotation-x={-Math.PI * 0.5}
            position={[-1, -0.06, 1.478]}
          />
          <Light rotation-x={-Math.PI * 0.5} position={[-0.65, -0.06, 1.478]} />
        </group>
      )}
    </>
  );
};

export default Lights;
