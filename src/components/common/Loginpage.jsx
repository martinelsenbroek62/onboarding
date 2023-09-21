"use client"

import React, { useState } from 'react'
import CustomInput from './CustomInput'
import Image from 'next/image';
import { FaRegEye } from "react-icons/fa";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Loginpage = ({ handleSingup, csrfToken }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    const [eyeClose, setEyeClose] = useState(false)
    const { data: session } = useSession();
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await signIn('credentials', {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
            callbackUrl: `/dashboard`,
        });

        if (res?.error) {
            setErrors(true);
        } else {
            router.push('/dashboard');
        }

    }

    const handleBlurusername = () => { };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Validation logic (you can adjust this to your specific requirements)
        if (name === 'email') {
            if (!value || !/\S+@\S+\.\S+/.test(value)) {
                setErrors({
                    ...errors,
                    email: 'Invalid email address',
                });
            } else {
                setErrors({
                    ...errors,
                    email: '',
                });
            }
        } else if (name === 'password') {
            if (!value) {
                setErrors({
                    ...errors,
                    password: 'Password is required',
                });
            } else {
                setErrors({
                    ...errors,
                    password: '',
                });
            }
        }
    };


    const sinupForm = () => {
        handleSingup();
    };

    return (
        <>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="hidden" name="csrfTokan" defaultValue={csrfToken} />
                <div className='flex flex-col justify-center gap-6 border px-8 rounded-2xl pb-8 mb-6 mx-4 desktop:mb-0 desktop:mx-0 font-lato   '>
                    <div className='flex items-center justify-center border-b border-creme desktop:w-[400px]'>
                        <span className=' py-4 text-[#3A3A3B] text-base font-medium leading-[22px] ' >Log in or Sign Up</span>
                    </div>
                    <div className=''>
                        <span className='text-[#3A3A3B] text-lg font-bold leading-[140%] '>Welcome to Do</span>
                    </div>

                    <div className=' flex flex-col gap-3'>
                        <label htmlFor="EmailFor" className='text-[#4B5563] text-base font-medium leading-[22px]  cursor-pointer '>Email</label>
                        <div>
                            <CustomInput type="text" name="email" id="EmailFor" placeholder="enter email" handleChange={(e) => handleInputChange(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value={formData.email}
                            />
                        </div>
                        {errors.email && <span className="text-red-500">{errors.email}</span>}

                    </div>
                    <div className='flex flex-col gap-3 relative'>
                        <label htmlFor="PasswordFor" className='text-[#4B5563] text-base font-medium leading-[22px]  cursor-pointer'>Password</label>
                        <CustomInput type={eyeClose ? "text" : "password"} name="password" id="PasswordFor" placeholder="enter new password" handleChange={(e) => handleInputChange(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value={formData.password} />
                        {eyeClose ? <Image src="/images/EyeClose.svg"
                            alt='Anna'
                            width="22"
                            height="22"
                            className=' px-1 py-[6px] absolute top-[45px] right-[16px] '
                            onClick={() => setEyeClose(false)}
                        /> : <FaRegEye className=' w-[22px] h-[22px] px-1 py-[6px] absolute top-[45px] right-[16px]' onClick={() => setEyeClose(true)} />}
                    </div>
                    {errors.password && <span className="text-red-500">{errors.password}</span>}

                    <button className='w-full bg-[#A1ACAD] py-[10px] px-9 rounded text-panther-50 text-base font-bold leading-4' type='submit'
                    >
                        Continue
                    </button>

                    <div className='flex items-center justify-center'>
                        <div className='bg-creme h-[1px] flex-[1_0_0] '></div>
                        <span className=' px-6 text-sm font-normal leading-[17px] text-[#A1ADAE] '>or</span>
                        <div className='bg-creme h-[1px] flex-[1_0_0] '></div>
                    </div>

                    <div className='flex items-center justify-center gap-[6px] w-full py-[10px] px-9 rounded self-stretch border border-creme cursor-pointer'
                        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                    >
                       <Image src="/images/Google.svg"
                            alt='Anna'
                            width="12"
                            height="12"
                        />
                        <span className='text-[#3A3A3B] text-base font-bold leading-4 p-1 '>Continue with Google</span>
                    </div>
                    <div
                        onClick={() => sinupForm()}
                        className='flex items-center justify-center gap-[6px] w-full py-[10px] px-9 rounded self-stretch border border-creme cursor-pointer '>
                        <Image src="/images/Email.svg"
                            alt='Anna'
                            width="12"
                            height="9"
                        />
                        <span className='text-[#3A3A3B] text-base font-bold leading-4 cursor-pointer '  >Continue with email</span>
                    </div>

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

export default Loginpage