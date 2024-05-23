import { useSnapshot } from "valtio";
import Close from "../Quote/Close";
import s from "./privacy.module.scss";
import { store } from "../../store";

type Props = {
  setIsPrivacy: React.Dispatch<React.SetStateAction<boolean>>;
  isPrivacy: boolean;
};

const Privacy: React.FC<Props> = ({ isPrivacy, setIsPrivacy }) => {
  const { code } = useSnapshot(store);

  const handleClick = () => {
    setIsPrivacy(false);
  };
  return (
    <div data-active={isPrivacy} className={s.main}>
      <div data-active={isPrivacy} className={s.cover}>
        <Close handleClick={handleClick} />
        <h1>{code === "GB" ? "Privacy policy" : "Ochrana osobných údajov"}</h1>
        <div className={s.content}>
          <h2>1. IDENTIFIKAČNÉ ÚDAJE</h2>
          <p>
            Správcom osobných údajov je spoločnosť EGEA plus s. r. o., sídlom
            Janka Kráľa 1598/128 949 01 Nitra, IČO: 46678514, Zapísaná v
            Obchodnom registri Okresného súdu Nitra, Vložka číslo 51931/N.
            Kontaktné údaje prevádzkovateľa: email: office@egea.sk, tel.č.: 037
            6554943.
          </p>

          <h2>2. SPRACOVANIE OSOBNÝCH ÚDAJOV</h2>
          <p>
            Osobné údaje sú spracované na účely oslovenia na mieru, s ponukou
            produktov a služieb, zaslanie informácií v oblasti spoločnosťou
            poskytovaných služieb a k výkonu práv a povinností vyplývajúcich
            medzi Vami a spoločnosťou EGEA plus s. r. o.. Ide o nasledovné
            osobné údaje zákazníka: meno, priezvisko, adresa, počtové smerové
            číslo, krajina, telefónne číslo, e-mailová.
          </p>
          <p>
            Zákonným dôvodom pre spracovanie osobných údajov je súhlas týmto
            daný správcovi v zmysle:
            <br />
            - plnenie zmluvy článku 6 odst. 1 písm. b) GDPR a plnenie práv a
            povinností správcu podľa článku 6 odst. 1 písm. c) GDPR,
            <br />
            {`- článku 6 ods.1písm. a) Nariadenia Európskeho parlamentu a Rady
            (EU) 2016/679 o ochrane fyzických osôb v súvislosti so spracovávaním
            osobných údajov a voľnom pohybu týchto údajov (ďalej "GDPR") pre
            účely priameho marketingu, pokiaľ nedošlo k objednávke tovaru,
            <br />- oprávnený záujem správcu na vykonanie priameho marketingu
            podľa čl. 6 odst. 1 písm. f) GDPR`}
          </p>
          <p>
            Spracúvanie osobných údajov je v prípade zaslania kontaktného
            formuláru, nevyhnutného na kontaktovanie a na účely plnenia zákonnej
            povinnosti spoločnosti EGEA plus s. r. o.
          </p>
          <p>
            Zo strany správcu nedochádza k automatickému individuálnemu
            rozhodovaniu v zmysle čl. 22 GDPR.
          </p>

          <h2>3. DOBA ULOŽENIA OSOBNÝCH ÚDAJOV</h2>
          <p>
            Osobné údaje sú spracúvané na dobu nevyhnutnú k výkonu práv a
            povinností vyplývajúcich zo zmluvného vzťahu (najviac po dobu 3
            rokov od ukončenia zmluvného vzťahu) alebo do doby odvolania súhlasu
            so spracovaním osobných údajov v písomnej forme adresovanej
            predávajúcemu, a to poštou, telefonicky alebo elektronicky na e-mail
            office@egea.sk.
          </p>

          <h2>4. PRÍJEMCOVIA OSOBNÝCH ÚDAJOV</h2>
          <p>
            Príjemcami osobných údajov sú nasledovné osoby:
            <br />- spoločnosť EGEA plus s. r. o., sídlom Janka Kráľa 1598/128
            949 01 Nitra, IČO: 46678514, ako sprostredkovateľ pre vedenie
            účtovníctva
          </p>

          <h2>5. PRÁVA SUBJEKTU ÚDAJOV</h2>
          <p>
            Za podmienok stanovených v GDPR máte právo:
            <br />
            - na prístup k osobným údajom
            <br />
            - na opravu osobných údajov
            <br />
            - na obmedzenie spracovania osobných údajov
            <br />
            - na výmaz osobných údajov
            <br />
            - na prenositeľnosť osobných údajov
            <br />- vzniesť námietku voči spracovaniu osobných údajov
          </p>

          <p>
            Ak sa domnievate, že boli porušené Vaše právo na ochranu osobných
            údajov, máte právo podať sťažnosť na dozorný úrad.
          </p>

          <h2>6. ZABEZPEČENIE OSOBNÝCH ÚDAJOV</h2>
          <p>
            Správca sa zaväzuje prijať vhodné technické a organizačné opatrenia
            k zabezpečeniu osobných údajov, aby nedošlo k neoprávnenému prístupu
            k týmto údajom alebo k ich strate. Správca prehlasuje, že k osobným
            údajom budú mať prístup len oprávnené osoby povinné zachovávať
            mlčanlivosť o osobných údajoch. Správca prijal technické opatrenia k
            zabezpečeniu dátových úložísk a osobným údajom evidovaným v
            listinnej podobe.
          </p>

          <h2>7. ZÁVEREČNÉ USTANOVENIA</h2>
          <p>
            Odoslaním formuláru potvrdzujete, že ste sa s podmienkami ochrany
            osobných údajov oboznámili a bezvýhradne s nimi súhlasíte. Správca
            si vyhradzuje právo meniť tieto podmienky. Aktuálna verzia podmienok
            je zverejnená na internetových stránkach správcu.
          </p>

          <p>Dátum poslednej aktualizácie 15.03.2024.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
