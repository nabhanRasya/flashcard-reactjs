import { useState, useContext } from "react";
import { NavigasiContext } from "./NavigasiProvider";

function IndikatorSelesai() {
  const { jumlahKartu, urutanKartu } = useContext(NavigasiContext);

  const presentase = (urutanKartu / jumlahKartu) * 100;

  return (
    <div className="relative rounded-xl bg-gray-100 w-full h-15 border px-2.5 py-3 border-gray-200 flex justify-start">
      <div className="h-full absolute inset-0 p-[6.8px]  ">
        <div className="bg-white h-full rounded-lg"></div>
      </div>

      <div className="absolute inset-0 justify-end font-black  z-10 w-full flex items-center px-6">
        {urutanKartu} of {jumlahKartu}
      </div>
      <div
        style={{ width: `${presentase}%` }}
        className="h-full absolute inset-0 p-1.5 transition-all duration-300 ease-in"
      >
        <div className="bg-violet-300 w-full h-full rounded-lg"></div>
      </div>
    </div>
  );
}

export default IndikatorSelesai;
