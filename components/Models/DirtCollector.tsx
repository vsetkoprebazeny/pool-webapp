import * as THREE from "three";
import { Plane, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "../../store";

type GLTFResult = GLTF & {
  nodes: {
    model001_1: THREE.Mesh;
    model001_2: THREE.Mesh;
  };
  materials: {
    wire_255255221: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function DirtCollector({ isNarrow = false }: { isNarrow?: boolean }) {
  const { nodes, materials } = useGLTF("/dirtCollector.glb") as GLTFResult;

  const { upstream, length } = useSnapshot(store);

  let minusLenght =
    length === 4
      ? -0.73
      : length === 5
      ? -0.835
      : length === 6
      ? -0.944
      : length === 7
      ? -1.05
      : length === 8
      ? -1.155
      : -0.66;

  return (
    <group
      scale={[isNarrow ? 0.0015 : 0.001, isNarrow ? 0.0006 : 0.001, 0.001]}
      position={[
        minusLenght,
        isNarrow ? -0.0375 : -0.042,
        upstream === "show" ? 1.38 : 1.23,
      ]}
      rotation-y={Math.PI * 0.5}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <Plane
          args={[50, 40]}
          position={[4, -0.5, -32]}
          rotation-x={Math.PI * 0.5}
        >
          <meshStandardMaterial color="black" side={THREE.DoubleSide} />
        </Plane>
        <mesh
          geometry={nodes.model001_1.geometry}
          material={materials.wire_255255221}
        />
        <mesh
          geometry={nodes.model001_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/dirtCollector.glb");
