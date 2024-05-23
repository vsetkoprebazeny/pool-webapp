import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import Extend from "./Extend";
import { ShowerFloor } from "./ShowerFloor";
import { RealPool } from "./Realpool";

type GLTFResult = GLTF & {
  nodes: {
    Pool: THREE.Mesh;
    Terrain002: THREE.Mesh;
    Pool_water: THREE.Mesh;
    Grass001: THREE.Mesh;
    Grass003: THREE.Mesh;
  };
  materials: {
    ["Infinity pool tiles.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Pool water.001"]: THREE.MeshPhysicalMaterial;
    Grass: THREE.MeshStandardMaterial;
  };
};

export function Pool(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pool.glb") as GLTFResult;

  const { materials: PoolMaterial } = useGLTF("/realpool.glb") as any;

  const { isWater, length, width, floors, entry } = useSnapshot(store);

  let direction = entry?.slice(7, 15);

  //water normalmap

  const waterNormalMap = useTexture("/waternormals.jpeg");

  useEffect(() => {
    waterNormalMap.wrapS = waterNormalMap.wrapT = THREE.RepeatWrapping;
    waterNormalMap.offset.set(0.2, 0.3);
    waterNormalMap.repeat.set(0.1, 0.1);
  }, [waterNormalMap]);

  //floors map

  const mapArray = [
    "/pool-floor/white-stone.jpg",
    "/pool-floor/being-stone.jpg",
    "/pool-floor/pietro-grey.jpg",
    "/pool-floor/selene.jpg",
    "/pool-floor/serena-mix.jpg",
    "/pool-floor/serena-ocra.jpg",
    "/pool-floor/iconic-dark.jpg",
    "/pool-floor/iconic-white.jpg",
    "/pool-floor/dune.jpg",
    "/pool-floor/mistery-grey.jpg",
    "/pool-floor/mistery-sand.jpg",
    "/pool-floor/pietro-golden.jpg",
    "/pool-floor/concrete-floor.jpg",
  ];

  const floorMaterial = useTexture(mapArray);

  useEffect(() => {
    floorMaterial.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
  }, [floorMaterial]);

  //tiles map

  const globalState = useSnapshot(store);

  const perletoveElbe = useTexture([
    "/foil/perletoveElbe/0.jpg",
    "/foil/perletoveElbe/1.jpg",
    "/foil/perletoveElbe/2.jpg",
  ]);
  const stonelite = useTexture([
    "/foil/stonelite/0.jpg",
    "/foil/stonelite/1.jpg",
    "/foil/stonelite/2.jpg",
    "/foil/stonelite/3.jpg",
  ]);
  const jednofarebneElbeSupra = useTexture([
    "/foil/jednofarebneElbeSupra/0.jpg",
    "/foil/jednofarebneElbeSupra/1.jpg",
    "/foil/jednofarebneElbeSupra/2.jpg",
    "/foil/jednofarebneElbeSupra/3.jpg",
    "/foil/jednofarebneElbeSupra/4.jpg",
  ]);
  const novinkoveElbe = useTexture([
    "/foil/novinkoveElbe/0.jpg",
    "/foil/novinkoveElbe/1.jpg",
    "/foil/novinkoveElbe/2.jpg",
    "/foil/novinkoveElbe/3.jpg",
    "/foil/novinkoveElbe/4.jpg",
    "/foil/novinkoveElbe/5.jpg",
  ]);
  const drevodekorLarchRange = useTexture([
    "/foil/drevodekorLarchRange/0.jpg",
    "/foil/drevodekorLarchRange/1.jpg",
  ]);

  const alkorplanTouch = useTexture([
    "/foil/alkorplanTouch/0.jpg",
    "/foil/alkorplanTouch/1.jpg",
    "/foil/alkorplanTouch/2.jpg",
    "/foil/alkorplanTouch/3.jpg",
    "/foil/alkorplanTouch/4.jpg",
    "/foil/alkorplanTouch/5.jpg",
  ]);

  const mozaikoveElbe = useTexture([
    "/foil/mozaikoveElbe/0.jpg",
    "/foil/mozaikoveElbe/1.jpg",
    "/foil/mozaikoveElbe/2.jpg",
    "/foil/mozaikoveElbe/3.jpg",
  ]);

  useEffect(() => {
    alkorplanTouch.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    mozaikoveElbe.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    perletoveElbe.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    stonelite.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    jednofarebneElbeSupra.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    novinkoveElbe.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
    drevodekorLarchRange.map((elem) => {
      elem.wrapS = elem.wrapT = THREE.RepeatWrapping;
      elem.needsUpdate = true;
    });
  }, [
    alkorplanTouch,
    drevodekorLarchRange,
    jednofarebneElbeSupra,
    mozaikoveElbe,
    novinkoveElbe,
    perletoveElbe,
    stonelite,
  ]);

  let AT = globalState["alkorplan touch"];
  let ME = globalState["mozaikove elbe"];
  let PE = globalState["perletove elbe"];
  let DL = globalState["drevodekor larch range"];
  let S = globalState.stonelite;
  let JE = globalState["jednofarebne elbe supra"];
  let NE = globalState["novinkove elbe"];

  const [tilesMap, setTilesMap] = useState<THREE.Texture>(mozaikoveElbe[1]);

  useEffect(() => {
    switch (globalState.foilType) {
      case "alkorplan touch":
        setTilesMap(alkorplanTouch[AT]);
        break;

      case "mozaikove elbe":
        setTilesMap(mozaikoveElbe[ME]);
        break;

      case "perletove elbe":
        setTilesMap(perletoveElbe[PE]);
        break;

      case "stonelite":
        setTilesMap(stonelite[S]);
        break;

      case "jednofarebne elbe supra":
        setTilesMap(jednofarebneElbeSupra[JE]);
        break;

      case "novinkove elbe":
        setTilesMap(novinkoveElbe[NE]);
        break;

      case "drevodekor larch range":
        setTilesMap(drevodekorLarchRange[DL]);
        break;

      default:
        setTilesMap(alkorplanTouch[AT]);
        break;
    }
  }, [
    globalState.foilType,
    alkorplanTouch,
    drevodekorLarchRange,
    jednofarebneElbeSupra,
    mozaikoveElbe,
    novinkoveElbe,
    perletoveElbe,
    stonelite,
    AT,
    ME,
    PE,
    DL,
    S,
    JE,
    NE,
  ]);

  let showerFloorPositionZ =
    length === 7
      ? 3.5
      : length === 6
      ? 3.56
      : length === 5
      ? 3.61
      : length === 4
      ? 3.66
      : 3.45;

  const foil = useRef<THREE.Mesh>(null);

  useEffect(() => {
    foil.current?.geometry.computeVertexNormals();
  }, []);

  return (
    <>
      <Extend material={PoolMaterial.floor} />
      <group
        scale={0.1}
        position={[0, -0.9, 0]}
        rotation={[0, Math.PI * 1.5, 0]}
        {...props}
        dispose={null}
      >
        <RealPool foilMaterial={tilesMap} />

        {floors === 12 ? (
          <></>
        ) : direction === "left" ? (
          <group
            visible={!(globalState.shower === undefined)}
            position={[width === 3 ? -8.9 : -9.9, 0, showerFloorPositionZ]}
          >
            <ShowerFloor
              material={materials["Material.002"]}
              material-map={floorMaterial[floors]}
            />
          </group>
        ) : (
          <group
            visible={!(globalState.shower === undefined)}
            position={[width === 3 ? -0.57 : 0.4, 0, showerFloorPositionZ]}
          >
            <ShowerFloor
              material={materials["Material.002"]}
              material-map={floorMaterial[floors]}
            />
          </group>
        )}

        <mesh
          receiveShadow
          visible={!isWater}
          geometry={nodes.Pool_water.geometry}
          material={materials["Pool water.001"]}
          material-normalMap={waterNormalMap}
          material-normalScale={[0.2, 0.2]}
          position={[12.3, 9.05, -1]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[width > 3 ? 1.6 : 1, 1, 0.6 + (length - 4) * 0.1]}
        />

        <mesh
          receiveShadow
          scale-x={width === 4 ? 1.3 : 1.11}
          scale-z={0.98}
          geometry={nodes.Grass003.geometry}
          material={materials.Grass}
          position={[
            12.8,
            9.155,
            length <= 5 ? 5.15 : length === 6 ? 5.2 : length === 7 ? 5 : 4.975,
          ]}
        />
      </group>
      <group
        scale={0.1}
        position={[0, -0.9, 0]}
        rotation={[0, Math.PI * 1.5, 0]}
        {...props}
        dispose={null}
      >
        {/* <mesh
          // visible={false}
          receiveShadow
          geometry={nodes.Grass001.geometry}
          material={materials.Grass}
          position={[17.3, 0.001, 0]}
          scale={[0.53, 1, 0.989]}
        /> */}
      </group>
    </>
  );
}

useGLTF.preload("/pool.glb");
