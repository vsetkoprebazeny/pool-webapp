import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { useSnapshot } from "valtio";
import { store } from "@/store";
import { Material } from "three";
import { FrontTile } from "./FrontTile";
import { SideTile } from "./SideTile";
import { SideTileTwo } from "./SideTileTwo";

type Props = {
  material?: Material | Material[] | undefined;
};

const Extend: React.FC<Props> = (props) => {
  const globalState = useSnapshot(store);

  const [extendLeftRow, setExtendLeftRow] = useState<number>(0);
  const [extendRightRow, setExtendRightRow] = useState<number>(0);
  const [extendFrontRow, setExtendFrontRow] = useState<number>(0);
  const [directtionOne, setDirectionOne] = useState<number>(1);
  const [directtionTwo, setDirectionTwo] = useState<number>(1);
  const [directtionThree, setDirectionThree] = useState<number>(1);

  useEffect(() => {
    store.extendValue = extendFrontRow + extendLeftRow + extendRightRow;
  }, [extendFrontRow, extendLeftRow, extendRightRow]);

  let positionZ =
    globalState.length === 7
      ? 0.275
      : globalState.length === 6
      ? 0.43
      : globalState.length === 5
      ? 0.54
      : globalState.length === 4
      ? 0.68
      : 0.15;

  return (
    <>
      {globalState["floor extension"] === "enable" && (
        <Buttons
          directionOne={directtionOne}
          setDirectionOne={setDirectionOne}
          setExtendLeftRow={setExtendLeftRow}
          directionTwo={directtionTwo}
          setDirectionTwo={setDirectionTwo}
          setExtendRightRow={setExtendRightRow}
          directionThree={directtionThree}
          setDirectionThree={setDirectionThree}
          setExtendFrontRow={setExtendFrontRow}
        />
      )}
      <group
        visible={!(globalState.floors === 12)}
        scale={0.1}
        position={[0, -0.9, 0]}
        rotation={[0, Math.PI * 1.5, 0]}
        dispose={null}
      >
        <group position-z={positionZ}>
          {extendFrontRow > 0 && <FrontTile {...props} position-z={-3.1} />}
          {extendFrontRow > 1 && (
            <FrontTile {...props} position-z={-3.91} rotation-y={Math.PI * 1} />
          )}
          {extendFrontRow > 2 && <FrontTile {...props} position-z={-4.48} />}
          {extendFrontRow > 3 && (
            <FrontTile {...props} position-z={-5.29} rotation-y={Math.PI * 1} />
          )}
          {extendFrontRow > 4 && <FrontTile {...props} position-z={-5.87} />}
          {extendFrontRow > 5 && (
            <FrontTile {...props} position-z={-6.68} rotation-y={Math.PI * 1} />
          )}
        </group>
        <group position={[globalState.width === 3 ? 0 : 1.1, 0, 0]}>
          {extendRightRow > 0 && <SideTile {...props} position-x={17.35} />}
          {extendRightRow > 1 && <SideTileTwo {...props} position-x={18.14} />}
          {extendRightRow > 2 && (
            <SideTile rotation-y={Math.PI * 1} {...props} position-x={17.305} />
          )}
          {extendRightRow > 3 && (
            <SideTileTwo
              rotation-y={Math.PI * 1}
              {...props}
              position-x={18.09}
            />
          )}
          {extendRightRow > 4 && <SideTile {...props} position-x={20.5} />}
          {extendRightRow > 5 && (
            <SideTileTwo
              {...props}
              rotation-y={Math.PI * 1}
              position-x={19.66}
            />
          )}
        </group>
        <group position={[globalState.width === 3 ? 0 : -1.2, 0, 0]}>
          {extendLeftRow > 0 && <SideTile {...props} position-x={9} />}
          {extendLeftRow > 1 && <SideTileTwo {...props} position-x={8.21} />}
          {extendLeftRow > 2 && (
            <SideTile rotation-y={Math.PI * 1} {...props} position-x={5.8} />
          )}
          {extendLeftRow > 3 && (
            <SideTileTwo
              rotation-y={Math.PI * 1}
              {...props}
              position-x={5.01}
            />
          )}
          {extendLeftRow > 4 && <SideTile {...props} position-x={5.85} />}
          {extendLeftRow > 5 && (
            <SideTileTwo
              {...props}
              position-x={3.44}
              rotation-y={Math.PI * 1}
            />
          )}
        </group>
      </group>
    </>
  );
};

export default Extend;
