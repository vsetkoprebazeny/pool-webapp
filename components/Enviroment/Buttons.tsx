import { useState } from "react";
import Check from "./Check";
import s from "./env.module.scss";

type Props = {
  first: string;
  second: string;
  onClick?: () => void;
  setDefault: boolean;
  disabled?: boolean;
};

const Buttons: React.FC<Props> = ({
  first,
  second,
  onClick,
  setDefault,
  disabled = false,
}) => {
  const [state, setState] = useState<boolean>(setDefault);

  const handleClick = () => {
    setState((prev) => !prev);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={s.buttons}>
      <button disabled={disabled} onClick={handleClick}>
        {!state && <Check />}
        {first}
      </button>
      <button disabled={disabled} onClick={handleClick}>
        {state && <Check />}
        {second}
      </button>
      <div
        data-disabled={disabled}
        data-change={state}
        className={s.buttons_cover}
      ></div>
    </div>
  );
};

export default Buttons;
