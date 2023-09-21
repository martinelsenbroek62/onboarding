const HowItWorks = () => {
  return (
    <section>
      <div className="w-full h-full flex flex-col justify-center items-center tablet:space-y-[72px]">
        <h2 className="text-[48px] italic font-extralight leading-[56px] -tracking-[0.96px]  text-azure-600 font-note mb-[3rem] tablet:mb-0 ">
          How it Works
        </h2>

        {/* section 1 */}

        <div className="flex flex-col-reverse desktop:flex-row tablet:gap-x-24">
          {/* images container */}
          <div className="desktop:w-3/5 flex justify-center items-center gap-x-8">
            {/* col A */}
            <div className="w-1/2 h-full desktop:max-w-[398px] desktop:w-full desktop:h-[688px] flex justify-center items-center">
              <img
                className="w-full h-[400px] tablet:h-[550px] rounded-l-[32px] object-cover"
                src="https://do.mintleafmarketing.com/assets/a47e76cf-d2e8-4805-9049-711f47bf22e9?format=webp"
              />
            </div>
            {/* col b */}
            <div className="w-1/2 h-full flex flex-col tablet:justify-between items-center gap-8 desktop:min-w-[200px]">
              <img
                className="w-full h-[250px] tablet:h-1/2 rounded-r-[32px] object-cover"
                src="https://do.mintleafmarketing.com/assets/084585b8-3e19-449b-a048-a0c74c2a44f5?format=webp"
              />
              <img
                className="w-full h-[250px] tablet:h-1/2 rounded-r-[32px] rounded-br-[32px] object-cover"
                src="https://do.mintleafmarketing.com/assets/810ae719-ec8b-41ce-9ce0-b7543aaae3a1?format=webp"
              />
            </div>
          </div>
          {/* Text container */}
          <div className="desktop:w-2/5 flex flex-col justify-center items-center desktop:items-start text-center desktop:text-left gap-6 mb-[4rem] desktop:mb-0">
            <h2 className=" text-azure-500 font-note text-[48px] font-extralight leading-[56px] -tracking-[0.96px]">
              Get discovered by brides through our beauty pro network
            </h2>
            <p className="text-azure-700 text-lg font-normal leading-[28px]">
              Do prides itself on creating a robust and impressive network of
              beauty professionals ready to meet your unique needs.
            </p>
          </div>
        </div>
        {/* arrow */}
        <div className="flex justify-center items-center">
          <img
            className="w-24 h-full tablet:w-[181px] px-4 py-16"
            src="/Vector.svg"
          />
        </div>
        {/* end section 1 */}

        {/* section 2 */}

        <div className="flex flex-col desktop:flex-row desktop:space-x-[96px]">
          {/* Text container */}
          <div className="desktop:w-2/5 flex flex-col justify-center items-center desktop:items-start text-center desktop:text-left gap-6 mb-[4rem] desktop:mb-0">
            <h2 className=" text-azure-500 font-note text-[48px] font-extralight leading-[56px] -tracking-[0.96px]">
              Brides inquire about working with you
            </h2>
            <p className="text-azure-700 text-lg font-normal leading-[28px]">
              When a bride inquires about working with you, our team will
              automatically reply with your pricing guide and within 48 hours
              will provide next steps based upon your availability and interest.
            </p>
          </div>
          {/* images container */}
          <div className="desktop:w-3/5 flex justify-center items-center gap-x-8">
            {/* col A */}
            <div className="w-1/2 h-full desktop:max-w-[398px] desktop:w-full desktop:h-[688px] flex justify-center items-center">
              <img
                className="w-full h-[400px] tablet:h-[550px] rounded-l-[32px] object-cover"
                src="https://do.mintleafmarketing.com/assets/c6bb80ad-5b2f-4b9d-a78b-1b785431224e?format=webp"
              />
            </div>
            {/* col b */}
            <div className="w-1/2 h-full flex flex-col tablet:justify-between items-center gap-8 desktop:min-w-[200px]">
              <img
                className="w-full h-[250px] tablet:h-1/2 rounded-r-[32px] object-cover"
                src="https://do.mintleafmarketing.com/assets/497b4692-8b68-494f-83e2-37b64a1cca4a?width=500&format=webp"
              />
              <img
                className="w-full h-[250px] tablet:h-1/2 rounded-r-[32px] rounded-br-[32px] object-cover"
                src="https://do.mintleafmarketing.com/assets/0a14b255-cc2c-440f-82a8-7910462a4d9b?width=500&format=webp"
              />
            </div>
          </div>
        </div>
        {/* arrow */}
        <div className="flex justify-center items-center">
          <img
            className="w-24 h-full tablet:w-[181px] px-4 py-16"
            src="/Vector.svg"
          />
        </div>

        {/* end section 2 */}

        {/* section 3 */}

        <div className="flex flex-col-reverse desktop:flex-row tablet:gap-x-24">
          {/* images container */}
          <div className="desktop:w-3/5 flex justify-center items-center gap-x-8">
            {/* col a */}
            <div className="w-1/2 h-full flex flex-col tablet:justify-between items-center gap-8 desktop:min-w-[200px]">
              <img
                className="w-full h-[250px] tablet:h-1/2 rounded-l-[32px] object-cover"
                src="https://do.mintleafmarketing.com/assets/550e37be-7dab-43a5-8019-f1fea85881d2?width=500&format=webp"
              />
              <img
                className="w-full h-[250px] tablet:h-1/2 rounded-l-[32px] object-cover"
                src="https://do.mintleafmarketing.com/assets/0f080063-21a7-4045-87d1-0ffd810fc8cb?width=500&format=webp"
              />
            </div>
            {/* col b */}
            <div className="w-1/2 h-full desktop:max-w-[398px] desktop:w-full desktop:h-[688px] flex justify-center items-center">
              <img
                className="w-full h-[400px] tablet:h-[550px] rounded-r-[32px] object-cover"
                src="https://do.mintleafmarketing.com/assets/a37ecd24-caae-4f4c-977e-710e2e6d9fe4?format=webp&width=800"
              />
            </div>
          </div>
          {/* Text container */}
          <div className="desktop:w-2/5 flex flex-col justify-center items-center desktop:items-start text-center desktop:text-left gap-6  mb-[4rem] desktop:mb-0">
            <h2 className=" text-azure-500 font-note text-[48px] font-extralight leading-[56px] -tracking-[0.96px]">
              Contract Booked
            </h2>
            <p className="text-azure-700 text-lg font-normal leading-[28px]">
              Our team will send a contract to the bride who is ready to book
              and answer any questions they may have.
            </p>
          </div>
        </div>
        {/* arrow */}
        <div className="flex justify-center items-center">
          <img
            className="w-24 h-full tablet:w-[181px] px-4 py-16"
            src="/Vector.svg"
          />
        </div>
        {/* end section 3 */}

        {/* section 4 */}

        <div className="flex desktop:flex-row flex-col tablet:gap-x-24">
          {/* Text container */}
          <div className="desktop:w-2/5 flex flex-col justify-center items-center desktop:items-start text-center desktop:text-left gap-6  mb-[4rem] desktop:mb-0">
            <h2 className=" text-azure-500 font-note text-[48px] font-extralight leading-[56px] -tracking-[0.96px]">
              Sit back and breathe a sigh of relief{" "}
            </h2>
            <p className="text-azure-700 text-lg font-normal leading-[28px]">
              Our team of specialists will handle all the logistical details and
              communications from day one to day of.
            </p>
          </div>
          {/* images container */}
          <div className="desktop:w-3/5 h-full flex justify-center gap-8 items-stretch mb-16 max-h-[688px]">
            {/* col A */}
            <div className="w-3/5 h-auto flex flex-col justify-center items-center gap-8">
              <img
                className="rounded-tl-[32px] object-cover h-full w-full"
                src="https://do.mintleafmarketing.com/assets/cd051461-1da1-43a3-a4af-faf2295bcb2f?format=webp"
              />
              <img
                className="rounded-bl-[32px] object-cover h-full w-full"
                src="https://do.mintleafmarketing.com/assets/c8eb238e-ac7f-4d25-9796-5094e7957953?width=500&format=webp"
              />
            </div>
            {/* col b */}
            <div className="w-2/5 h-auto flex flex-col gap-8 self-stretch">
              <img
                className="rounded-tr-[32px] object-cover h-[calc(50%-1rem)] w-full"
                src="https://do.mintleafmarketing.com/assets/6e0a60e4-5a79-4382-bd9b-ba4c172c9fd1?width=500&format=webp"
              />
              <img
                className="rounded-br-[32px] object-cover h-[calc(50%-1rem)] w-full"
                src="https://do.mintleafmarketing.com/assets/ceaca4fd-4ba0-4b6b-b5c2-885b07db3e59?width=500&format=webp"
              />
            </div>
          </div>
        </div>

        {/* end section 4 */}
      </div>
    </section>
  );
};

export default HowItWorks;
