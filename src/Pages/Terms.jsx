import React from "react";
import Navbar from "../components/Navbar";
import { MoveLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="relative bg-[#08060E] overflow-hidden h-screen">
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-[#0B037A] opacity-30 rounded-full blur-[200px] pointer-events-none z-0 " />
      <div>
        <div>
          <MoveLeft/>
          <p>Return to home page</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
