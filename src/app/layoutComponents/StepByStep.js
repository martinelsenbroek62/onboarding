"use client";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const accordionItems = [
  {
    title: "Profile Management and Advertisement",
    description:
      "Build and customize your profile to showcase your work and attract new clients. We’ll help you create a profile that stands out and gets you noticed.",
    image:
      "https://do.mintleafmarketing.com/assets/3272b697-044f-40e4-9db6-df1ba6415a14",
    poster: "/img/reelstill2.jpg",
    loop: true,
  },
  {
    title: "Inquiry and Booking Management",
    description:
      "Say goodbye to endless back and forth emails. We’ll help you manage all your inquiries and bookings in one place, so you can focus on what you do best.",
    image:
      "https://do.mintleafmarketing.com/assets/486c0493-7e16-4d3e-8407-89fc0e9469eb",
    poster: "/img/reelstill2.jpg",
    loop: true,
  },
  {
    title: "Logistical Details",
    description:
      "We’ll help you manage all the logistical details of your event, so you can focus on what matters most.",
    image:
      "https://do.mintleafmarketing.com/assets/b836e0c3-02c7-4210-b7b4-cab2e78d5ff9",
    poster: "/img/reelstill2.jpg",
    loop: true,
  },
  {
    title: "Exclusive Promotions",
    description:
      "Gain access to various promotions, discounts and perks when you join the Do beauty pro network.",
    image:
      "https://do.mintleafmarketing.com/assets/1cb557de-83fe-4975-a984-4d5054e007ae",
    poster: "/img/reelstill2.jpg",
    loop: true,
  },
];

export default function StepByStep() {
  const [openIndex, setOpenIndex] = useState(0);
  const [heights, setHeights] = useState([]);
  const [maxHeight, setMaxHeight] = useState(0);

  const handleToggle = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  const contentRefs = useRef(accordionItems.map(() => React.createRef()));
  const videoRefs = useRef(accordionItems.map(() => React.createRef()));
  const mobileVideoRefs = useRef(accordionItems.map(() => React.createRef()));

  // Calculate max height of all items once they are mounted
  useEffect(() => {
    const newMaxHeight = Math.max(
      ...accordionItems.map(
        (_, index) => contentRefs.current[index].current.scrollHeight
      )
    );
    setMaxHeight(newMaxHeight);
  }, []);

  useEffect(() => {
    const newHeights = accordionItems.map((_, index) =>
      openIndex === index ? contentRefs.current[index].current.scrollHeight : 0
    );
    setHeights(newHeights);
  }, [openIndex]);

  useEffect(() => {
    // Pause and reset all videos
    videoRefs.current.forEach((ref, i) => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
      if (mobileVideoRefs.current[i].current) {
        mobileVideoRefs.current[i].current.pause();
        mobileVideoRefs.current[i].current.currentTime = 0;
      }
    });

    // Play the video corresponding to the current openIndex
    const currentVideo = videoRefs.current[openIndex].current;
    if (currentVideo) {
      currentVideo.play();
    }

    // Play the mobile video corresponding to the current openIndex
    const currentMobileVideo = mobileVideoRefs.current[openIndex].current;
    if (currentMobileVideo) {
      currentMobileVideo.play();
    }
  }, [openIndex]);

  return (
    <section>
      <h2 className="text-[48px] text-center italic font-extralight leading-[56px] -tracking-[0.96px]  text-azure-600 font-note mb-24">
        Key Features
      </h2>

      <div className=" w-full flex flex-col desktop:flex-row rounded-[32px] overflow-hidden h-full gap-6 min-h-[600px]">
        <div className="w-full desktop:w-1/2 flex flex-col gap-4 bg-azure-200 rounded-[32px]">
          <div className="flex flex-col desktop:gap-1 gap-px h-full">
            {accordionItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleToggle(index)}
                style={{
                  cursor: openIndex === index ? "default" : "pointer",
                  height: openIndex === index ? `100%` : "auto",
                }}
                className={`${
                  openIndex === index ? "p-8" : "p-5"
                } text-white items-start flex flex-col first:rounded-t-[32px] last:rounded-b-[32px] px-8 bg-azure-400 transition-all duration-600 relative overflow-hidden`}
              >
                <div
                  className="flex items-center text-left justify-between transition-all duration-[750ms] w-full"
                  style={{
                    opacity: openIndex === index ? 0 : 1,
                    height: openIndex === index ? "0px" : "auto",
                    overflow: "hidden",
                  }}
                >
                  <p className="font-medium">{item.title}</p>
                  <div className="p-2 flex items-center bg-vv-gray-900 rounded-full">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-white w-4 h-4"
                      style={{
                        transform:
                          openIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 750ms",
                      }}
                    />
                  </div>
                </div>
                <div
                  id={`content-${index}`}
                  ref={contentRefs.current[index]}
                  className="transition-all flex flex-col gap-2 duration-[750ms] overflow-hidden"
                  style={{
                    height: `${heights[index]}px`,
                    userSelect: "text",
                  }}
                >
                  <h3
                    className={`font-medium text-xl desktop:text-2xl text-left ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-left block mb-5"
                    style={{
                      opacity: openIndex === index ? 1 : 0,
                      transition: "opacity 750ms",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
                {item.video ? (
                  <div className="mobile-video-container rounded-xl overflow-hidden desktop:hidden w-full">
                    {" "}
                    <div
                      className="relative overflow-hidden rounded-lg desktop:rounded-[36px] shadow-md"
                      style={{
                        paddingTop: openIndex === index ? "100%" : "0",
                      }}
                    >
                      <video
                        key={index}
                        poster={item.poster}
                        loop={item?.loop}
                        muted={true}
                        autoPlay={true}
                        playsInline={true}
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        // src={`${
                        //   item.video_path
                        // }?autoplay=1&autopause=0&background=1&controls=0${
                        //   item.loop ? "&loop=1" : "&loop=0"
                        // }`}
                        allow="autoplay;"
                        title="Vue Vision"
                        style={{
                          display: openIndex === index ? "block" : "none",
                        }}
                      >
                        <source src={item.video_path} type="video/mp4" />
                      </video>
                    </div>
                    {/* <video
                        ref={mobileVideoRefs.current[index]}
                        className="w-full h-full pointer-events-none"
                        src={item.video_path}
                        poster={item.poster}
                        loop={item?.loop}
                        controls={false}
                        playsInline={true}
                        webkit-playsinline={true}
                        allowFullScreen={false}
                        muted={true}
                        style={{
                          display: openIndex === index ? "block" : "none",
                        }}
                      /> */}
                  </div>
                ) : (
                  <div className="mobile-video-container rounded-xl overflow-hidden desktop:hidden w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full pointer-events-none object-cover"
                      style={{
                        display: openIndex === index ? "block" : "none",
                      }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="relative w-full desktop:w-1/2 desktop:block hidden">
          {accordionItems.map((item, index) =>
            item.video ? (
              <div
                key={index}
                style={{ paddingBottom: "100%" }}
                className="w-full relative"
              >
                <video
                  poster={item.poster}
                  loop={item?.loop}
                  muted={true}
                  autoPlay={true}
                  playsInline={true}
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  // src={`${
                  //   item.video_path
                  // }?autoplay=1&autopause=0&background=1&controls=0${
                  //   item.loop ? "&loop=1" : "&loop=0"
                  // }`}
                  allow="autoplay;"
                  title="Vue Vision"
                  style={{
                    display: openIndex === index ? "block" : "none",
                  }}
                >
                  <source src={item.video_path} type="video/mp4" />
                </video>
              </div>
            ) : (
              <img
                key={index}
                src={item.image}
                alt={item.title}
                className="w-full h-full pointer-events-none rounded-[32px] object-cover"
                style={{
                  display: openIndex === index ? "block" : "none",
                }}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
