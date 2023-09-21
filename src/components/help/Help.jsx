import React, { useState } from "react";

const Help = () => {
  const [isFormVisible, setisFormVisible] = useState(false);
  return (
    <div className="flex flex-col p-6 sm:ml-52 gap-4 mt-4">
      <div>
        <p className="text-[#313136] font-extrabold text-4xl font-lato">
          Need Help?
        </p>
      </div>
      <div className=" flex flex-col gap-2 text-justify">
        <p className="h-auto w-full max-w-[460px] text-[#C4C4CC] font-lato ">
          Please fill out this form below and one of our team members will be in
          touch with you shortly. You can also &nbsp;
          <span
            onClick={() => setisFormVisible(true)}
            className="text-[#A1ACAD] inline-block border-b-2 cursor-pointer w-32 "
          >
            send us an email.
          </span>
        </p>
      </div>
      {isFormVisible && (
        <>
          <div className="">
            {/* 1st */}
            <div className="flex flex-col sm:flex-row md:gap-4">
              {/* 1st 1 */}
              <div className="flex flex-col gap-4 mt-4">
                <span>First Name</span>

                <input
                  type="text"
                  placeholder="First Name"
                  className="h-10 sm:w-56 border border-gray-300 rounded-md p-3 cursor-pointer"
                ></input>
              </div>
              <div className="flex flex-col mt-4">
                <div className="mb-4 text-base">
                  <span>Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-10 sm:w-56 border border-gray-300 rounded-md p-3 cursor-pointer"
                ></input>
              </div>
            </div>

            {/* 2nd */}
            <div className="mt-4">
              <div className="mb-4 text-base">
                <span>Message</span>
              </div>
              <textarea
                type="text"
                placeholder=""
                className="h-60 max-h-60 w-full md:w-[460px] border border-gray-300 rounded-md p-2 cursor-pointer"
              ></textarea>
            </div>
            {/* 3rd  */}
            <div className="flex flex-col sm:flex-col" onClick={() => setisFormVisible(false)}>
              <button className="h-10 sm:w-[460px] rounded-md border border-gray-300 mt-20 justify-center text-gray-300 cursor-pointer">
                Send Message
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Help;
