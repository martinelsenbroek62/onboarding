import Image from "next/image";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const MenuBar = ({ handleTab, handleMenuClose }) => {
  const [setselectedTab, setSetselectedTab] = useState("");
  const {status} = useSession();

  const handleTabBar = (tab) => {
    handleTab(tab);
    setSetselectedTab(tab);
  };
  
  const handleResize = () => {
    if (window.innerWidth < 680) {
      handleMenuClose();
    }
  };

  return (

    <div className="  bg-[#F7F7FC]  h-full  ">
      <div className="flex flex-col justify-between py-8  h-screen font-lato ">
        <div className=" px-4 ">
          <div className="flex items-center justify-between">
            <div className="pl-4">
              <Image src="/images/Anna.svg" alt="Anna" width="48" height="48" />
            </div>
            <div
              className="p-1 pr-4 cursor-pointer sm:hidden"
              onClick={() => handleMenuClose()}
            >
              <Image
                src="/images/Close.svg"
                alt="Anna"
                width="16"
                height="16"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-[210px] pt-8 ">
            <button
              className="flex items-center gap-2 px-4 py-[10px] "
              onClick={() => {
                handleTabBar("portfolio");
                handleResize();
              }}
            >
              <div className="p-1">
                <Image
                  src="/images/Portfolio.svg"
                  alt="Anna"
                  width="13"
                  height="13"
                />
              </div>
              <span
                className={`text-base font-lato font-bold leading-5 ${
                  setselectedTab === "portfolio"
                    ? "text-[#A1ACAD]"
                    : "text-[#313136]"
                } `}
              >
                Portfolio
              </span>
            </button>

            <button className='flex items-center gap-2 px-4 py-[10px] ' onClick={() => {
              handleTabBar("userProfile");
              handleResize();
            }} >
              <div className='p-1'>
                <Image
                  src="/images/User.svg"
                  alt="Anna"
                  width="12"
                  height="13"
                />
              </div>
              <span className={`text-base font-lato font-bold leading-5 ${setselectedTab === "userProfile" ? 'text-[#A1ACAD]' : 'text-[#313136]'} `}  >User Profile</span>
            </button>

            <button className='flex items-center gap-2 px-4 py-[10px] ' onClick={() => {
              handleTabBar("account");
              handleResize();
            }} >
              <div className='p-1' >
                <Image
                  src="/images/Account.svg"
                  alt='Anna'
                  width="11"
                  height="14"
                />
              </div>
              <span className={`text-base font-lato font-bold leading-5 ${setselectedTab === "account" ? 'text-[#A1ACAD]' : 'text-[#313136]'} `}  >Account</span>
            </button>

            <button className='flex items-center gap-2 px-4 py-[10px] ' onClick={() => {
              handleTabBar("weddings");
              handleResize();
            }} >
              <div className='p-1'>
                <Image
                  src="/images/Weddings.svg"
                  alt='Anna'
                  width="13"
                  height="13"
                />
              </div>
              {/* <span className={`text-base font-lato font-bold leading-5 ${setselectedTab === "Weddings" ? 'text-[#A1ACAD]' : 'text-[#313136]'} `}  >Weddings</span> */}
              <span className={`text-base font-lato font-bold leading-5 ${setselectedTab === "weddings" ? 'text-[#A1ACAD]' : 'text-[#313136]'} `}  >Pricing</span>
            </button>

            <button className='flex items-center gap-2 px-4 py-[10px] ' onClick={() => {
              handleTabBar("help");
              handleResize();
            }} >
              <div className='p-1'>
                <Image
                  src="/images/Help.svg"
                  alt='Anna'
                  width="13"
                  height="13"
                />
              </div>
              <span className={`text-base font-lato font-bold leading-5 ${setselectedTab === "help" ? 'text-[#A1ACAD]' : 'text-[#313136]'} `} >Help</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 py-[10px] "
              onClick={() => {
                handleTabBar("request");
                handleResize();
              }}
            >
              <div className="p-1">
                <Image
                  src="/images/Help.svg"
                  alt="Anna"
                  width="13"
                  height="13"
                />
              </div>
              <span
                className={`text-base font-lato font-bold leading-5 ${
                  setselectedTab === "request"
                    ? "text-[#A1ACAD]"
                    : "text-[#313136]"
                } `}
              >
                Request
              </span>
            </button>
          </div>
        </div>
        <div className='flex flex-col items-start justify-center w-[210px] pt-8 '>
          {status === 'authenticated' ? 
          <button className='flex items-center gap-2 px-8 py-[10px]' onClick={() => signOut({redirect:false, callbackUrl: '/api/auth/logout'})} >
            <div className='p-1'>
              <Image
                src="/images/LogOut.svg"
                alt='Anna'
                width="13"
                height="11"
              />
            </div>
            <span className="text-base font-lato font-bold leading-5 text-[#313136]" >Log Out</span>
          </button>
          : <></>}
        </div>
      </div>
    </div>

  )
}

export default MenuBar