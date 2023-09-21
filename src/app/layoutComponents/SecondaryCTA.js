import React from "react";

const SecondaryCTA = ({ handleToggleModal }) => {
  // Define a function to generate a random image URL
  const getRandomImageUrl = () => {
    const width = 200; // Set the desired width
    const height = 500; // Set the desired height
    const randomImageId = Math.floor(Math.random() * 1000); // Generate a random ID
    return `https://picsum.photos/${width}/${height}?random=${randomImageId}`;
  };

  return (
    <section className="py-8">
      <div className="container  h-full mx-auto flex flex-col sm:flex-row justify-center items-center space-x-2 lg:px-[10rem]">
        {/* Left Column */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 px-2 lg:px-[3rem] xl:px-[6rem]">
          <h2 className="text-4xl text-azure-600 mb-4 font-note font-thin ">
            The only all-in-one platform of its kind for beauty professionals{" "}
          </h2>
          <p className="text-gray-600 mb-4">
            From inquiry management to contracts to invoices and more, think of
            Do as your very own virtual assistant and CRM rolled into one. You
            can focus less on managing your business and more on showing up and
            showing off
          </p>
          <button
            onClick={handleToggleModal}
            className="bg-azure-200 hover:bg-azure-800 text-azure-900 hover:text-panther-100 px-4 py-2 rounded-full w-fit font-bold"
          >
            Join Waitlist
          </button>
        </div>

        {/* Right Column (Flexbox Columns) */}
        <div className="w-full md:w-1/2 h-[375px] sm:h-[375px] md:h-[375px] lg:h-[425px]  px-2 lg:px-0 xl:px-[4rem] py-8 my-[2rem] flex overflow-hidden ">
          {/* First Column */}
          <div className="w-1/3 mr-4 space-y-4">
            <div className="rounded-lg w-[100px] h-[150px] lg:w-[125px] lg:h-[175px] overflow-hidden">
              <img
                src={getRandomImageUrl()} // Use the random image URL
                alt="Image 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg w-[100px] h-[150px] lg:w-[125px] lg:h-[175px] overflow-hidden">
              <img
                src={getRandomImageUrl()} // Use the random image URL
                alt="Image 1"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Second Column (Centered) */}
          <div className="w-1/3 mr-4 mt-[-5rem] sm:mt-[-4rem] md:mt-[-5.5rem] lg:mt-[-6rem] xl:mt-[-6.5rem] 2xl:-[-10rem] space-y-4">
            <div className="rounded-lg w-[100px] h-[150px] lg:w-[125px] lg:h-[175px] overflow-hidden">
              <img
                src={getRandomImageUrl()} // Use the random image URL
                alt="Image 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg w-[100px] h-[150px] lg:w-[125px] lg:h-[175px] overflow-hidden">
              <img
                src={getRandomImageUrl()} // Use the random image URL
                alt="Image 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg w-[100px] h-[150px] lg:w-[125px] lg:h-[175px] overflow-hidden">
              <img
                src={getRandomImageUrl()} // Use the random image URL
                alt="Image 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Third Column (Same as Column 1) */}
          <div className="w-1/3 mr-4 space-y-4">
            <div className="rounded-lg w-[100px] h-[150px] lg:w-[125px] lg:h-[175px] overflow-hidden">
              <img
                src={getRandomImageUrl()} // Use the random image URL
                alt="Image 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg w-[100px] h-[150px] lg:w-[125px] lg:h-[175px] overflow-hidden">
              <img
                src={getRandomImageUrl()} // Use the random image URL
                alt="Image 1"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCTA;
