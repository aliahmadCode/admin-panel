import { useState, useEffect, useRef } from "react";

import { PiBellRinging } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";

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

import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPenAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Users() {
  const [selectedCount, setRowSelected] = useState(0);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [users, setUsers] = useState(data);
  useEffect(() => {
    if (isAllChecked) {
      setRowSelected(users.length);
    } else {
      setRowSelected(0);
    }
    console.log(users);
  }, [users]);

  function handleIsAllChecked() {
    if (isAllChecked) {
      setIsAllChecked((prev) => !prev);
      setUsers(data);
    } else {
      setIsAllChecked((prev) => !prev);
      const arr = users.map((item) => {
        return { ...item, checked: true };
      });
      setUsers(arr);
    }
  }

  function handleUserChecked(id) {
    const arr = users.map((user) => {
      if (id === user.id && user.checked === false) {
        return { ...user, checked: true };
      } else {
        return { ...user, checked: false };
      }
    });
    setUsers(arr);
  }
  function handleDelete(id) {
    const arr = users.filter((item) => item.id !== id);
    setUsers(arr);
  }

  return (
    <>
      <div className="bg-[#fefffe] w-[100%] h-full  flex flex-col">
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
        <div className="flex flex-col justify-center items-center mt-10  w-[90vw] lg:w-[72vw] mx-auto">
          <div className="flex justify-center gap-8 sm:gap-0 sm:justify-between items-center  w-[100%]">
            <div className="flex items-center justify-between gap-2 sm:flex-row flex-col leading-[8px] sm:leading-none">
              <div className="flex items-center text-white bg-[#1c2e57] gap-1 px-3 py-[10px] text-[14px] rounded-md cursor-pointer xl:text-[18px]">
                <span>Actions</span>
                <IoIosArrowDown />
              </div>
              <div className="text-[12px] sm:text-[14px] xl:text-[18px]">
                {selectedCount} Row Selected
              </div>
            </div>
            <div className="flex items-center bg-[#fefffe] bder-search rounded-md px-2 py-2 xl:py-3 gap-2 w-[60%] sm:w-[50%] lg:w-[30%]">
              <div>
                <CiSearch className="cursor-pointer text-[20px]" />
              </div>
              <input
                type="text"
                placeholder="Search by name"
                className="placeholder:text-[#b7b7c2]  bg-transparent outline-none"
              />
            </div>
          </div>
          <div className=" w-[90vw] lg:w-[72vw] h-[100%] max-h-[70vh]  overflow-auto rounded-md  mt-5 sm:mt-3 bg-[#f8f9f9]">
            <div className="my-grid xl:text-[17px] 2xl:text-[19px]">
              <div className="flex justify-center items-center select-none ">
                {isAllChecked ? (
                  <ImCheckboxChecked
                    className="mx-2"
                    onClick={() => handleIsAllChecked()}
                  />
                ) : (
                  <ImCheckboxUnchecked
                    className="mx-2"
                    onClick={() => handleIsAllChecked()}
                  />
                )}
              </div>
              <span className="select-none py-2 my_p_user  flex items-center justify-center ">
                Users
              </span>
              <span className="select-none hidden sm:flex items-center justify-center ">
                Phone
              </span>
              <span className="select-none  my_p_em sm:ml-0 flex items-center justify-center ">
                Email
              </span>
              <span className="select-none hidden sm:flex items-center justify-center ">
                No of Cards
              </span>
              <span className="select-none  my_p_act sm:ml-0 flex items-center justify-center ">
                Actions
              </span>
            </div>
            {users.map((user) => {
              return (
                <div
                  className="my-grid xl:text-[17px] 2xl:text-[19px]"
                  key={user.id}
                >
                  <div className="flex bder-users-1 justify-center items-center select-none py-3">
                    {user.checked ? (
                      <ImCheckboxChecked
                        className="my_p_icon"
                        onClick={() => handleUserChecked(user.id)}
                      />
                    ) : (
                      <ImCheckboxUnchecked
                        className="my_p_icon"
                        onClick={() => handleUserChecked(user.id)}
                      />
                    )}
                  </div>
                  <NavLink to={`/admin/users/${user.id}`}>
                    <div className="flex bder-users-1 py-3 items-center gap-2 my_p_user">
                      <img src="/user.svg" alt="user" className="w-8 h-8 " />
                      <span className="select-none sm:leading-none leading-[17px] hover:underline">
                        {user.username}
                      </span>
                    </div>
                  </NavLink>

                  <span className="select-none bder-users-1 py-3 hidden sm:flex items-center justify-center">
                    {user.phone}
                  </span>
                  <span className="select-none bder-users-1 py-3  my_p_user sm:ml-0 flex items-center justify-center">
                    {user.email}
                  </span>
                  <span className="select-none bder-users-1 py-3 hidden sm:flex items-center justify-center">
                    {user.numberOfCards}
                  </span>
                  <div className="text-[#4a4b4a] text-[15px] flex items-center justify-center gap-2  my_p_user xl:text-[17px] 2xl:text-[19px]">
                    <NavLink to={`/admin/users/${user.id}`}>
                      <FaEye className="cursor-pointer hover:text-[#333]" />
                    </NavLink>
                    <MdDelete
                      onClick={() => handleDelete(user.id)}
                      className="cursor-pointer hover:text-[#333]"
                    />
                    <FaPenAlt className="cursor-pointer hover:text-[#333]" />
                  </div>
                </div>
              );
            })}
            <div className="mb-10"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
