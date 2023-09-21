"use client";
import React, { useState, useEffect, useRef } from "react";
import "flickity/css/flickity.css";

let Flickity;

export default function Slider({ media }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  let elemRef = useRef();
  let flkty = useRef();

  useEffect(() => {
    // Dynamic import for Flickity
    import("flickity").then((FlickityModule) => {
      Flickity = FlickityModule.default;
      // Initialize Flickity after it has been imported
      flkty.current = new Flickity(elemRef.current, {
        pageDots: true,
        prevNextButtons: false,
        cellAlign: "left",
      });

      // Attach resize event listener
      window.addEventListener("resize", () => {
        flkty.current.resize();
      });

      // Cleanup
      return () => {
        window.removeEventListener("resize", () => {
          flkty.current.resize();
        });
      };
    });
  }, []);

  function next() {
    flkty.current.next();
  }

  function prev() {
    flkty.current.previous();
  }

  // get current slide
  useEffect(() => {
    if (!flkty.current) return;
    function updateCurrentSlide() {
      setCurrentSlide(flkty.current.selectedIndex);
    }
    flkty.current.on("change", updateCurrentSlide);
    return () => flkty.current.off("change", updateCurrentSlide);
  }, []);

  return (
    <div ref={elemRef} className="w-full mt-[5rem] tablet:mt-0 min-h-[360px]">
      {media?.map((item, index) => (
        <div
          key={index}
          className="slide flex flex-col tablet:flex-row gap-12 w-full tablet:w-[80%] tablet:mr-12"
        >
          <img
            className="object-cover object-top w-full tablet:w-[300px] tablet:h-[300px] max-h-[300px] rounded-[32px]"
            src={`${item.image}`}
          />
          <div className="h-auto w-full flex flex-col justify-between gap-8 font-lato">
            <p className="text-panther-500 text-xl">{item.description}</p>
            <div>
              <h2 className="text-azure-800 text-3xl font-bold">
                {item.author}
              </h2>
              {/* <p className="text-panther-500 text-xl font-bold mt-3">
                {item.title}
              </p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
