import { useState } from "react";
import IndikatorSelesai from "./components/IndikatorSelesai";
import NavigasiProvider from "./components/NavigasiProvider";
import Navigasi from "./components/Navigasi";
import Card from "./components/Card";

function App() {
  return (
    <NavigasiProvider>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-between space-y-3 w-120 h-screen p-4 font-mono">
          <IndikatorSelesai />
          <Card />
          <Navigasi />
        </div>
      </div>
    </NavigasiProvider>
  );
}

export default App;
