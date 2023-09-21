import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Overview = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            router.push('/home');
        }
    };

    const handleSkip = () => {
        router.push('/dashboard');
    };

    const { data: session, status } = useSession({
        required:true,
        onUnauthenticated() {
          router.push('/dashboard/login');
        }
      });
    
      if (status !== 'authenticated') return null;
    

    return (
        <div className=" h-screen w-full relative ">
            {/* Step Indicator */}
            <div className="flex flex-col items-center justify-between sm:h-full w-full gap-32  " >
                <div className="flex flex-col items-center justify-between pt-[56px] w-full " >
                    <div className="flex  items-center justify-center gap-4 sm:gap-6 mb-4   ">
                        <div className={`step h-1 w-12 xxs:w-[55px] sm:w-[120px] lg:w-[220px]  ${step >= 1 ? 'active bg-[#A1ADAE]' : 'bg-[#F2F2EE]'}`}></div>
                        <div className={`step h-1 w-12 xxs:w-[55px] sm:w-[120px] lg:w-[220px] ${step >= 2 ? 'active bg-[#A1ADAE]' : 'bg-[#F2F2EE]'}`}></div>
                        <div className={`step h-1 w-12 xxs:w-[55px] sm:w-[120px] lg:w-[220px] ${step >= 3 ? 'active bg-[#A1ADAE]' : 'bg-[#F2F2EE]'}`}></div>
                        <div className={`step h-1 w-12 xxs:w-[55px] sm:w-[120px] lg:w-[220px] ${step === 4 ? 'active bg-[#A1ADAE]' : 'bg-[#F2F2EE]'}`}></div>
                    </div>

                    <div className=" w-full flex flex-col md:flex-row justify-between gap-6 mt-10">
                        <div className="inline-flex items-start font-lato ml-8 ">
                            {step === 1 && <div className="xl:!w-[675px]  ">
                                <span className=" text-[#3A3A3B] md:text-[64px] md:font-extralight md:leading-[72px] letterSpacing-tightest  font-bold text-2xl leading-[33px] ">  Here’s a brief overview of how “Do” works</span>
                            </div>}
                            {step === 2 && <div className=" xl:w-[504px]">
                                <span className=" text-[#3A3A3B] md:text-[64px]  md:font-extralight md:leading-[72px] letterSpacing-tightest  font-bold text-2xl leading-[33px] ">Sign up and create
                                    an account</span>
                            </div>}
                            {step === 3 && <div className="xl:w-[612px]">
                                <span className=" text-[#3A3A3B] md:text-[64px]  md:font-extralight md:leading-[72px] letterSpacing-tightest font-bold text-2xl leading-[33px] ">Create and customize
                                    your business portfolio</span>
                            </div>}
                            {step === 4 && <div className="xl:w-[625px]">
                                <span className=" text-[#3A3A3B] md:text-[64px]  md:font-extralight md:leading-[72px] letterSpacing-tightest font-bold text-2xl leading-[33px] ">Once you’re ready to publish your portfolio on Do.com, sign up for a premium account</span>
                            </div>}
                        </div>
                        <div className="flex items-center justify-center md:justify-end">
                            {step === 1 && <div className="sm:w-[880px] sm:h-[695px] w-[280px] h-[238px] ">
                                
                                {/* <StepOne /> */}
                            </div>}
                            {step === 2 && <div>
                                <Image src="/images/ProductFrame.png"
                                    alt='Anna'
                                    width="880"
                                    height="695"
                                    className=' hidden md:block '
                                />
                                <Image src="/images/ProductFrameM.svg"
                                    alt='Anna'
                                    width="359"
                                    height="238"
                                    className=' block md:hidden '
                                />
                                {/* <StepTwo /> */}
                            </div>}
                            {step === 3 && <div>
                                <Image src="/images/ProductFrame1.png"
                                    alt='Anna'
                                    width="880"
                                    height="695"
                                    className='hidden md:block '
                                />
                                <Image src="/images/ProductFrameM1.svg"
                                    alt='Anna'
                                    width="359"
                                    height="238"
                                    className=' block md:hidden'
                                />
                                {/* <StepThree />  */}
                            </div>}
                            {step === 4 && <div>
                                <Image src="/images/ProductFrame2.png"
                                    alt='Anna'
                                    width="880"
                                    height="695"
                                    className=' hidden md:block'
                                />
                                <Image src="/images/ProductFrameM2.svg"
                                    alt='Anna'
                                    width="359"
                                    height="238"
                                    className='block md:hidden '
                                />
                                {/* <StepFour />  */}
                            </div>}
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-5 xxs:gap-12 pb-12 mt-28 sm:mt-0 absolute bottom-0  ">
                    {/* {step > 1 && (
                        <button
                            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
                            onClick={() => setStep(step - 1)}
                        >
                            Previous
                        </button>
                    )} */}
                    <button
                        className=" py-[10px] px-9 rounded border border-[#D9D9E0] text-base font-semibold leading-4 text-[#313136] "
                        onClick={handleSkip}
                    >
                        Skip
                    </button>
                    {step < 4 ? (
                        <button
                            className="py-[10px] px-9 rounded bg-[#A1AcAD] text-base font-semibold leading-4 text-[#F7F7FC] !font-lato "
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={handleSkip}
                            className="py-[10px] px-9 rounded bg-[#A1AcAD] text-base font-semibold leading-4 text-[#F7F7FC] "
                        >
                            Done
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Overview;
