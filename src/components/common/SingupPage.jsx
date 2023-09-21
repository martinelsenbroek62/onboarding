import React, { useState } from 'react'
import CustomInput from './CustomInput'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { FaRegEye } from "react-icons/fa";
import { getCsrfToken, signIn } from 'next-auth/react';
import { createDirectus, createUser, rest } from '@directus/sdk';

const SingupPage = ({ handleSingupClose, csrfToken }) => {
    const router = useRouter();
    const [eyeClose, setEyeClose] = useState(false)
    const GoTOBack = () => {
        handleSingupClose();
    };


    const handleOverview = () => {
        router.push('/dashboard/overview');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const client = createDirectus(process.env.DIRECTUS_PROJECT_URL).with(rest());
        const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_PROJECT_URL).with(rest());

        const result = await client.request(createUser({
            email: e.target.email.value,
            password: e.target.password.value,
            first_name: e.target.firstName.value,
            last_name: e.target.lastName.value,
            role: "6394b88f-ce36-424e-b602-ea6b74ffe7c0"
        }));
    }

    return (
        <>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="hidden" name="csrfTokan" defaultValue={csrfToken} />
                <div className='flex flex-col justify-center gap-6 border px-8 rounded-2xl pb-8 mb-6 mx-4 desktop:mb-0 desktop:mx-0 font-lato  '>
                    <div className='flex relative items-center justify-center border-b border-creme desktop:w-[400px]'>
                        <Image src="/images/RightArrow.svg"
                            alt='Anna'
                            width="8"
                            height="14"
                            className='absolute left-0 sm:left-[10px] cursor-pointer  '
                            onClick={() => GoTOBack()}
                        />
                        <span className=' py-4 text-[#3A3A3B] text-base font-medium leading-[22px] ' >Create New Account</span>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <label htmlFor="fristFor" className='text-[#4B5563] text-base font-medium leading-[22px]  cursor-pointer '>First Name</label>
                        <div>
                            <CustomInput type="text" name="firstName" id="fristFor" placeholder="enter frist name" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
                        </div>

                    </div>
                    <div className=' flex flex-col gap-3'>
                        <label htmlFor="lastFor" className='text-[#4B5563] text-base font-medium leading-[22px]  cursor-pointer '>Last Name</label>
                        <div>
                            <CustomInput type="text" name="lastName"
                                value=''
                                id="lastFor" placeholder="enter last name"
                                handleChange={(e) => handleSignUpForm(e)}
                                handleblur={(e) => handleBlurusername(e)}
                                onblurshow={true}
                            />
                        </div>

                    </div>
                    <div className=' flex flex-col gap-3'>
                        <label htmlFor="EmailFor" className='text-[#4B5563] text-base font-medium leading-[22px]  cursor-pointer '>Email</label>
                        <div>
                            <CustomInput type="text" name="email" id="EmailFor" placeholder="enter email" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
                        </div>

                    </div>
                    <div className='flex flex-col gap-3 relative '>
                        <label htmlFor="PasswordFor" className='text-[#4B5563] text-base font-medium leading-[22px]  cursor-pointer'>Password</label>

                        <CustomInput type={eyeClose ? "text" : "password"} name="password" id="PasswordFor" placeholder="enter new password" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />

                        {eyeClose ? <Image src="/images/EyeClose.svg"
                            alt='Anna'
                            width="22"
                            height="22"
                            className=' px-1 py-[6px] absolute top-[45px] right-[16px] '
                            onClick={() => setEyeClose(false)}
                        /> : <FaRegEye className=' w-[22px] h-[22px] px-1 py-[6px] absolute top-[45px] right-[16px]' onClick={() => setEyeClose(true)} />}
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='desktop:w-[400px] text-[#3A3A3B] text-base font-medium leading-5 '>By selecting <span className='font-bold text-[#3A3A3B] '> agree and continue,</span> I agree to Do’s <span className='font-medium underline text-[#A1ADAE] cursor-pointer '> Terms of service </span> and <span className='font-medium underline text-[#A1ADAE] cursor-pointer '> Privacy Policy </span> </div>
                    </div>

                    <button type='submit'
                        // onClick={() => handleOverview()}
                        className='flex items-center justify-center gap-[6px] w-full py-[10px] px-9 rounded self-stretch border border-creme bg-azure-500 cursor-pointer'>
                        <span className='text-[#F7F7FC] text-lg  font-semibold leading-[18px]  '>Agree and Continue</span>
                    </button>

                </div>
            </form>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}

export default SingupPage