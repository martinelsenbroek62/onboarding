import React, { useState } from 'react'
import EditPortfolio from '../common/EditPortfolio';
import Image from 'next/image';
import Link from 'next/link';


const imageData = [
    { id: 0, name: "hairs", image: "/profile/hairs.jpg" },
    { id: 0, name: "hairs-2", image: "/profile/hairs-2.jpg" },
    { id: 0, name: "hairs-3", image: "/profile/hairs-3.jpg" },
    { id: 0, name: "hairs-4", image: "/profile/hairs-4.jpg" },
    { id: 0, name: "hairs-5", image: "/profile/hairs-5.jpg" },
    { id: 0, name: "hairs-6", image: "/profile/hairs-6.jpg" },
    { id: 0, name: "hairs-7", image: "/profile/hairs-7.jpg" },
    { id: 0, name: "hairs-8", image: "/profile/hairs-8.jpg" },
];

const Portfolio = () => {
    const [isModal, setIsModal] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleModal = () => {

    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className='relative h-full w-full '>

                <div className='h-[calc(100vh-18.5vh)] overflow-auto custom-scroll mt-12 px-5 '>
                    <div className=" flex flex-col justify-center  items-start  sm:w-[462px] ml-4 lg:ml-[278px]    ">

                        <div className="flex flex-row gap-7">

                            <div className=" flex-shrink-0   rounded-full">
                                <Image
                                    alt='User'
                                    src="/profile/Female.jpg"
                                    width="124"
                                    height="124"
                                    className=' w-[110px] sm:w-[124px] '
                                />
                            </div>

                            <div className="mt-6 flex flex-col gap-2">
                                <p className="text-gray-800 font-semibold text-xl">Be Stylists</p>
                                <p className="text-slate-400 w-44 md:whitespace-normal ">

                                    Hairstyle in Boston, MA
                                </p>
                                <Link href="https://bestylists.com/" target="_blank" className="text-slate-400 border-b w-24 cursor-pointer" >bestylists.com</Link>
                            </div>
                        </div>

                        <div className=" mt-6 flex flex-col gap-2">
                            <p className="text-gray-800 font-semibold text-xl">Business Bio</p>
                            <p className="text-slate-400 text-justify md:text-start ">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
                                doloremque! Consequatur eum blanditiis minima itaque laborum incidunt
                                facilis saepe deserunt impedit architecto quidem odit dolorem aliquam
                                sint, vel repellat? Fuga!
                            </p>
                        </div>

                        <div className="mt-6 flex flex-col gap-2">
                            <p className="font-semibold text-xl text-gray-800">Cost</p>
                            <p className="text-slate-400"> $$$</p>
                        </div>

                        <div className=" mt-6 flex flex-col w-full gap-6">
                            <p className="text-gray-800 font-semibold text-xl">Photos of work</p>
                            <div className="flex w-full flex-wrap items-center flex-col md:flex-row gap-6">
                                {imageData?.map((item, index) => {
                                    return (
                                        <div className="flex flex-row gap-6 " key={index}>
                                            <img
                                                key={index}
                                                className="h-[300px] w-[300px] md:h-[215px] md:w-[215px] rounded-lg object-cover"
                                                src={`${item?.image}`}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-4 w-full flex flex-wrap">
                            <div>
                                <p className="text-gray-800 font-semibold text-xl mt-4">Socials</p>
                            </div>
                            <div className="mt-4 flex flex-col w-full ">
                                <div className="flex md:flex-row mt-4 justify-between w-full">
                                    <p className="text-slate-400 text-lg">Instagram</p>
                                    <div className="flex items-center gap-2 cursor-pointer">
                                        <a rel="stylesheet" target='_blank' href="https://bestylists.com/" >@bestylists</a>
                                        <div className='p-1'>
                                            <a rel="stylesheet" target='_blank' href="https://bestylists.com/" >
                                                <Image
                                                    alt='arrow'
                                                    src="/profile/arrow.svg"
                                                    width="11"
                                                    height="1"
                                                    className=" " />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 justify-between w-full">
                                    <p className="text-slate-400 text-lg">Facebook</p>
                                    <div className="flex items-center gap-2 cursor-pointer ">
                                        <a rel="stylesheet" target='_blank' href="https://www.facebook.com/bestylists" >facebook.com/bestylists</a>
                                        <div className='p-1'>
                                            <a rel="stylesheet" target='_blank' href="https://www.facebook.com/bestylists" >
                                                <Image
                                                    alt='arrow'
                                                    src="/profile/arrow.svg"
                                                    width="11"
                                                    height="1"
                                                    className=" " />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 justify-between w-full ">
                                    <p className="text-slate-400 text-lg">Twitter</p>
                                    <div className="flex  items-center gap-2 cursor-pointer ">
                                        <Link rel="stylesheet" target='_blank' href="https://bestylists.com/"  >@bestylists</Link>
                                        <div className='p-1'>
                                            <a rel="stylesheet" target='_blank' href="https://bestylists.com/" >
                                                <Image
                                                    alt='arrow'
                                                    src="/profile/arrow.svg"
                                                    width="11"
                                                    height="1"
                                                    className=" " />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 w-full">
                            <div>
                                <p className="text-gray-800 font-semibold text-xl">Direct Contact</p>
                            </div>
                            <div className="mt-4 w-full">
                                <div className="flex flex-row mt-4 justify-between">
                                    <p className="text-slate-400 text-lg">Email</p>
                                    <a href='mailto:hello@bestylists.com' target='_blank' className='cursor-pointer' >hello@bestylists.com</a>
                                </div>
                                <div className="flex flex-row justify-between mt-4">
                                    <p className="text-slate-400 text-lg">Phone</p>
                                    {/* <p>617.929.2245</p> */}
                                    <a href='tel:617.929.2245' target='_blank' className='cursor-pointer' >617.929.2245</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='block sm:hidden ml-5 mt-16 w-fit mb-6 bg-[#F2F2EE]  rounded-2xl cursor-pointer' onClick={() => toggleSidebar()}>
                        <div className='flex flex-row gap-[6px] px-[10px] py-4 '>
                            <div className='p-1'>
                                <Image
                                    alt='arrow'
                                    src='images/pencil.svg'
                                    width="12"
                                    height="12"
                                />
                            </div>
                            <span className='text-lg font-lato font-semibold leading-[18px] text-[#3A3A3B]' >Edit Profile</span>
                        </div>
                    </div>

                </div>

                {/* edit button */}
                <div className=' hidden sm:block absolute bottom-10 ml-5 bg-[#F2F2EE]  rounded-2xl cursor-pointer' onClick={() => toggleSidebar()}>
                    <div className='flex flex-row gap-[6px] px-[10px] py-4 '>
                        <div className='p-1'>
                            <Image
                                alt='arrow'
                                src='images/pencil.svg'
                                width="12"
                                height="12"
                            />
                        </div>
                        <span className='text-lg font-lato font-semibold leading-[18px] text-[#3A3A3B]' >Edit Profile</span>
                    </div>
                </div>

                <div
                    className={` 
        absolute z-10 right-0 top-0 bg-white text-white  w-full max-w-[863px] rounded-l-2xl
        h-full transition-all duration-700 border-l border-[#D9D9E0]
            ${isSidebarOpen ? 'translate-x-0 ' : 'translate-x-full overflow-x-auto '}
            ${isSidebarOpen ? 'block' : 'hidden overflow-x-auto '}
            `} >
                    <div className=' text-black border-r border-[#A6A6A6] h-full'>
                        <EditPortfolio isOpen={isSidebarOpen} onClose={toggleSidebar} />
                    </div>
                </div>
                {/* <div
                    className={` 
        absolute z-10 right-0 top-0 bg-white text-white  w-full max-w-[618px] 
        h-screen 
        transition-all 
        duration-700
            ${iSviruda ? 'translate-x-0' : 'translate-x-full'}
            `}

                >
                    <div className="text-black border-r border-[#A6A6A6] h-full">
                        <VirudaBeta closeViruda={closeViruda} isOpen={iSviruda} />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Portfolio