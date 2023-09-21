const HypeSection = () => {
  return (
    <>
      <section>
        <div className="w-full h-full flex flex-col items-center gap-6 tablet:gap-24">
          <h2 className="text-[48px] text-center italic font-extralight leading-[56px] -tracking-[0.96px]  text-azure-600 font-note mb-[3rem] tablet:mb-0 ">
            With Do on your team, get ready for...
          </h2>
          <div className="flex flex-col tablet:flex-row justify-center items-center font-lato gap-24 w-full">
            <div className="flex tablet:w-2/5 justify-center items-center">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="tablet:max-w-[394px] px-8 flex gap-4 flex-col justify-center items-center text-azure-700 text-center">
                  <img src="/star.svg" alt="check" className="w-4 h-4" />
                  <h3 className="font-semibold text-xl text-azure-500">
                    More Time
                  </h3>
                  <p>
                    Get off the wedding beauty hamster wheel and back to what
                    you actually enjoy.
                  </p>
                  <img src="/star.svg" alt="check" className="w-4 h-4" />
                  <h3 className="font-semibold text-xl text-azure-500">
                    More Clarity
                  </h3>
                  <p>
                    Ditch the messy inbox and scattered DMs with all your
                    communication in one place.
                  </p>
                  <img src="/star.svg" alt="check" className="w-4 h-4" />
                  <h3 className="font-semibold text-xl text-azure-500">
                    More Confidence
                  </h3>
                  <p>
                    Rest easy knowing your bridges are taken care of each step
                    of the way
                  </p>
                </div>
              </div>
            </div>
            <div className="tablet:w-3/5 rounded-xl h-[350px] tablet:h-[450px] desktop:h-[600px] overflow-hidden">
              <img
                src="https://do.mintleafmarketing.com/assets/bacec3ee-d96d-4e69-b06f-741e41392817?format=webp&width=800"
                alt="Large Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HypeSection;
