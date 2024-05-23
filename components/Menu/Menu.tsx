import Configuration from "../Configuration/Configuration";
import Enviroment from "../Enviroment/Enviroment";
import Render from "../Render/Render";
import s from "./menu.module.scss";

type Props = {
  setIsGetQuote: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<Props> = ({ setIsGetQuote }) => {
  return (
    <section className={s.main}>
      <Configuration setIsGetQuote={setIsGetQuote} />
      <Render />
      <Enviroment setIsGetQuote={setIsGetQuote} />
    </section>
  );
};

export default Menu;
