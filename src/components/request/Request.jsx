import Image from "next/image";
import React from "react";

function Request() {
  return (
    <div className="h-[80vh] overflow-hidden md:overflow-auto md:h-full w-full flex justify-center items-center">
      <div
        className="flex flex-col justify-center items-center h-full w-full
      max-h-[450px] max-w-[330px]
   
      md:max-h-[432px]  md:max-w-[609px] shadow-lg rounded-lg"
      >
        {/* 1st */}
        <div>
          <Image
            alt="question"
            height={41}
            width={64}
            src="images/que.svg"
          ></Image>
        </div>
        {/* 2nd */}
        <div className="mt-10">
          <span className="text-[#3A3A3B] font-semibold text-3xl font-lato ">
            Send Requests?
          </span>
        </div>
        {/* 3rd */}
        <div>
          <p className="text-center mt-4 px-4 md:px-0 text-sm md:text-base lg:text-lg xl:text-xl text-[#A1ADAE] max-w-[545px] font-lato">
            If you would like to move forward with creating a premium account
            please confirm below and you will receive an email requesting
            payment and confirming your subcription.
          </p>
        </div>
        {/* 4th */}
        <div className="flex flex-row gap-4 md:gap-9 mt-7">
          <button className="py-[5px] px-12 md:px-24 text-black bg-white border rounded-md border-[#D9D9E0]">
            Cancle
          </button>

          <button className="py-[5px] px-12 md:px-24 text-white bg-[#A1ACAD] rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Request;
