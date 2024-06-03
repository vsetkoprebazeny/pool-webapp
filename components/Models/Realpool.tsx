import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";

type GLTFResult = GLTF & {
  nodes: {
    foil01: THREE.Mesh;
    foil02: THREE.Mesh;
    foil03: THREE.Mesh;
    floor00: THREE.Mesh;
    floor01: THREE.Mesh;
    floor02: THREE.Mesh;
    floor03: THREE.Mesh;
    floor04: THREE.Mesh;
    floor05: THREE.Mesh;
    floor06: THREE.Mesh;
    floor07: THREE.Mesh;
    floor08: THREE.Mesh;
    floor09: THREE.Mesh;
    floor10: THREE.Mesh;
    floor11: THREE.Mesh;
    floor12: THREE.Mesh;
  };
  materials: {
    foil01: THREE.MeshStandardMaterial;
    foil02: THREE.MeshStandardMaterial;
    foil03: THREE.MeshStandardMaterial;
    floor00: THREE.MeshStandardMaterial;
    floor01: THREE.MeshStandardMaterial;
    floor02: THREE.MeshStandardMaterial;
    floor03: THREE.MeshStandardMaterial;
    floor04: THREE.MeshStandardMaterial;
    floor05: THREE.MeshStandardMaterial;
    floor06: THREE.MeshStandardMaterial;
    floor07: THREE.MeshStandardMaterial;
    floor08: THREE.MeshStandardMaterial;
    floor09: THREE.MeshStandardMaterial;
    floor10: THREE.MeshStandardMaterial;
    floor11: THREE.MeshStandardMaterial;
    floor12: THREE.MeshStandardMaterial;
  };
};

const Floor = () => {
  const { nodes, materials } = useGLTF("/realpool.glb") as GLTFResult;
  const { floors } = useSnapshot(store);
  switch (floors) {
    case 0:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor00.geometry}
          material={materials.floor00}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    case 1:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor01.geometry}
          material={materials.floor01}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    case 2:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor02.geometry}
          material={materials.floor02}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    case 3:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor03.geometry}
          material={materials.floor03}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    case 4:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor04.geometry}
          material={materials.floor04}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    case 5:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor05.geometry}
          material={materials.floor05}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    case 6:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor06.geometry}
          material={materials.floor06}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    case 7:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor07.geometry}
          material={materials.floor07}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    case 8:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor08.geometry}
          material={materials.floor08}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
    case 9:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor09.geometry}
          material={materials.floor09}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
    case 10:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor10.geometry}
          material={materials.floor10}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
    case 11:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor11.geometry}
          material={materials.floor11}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
    case 12:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor12.geometry}
          material={materials.floor12}
          material-metalness={1}
          material-roughness={1}
          position={[12.354, 9, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );

    default:
      return (
        <mesh
          receiveShadow
          geometry={nodes.floor00.geometry}
          material={materials.floor00}
          position={[12.354, 9.039, -5.091]}
          rotation={[0, -1.571, 0]}
        />
      );
  }
};

export function RealPool({ foilMaterial }: { foilMaterial: THREE.Texture }) {
  const { nodes, materials } = useGLTF("/realpool.glb") as GLTFResult;

  const { depth, length, width, foil } = useSnapshot(store);

  let foilScaleY = depth === 1.2 ? 0.56 : 0.67;

  let foilScaleX =
    length === 7
      ? 1.096
      : length === 6
      ? 0.997
      : length === 5
      ? 0.895
      : length === 4
      ? 0.796
      : 1.195;

  let poolScaleZ =
    length === 7
      ? 1.1
      : length === 6
      ? 1
      : length === 5
      ? 0.9
      : length === 4
      ? 0.8
      : 1.2;

  let poolpositionZ =
    length === 7
      ? 3.08
      : length === 6
      ? 2.71
      : length === 5
      ? 2.32
      : length === 4
      ? 1.95
      : 3.45;

  let poolScaleX = width === 3 ? 1 : 1.3;
  let poolPositionX = width === 3 ? 0 : -3.755;
  let foilScaleZ = width === 3 ? 1.01 : 1.315;

  return (
    <group dispose={null}>
      {foil === "AZUR MOSAIC" ||
      foil === "BLUE MOSAIC" ||
      foil === "GRAU MOSAIC" ? (
        <mesh
          receiveShadow
          geometry={nodes.foil02.geometry}
          material={materials.foil02}
          material-map={foilMaterial}
          material-metalness={1}
          material-roughness={1}
          position={[12.36, 9.06, -1.15]}
          rotation={[0, -1.571, 0]}
          scale={[foilScaleX, foilScaleY, foilScaleZ]}
        />
      ) : foil === "ELEGANCE" ||
        foil === "EMERALD" ||
        foil === "GREY" ||
        foil === "GOLDEN" ||
        foil === "OCEAN GREY" ||
        foil === "SAND STONE" ||
        // foil === "INDIAN MARBLE" ||
        // foil === "MOUNTAIN BLUE" ||
        foil === "TERRA SAND" ||
        foil === "ORIGIN" ||
        foil === "PRESTIGE" ||
        foil === "RELAX" ||
        foil === "MARBLE" ||
        foil === "SUBLIME" ||
        foil === "URBAN GREY" ? (
        <mesh
          receiveShadow
          geometry={nodes.foil03.geometry}
          material={materials.foil03}
          material-map={foilMaterial}
          material-metalness={1}
          material-roughness={1}
          position={[12.36, 9.06, -1.15]}
          rotation={[0, -1.571, 0]}
          scale={[foilScaleX, foilScaleY, foilScaleZ]}
        />
      ) : (
        <mesh
          receiveShadow
          geometry={nodes.foil01.geometry}
          material={materials.foil01}
          material-map={foilMaterial}
          material-metalness={1}
          material-roughness={1}
          position={[12.36, 9.06, -1.15]}
          rotation={[0, -1.571, 0]}
          scale={[foilScaleX, foilScaleY, foilScaleZ]}
        />
      )}

      <group
        position={[poolPositionX, 0, poolpositionZ]}
        scale={[poolScaleX, 1, poolScaleZ]}
      >
        <Floor />
      </group>
    </group>
  );
}

useGLTF.preload("/realpool.glb");
