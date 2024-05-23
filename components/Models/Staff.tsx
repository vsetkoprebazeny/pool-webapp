import { store } from "@/store";
import { RoundedBox } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

const Staff = () => {
  const globalState = useSnapshot(store);

  const [state, setState] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    if (globalState.upstream === undefined) {
      if (globalState["technology house"] === "show") {
        setState(false);
      } else {
        setState(true);
      }
    } else {
      setState(true);
    }

    if (
      globalState["technology house"] === "show" &&
      globalState.upstream === "show"
    ) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [globalState]);

  let positionX =
    globalState.length === 7
      ? -0.85
      : globalState.length === 6
      ? -0.7
      : globalState.length === 5
      ? -0.58
      : globalState.length === 4
      ? -0.43
      : -1;

  return (
    <RoundedBox
      visible={state}
      scale={[change ? 0.21 : 0.18, 0.18, 0.18]}
      position={[positionX, -0.065, -0.03]}
      radius={0.02}
    >
      <meshStandardMaterial />
    </RoundedBox>
  );
};

export default Staff;
