import { useState, useEffect, useRef } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { BiHide } from "react-icons/bi";

function SignIn() {
  const [isHide, setIsHide] = useState(true);
  const [isverified, setIsVerified] = useState(true);
  return (
    <>
      <div className="w-screen h-screen flex gap-4 flex-col   lg:gap-0 lg:flex lg:flex-row">
        <div className="w-[100%] h-[12%] lg:w-[32%] lg:h-[100%] bg-[#1d2f57] lg:rounded-r-2xl flex px-7 lg:px-0 justify-start lg:justify-center items-center">
          <h3 className="text-white text-[35px] cursor-pointer select-none">VBC</h3>
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[380px] h-[380px] sm:w-[430px] mt-2 rounded-xl sm:h-[400px] bg-[#f8f9f9] border-[1px] border-[#d4d4d4] border-solid">
            <div className="flex flex-col w-[100%] select-none h-[100%] gap-5 justify-center items-center font-sans">
              <div className="flex flex-col justify-center items-center gap-2">
                <h3 className="text-[25px] font-[600]">Sign In</h3>
                <p className="text-[#7e7e7f] text-[14px]">
                  Hi, Welcome back, you’ve been missed
                </p>
              </div>
              <form className="w-[75%] sm:w-[70%] flex flex-col gap-3 mt-4">
                <div className="flex bg-[#fefffe] px-[10px] py-[9px] rounded-lg items-center justify-between">
                  <div className="flex items-center gap-[6px]">
                    <MdOutlineMailOutline className="text-[17px]" />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      autoComplete="off"
                      spellCheck={false}
                      required
                      className="bg-[#fefffe] border-none outline-none text-[15px] w-[200px] sm:w-[230px]"
                    />
                  </div >
                  <div >{isverified ? <MdVerifiedUser /> : null}</div>
                </div>
                <div className="flex bg-[#fefffe] px-[10px] py-[9px] rounded-lg items-center justify-between">
                  <div className="flex items-center gap-[6px]">
                    <RiLockPasswordFill className="text-[17px]" />
                    <input
                      type={isHide ? "password" : "text"}
                      name="email"
                      id="email"
                      placeholder="Password"
                      autoComplete="off"
                      spellCheck={false}
                      required
                      className="bg-[#fefffe] border-none outline-none text-[15px] w-[200px] sm:w-[230px]"
                    />
                  </div>
                  <div className="cursor-pointer">
                    {isHide ? (
                      <BiHide onClick={() => setIsHide((prev) => !prev)} />
                    ) : (
                      <IoMdEye onClick={() => setIsHide((prev) => !prev)} />
                    )}
                  </div>
                </div>
                <div className="self-end text-[13px] hover:underline">Forgot Password?</div>
                <button
                  className=" bg-[#1d2f57]  text-white py-[10px] flex items-center justify-center rounded-full mt-2"
                  type="button"
                >
                  Log into your account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
