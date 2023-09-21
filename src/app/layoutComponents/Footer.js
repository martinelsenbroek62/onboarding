import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="w-full py-16 bg-azure-400 text-white font-lato">
        <div className="w-full flex flex-col max-w-[1264px] mx-auto px-8">
          <div className="w-full flex flex-col tablet:flex-row justify-between items-center gap-8">
            <img src="/logo.svg" alt="logo" className="h-16 block" />
            <div className="flex flex-col justify-center items-start gap-4">
              <p className="font-bold text-lg">Are you a Beauty Pro?</p>
              <p>learn more about joining our network</p>
              <a
                href="mailto:hello@dayonetodayof.com"
                className="hover:text-azure-700"
              >
                Contact Us
                <span className="inline text-xl">&nbsp; &nbsp; &#8594;</span>
              </a>
            </div>
          </div>
          <span className="h-[1px] bg-white my-8"></span>
          <div className="w-full flex flex-col tablet:flex-row justify-between items-center gap-8">
            <p className="text-center tablet:text-left">
              &copy; {new Date().getFullYear()} Do Inc. All rights reserved.
              Copy by{" "}
              <a
                href="https://blossomcopy.com/"
                target="_blank"
                className="underline tex-white text-azure-400"
              >
                Blossom
              </a>
            </p>
            <div className="flex justify-betwen items-center gap-x-4">
              <a
                href="https://www.instagram.com/thedonetwork/"
                target="_blank"
                className="hover:text-azure-700 text-white"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-4 h-4 p-1 rounded-md inline"
                />
              </a>
              <a
                href="https://www.facebook.com/thedonetwork/"
                target="_blank"
                className="hover:text-azure-700 text-white"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-4 h-4 p-1 rounded-md inline"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
