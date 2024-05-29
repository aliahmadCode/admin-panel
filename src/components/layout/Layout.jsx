import { useState, useEffect, useRef } from "react";
import { Outlet, NavLink } from "react-router-dom";

import Navbar from "./Navbar";
function Layout() {
  return (
    <>
      <div className="w-screen min-h-screen flex flex-col lg:gap-0 lg:flex lg:flex-row">
        <div className="w-screen h-[12%] lg:w-[23vw] lg:h-screen bg-[#1d2f57]">
          <Navbar />
        </div>
        <div className="w-[100%] lg:w-[77vw] h-full bg-[#fbfbfe]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
