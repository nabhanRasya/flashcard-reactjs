import React, { useState, useContext } from "react";

function Card() {
  return (
    <div className="h-full">
      <div className=" rounded-xl bg-gray-100 w-full h-full border border-gray-200 p-4 flex flex-col items-center justify-center gap-y-4">
        <div className=" rounded-xl bg-white w-full h-full border border-gray-200 py-3 px-4 flex justify-start"></div>
        <div className="flex-1/2 rounded-xl bg-white w-full h-full border border-gray-200 py-3 px-4">
          A. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
          accusantium!
        </div>
        <div className="flex justify-between items-center flex-1/4 w-full gap-x-4">
          <div className="rounded-xl bg-white w-full h-full border border-gray-200 py-3 px-4 flex justify-center items-center text-2xl font-semibold text-gray-800">
            A
          </div>
          <div className="rounded-xl bg-white w-full h-full border border-gray-200 py-3 px-4 flex justify-center items-center text-2xl font-semibold text-gray-800">
            B
          </div>
          <div className="rounded-xl bg-white w-full h-full border border-gray-200 py-3 px-4 flex justify-center items-center text-2xl font-semibold text-gray-800">
            C
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
