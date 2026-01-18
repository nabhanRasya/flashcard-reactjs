import React, { useState, useContext } from "react";
import useSound from "use-sound";
import Sound from "./sound.mp3";
import { NavigasiContext } from "./NavigasiProvider";

function Navigasi() {
  const { tambahKartu, kurangKartu } = useContext(NavigasiContext);

  const [playWhooz] = useSound(Sound, { volume: 0.5 });

  return (
    <div className=" rounded-xl bg-gray-100 w-full h-15 border border-gray-200 px-2.5 py-3 flex justify-between items-center">
      <div className="flex flex-1 justify-start">
        <button
          onClick={() => {
            playWhooz();
            kurangKartu();
          }}
          className="p-2 px-4 rounded-lg text-violet-700 font-bold"
        >
          Previous
        </button>
      </div>
      <div className="flex flex-2 justify-center">
        <button className="bg-violet-200 py-1.5 px-4 rounded-xl text-violet-600 font-bold">
          Show answer
        </button>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          onClick={() => {
            playWhooz();
            tambahKartu();
          }}
          className="p-2 px-4 rounded-lg text-violet-700 font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Navigasi;
