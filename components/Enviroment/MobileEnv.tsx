import { useSnapshot } from "valtio";
import { store } from "../../store";
import MobileArrow from "./MobileArrow";
import s from "./env.module.scss";
import Buttons from "./Buttons";
import { useState } from "react";

const MobileEnv = () => {
  const [active, setActive] = useState<boolean>(false);
  const { mode, isWater, code } = useSnapshot(store);

  const handleMode = () => {
    mode === "day" ? (store.mode = "night") : (store.mode = "day");
  };

  const handleIsWater = () => {
    store.isWater = !isWater;
  };
  return (
    <>
      <button
        data-active={active}
        onClick={() => setActive((prev) => !prev)}
        className={s.mobilebtn}
      >
        {code === "GB" ? "Options" : "Možnosti"} <MobileArrow />
      </button>
      <div data-active={active} className={s.mobileenv}>
        <Buttons
          setDefault={false}
          onClick={handleMode}
          first={code === "GB" ? "Day" : "Deň"}
          second={code === "GB" ? "Night" : "Noc"}
        />
        <Buttons
          setDefault={true}
          onClick={handleIsWater}
          first={code === "GB" ? "With Water" : "S vodou"}
          second={code === "GB" ? "Without Water" : "Bez vody"}
        />
      </div>
    </>
  );
};

export default MobileEnv;
