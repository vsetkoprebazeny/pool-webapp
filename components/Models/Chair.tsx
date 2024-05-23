import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    CADEIRA_DELET001: THREE.Mesh;
    CADEIRA_DELET008_1: THREE.Mesh;
    CADEIRA_DELET008_2: THREE.Mesh;
    CADEIRA_DELET008_3: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    MetalChair3235: THREE.MeshStandardMaterial;
    fio: THREE.MeshStandardMaterial;
    FabricChair: THREE.MeshStandardMaterial;
  };
};

export function Chair(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/chair.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.CADEIRA_DELET001.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        geometry={nodes.CADEIRA_DELET008_1.geometry}
        material={materials.MetalChair3235}
      />
      <mesh
        castShadow
        geometry={nodes.CADEIRA_DELET008_2.geometry}
        material={materials.fio}
      />
      <mesh
        castShadow
        geometry={nodes.CADEIRA_DELET008_3.geometry}
        material={materials.FabricChair}
      />
    </group>
  );
}

useGLTF.preload("/chair.glb");
