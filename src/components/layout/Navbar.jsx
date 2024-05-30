import { useState, useEffect, useRef } from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const data = [
  {
    id: 1,
    route: "/admin/dashboard",
    text: "Dashboard",
    icon: RiDashboardHorizontalFill,
  },
  { id: 2, route: "/admin/users", text: "Users", icon: FaUserCircle },
  { id: 3, route: "/admin/notification", text: "Notification", icon: FaBell },
  { id: 4, route: "/admin/settings", text: "Settings", icon: IoSettingsSharp },
];

function Navbar() {
  const [dahboard, setDashboard] = useState(data);
  const [isHide, setHide] = useState(false);

  return (
    <>
      <div className="relative flex lg:flex-col h-[100%] flex-row justify-between items-center select-none px-4 lg:px-0">
        <div className="w-[100%] flex flex-row items-center lg:flex-col justify-between ">
          <div className="py-4 lg:py-10 xl:py-12">
            <h3 className="text-white text-[30px] xl:text-[35px] 2xl:text-[43px] cursor-pointer">VBC</h3>
          </div>
          <hr className="hidden lg:block border-[#324567] w-[80%] h-[3px] mb-12"/>
          <div className="hidden lg:flex lg:flex-col flex-row gap-3 justify-center items-center">
            {dahboard.map((item) => {
              const Icons = item.icon;
              return (
                <NavLink key={item.id}
                  className={({ isActive }) =>
                    isActive
                      ? `text-black bg-[#fefffe] font-[600] xl:px-14 2xl:px-16 xl:text-[18px] 2xl:text-[22px]  px-12 w-[100%]  py-2 rounded-md`
                      : `text-white  text-[400] px-12 xl:px-14 2xl:px-16 xl:text-[18px] 2xl:text-[22px] w-[100%] py-2  rounded-md`
                  }
                  to={`${item.route}`}
                >
                  <div className="flex items-center gap-1">
                    <Icons />
                    <div>{item.text}</div>
                  </div>
                </NavLink>
              );
            })}
          </div>
          <div className="hidden lg:hidden md:flex flex-row gap-3 justify-center items-center mr-5">
            {dahboard.map((item) => {
              const Icons = item.icon;
              return (
                <NavLink key={item.id}
                  className={({ isActive }) =>
                    isActive
                      ? `text-white font-[600]  px-1 w-[100%]  py-2 rounded-md`
                      : `text-[#dadada]   px-1 w-[100%] py-2  rounded-md`
                  }
                  to={`${item.route}`}
                >
                  <div className="flex items-center  gap-1">
                    <Icons />
                    <div>{item.text}</div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <NavLink to="/login">
          <div className="hidden md:flex text-white items-center justify-center xl:px-14 2xl:px-16 xl:text-[18px] 2xl:text-[22px]  lg:py-2 px-12  py-[6px] cursor-pointer rounded-md lg:my-2 lg:mb-5 hover:bg-[#fefffe] hover:text-black hover:font-[600] gap-1 ">
            <IoMdLogOut />
            <div>SignOut</div>
          </div>
        </NavLink>
        {!isHide ? (
          <MdOutlineMenu
            className="md:hidden cursor-pointer text-white font-bold px-2 hover:bg-white rounded-sm hover:text-black text-[36px] "
            onClick={() => setHide((prev) => !prev)}
          />
        ) : null}
        {isHide ? (
          <div className="absolute flex flex-col w-[100vw] h-[100vh] bg-[#1d2f57] top-0 right-0 select-none">
            <div className="flex ">
              <RxCross2
                className="md:hidden absolute right-4 top-[18px] text-white font-bold px-2 cursor-pointer hover:bg-white rounded-sm hover:text-black text-[36px]"
                onClick={() => setHide((prev) => !prev)}
              />
              <div className="py-4 px-4">
                <h3 className="text-white text-[30px] cursor-pointer">VBC</h3>
              </div>
            </div>
            <div className="w-[60%] mx-auto mt-8">
              <div className="md:hidden flex flex-col gap-3 justify-center items-center">
                {dahboard.map((item) => {
                  const Icons = item.icon;
                  return (
                    <NavLink key={item.id}
                      onClick={() => setHide((prev) => !prev)}
                      className={({ isActive }) =>
                        isActive
                          ? `text-black bg-[#fefffe] font-[600]  px-5 w-[100%]  py-2 rounded-md`
                          : `text-white  text-[400] px-5 w-[100%] py-2 rounded-md hover:bg-[#fefffe] hover:text-black hover:font-[600]`
                      }
                      to={`${item.route}`}
                    >
                      <div className="flex items-center  gap-1">
                        <Icons />
                        <div>{item.text}</div>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
              <NavLink to="/login">
                <div className="md:hidden flex mt-5  text-white items-center justify-center lg:py-2 px-3 lg:px-5 py-[6px] cursor-pointer rounded-md lg:my-2 lg:mb-5 hover:bg-[#fefffe] hover:text-black hover:font-[600] gap-1 ">
                  <IoMdLogOut />
                  <div>SignOut</div>
                </div>
              </NavLink>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
