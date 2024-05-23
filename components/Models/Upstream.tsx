import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { store } from "../../store";
import { useSnapshot } from "valtio";

type GLTFResult = GLTF & {
  nodes: {
    strew001: THREE.Mesh;
    strew002: THREE.Mesh;
    strew003: THREE.Mesh;
    strew004: THREE.Mesh;
    lower: THREE.Mesh;
    upper: THREE.Mesh;
    body: THREE.Mesh;
  };
  materials: {
    black: THREE.MeshStandardMaterial;
    body: THREE.MeshStandardMaterial;
    metallic: THREE.MeshStandardMaterial;
  };
};

export function Upstream(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/upstream.glb") as GLTFResult;

  const { length } = useSnapshot(store);

  let positionX =
    length === 7
      ? -1.05
      : length === 6
      ? -0.944
      : length === 5
      ? -0.835
      : length === 4
      ? -0.729
      : -1.155;

  return (
    <group
      position={[positionX, -0.06, 1.23]}
      scale={0.019}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.strew001.geometry}
        material={materials.black}
        position={[0.675, 0.461, 1.19]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.078}
      />
      <mesh
        geometry={nodes.strew002.geometry}
        material={materials.black}
        position={[0.623, 0.417, -1.273]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.078}
      />
      <mesh
        geometry={nodes.strew003.geometry}
        material={materials.black}
        position={[0.541, -1.135, -1.181]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.078}
      />
      <mesh
        geometry={nodes.strew004.geometry}
        material={materials.black}
        position={[0.602, -1.094, 1.108]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.078}
      />
      <mesh
        geometry={nodes.lower.geometry}
        material={materials.body}
        position={[0.774, -1.42, -0.035]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.307}
      />
      <mesh geometry={nodes.upper.geometry} material={materials.metallic} />
      <mesh
        geometry={nodes.body.geometry}
        material={materials.body}
        position={[-0.045, 0, 0.009]}
      />
    </group>
  );
}

useGLTF.preload("/upstream.glb");
