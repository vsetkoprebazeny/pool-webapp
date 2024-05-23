import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { store } from "../../store";

type GLTFResult = GLTF & {
  nodes: {
    Line001: THREE.Mesh;
    Circle002: THREE.Mesh;
    Circle004: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export function Outlet(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/nozzel.glb") as GLTFResult;

  const [positionY, setPositionY] = useState<number>(-0.11);

  const { depth, length, width } = useSnapshot(store);

  const model = useRef<THREE.Group>(null);

  useEffect(() => {
    switch (depth - 1.2) {
      case 0.10000000000000009:
        setPositionY(-0.12);
        break;
      case 0.19999999999999996:
        setPositionY(-0.127);
        break;
      case 0.30000000000000004:
        setPositionY(-0.134);
        break;

      default:
        setPositionY(-0.11);
        break;
    }
  }, [depth]);

  let positionX =
    length === 7
      ? -1
      : length === 6
      ? -0.9
      : length === 5
      ? -0.8
      : length === 4
      ? -0.7
      : -1.1;

  return (
    <group
      position={[positionX, positionY, width > 3 ? 1.5 : 1.43]}
      scale={0.01}
      ref={model}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Line001.geometry}
        // material={materials["Material.003"]}
        position={[-0.576, 0.033, -0.888]}
        scale={0.038}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        // material={materials["Material.003"]}
        position={[0.157, 0.035, -0.68]}
        scale={[0.021, 0.025, 0.021]}
      />
      <mesh
        geometry={nodes.Circle004.geometry}
        // material={materials["Material.003"]}
        position={[0.144, 0.034, -0.677]}
        scale={[0.023, 0.025, 0.023]}
      />
    </group>
  );
}

useGLTF.preload("/nozzel.glb");
