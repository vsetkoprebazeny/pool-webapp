import s from "./quote.module.scss";

const Close = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <svg
      onClick={handleClick}
      viewBox="0 0 12 14"
      xmlns="http://www.w3.org/2000/svg"
      className={s.close}
    >
      <g>
        <path
          d="M9.81645 12.2629L0.0296299 2.49248L2.17536 0.322176L11.9704 10.109L9.81645 12.2629ZM2.17536 12.2629L0.0296299 10.109L9.81645 0.322176L11.9704 2.49248L2.17536 12.2629Z"
          fill="#102948"
        />
      </g>
    </svg>
  );
};

export default Close;
