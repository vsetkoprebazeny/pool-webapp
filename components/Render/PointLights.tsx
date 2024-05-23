import { useSnapshot } from "valtio";
import { store } from "../../store";
import { useRef } from "react";
import { PointLight, PointLightHelper } from "three";
import { useHelper } from "@react-three/drei";

type Props = {
  changeDirection?: boolean | undefined;
};

const PointLights: React.FC<Props> = ({ changeDirection = false }) => {
  const globalState = useSnapshot(store);

  const light = useRef<PointLight>(null);
  const lightT = useRef<PointLight>(null);

  useHelper(light as any, PointLightHelper);
  useHelper(lightT as any, PointLightHelper);

  const conditionalColors = () => {
    switch (globalState["lighting"]) {
      case "blue":
        return "#008BFF";

      case "green":
        return "#00ff0d";

      case "red":
        return "#ff0000";

      case "yellow":
        return "#fffb00";

      case "white":
        return "#ffffff";

      default:
        break;
    }
  };

  return (
    <>
      <pointLight
        visible={!(globalState.length <= 6)}
        color={conditionalColors()}
        intensity={1}
        distance={0.36}
        power={25}
        position={[-1.01, -0.09, changeDirection ? 1.42 : 1.04]}
      />

      <pointLight
        color={conditionalColors()}
        intensity={1}
        distance={0.36}
        power={25}
        position={[-0.64, -0.1, changeDirection ? 1.42 : 1.04]}
      />
    </>
  );
};

export default PointLights;
