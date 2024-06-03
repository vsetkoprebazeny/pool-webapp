import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube1: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export function SideTileTwo(props: JSX.IntrinsicElements["mesh"]) {
  const { nodes } = useGLTF("/sideTileTwo.glb") as GLTFResult;
  const { materials } = useGLTF("/realpool.glb") as any;
  const { length, floors } = useSnapshot(store);

  let scaleZ =
    length === 7
      ? 1.109
      : length === 6
      ? 1.008
      : length === 5
      ? 0.908
      : length === 4
      ? 0.809
      : 1.21;

  let positionZ =
    length === 7
      ? 7.25
      : length === 6
      ? 6.5
      : length === 5
      ? 5.72
      : length === 4
      ? 4.99
      : 8;

  const handleFloor = () => {
    switch (floors) {
      case 0:
        return materials.floor00.map;
      case 1:
        return materials.floor01.map;
      case 2:
        return materials.floor02.map;
      case 3:
        return materials.floor03.map;
      case 4:
        return materials.floor04.map;
      case 5:
        return materials.floor05.map;
      case 6:
        return materials.floor06.map;
      case 7:
        return materials.floor07.map;
      case 8:
        return materials.floor08.map;
      case 9:
        return materials.floor09.map;
      case 10:
        return materials.floor10.map;
      case 11:
        return materials.floor11.map;

      default:
        return materials.floor00.map;
    }
  };

  return (
    <group dispose={null}>
      {floors === 2 ||
      floors === 4 ||
      floors === 8 ||
      floors === 9 ||
      floors === 10 ||
      floors === 11 ? (
        <mesh
          {...props}
          receiveShadow
          scale-z={scaleZ}
          scale-x={1.5}
          geometry={nodes.Cube1.geometry}
          position={[16.55, 8.956, positionZ]}
        >
          <meshStandardMaterial
            map={handleFloor()}
            roughness={1}
            metalness={1}
          />
        </mesh>
      ) : (
        <mesh
          {...props}
          receiveShadow
          scale-z={scaleZ}
          scale-x={1.5}
          geometry={nodes.Cube.geometry}
          position={[16.55, 8.956, positionZ]}
        >
          <meshStandardMaterial
            map={handleFloor()}
            roughness={1}
            metalness={1}
          />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("/sideTileTwo.glb");
useGLTF.preload("/realpool.glb");
