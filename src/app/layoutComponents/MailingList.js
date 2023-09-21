"use client";
import toast, { Toaster } from "react-hot-toast";
import React, { useRef, useState } from "react";

const MailingList = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();

    // disable the button using React state
    setButtonDisabled(true);

    const email = inputRef.current.value;

    if (!email) {
      toast.error("Please enter an email address.");
      setButtonDisabled(false);
      return;
    }

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    try {
      const json = await res.json();
      if (json.error) {
        toast.error(json.error);
      } else {
        inputRef.current.value = "";
        toast.success(
          "Thanks for signing up! Keep an eye on your inbox for news and updates."
        );
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }

    // re-enable the button using React state
    setButtonDisabled(false);
  };

  return (
    <>
      <div className="text-panther-500 text-base tablet:text-2xl flex flex-col gap-4 mt-12 max-w-[618px] mx-auto">
        <div className="flex flex-col tablet:flex-row justify-between items-start gap-x-10">
          <div className="flex flex-col tablet:flex-row gap-4 w-full mt-4 tablet:mt-0">
            <input
              ref={inputRef}
              type="email"
              name="email"
              id="email"
              className="border-azure-300 border-[1px] rounded-md h-12 px-4 py-2 w-full placeholder:text-azure-300"
              placeholder="Enter Email"
            />
            <button
              ref={buttonRef}
              type="submit"
              onClick={subscribe}
              disabled={isButtonDisabled}
              className="h-12 text-xl justify-center self-start items-center whitespace-nowrap transition-colors duration-200 font-lato flex flex-row disabled:bg-azure-100 bg-azure-200 hover:bg-azure-800 text-azure-900 hover:text-panther-100 px-9 py-4 rounded-full w-full tablet:w-fit font-bold"
            >
              {!isButtonDisabled ? (
                `Join Waitlist`
              ) : (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 self-center text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ccc"
                      className="fa-primary"
                      d="M224 32c0-17.7 14.3-32 32-32C397.4 0 512 114.6 512 256c0 46.6-12.5 90.4-34.3 128c-8.8 15.3-28.4 20.5-43.7 11.7s-20.5-28.4-11.7-43.7c16.3-28.2 25.7-61 25.7-96c0-106-86-192-192-192c-17.7 0-32-14.3-32-32z"
                    />
                    <path
                      fill="#fff"
                      className="fa-secondary"
                      d="M256 64C150 64 64 150 64 256s86 192 192 192c70.1 0 131.3-37.5 164.9-93.6l.1 .1c-6.9 14.9-1.5 32.8 13 41.2c15.3 8.9 34.9 3.6 43.7-11.7c.2-.3 .4-.6 .5-.9l0 0C434.1 460.1 351.1 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                    />
                  </svg>{" "}
                  Loading...
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default MailingList;
