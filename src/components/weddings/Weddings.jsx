import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Weddings = () => {
  // free || pro
  const [selectedPlan, setSelectedPlan] = useState("");
  const route = useRouter();
  const handleplan = () => {
    // route.push("/dashboard/login");
  };
  return (
    <div className="h-full w-full flex flex-col  justify-center items-center">
      {/* 1st div */}
      <div>
        <p className="text-[#A1ADAE] font-lato mt-4">Pricing</p>
      </div>
      {/* 2nd div */}
      <div>
        <p
          className="
        text-[#3A3A3B] font-lato font-bold text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl h-auto w-auto max-w-[913px] max-h-[144px] text-center"
        >
          Two simple pricing plans to meet your business needs
        </p>
      </div>
      {/* 3rd div */}
      <div className="mt-4">
        <p className="text-[#A1ADAE] font-lato px-3 text-justify sm:text">
          Choose between our life or affordable premium plan to get your
          business up and running with Do today
        </p>
      </div>
      {/* 4th div */}
      <div className="flex flex-col lg:flex-row gap-12 md:mt-20 m-4">
        {/* 4th 1st */}
        <div
          onClick={() => setSelectedPlan("free")}
          className={`h-[448px] cursor-pointer w-full rounded-2xl py-5 px-9 text-justify  ${
            selectedPlan === "free"
              ? "border-2 border-[#6D7280]"
              : "shadow-[0px_4px_6px_-1px_#0000001A]"
          }`}
        >
          <p className="text-[#3A3A3B] mt-2">Basic</p>
          <p className="text-[#6D7280] font-semibold text-xl mt-2">Free</p>
          <div className="w-[244px]">
            <p className="text-[#6D7280] font-lato text-base mt-2 flex flex-col w-[244px]">
              Great way to build your portfolio and checkout "Do" to see if it
              is right for you.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <img src="images/true.svg"></img>
              <p>Create and Save Portfolio</p>
            </div>
            <div className="flex flex-row gap-4">
              <img src="images/true.svg"></img>
              <p>Add Business and Contact Info</p>
            </div>
            <div className="flex flex-row gap-4">
              <img src="images/true.svg"></img>
              <p>Add Images</p>
            </div>
            <div className="flex flex-row gap-4">
              <img src="images/false.svg"></img>
              <p>Live portfolio on "Do" Website</p>
            </div>
          </div>
          <button
            className="bg-white h-10 w-[244px] rounded-lg border-2 border-black mt-14"
            onClick={() => handleplan()}
          >
            Continue with Basic
          </button>
        </div>
        {/* 4th 2nd */}
        <div
          onClick={() => setSelectedPlan("premium")}
          className={`h-[448px] cursor-pointer w-full rounded-2xl py-5 px-9 text-justify 
          ${
            selectedPlan === "premium"
              ? "border-2 border-[#6D7280]"
              : "shadow-[0px_4px_6px_-1px_#0000001A]"
          }`}
        >
          <p className="text-[#3A3A3B] mt-2">Premium</p>
          <p className="text-[#6D7280] font-semibold text-xl mt-2">
            $15 <span className="text-gray-300">/month</span>
          </p>
          <div className="w-[244px]">
            <p className="text-[#6D7280] font-lato text-base mt-2 flex flex-col">
              Great way to build your portfolio and checkout "Do" to see if it
              is right for you.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <img src="images/true.svg"></img>
              <p>Create and Save Portfolio</p>
            </div>
            <div className="flex flex-row gap-4">
              <img src="images/true.svg"></img>
              <p>Add Business and Contact Info</p>
            </div>
            <div className="flex flex-row gap-4">
              <img src="images/true.svg"></img>
              <p>Add Images</p>
            </div>
            <div className="flex flex-row gap-4">
              <img src="images/true.svg"></img>
              <p>Live portfolio on "Do" Website</p>
            </div>
          </div>
          <button className="bg-[#A1ACAD] text-white h-10 w-[244px] rounded-lg border  mt-14">
            Continue with Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weddings;
