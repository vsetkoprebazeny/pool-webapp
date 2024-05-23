import { useSnapshot } from "valtio";
import Close from "./Close";
import Input from "./Input";
import s from "./quote.module.scss";
import { store } from "../../store";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

type Props = {
  setIsGetQuote: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPrivacy: React.Dispatch<React.SetStateAction<boolean>>;
  isGetQuote: boolean;
};

const Quote: React.FC<Props> = ({
  isGetQuote,
  setIsGetQuote,
  setIsPrivacy,
}) => {
  const { code, length, width, depth, quote } = useSnapshot(store);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleClick = () => {
    setIsGetQuote(false);
  };

  const sendMail = async (values: {
    name: string;
    address: string;
    postcode: string;
    country: string;
    phone: string;
    email: string;
    message: string;
  }) => {
    let response = await axios.post("/api/sendmail", {
      ...values,
      ...quote,
      length,
      width,
      depth,
    });
    setIsGetQuote(false);
    return response;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      postcode: "",
      country: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      if (isChecked) {
        if (
          values.name === "" ||
          values.address === "" ||
          values.postcode === "" ||
          values.country === "" ||
          values.phone === "" ||
          values.email === ""
        ) {
          toast.error(
            code === "GB"
              ? "Please complete the required field."
              : "Vyplňte požadované pole.",
            { theme: "dark" }
          );
        } else {
          formik.resetForm();
          toast.promise(
            sendMail(values),
            {
              pending:
                code === "GB"
                  ? "Request is sending please wait..!"
                  : "Žiadosť sa odosiela, prosím čakajte..!",
              success:
                code === "GB"
                  ? "Request send successfully 👌"
                  : "Žiadosť bola úspešne odoslaná 👌",
              error:
                code === "GB"
                  ? "Request rejected 🤯"
                  : "Žiadosť bola zamietnutá 🤯",
            },
            { theme: "dark" }
          );
        }
      } else {
        toast.error(
          code === "GB"
            ? "Please accept privacy policy."
            : "Prijmite prosím zásady ochrany osobných údajov.",
          { theme: "dark" }
        );
      }
    },
  });

  return (
    <div data-active={isGetQuote} className={s.main}>
      <div data-active={isGetQuote} className={s.cover}>
        <Close handleClick={handleClick} />
        <div className={s.cover_head}>
          <h1>
            {code === "GB"
              ? "Request for quotation"
              : "Žiadosť o cenovú ponuku"}
          </h1>
          <p>
            {code === "GB"
              ? "After completing and submitting your details, we will contact you within 24 hours."
              : "Po vyplnení a odoslaní údajov vás budeme kontaktovať do 24 hodín."}
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className={s.form}>
          <div className={s.form_box}>
            <Input
              onChange={formik.handleChange}
              value={formik.values.name}
              id="quote-name"
              name="name"
              type="text"
              label={
                code === "GB" ? "First Name & Last Name" : "Meno a priezvisko"
              }
              placeholder={
                code === "GB" ? "First Name & Last Name" : "Meno a priezvisko"
              }
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.address}
              id="quote-address"
              name="address"
              type="text"
              label={
                code === "GB"
                  ? "Address of service intervention"
                  : "Adresa Vášho bazénu"
              }
              placeholder={code === "GB" ? "Address" : "Adresa"}
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.postcode}
              id="quote-postcode"
              name="postcode"
              type="text"
              label={code === "GB" ? "Postcode" : "PSČ"}
              placeholder={code === "GB" ? "Postcode" : "PSČ"}
            />
          </div>
          <div className={s.form_boxTwo}>
            <Input
              onChange={formik.handleChange}
              value={formik.values.country}
              name="country"
              id="quote-country"
              type="text"
              label={code === "GB" ? "Country" : "Krajina"}
              placeholder={code === "GB" ? "Country" : "Krajina"}
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.phone}
              name="phone"
              id="quote-number"
              type="tel"
              label={code === "GB" ? "Phone number" : "Telefón"}
              placeholder={code === "GB" ? "Number" : "Telefón"}
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              id="quote-email"
              type="email"
              label={code === "GB" ? "Email" : "Email"}
              placeholder={code === "GB" ? "Email" : "Email"}
            />
          </div>
          <div className={s.msg}>
            <label htmlFor="quote-msg">Message</label>
            <textarea
              onChange={formik.handleChange}
              value={formik.values.message}
              id="quote-msg"
              name="message"
              placeholder={code === "GB" ? "Message" : "Správa"}
            />
          </div>
          <div className={s.form_checkbox}>
            <input
              onChange={(e) => setIsChecked(e.target.checked)}
              checked={isChecked}
              type="checkbox"
              id="quote-checkbox"
            />
            {code === "GB" ? (
              <label htmlFor="quote-checkbox">
                Accept our{" "}
                <span onClick={() => setIsPrivacy(true)}>privacy policy.</span>
              </label>
            ) : (
              <label htmlFor="quote-checkbox">
                Akceptujte naše{" "}
                <span onClick={() => setIsPrivacy(true)}>zásady GDPR.</span>
              </label>
            )}
          </div>
          <button type="submit">
            {code === "GB" ? "Send request" : "Odoslať žiadosť"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quote;
