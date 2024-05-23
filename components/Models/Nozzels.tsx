import { useSnapshot } from "valtio";
import { Nozzel } from "./Nozzel";
import { store } from "../../store";

const Nozzels = () => {
  const { entry, length, width } = useSnapshot(store);

  let direction = entry ? entry.slice(7, 15) : "center";

  let visible = entry
    ? !(entry!.slice(0, 6) === "stair2") && !(entry!.slice(0, 6) === "stair3")
    : true;

  let minusLenght =
    length === 4
      ? 0.016
      : length === 5
      ? 0.014
      : length === 6
      ? 0.014
      : length === 7
      ? 0.011
      : length === 8
      ? 0.011
      : -0.003;

  return (
    <group
      visible={visible}
      position={[
        minusLenght,
        -0.024,
        entry ? (direction === "right" ? -0.12 : -0.02) : -0.05,
      ]}
    >
      <Nozzel position={[0.09, 0.003, width === 4 ? 1.45 : 1.4]} />
      <Nozzel position={[0.09, 0.003, 1.3]} />
      <Nozzel position={[0.09, 0.003, width === 4 ? 1.15 : 1.2]} />
    </group>
  );
};

export default Nozzels;
