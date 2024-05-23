"use client";

import { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import Quote from "@/components/Quote/Quote";
import Privacy from "@/components/Privacy/Privacy";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [isGetQuote, setIsGetQuote] = useState<boolean>(false);
  const [isPrivacy, setIsPrivacy] = useState<boolean>(false);
  return (
    <main>
      <ToastContainer />
      <Quote
        isGetQuote={isGetQuote}
        setIsGetQuote={setIsGetQuote}
        setIsPrivacy={setIsPrivacy}
      />
      <Privacy isPrivacy={isPrivacy} setIsPrivacy={setIsPrivacy} />
      <Header />
      <Menu setIsGetQuote={setIsGetQuote} />
      <Footer />
    </main>
  );
}
