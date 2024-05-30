import { useState, useEffect, useRef } from "react";
import { PiBellRinging } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const data = [
  {
    id: 1,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
    about:
      "Hi there! I'm Andi Lane, a California-based passionate software business owner, entrepreneur, and technology enthusiast.",
  },
  {
    id: 2,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
    about:
      "Hi there! I'm Andi Lane, a California-based passionate software business owner, entrepreneur, and technology enthusiast.",
  },
  {
    id: 3,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
    about:
      "Hi there! I'm Andi Lane, a California-based passionate software business owner, entrepreneur, and technology enthusiast.",
  },
  {
    id: 4,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
    about:
      "Hi there! I'm Andi Lane, a California-based passionate software business owner, entrepreneur, and technology enthusiast.",
  },
  {
    id: 5,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
    about:
      "Hi there! I'm Andi Lane, a California-based passionate software business owner, entrepreneur, and technology enthusiast.",
  },
  {
    id: 6,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
    about:
      "Hi there! I'm Andi Lane, a California-based passionate software business owner, entrepreneur, and technology enthusiast.",
  },
  {
    id: 7,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
    about:
      "Hi there! I'm Andi Lane, a California-based passionate software business owner, entrepreneur, and technology enthusiast.",
  },
  {
    id: 8,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
    about:
      "Hi there! I'm Andi Lane, a California-based passionate software business owner, entrepreneur, and technology enthusiast.",
  },
];

function User() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const arr = data.filter((a) => a.id == id);
    setUser(arr[0]);
  }, []);
  return (
    <>
      <div className="w-[100%] h-[100%]  flex flex-col overflow-y-auto overflow-x-hidden">
        <div className="flex items-center justify-between shadow-md h-[12%] px-5 lg:px-5 py-2 xl:py-4 xl:px-6">
          <div className="flex items-center gap-3 lg:gap-5">
            <h3 className="text-[17px] xl:text-[20px] font-[600]">
              Hello Admin
            </h3>
            <PiBellRinging className="px-2 text-[35px] xl:text-[38px] bg-white shadow-md rounded-md cursor-pointer " />
          </div>
          <div className="flex items-center gap-2 lg:gap-5">
            <h3 className="font-[500] xl:text-[20px]">Alex Hales</h3>
            <img
              className="cursor-pointer w-[45px] h-[45px] xl:w-[48px] xl:h-[48px] lg:w-[48px] lg:h-[48px]"
              src="/user.svg"
              alt="user"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col pl-5  w-[90%] lg:w-[72vw]">
          <NavLink to={"/admin/users"}>
            <div className="flex items-center text-[#49525a]  gap-[11px] ">
              <IoIosArrowBack className="text-[20px] xl:text-[21px] 2xl:text-[24px]" />
              <span className="hover:underline text-[19px] font-[600] xl:text-[21px] 2xl:text-[24px] ">
                {user.username}
              </span>
            </div>
          </NavLink>
          <div className="mt-5 px-2 flex flex-col">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <img
                  src="/user_id.svg"
                  alt="user"
                  className="w-44 h-44 rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex text-[18px] sm:text-[20px] xl:text-[21px] 2xl:text-[24px]">
                  <span className="w-[160px] sm:w-[180px] xl:w-[200px] font-[600] text-[#282929]">
                    Name:{" "}
                  </span>
                  <span className="text-[#7e7e7f]">{user.username}</span>
                </div>
                <div className="flex text-[18px] sm:text-[20px] xl:text-[21px] 2xl:text-[24px]">
                  <span className="w-[160px] sm:w-[180px] xl:w-[200px] font-[600] text-[#282929] ">
                    Email:{" "}
                  </span>
                  <span className="text-[#7e7e7f]">{user.email}</span>
                </div>
                <div className="flex text-[18px] sm:text-[20px] xl:text-[21px] 2xl:text-[24px]">
                  <span className="w-[160px] sm:w-[180px] xl:w-[200px] font-[600] text-[#282929]">
                    Phone Number:{" "}
                  </span>
                  <span className="text-[#7e7e7f]">{user.phone}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[95%] sm:w-[50%] mt-3">
              <h3 className="text-[20px] sm:text-[22px] xl:text-[24px] 2xl:text-[28px] font-[600] text-[#282929]">
                About
              </h3>
              <p className="text-[#7e7e7f] text-[17px] xl:text-[19px] 2xl:text-[21px] mt-1">
                {user.about}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-[95%] sm:w-[50%] mt-3">
              <h3 className="text-[20px] sm:text-[22px] xl:text-[24px] 2xl:text-[28px] font-[600] text-[#282929]">
                Social Links
              </h3>
              <div className="flex gap-3">
                <div className="px-[12px] py-[12px] border-[#1d2f57] border-[1px] border-solid rounded-full cursor-pointer">
                  <FaFacebook className="text-[#0e89e3] text-[18px] xl:text-[19px] 2xl:text-[21px]" />
                </div>
                <div className="px-[12px] py-[12px] border-[#1d2f57] border-[1px] border-solid rounded-full cursor-pointer">
                  <BiLogoGmail className="text-[#eb4334] text-[18px] xl:text-[19px] 2xl:text-[21px]" />
                </div>
                <div className="px-[12px] py-[12px] border-[#1d2f57] border-[1px] border-solid rounded-full cursor-pointer">
                  <FaTwitter className="text-[#118ae2] text-[18px] xl:text-[19px] 2xl:text-[21px]" />
                </div>
                <div className="px-[12px] py-[12px] border-[#1d2f57] border-[1px] border-solid rounded-full cursor-pointer">
                  <FaLinkedin className="text-[#017fbb] text-[18px] xl:text-[19px] 2xl:text-[21px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col  mt-3">
              <h3 className="text-[20px] sm:text-[22px] xl:text-[24px] 2xl:text-[28px] font-[600] text-[#282929]">
                Cards
              </h3>
              <div className="flex items-center sm:justify-start justify-center gap-2 flex-wrap">
                <img
                  src="/card1.svg"
                  alt="card"
                  className="w-[215px] sm:w-[205px] xl:w-[215px]"
                />
                <img
                  src="/card2.svg"
                  alt="card"
                  className="w-[205px] sm:w-[190px] xl:w-[205px]"
                />
                <img
                  src="/card1.svg"
                  alt="card"
                  className="w-[215px] sm:w-[205px] xl:w-[215px]"
                />
                <img
                  src="/card2.svg"
                  alt="card"
                  className="w-[205px] sm:w-[190px] xl:w-[205px]"
                />
              </div>
              <div className="mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
