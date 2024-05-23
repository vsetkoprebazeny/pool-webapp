import { useSnapshot } from "valtio";
import DirtCollectors from "../Models/DirtCollectors";
import { Ground } from "../Models/Ground";
import Lights from "../Models/Lights";
import Nozzels from "../Models/Nozzels";
import { Outlet } from "../Models/Outlet";
import { Pool } from "../Models/Pool";
import RollerCover from "../Models/RollerCover";
import { Shower } from "../Models/Shower";
import Stairs from "../Models/Stairs";
import { Upstream } from "../Models/Upstream";
import { store } from "@/store";
import { Suspense } from "react";
import { Chair } from "../Models/Chair";
import { TechincalHouse } from "../Models/TechnicalHouse";
import Staff from "../Models/Staff";
import { Pump } from "../Models/Pump";
import { Umbrella } from "../Models/Umbrella";

const Setup = () => {
  const globalState = useSnapshot(store);

  return (
    <>
      <group position={[0.56, 0, -1.26]}>
        <Shower />
        {globalState.entry !== undefined && <Stairs />}
        <Outlet />
        <group visible={globalState["nozzles"] === "show"}>
          <Nozzels />
        </group>
        <DirtCollectors />
        <group visible={globalState["upstream"] === "show"}>
          <Upstream />
        </group>
        <RollerCover />
        <Lights />
        <Ground />
        <Suspense fallback={null}>
          <Pool />
        </Suspense>
      </group>
      <Umbrella scale={0.06} position-z={0.6} rotation-y={Math.PI * 1} />
      <Chair
        rotation-y={-Math.PI * 1}
        scale={0.13}
        position={[0.18, 0.018, 0.65]}
      />
      <Chair
        rotation-y={-Math.PI * 1}
        scale={0.13}
        position={[-0.18, 0.018, 0.65]}
      />
      <TechincalHouse
        visible={globalState["technology house"] === "show"}
        scale={0.2}
        rotation-y={Math.PI * 0.5}
        position={[-1.4, 0, 1]}
      />
      <Staff />
      <Pump />

      {/* <Table scale={0.23} rotation-y={Math.PI * 0.5} position={[0, 0, -0.95]} /> */}
    </>
  );
};

export default Setup;
