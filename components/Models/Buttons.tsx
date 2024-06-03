import { store } from "@/store";
import { Circle, Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { DoubleSide } from "three";
import { useSnapshot } from "valtio";

type Props = {
  directionOne: number;
  directionTwo: number;
  directionThree: number;
  setDirectionOne: React.Dispatch<React.SetStateAction<number>>;
  setDirectionTwo: React.Dispatch<React.SetStateAction<number>>;
  setDirectionThree: React.Dispatch<React.SetStateAction<number>>;
  setExtendLeftRow: React.Dispatch<React.SetStateAction<number>>;
  setExtendRightRow: React.Dispatch<React.SetStateAction<number>>;
  setExtendFrontRow: React.Dispatch<React.SetStateAction<number>>;
};

const Buttons: React.FC<Props> = ({
  setExtendLeftRow,
  setExtendRightRow,
  directionOne,
  directionTwo,
  setDirectionOne,
  setDirectionTwo,
  directionThree,
  setDirectionThree,
  setExtendFrontRow,
}) => {
  const { width } = useSnapshot(store);

  const size = useWindowSize();

  const handleLeft = () => {
    store.extendDirection = "right";
    setDirectionThree(1);
    setExtendFrontRow(0);
    setDirectionTwo(1);
    setExtendRightRow(0);
    setExtendLeftRow((prev) => {
      if (prev === 5) {
        setDirectionOne(-1);
      } else if (prev === 1) {
        setDirectionOne(1);
      }
      return prev + directionOne;
    });
  };

  const handleRight = () => {
    store.extendDirection = "left";
    setDirectionThree(1);
    setExtendFrontRow(0);
    setDirectionOne(1);
    setExtendLeftRow(0);
    setExtendRightRow((prev) => {
      if (prev === 5) {
        setDirectionTwo(-1);
      } else if (prev === 1) {
        setDirectionTwo(1);
      }
      return prev + directionTwo;
    });
  };

  const handleFront = () => {
    store.extendDirection = "front";
    setDirectionTwo(1);
    setExtendRightRow(0);
    setDirectionOne(1);
    setExtendLeftRow(0);
    setExtendFrontRow((prev) => {
      if (prev === 5) {
        setDirectionThree(-1);
      } else if (prev === 1) {
        setDirectionThree(1);
      }
      return prev + directionThree;
    });
  };

  return (
    <group position={[-0.56, 0, 1.26]}>
      <group visible={size.width! < 600}>
        <Circle
          onClick={handleRight}
          scale={0.1}
          rotation-y={Math.PI * 0.5}
          position={[0, 0.16, width === 3 ? 0.4 : 0.5]}
        >
          <meshStandardMaterial
            side={DoubleSide}
            opacity={0.8}
            transparent
            color={"white"}
          />
        </Circle>
        <Circle
          onClick={handleFront}
          scale={0.1}
          rotation-y={Math.PI * 0.5}
          position={[0.78, 0.22, -0.02]}
        >
          <meshStandardMaterial
            side={DoubleSide}
            opacity={0.8}
            transparent
            color={"white"}
          />
        </Circle>
        <Circle
          onClick={handleLeft}
          scale={0.1}
          rotation-y={Math.PI * 0.5}
          position={[0, 0.22, width === 3 ? -0.45 : -0.55]}
        >
          <meshStandardMaterial
            side={DoubleSide}
            opacity={0.8}
            transparent
            color={"white"}
          />
        </Circle>
      </group>

      <Html
        transform
        scale={0.12}
        rotation-y={Math.PI * 0.5}
        position={[0, 0.1, width === 3 ? 0.4 : 0.5]}
      >
        <button
          data-red={directionTwo === -1}
          onClick={handleRight}
          className="extend-btn"
        ></button>
      </Html>
      <Html
        transform
        scale={0.12}
        rotation-y={Math.PI * 0.5}
        position={[0.78, 0.1, -0.02]}
      >
        <button
          data-red={directionThree === -1}
          onClick={handleFront}
          className="extend-btn"
        ></button>
      </Html>
      <Html
        transform
        scale={0.12}
        rotation-y={Math.PI * 0.5}
        position={[0, 0.1, width === 3 ? -0.45 : -0.55]}
      >
        <button
          data-red={directionOne === -1}
          onClick={handleLeft}
          className="extend-btn"
        ></button>
      </Html>
    </group>
  );
};

export default Buttons;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
