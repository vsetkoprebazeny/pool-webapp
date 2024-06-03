import { useSnapshot } from "valtio";
import { store } from "../../store";
import { Stair3 } from "./Stair/Stair3";
import { Stair2 } from "./Stair/Stair2";
import { Stair1 } from "./Stair/Stair1";
import { Stair4 } from "./Stair/Stair4";

const Stairs = () => {
  const { entry, width, length, depth } = useSnapshot(store);

  switch (entry) {
    case "stair4 right":
      return (
        <Stair1
          scale={[0.16, 0.16, -0.16]}
          position={[
            -(length - 4) * 0.002 - 0.046,
            depth === 1.5 ? -0.175 : -0.182,
            width > 3 ? 1.43 : 1.36,
          ]}
        />
      );

    case "stair4 left":
      return (
        <Stair1
          scale={[0.16, 0.16, 0.16]}
          position={[
            -(length - 4) * 0.002 - 0.046,
            depth === 1.5 ? -0.175 : -0.182,
            width > 3 ? 1.04 : 1.11,
          ]}
        />
      );

    case "stair2 left":
      return (
        <Stair2
          scale={[0.16, 0.14, width > 3 ? 0.191 : 0.149]}
          position={[
            0.02 - (length - 4) * 0.002,
            depth === 1.5 ? -0.1095 : -0.118,
            width > 3 ? 1.208 : 1.213,
          ]}
        />
      );

    case "stair2 right":
      return (
        <Stair2
          scale={[0.16, 0.14, width > 3 ? -0.19 : -0.147]}
          position={[
            0.02 - (length - 4) * 0.002,
            depth === 1.5 ? -0.112 : -0.1188,
            width > 3 ? 1.266 : 1.256,
          ]}
        />
      );

    case "stair3 center":
      return (
        <Stair3
          scale={[0.18, 0.14, width > 3 ? 0.165 : 0.13]}
          position={[
            -(length - 4) * 0.005 - 0.2,
            depth === 1.5 ? -0.175 : -0.182,
            width > 3 ? 1.2 : 1.21,
          ]}
        />
      );

    case "stair1 left":
      return (
        <Stair4
          scale={[0.15, 0.155, 0.15]}
          position={[
            -(length - 4) * 0.002 - 0.032,
            depth === 1.5 ? -0.162 : -0.172,
            width > 3 ? 1.03 : 1.1,
          ]}
        />
      );

    case "stair1 right":
      return (
        <Stair4
          scale={[0.15, 0.155, -0.15]}
          position={[
            -(length - 4) * 0.002 - 0.032,
            depth === 1.5 ? -0.162 : -0.172,
            width > 3 ? 1.44 : 1.37,
          ]}
        />
      );

    default:
      return <Stair1 scale={[0.2, 0.2, 0.2]} position={[-0.06, -0.21, 1.1]} />;
  }
};

export default Stairs;
