const TertiaryCTA = ({ handleToggleModal }) => {
  return (
    <>
      <section>
        <div className="w-full h-full flex flex-col-reverse desktop:flex-row items-center gap-24">
          <img
            src="https://do.mintleafmarketing.com/assets/aa541411-1e58-4282-9023-bfb32e974181?format=webp&width=1200" // Placeholder image URL
            alt="Large Image"
            className="rounded-xl object-cover w-full desktop:w-1/2 h-[350px] tablet:h-[450px] desktop:h-[600px]"
          />
          <div className="flex desktop:w-1/2 flex-col justify-center gap-6 text-center desktop:max-w-[457px]">
            <h2 className="text-azure-500 text-[36px] tablet:text-[56px] font-note font-thin leading-[52px] tablet:leading-[72px]">
              A virtual assistant and CRM rolled in one
            </h2>
            <p className="text-azure-700 text-lg font-lato">
              From inquiry management to contracts to invoices and more
            </p>
            <button
              onClick={handleToggleModal}
              className="text-xl self-center mx-auto whitespace-nowrap transition-colors duration-200 font-lato flex flex-row disabled:bg-azure-100 bg-azure-200 hover:bg-azure-800 text-azure-900 hover:text-panther-100 px-9 py-4 rounded-full w-fit font-bold"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TertiaryCTA;
