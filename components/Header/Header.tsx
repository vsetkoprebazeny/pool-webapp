import Arrow from "./Arrow";
import s from "./header.module.scss";
import ReactFlagsSelect from "react-flags-select";
import { useSnapshot } from "valtio";
import { store } from "../../store";

const Header = () => {
  const { code } = useSnapshot(store);
  return (
    <header className={s.main}>
      <a style={{ all: "unset" }} href="https://vsetkoprebazen.sk">
        <button className={s.button}>
          <Arrow />
          {code === "GB" ? "Back" : "Naspäť"}
        </button>
      </a>
      <h1>
        {code === "GB" ? (
          <>
            POOL CONFIGURATOR <span>by</span> EGEA
          </>
        ) : (
          <>
            BAZÉNOVÝ KONFIGURÁTOR <span>od</span> EGEA
          </>
        )}
      </h1>
      <ReactFlagsSelect
        selected={code}
        onSelect={(code) => (store.code = code as "GB" | "SK")}
        className={s.lang}
        countries={["GB", "SK"]}
        customLabels={{
          GB: "EN",
          SK: "SK",
        }}
        placeholder="Select Language"
      />
    </header>
  );
};

export default Header;
