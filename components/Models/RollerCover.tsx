import { useSnapshot } from "valtio";
import { store } from "@/store";
import { RollerCoverBlack } from "./Rollercover/RollerCoverBlack";
import { RollerCoverElisa } from "./Rollercover/RollerCoverElisa";

const RollerCover = () => {
  const globalState = useSnapshot(store);

  let scaleZ =
    globalState.length === 4
      ? 0.24
      : globalState.length === 5
      ? 0.27
      : globalState.length === 6
      ? 0.3
      : globalState.length === 7
      ? 0.33
      : globalState.length === 8
      ? 0.362
      : 0.15;

  let positionX =
    globalState.length === 4
      ? -0.31
      : globalState.length === 5
      ? -0.365
      : globalState.length === 6
      ? -0.415
      : globalState.length === 7
      ? -0.475
      : globalState.length === 8
      ? -0.52
      : -10;

  let positionXX =
    globalState.length === 4
      ? -0.33
      : globalState.length === 5
      ? -0.385
      : globalState.length === 6
      ? -0.435
      : globalState.length === 7
      ? -0.495
      : globalState.length === 8
      ? -0.54
      : -10;

  let entryDirection = globalState.entry?.slice(7, 20);

  let scaleX =
    entryDirection === "right"
      ? globalState.width > 3
        ? 0.42
        : 0.33
      : globalState.width > 3
      ? -0.42
      : -0.33;

  switch (globalState["roller cover"]) {
    case "prima black":
      return (
        <RollerCoverBlack
          position={[
            positionXX,
            0.018,
            entryDirection === "right" ? 1.242 : 1.232,
          ]}
          scale={[scaleX, 0.18, scaleZ]}
          rotation-y={Math.PI * 1.5}
        />
      );

    case "elisa silver":
      return (
        <RollerCoverElisa
          lineColor="#b4b4b4"
          position={[
            positionX,
            0.018,
            entryDirection === "right" ? 1.21 : 1.265,
          ]}
          scale={[scaleX, 0.18, scaleZ]}
          rotation-y={Math.PI * 0.5}
        />
      );

    case "elisa black":
      return (
        <RollerCoverElisa
          lineColor="#191919"
          position={[
            positionX,
            0.018,
            entryDirection === "right" ? 1.21 : 1.265,
          ]}
          scale={[scaleX, 0.18, scaleZ]}
          rotation-y={Math.PI * 0.5}
        />
      );

    default:
      return <></>;
  }
};

export default RollerCover;
