import Image from 'next/image';
import React, { useState } from 'react';
import Team from './Team';
import Business from './Business';
import Links from './Links';

const EditPortfolio = ({ onClose }) => {
    const [setselectedTab, setSetselectedTab] = useState("Business");

    const handletab = (tab) => {
        setSetselectedTab(tab);
    };
    return (
        <div className=' h-full '>
            <div className='flex items-start justify-between bg-[#F1F1F7] px-6 py-8 rounded-[16px_0px_0px_0px]  '>
                <div className='flex flex-col items-start justify-center'>
                    <span className='font-semibold'>New Portfolio</span>
                    <span className='font-normal'>Get started with your profile by filing in the information below</span>
                </div>
                <button onClick={onClose}>
                    <Image
                        src="/images/Close.svg"
                        alt='Anna'
                        width="16"
                        height="16"
                        className=''
                    />
                </button>
            </div>
            <div className='px-6 py-4 sm:flex items-center gap-6 hidden'>
                <span className={`p-[10px] font-lato text-lg font-bold leading-5 cursor-pointer  ${ setselectedTab === "Business" ? "border-b-2 text-[#B4BEBF] border-[#B4BEBF] " : "text-[#4B5563]  "} `} onClick={() => handletab("Business")} >Business</span>
                <span className={`p-[10px] font-lato text-lg font-bold leading-5 cursor-pointer ${ setselectedTab === "Team" ? "border-b-2 text-[#B4BEBF] border-[#B4BEBF] " : "text-[#4B5563]  "} `} onClick={() => handletab("Team")} >Team</span>
                <span className={`p-[10px] font-lato text-lg font-bold leading-5 cursor-pointer ${ setselectedTab === "Links" ? "border-b-2 text-[#B4BEBF] border-[#B4BEBF]" : "text-[#4B5563]  "}  `}  onClick={() => handletab("Links")} >Links</span>
            </div>

            <div className='h-fit '>
               {setselectedTab === "Business" ?  <Business onClose={onClose} /> :
               setselectedTab === "Team" ?  <Team onClose={onClose} /> :
               setselectedTab === "Links" ?  <Links onClose={onClose} /> : ""}
            </div>
        </div>
    );
};

export default EditPortfolio;
