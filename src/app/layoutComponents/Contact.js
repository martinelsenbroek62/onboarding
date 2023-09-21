const Contact = () => {
  return (
    <>
      <section className="mb-[164px]">
        <div className="w-full h-full flex flex-col items-center text-center">
          <h2 className="text-[48px] text-center italic font-extralight leading-[56px] -tracking-[0.96px]  text-azure-600 font-note mb-[72px]">
            Contact Us
          </h2>
          <p className="text-4xl tablet:text-6xl font-note text-azure-500">
            If you have any questions{" "}
            <a href="mailto:hello@dayonetodayof.com" className="underline">
              please drop us a note
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
