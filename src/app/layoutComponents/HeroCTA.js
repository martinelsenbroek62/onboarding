const HeroCTA = ({ handleToggleModal }) => {
  return (
    <section className="w-full mt-16">
      <div className="w-full h-full min-h-[400px] tablet:min-h-[621px] relative rounded-[32px] flex items-center justify-center text-center bg-[url('/doHero.png')]  bg-cover bg-left">
        <div className="w-full h-full py-4 px-8 flex-col justify-center items-center text-center space-y-4">
          <small className="text-white text-lg font-lato tablet:text-xl font-normal leading-7">
            Coming Fall 2023
          </small>
          <h1 className="w-full text-white text-4xl tablet:text-[56px] font-note">
            From Day One to Day Of
          </h1>
          <p className="text-xl font-lato px-2 text-center text-azure-100">
            The all-in-one platform connecting brides and beauty pros
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
  );
};

export default HeroCTA;
