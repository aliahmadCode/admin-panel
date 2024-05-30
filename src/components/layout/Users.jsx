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
  },
  {
    id: 2,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
  {
    id: 3,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
  {
    id: 4,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
  {
    id: 5,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
  {
    id: 6,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
  {
    id: 7,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
  {
    id: 8,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
];

function Users() {
  const [selectedCount, setRowSelected] = useState(0);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [users, setUsers] = useState(data);

  function handleIsAllChecked() {
    if (isAllChecked) {
        setIsAllChecked(prev => !prev)
        setUsers(data)
    }else{
        setIsAllChecked(prev => !prev)
        const arr = users.map(item =>{
            return {...item, checked: true}
        })
        setUsers(arr)
    }
  }
  function handleUserChecked(id) {
    const arr = users.map(user => {
        if (id === user.id && user.checked === false){
            return {...user, checked: true}
        }else{
            return {...user, checked: false}
        }
    })
    setUsers(arr)
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
              <div className="flex items-center text-white bg-[#1c2e57] gap-1 px-3 py-[10px] text-[14px] rounded-md cursor-pointer">
                <span>Actions</span>
                <IoIosArrowDown />
              </div>
              <div className="text-[12px] sm:text-[14px]">
                {selectedCount} Row Selected
              </div>
            </div>
            <div className="flex items-center bg-[#fefffe] bder-users-1 rounded-md px-2 py-2 gap-2 w-[60%] sm:w-[50%]  lg:w-[30%]">
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
          <div className=" w-[90vw] lg:w-[72vw] h-[100%] max-h-[70vh]  overflow-auto rounded-md mb-5 mt-5 sm:mt-3 bg-[#f8f9f9]">
            <div className="my-grid">
              <div className="flex justify-center items-center select-none ">
                {isAllChecked ? (
                  <ImCheckboxChecked
                    className=""
                    onClick={() => handleIsAllChecked()}
                  />
                ) : (
                  <ImCheckboxUnchecked
                    className=""
                    onClick={() => handleIsAllChecked()}
                  />
                )}
              </div>
              <span className="select-none ">Users</span>
              <span className="select-none ">Phone</span>
              <span className="select-none ">Email</span>
              <span className="select-none ">No of Cards</span>
              <span className="select-none r">Actions</span>
            </div>
            {users.map((user) => {
              return (
                <div className="my-grid " key={user.id}>
                  <div className="flex justify-center items-center select-none ">
                    {user.checked ? (
                      <ImCheckboxChecked
                        className=""
                        onClick={() => handleUserChecked(user.id)}
                      />
                    ) : (
                      <ImCheckboxUnchecked
                        className=""
                        onClick={() => handleUserChecked(user.id)}
                      />
                    )}
                  </div>
                  <div className="flex">
                    <img src="/user.svg" alt="user" />
                    <span className="select-none ">{user.username}</span>
                  </div>
                  <span className="select-none ">{user.phone}</span>
                  <span className="select-none ">{user.email}</span>
                  <span className="select-none ">{user.numberOfCards}</span>
                  <span className="select-none ">{user.username}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
