import { useSnapshot } from "valtio";
import s from "./footer.module.scss";
import { store } from "../../store";

const Footer = () => {
  const { code } = useSnapshot(store);
  return (
    <footer className={s.main}>
      <h1>
        {code === "GB" ? (
          <>
            All rights reserved © 2024 | Všetko pre bazény <span>by</span> EGEA
          </>
        ) : (
          <>
            Všetky práva vyhradené © 2024 | Všetko pre bazény <span>by</span>{" "}
            EGEA Plus S.R.O
          </>
        )}
      </h1>
      <p>
        Created by{" "}
        <a target="_blank" href="https://www.wavenet.sk">
          WaveNet
        </a>
      </p>
      <p>
        <span>Email:</span> <a href="mailto:dopyt@egea.sk">dopyt@egea.sk</a>
      </p>
      <p>
        <span>{code === "GB" ? "Phone:" : "Telefón:"}</span>{" "}
        <a href="tel:0911800903">0911 800 903 </a>
      </p>
    </footer>
  );
};

export default Footer;
