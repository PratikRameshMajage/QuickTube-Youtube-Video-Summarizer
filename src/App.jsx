import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
import Createuser from "./components/Createuser";

const App = () => {
  return (
    <div className="main h-screen w-screen bg-zinc-900 text-black font-[helvatica]">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/createuser" element={<Createuser />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
};

export default App;
