import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    Circle004001: THREE.Mesh;
    Circle005: THREE.Mesh;
    Circle007: THREE.Mesh;
    Circle009: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export function Nozzel(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/outlet.glb") as GLTFResult;

  const model = useRef<THREE.Group>(null);

  return (
    <group
      rotation-z={Math.PI * 0.5}
      scale={0.006}
      ref={model}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Circle001.geometry}
        // material={materials["Material.003"]}
        position={[-0.012, 0, 0.035]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Circle004001.geometry}
        // material={materials["Material.003"]}
        position={[-0.012, 0, 0.035]}
        scale={[0.02, 0.026, 0.02]}
      />
      <mesh
        geometry={nodes.Circle005.geometry}
        // material={materials["Material.003"]}
        position={[-0.012, 0, 0.035]}
        scale={[0.011, 0.025, 0.011]}
      />
      <mesh
        geometry={nodes.Circle007.geometry}
        // material={materials["Material.003"]}
        position={[-0.012, 0, 0.035]}
        scale={[0.006, 0.025, 0.006]}
      />
      <mesh
        geometry={nodes.Circle009.geometry}
        // material={materials["Material.003"]}
        position={[-0.012, 0, 0.035]}
        scale={[0.003, 0.025, 0.003]}
      />
    </group>
  );
}

useGLTF.preload("/outlet.glb");
