import React, { useState, createContext } from "react";

export const NavigasiContext = createContext();

function NavigasiProvider({ children }) {
  const [jumlahKartu, setJumlahKartu] = useState(24);
  const [urutanKartu, setUrutanKartu] = useState(1);

  function tambahKartu() {
    if (urutanKartu >= jumlahKartu) {
      return setUrutanKartu(jumlahKartu);
    }
    setUrutanKartu((prev) => {
      return prev + 1;
    });
  }

  function kurangKartu() {
    if (urutanKartu <= 1) {
      return setUrutanKartu(1);
    }

    setUrutanKartu((prev) => {
      return prev - 1;
    });
  }

  return (
    <NavigasiContext.Provider
      value={{ jumlahKartu, urutanKartu, tambahKartu, kurangKartu }}
    >
      {children}
    </NavigasiContext.Provider>
  );
}

export default NavigasiProvider;
