import s from "./quote.module.scss";

type Props = {
  id: string;
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | readonly string[] | undefined;
  name: string | undefined;
};

const Input: React.FC<Props> = ({
  id,
  label,
  placeholder,
  type,
  onChange,
  value,
  name,
}) => {
  return (
    <div className={s.input}>
      <label htmlFor={id}>
        {label}
        <span>*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default Input;
