import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "../../store";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube004_2: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube005_2: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube006_1: THREE.Mesh;
    Fence_wood008: THREE.Mesh;
    Fence_wood009: THREE.Mesh;
    Fence_wood010: THREE.Mesh;
    Grass: THREE.Mesh;
    Cube: THREE.Mesh;
  };
  materials: {
    ["White wood"]: THREE.MeshStandardMaterial;
    Stone: THREE.MeshStandardMaterial;
    Cobblestone: THREE.MeshStandardMaterial;
    Grass: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
  };
};

export function Ground(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/ground.glb") as GLTFResult;

  const { length } = useSnapshot(store);

  let minusLenght =
    length === 4
      ? 0.42
      : length === 5
      ? 0.41
      : length === 6
      ? 0.38
      : length === 7
      ? 0.36
      : length === 8
      ? 0.3
      : 0.3;

  let plusLenght =
    length === 4
      ? 10.4
      : length === 5
      ? 11
      : length === 6
      ? 11.5
      : length === 7
      ? 12.6
      : length === 8
      ? 12.7
      : 13;

  return (
    <group
      scale={0.1}
      position={[-0.62, -0.9, 1.2]}
      rotation={[0, Math.PI * 1.5, 0]}
      {...props}
      dispose={null}
    >
      <mesh
        receiveShadow
        geometry={nodes.Grass.geometry}
        material={materials.Grass}
        scale={[0.55, 1, minusLenght]}
        position={[5, -0.0001, plusLenght]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Grass.geometry}
        material={materials.Grass}
        scale={[0.55, 1, 0.3]}
        position={[5, 0.002, 13]}
      />
      <group
        position={[21.264, 10.016, -21.03]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["White wood"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Stone}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Cobblestone}
        />
      </group>
      <group
        position={[21.264, 10.016, 18.72]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["White wood"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials.Stone}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials.Cobblestone}
        />
      </group>
      <group position={[21.262, 10.016, 18.715]} rotation={[0, 1.571, 0]}>
        <mesh
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["White wood"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.Stone}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials.Cobblestone}
        />
      </group>
      <group position={[-19.65, 10.016, 18.715]} rotation={[0, 1.571, 0]}>
        <mesh
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["White wood"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.Stone}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials.Cobblestone}
        />
      </group>
      <group
        position={[20.86, 9.412, -21.036]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Cobblestone}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.Stone}
        />
      </group>
      <group position={[20.86, 9.412, 18.714]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Cobblestone}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials.Stone}
        />
      </group>
      <group position={[21.268, 9.412, 18.38]} rotation={[0, 1.571, 0]}>
        <mesh
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Cobblestone}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials.Stone}
        />
      </group>
      <group position={[-19.65, 9.412, 18.38]} rotation={[0, 1.571, 0]}>
        <mesh
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Cobblestone}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials.Stone}
        />
      </group>
      <mesh
        receiveShadow
        geometry={nodes.Fence_wood008.geometry}
        material={materials["White wood"]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Fence_wood009.geometry}
        material={materials["White wood"]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Fence_wood010.geometry}
        material={materials["White wood"]}
      />
      <mesh
        receiveShadow
        position-x={-40.94}
        geometry={nodes.Fence_wood010.geometry}
        material={materials["White wood"]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Grass.geometry}
        material={materials.Grass}
        scale={[0.6, 1.0001, 0.99]}
        position-x={-7.7}
      />
      <mesh
        receiveShadow
        geometry={nodes.Grass.geometry}
        material={materials.Grass}
        scale={[0.65, 1.0001, 0.99]}
        position-x={17.65}
      />

      <mesh
        receiveShadow
        geometry={nodes.Grass.geometry}
        material={materials.Grass}
        scale={[0.55, 1, 0.3]}
        position={[5, 0, -14.6]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["default"]}
        position={[0.757, 5.945, -1.107]}
        scale={[20.709, 2.662, 19.927]}
      />
    </group>
  );
}

useGLTF.preload("/ground.glb");
