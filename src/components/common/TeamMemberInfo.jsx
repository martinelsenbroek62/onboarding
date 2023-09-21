import React from 'react'
import CustomInput from './CustomInput'

const TeamMemberInfo = () => {
    return (
        <>
            <div className='py-8 border-b border-[#E5E7EB] '>
                <div>
                    <div className='px-6 py-3 w-full border-b border-[#E5E7EB] '>
                        <span className='text-lg text-[#1F2937] font-bold leading-[140%] '>Info</span>
                    </div>
                    <div className='px-6 py-8 w-full  flex items-center justify-between gap-3 '>
                        <div className='flex items-center gap-6 w-1/2'>
                            <label htmlFor="fristName" className='text-panther-800 text-base font-lato font-medium leading-5 w-28 '>First Name</label>
                            <CustomInput type="text" name="fristName" id="fristName" placeholder="click to First Name" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
                        </div>
                        <div className='flex items-center gap-6 w-1/2'>
                            <label htmlFor="lastName" className='text-panther-800 text-base font-lato font-medium leading-5 w-28 '>Last Name</label>
                            <CustomInput type="text" name="lastName" id="lastName" placeholder="click to Last Name" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='px-6 py-3 w-full border-b border-[#E5E7EB] '>
                        <span className='text-lg text-[#1F2937] font-bold leading-[140%] '>Socials</span>
                    </div>
                    <div className='px-6 py-8 w-full flex items-center justify-between gap-3 '>
                        <div className='flex items-center gap-6 w-1/2'>
                            <label htmlFor="Instagram" className='text-panther-800 text-base font-lato font-medium leading-5 w-28 '>Instagram</label>
                            <CustomInput type="text" name="Instagram" id="Instagram" placeholder="click to add instagram" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
                        </div>
                        <div className='flex items-center gap-6 w-1/2'>
                            <label htmlFor="Website" className='text-panther-800 text-base font-lato font-medium leading-5 w-28 '>Website</label>
                            <CustomInput type="text" name="Website" id="Website" placeholder="click to add Website" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMemberInfo