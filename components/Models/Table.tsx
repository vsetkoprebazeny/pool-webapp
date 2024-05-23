import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane_1: THREE.Mesh;
    Plane_2: THREE.Mesh;
    Mesh015: THREE.Mesh;
    Mesh015_1: THREE.Mesh;
    Mesh015_2: THREE.Mesh;
    Mesh015_3: THREE.Mesh;
  };
  materials: {
    bh0303_Madeira_preta: THREE.MeshStandardMaterial;
    ["bh0303_Madeira_preta.001"]: THREE.MeshStandardMaterial;
    MetalChair22352: THREE.MeshStandardMaterial;
    bh0791_Madeira: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Tecido Ombrelone"]: THREE.MeshPhysicalMaterial;
    ["Bronze Ombrelone"]: THREE.MeshStandardMaterial;
    ["Metal Arranhado Brilho"]: THREE.MeshStandardMaterial;
    ["Plastico Preto Ombrelone"]: THREE.MeshStandardMaterial;
  };
};

export function Table(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/table.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0.003, 0.719, 0.002]}>
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.bh0303_Madeira_preta}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["bh0303_Madeira_preta.001"]}
        />
      </group>
      <group position={[-0.026, 0, -0.943]}>
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials.MetalChair22352}
        />
        <mesh
          geometry={nodes.Plane_1.geometry}
          material={materials.bh0791_Madeira}
        />
        <mesh
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <group position={[-0.026, 0, 0.912]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials.MetalChair22352}
        />
        <mesh
          geometry={nodes.Plane_1.geometry}
          material={materials.bh0791_Madeira}
        />
        <mesh
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        geometry={nodes.Mesh015.geometry}
        material={materials["Tecido Ombrelone"]}
      />
      <mesh
        geometry={nodes.Mesh015_1.geometry}
        material={materials["Bronze Ombrelone"]}
      />
      <mesh
        geometry={nodes.Mesh015_2.geometry}
        material={materials["Metal Arranhado Brilho"]}
      />
      <mesh
        geometry={nodes.Mesh015_3.geometry}
        material={materials["Plastico Preto Ombrelone"]}
      />
    </group>
  );
}

useGLTF.preload("/table.glb");
