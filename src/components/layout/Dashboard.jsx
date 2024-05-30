import { useState, useEffect, useRef } from "react";
import { PiBellRinging } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";
import LineChart from "./Chartjs";
import { FaStar } from "react-icons/fa";

const users = [
  {
    img: "users.webp",
    id: 1,
    user: "Harry Kane",
    email: "kane@example.com",
    joined: "30 minutes ago",
  },
  {
    img: "users.webp",
    id: 2,
    user: "Harper Nelson",
    email: "nelson@example.com",
    joined: "1 hour ago",
  },
  {
    img: "users.webp",
    id: 3,
    user: "Calvin Mank",
    email: "mank@example.com",
    joined: "3 hour ago",
  },
];

function Dashboard() {
  const [user, setuser] = useState(users);
  const [rating, setRating] = useState(4);
  const [isClick1, setIsClick1] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);
  const [isClick4, setIsClick4] = useState(false);
  const [isClick5, setIsClick5] = useState(false);
  useEffect(() => {
    if (rating === 1) {
      setIsClick1(true);
    } else if (rating === 2) {
      setIsClick1(true);
      setIsClick2(true);
    } else if (rating === 3) {
      setIsClick1(true);
      setIsClick2(true);
      setIsClick3(true);
    } else if (rating === 4) {
      setIsClick1(true);
      setIsClick2(true);
      setIsClick3(true);
      setIsClick4(true);
    } else if (rating === 5) {
      setIsClick1(true);
      setIsClick2(true);
      setIsClick3(true);
      setIsClick4(true);
      setIsClick5(true);
    }
  }, []);
  return (
    <>
      <div className="bg-[#fefffe] w-[100%] h-full  flex flex-col">
        <div className="flex items-center justify-between shadow-md h-[12%] px-5 lg:px-5 py-2 xl:py-4 xl:px-6">
          <div className="flex items-center gap-3 lg:gap-5">
            <h3 className="text-[17px] xl:text-[20px] font-[600]">Hello Admin</h3>
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
        <div className="flex flex-wrap sm:flex-row flex-col md:justify-start justify-center items-center mt-12 gap-3 px-7">
          <div className="w-[100%] sm:w-[320px] xl:w-[340px] xl:h-[160px] 2xl:w-[360px] 2xl:h-[170px] h-[150px] flex justify-between box-shadow-1 bg-white rounded-xl">
            <div className="flex flex-col text-[#49525a] justify-between py-4 px-4">
              <div className="flex flex-col">
                <div className="font-[600] text-[21px]">Users</div>
                <div className="font-[600] text-[30px]">1270</div>
              </div>
              <div className="text-[#1f76f3] font-extrabold flex items-center">
                <AiOutlineStock className="text-[20px]" />
                <span>7.2%</span>
              </div>
            </div>
            <div className=" w-[60%] flex justify-center items-center px-5 py-6 md:px-2 md:py-3 mr-4 ">
              <LineChart />
            </div>
          </div>
          <div className="w-[100%] sm:w-[320px] xl:w-[340px] xl:h-[160px] 2xl:w-[360px] 2xl:h-[170px] h-[150px]  flex justify-between box-shadow-1 bg-white rounded-xl">
            <div className="flex flex-col text-[#49525a] justify-between py-4 px-4">
              <div className="flex flex-col">
                <div className="font-[600] text-[21px]">Ratings</div>
                <div className="font-[600] text-[30px]">{rating}.0</div>
              </div>

              <div className="font-bold flex items-center cursor-pointer gap-[1px]">
                {isClick1 ? <FaStar className="text-[#1f76f3]" /> : <FaStar />}
                {isClick2 ? <FaStar className="text-[#1f76f3]" /> : <FaStar />}
                {isClick3 ? <FaStar className="text-[#1f76f3]" /> : <FaStar />}
                {isClick4 ? <FaStar className="text-[#1f76f3]" /> : <FaStar />}
                {isClick5 ? <FaStar className="text-[#1f76f3]" /> : <FaStar />}
              </div>
            </div>
            <div className=" w-[60%] flex justify-center items-center px-5 py-6 md:px-2 md:py-3  mr-4 ">
              <LineChart />
            </div>
          </div>
        </div>
        <div className="w-[90vw] lg:w-[70vw] h-[100%] max-h-[450px] overflow-auto min-h-[220px] bder-users rounded-xl ml-[24px] lg:ml-10 mb-5 mt-4">
          <div className=" w-[100%] h-[100%] text-[#48525b]">
            <h3 className="px-3 pt-3 text-[18px] xl:text-[22px] 2xl:text-[24px]  font-[600]">New Users</h3>
            <div>
              {user.map((user) => {
                return (
                  <div className=" flex items-center my-2 px-[6px] gap-[10px] py-2 xl:px-[10px]">
                    <div className="flex items-center w-[25%] sm:w-[23%] gap-[5px] xl:gap-[10px] sm:gap-2 ">
                      <img
                        src={`/${user.img}`}
                        alt="user"
                        className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                      />
                      <span className="text-[14px] xl:text-[18px] 2xl:text-[20px]   sm:text-[16px] leading-[12px] sm:leading-none ">{user.user}</span>
                    </div>
                    <div className="flex items-center w-[70%] sm:w-[70%]  gap-2">
                      <div className="w-[60%] sm:w-[40%] ">
                        <span className="text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px]">{user.email}</span>
                      </div>
                      <span className="text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[12px] sm:leading-none ml-[6px] sm:ml-0 ">Joined {user.joined}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
