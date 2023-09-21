import React from "react";

const About = ({ handleToggleModal }) => {
  return (
    <section>
      <div className="w-full h-full grid grid-cols-1 desktop:grid-cols-2 items-center overflow-hidden space-y-10 tablet:gap-x-24 gap-y-16">
        {/* Left Column */}
        <div className="w-full space-y-[32px] flex flex-col justify-center items-center text-center desktop:text-left">
          <h2 className="text-[36px] tablet:text-[56px] text-azure-500 font-note font-thin leading-[52px] tablet:leading-[72px]">
            Do is the only all-in-one platform of its kind for beauty
            professionals
          </h2>
          <p className="text-azure-700 text-lg font-lato">
            From inquiry management to contracts to invoices and more, think of
            Do as your very own virtual assistant and CRM rolled into one. You
            can focus less on managing your business and more on showing up and
            showing off
          </p>
          <button
            onClick={handleToggleModal}
            className="text-xl desktop:self-start whitespace-nowrap transition-colors duration-200 font-lato flex flex-row disabled:bg-azure-100 bg-azure-200 hover:bg-azure-800 text-azure-900 hover:text-panther-100 px-9 py-4 rounded-full w-fit font-bold"
          >
            Join Waitlist
          </button>
        </div>

        {/* Right Column (Flexbox Columns) */}
        <div className="max-h-[688px] w-full flex gap-x-4 tablet:gap-x-8 justify-center items-center overflow-hidden">
          {/* First Column */}
          <div className="w-full space-y-[16px] desktop:space-y-[32px] ">
            <img
              src="https://do.mintleafmarketing.com/assets/e239e445-e6d7-4c8c-8778-f971ad23d76d?width=300&format=webp"
              alt="Image 1"
              className="object-cover rounded-xl tablet:rounded-[32px] w-full h-64 tablet:h-72"
            />

            <img
              src="https://do.mintleafmarketing.com/assets/745c5118-f63f-4875-b42a-a8b742aef5f1?width=300&format=webp"
              alt="Image 2"
              className="object-cover rounded-xl tablet:rounded-[32px] w-full h-64 tablet:h-72"
            />
          </div>

          {/* Second Column (Centered) */}
          <div className="w-full space-y-[16px] desktop:space-y-[32px] ">
            <img
              src="https://do.mintleafmarketing.com/assets/81e4c182-0de4-45e1-91bc-ea6ddf7cf440?width=300&format=webp"
              alt="Image 3"
              className="object-cover rounded-xl tablet:rounded-[32px] w-full h-64 tablet:h-72"
            />

            <img
              src="https://do.mintleafmarketing.com/assets/7dba1308-5249-47c7-9a2b-785ec7711d48?width=300&format=webp"
              alt="Image 4"
              className="object-cover rounded-xl tablet:rounded-[32px] w-full h-64 tablet:h-72"
            />
            <img
              src="https://do.mintleafmarketing.com/assets/9426ab62-fcfb-496c-9f2f-3663260f91e6?width=300&format=webp"
              alt="Image 5"
              className="object-cover rounded-xl tablet:rounded-[32px] w-full h-64 tablet:h-72"
            />
          </div>
          {/* Third Column (Same as Column 1) */}
          <div className="w-full space-y-[16px] desktop:space-y-[32px] ">
            <img
              src="https://do.mintleafmarketing.com/assets/8562fd43-9d35-4be4-9de8-4be13a054ab5?width=300&format=webp"
              alt="Image 6"
              className="object-cover rounded-xl tablet:rounded-[32px] w-full h-64 tablet:h-72"
            />

            <img
              src="https://do.mintleafmarketing.com/assets/874f5a12-1f9b-4fee-a6a5-7fc88ceb5cf5?width=300&format=webp"
              alt="Image 7"
              className="object-cover rounded-xl tablet:rounded-[32px] w-full h-64 tablet:h-72"
            />
          </div>

          {/* END COL 3 */}
        </div>
      </div>
    </section>
  );
};

export default About;
