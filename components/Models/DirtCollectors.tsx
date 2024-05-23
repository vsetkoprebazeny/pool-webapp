import { useSnapshot } from "valtio";
import { store } from "../../store";
import { DirtCollector } from "./DirtCollector";

const DirtCollectors = () => {
  const globalState = useSnapshot(store);
  return (
    <>
      <DirtCollector isNarrow={globalState["dirt collector"] === "narrow"} />
    </>
  );
};

export default DirtCollectors;
