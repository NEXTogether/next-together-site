"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

type DemoFormItems = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  privacyCheck: boolean;
};

export default function DemoForm() {
  const inputClasses =
    "rounded-md border focus:outline-none border-[#727377] px-2 py-1 text-base md:text-lg w-full max-w-full";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [privacyCheck, setPrivacyCheck] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `firstName: ${firstName}, lastName: ${lastName}, email: ${email}, company: ${company}, message: ${message}, privacyCheck: ${privacyCheck}, `
    );
  };

  return (
    <div className="flex flex-col h-screen max-h-screen justify-center items-center text-center bg-[#111216] text-white">
      {/* Back to home */}
      <div
        className="absolute flex top-5 right-5 md:top-10 md:left-10 text-5xl hover:cursor-pointer"
        onClick={() => {
          redirect("/");
        }}
      >
        <RxCross1 />
      </div>
      <div className="flex flex-col w-full md:w-200 max-w-full justify-center items-center space-y-3 md:space-y-6 px-5">
        {/* Title */}
        <div className="flex flex-col text-sm md:text-xl space-y-1 md:space-y-2">
          <h1 className="text-xl md:text-3xl font-bold">
            Vuoi provare Next:Together?
            <br />
            Richiedi subito una demo gratuita!
          </h1>
          {/* <h2>
            Siamo a tua disposizione per mostrarti come la nostra applicazione
            può semplificare la formazione e la crescita del tuo personale
          </h2> */}
        </div>

        {/* Inputs */}
        <h1 className="text-sm md:text-lg p-0 opacity-50">
          Compila il form qui sotto, ti ricontatteremo al più presto!
        </h1>
        {/* MODIFICA: Questa è la riga chiave. w-100 è la larghezza target, max-w-full è la sicurezza anti-overflow. */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 text-xl md:text-2xl w-100 max-w-full px-4"
        >
          <div className="flex flex-row space-x-2">
            <input
              className={inputClasses}
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Nome"
              type="text"
              required
            />
            <input
              className={inputClasses}
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Cognome"
              type="text"
              required
            />
          </div>

          <input
            className={inputClasses}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <input
            className={inputClasses}
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Azienda / Organizzazione"
            type="text"
            required
          />
          <textarea
            className={`${inputClasses} resize-y min-h-[70px]`}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Messaggio"
          />

          <div className="flex space-x-2 mx-auto text-xs md:text-sm w-full">
            <input
              className=""
              id="privacy"
              value={privacyCheck}
              onChange={(e) => setPrivacyCheck(e.target.value)}
              type="checkbox"
              required
            />
            <span>Ho letto e accetto l'informativa sulla privacy</span>
          </div>

          <button
            type="submit"
            className="rounded-md text-center bg-[#316cbf] w-full px-10 pl-4 mx-auto py-2"
          >
            Richiedi Demo
          </button>
          <p className="text-sm md:text-base text-left">
            {/* o <br /> */}
            Se preferisci, scrivici direttamente su{" "}
            <a
              className="text-blue-400 underline underline-offset-2"
              href="mailto://info@next-together.com"
            >
              info@next-together.com
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
