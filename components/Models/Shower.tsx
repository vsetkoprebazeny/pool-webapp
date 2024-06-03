import * as THREE from "three";
import { Box, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { store } from "../../store";
import { useSnapshot } from "valtio";

type GLTFResult = GLTF & {
  nodes: {
    Line001: THREE.Mesh;
    ChamferCyl003: THREE.Mesh;
    ChamferCyl004: THREE.Mesh;
    ChamferCyl006: THREE.Mesh;
    ChamferBox001: THREE.Mesh;
    Line002: THREE.Mesh;
    ChamferCyl009: THREE.Mesh;
    ChamferCyl010: THREE.Mesh;
    ChamferCyl011: THREE.Mesh;
    Rectangle001: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function Shower(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/shower.glb") as GLTFResult;

  const { shower, entry, length, width } = useSnapshot(store);

  let condition = entry?.slice(7, 15);

  let leftFloor =
    length === 7
      ? 0.17
      : length === 6
      ? 0.16
      : length === 5
      ? 0.15
      : length === 4
      ? 0.13
      : 0.19;

  let rightFloor =
    length === 7
      ? 0.11
      : length === 6
      ? 0.1
      : length === 5
      ? 0.09
      : length === 4
      ? 0.08
      : 0.13;

  let leftPositionZ = width === 3 ? 0.606 : 0.486;
  let rightPositionZ = width === 3 ? 1.872 : 1.982;

  return (
    <group
      visible={!(shower === undefined)}
      scale={0.1}
      position={[
        condition === "right" ? rightFloor : leftFloor,
        0.01,
        condition === "right" ? rightPositionZ : leftPositionZ,
      ]}
      rotation-y={condition === "right" ? Math.PI * 0.5 : Math.PI * 1.5}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Line001.geometry}
        material={materials["Material.002"]}
        material-color={
          shower === "type1" || shower === "type2" ? "black" : "#fcd8ae"
        }
        position={[1.563, 2.707, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl003.geometry}
        position={[1.209, 2.464, 0.335]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.025}
      >
        <meshStandardMaterial metalness={1} roughness={0.186} color="white" />
      </mesh>
      <mesh
        geometry={nodes.ChamferCyl004.geometry}
        position={[1.769, 4.682, 0.31]}
        rotation={[Math.PI / 2, -0.855, -Math.PI / 2]}
        scale={0.025}
      >
        <meshStandardMaterial metalness={1} roughness={0.186} color="white" />
      </mesh>
      <mesh
        geometry={nodes.ChamferCyl006.geometry}
        position={[1.179, 1.525, 0.335]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.025}
      >
        <meshStandardMaterial metalness={1} roughness={0.186} color="white" />
      </mesh>
      <Box position={[1.163, 0.085, 0.32]} scale={[0.35, 0.1, 0.8]}>
        <meshStandardMaterial
          color={shower === "type1" || shower === "type2" ? "black" : "#fcd8ae"}
        />
      </Box>

      <mesh
        visible={!(shower === "type3") && !(shower === "type1")}
        geometry={nodes.Line002.geometry}
        material={materials["Material.001"]}
        material-color="white"
        position={[1.36, 2.589, 0.176]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.ChamferCyl009.geometry}
        material={materials["Material.001"]}
        position={[1.379, 1.505, 0.335]}
        rotation={[2.063, 0.68, -1.916]}
        scale={0.025}
      >
        <meshStandardMaterial metalness={1} roughness={0.186} color="white" />
      </mesh>
      <mesh
        geometry={nodes.ChamferCyl010.geometry}
        material={materials["Material.001"]}
        position={[1.379, 1.534, 0.335]}
        rotation={[1.521, -0.719, -1.616]}
        scale={0.025}
      >
        <meshStandardMaterial metalness={1} roughness={0.186} color="white" />
      </mesh>
      <mesh
        geometry={nodes.ChamferCyl011.geometry}
        material={materials["Material.001"]}
        position={[1.468, 1.581, 0.335]}
        rotation={[2.083, -0.723, -1.235]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Rectangle001.geometry}
        position={[1.858, 4.594, 0.3]}
        rotation={[-Math.PI, 0, -0.72]}
        scale={0.025}
      >
        <meshStandardMaterial metalness={1} roughness={0.186} color="white" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/shower.glb");
