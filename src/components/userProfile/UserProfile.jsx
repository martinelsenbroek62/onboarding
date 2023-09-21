import React, { useState } from 'react'
import CustomInput from '../common/CustomInput'
import Image from 'next/image';

const UserProfile = () => {
  const [avatar, setAvatar] = useState([]);

  const handleAvatarChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <>
      <div className='overflow-auto h-[90vh]'>
        <div className=' ml-4 sm:ml-72 py-12 px-3 w-[280px] xs:w-[350px] sm:w-[462px] font-lato flex flex-col  justify-center gap-16   '>
          <div className='flex flex-col  justify-center gap-8'>
            <div className='flex flex-col items-start justify-center gap-[8px] ' >
              <span className='text-lg font-medium leading-6 text-[#616161]'>Personal Info</span>
              <span className='text-base font-medium leading-5 text-panther-300 '>This information is not public and is for account purposes only</span>
            </div>

            <div className='flex items-center justify-center gap-8'>
              <div className='flex flex-col items-start gap-3 w-full   '>
                <label htmlFor="firstName" className='text-panther-900 font-lato text-base font-medium leading-5  ' >First Name</label>

                <CustomInput type="text" name="firstName" id="firstName" placeholder="Click to add firstName" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
              </div>
              <div className='flex flex-col items-start gap-3 w-full  '>
                <label htmlFor="lastName" className='text-[#616161] font-lato text-base font-medium leading-5  ' >Last Name</label>

                <CustomInput type="text" name="lastName" id="lastName" placeholder="Click to add lastName" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
              </div>
            </div>

            <div className='flex flex-col items-start gap-3 w-full  '>
              <label htmlFor="" className='text-panther-900 font-lato text-base font-medium leading-5  '>Avatar</label>
              <div className='flex items-center gap-4'>
                <div className='bg-[#E5E7EB] rounded-full h-[30px] w-[30px] flex items-center justify-center'>

                  {avatar?.name?.length > 0 ?  <img src={URL.createObjectURL(avatar)}
                    alt='Anna'
                    width="30"
                    height="30"
                    className=' rounded-full flex-shrink-0 w-[30px] h-[30px]  '
                  />  : <Image src="/images/whiteUser.svg"
                    alt='Anna'
                    width="12"
                    height="13"
                    className=' '
                  />}
                </div>
                <label className='cursor-pointer py-[6px] px-[10px] rounded border border-[#D9D9E0] bg-[#ffffff63] flex items-center justify-center '>
                  <span htmlFor="selectImage" className='cursor-pointer text-[#313136] font-lato text-xs font-semibold leading-[130%] '>Change</span>
                  <input type="file" name="changeAvatar" className='hidden' id="imageFind" onChange={(e) => handleAvatarChange(e)} />
                </label>
              </div>
            </div>

            <div className='flex flex-col items-start gap-3 w-full  '>
              <label htmlFor="email" className='text-[#616161] font-lato text-base font-medium leading-5  ' >Email</label>
              <CustomInput type="email" name="email" id="email" placeholder="Click to add email" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>
            <div className=''>
              <div className='flex flex-col items-start gap-3 w-full  '>
                <label htmlFor="password" className='text-[#616161] font-lato text-base font-medium leading-5  ' >Password</label>
                <CustomInput type="password" name="password" id="password" placeholder="Click to add Password" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
              </div>
              <span className='text-[#A1ADAE] text-xs font-medium leading-[22px] underline cursor-pointer '>Change Password</span>
            </div>

            <div className='flex flex-col items-start gap-3 w-full  '>
              <label htmlFor="Phone" className='text-[#616161] font-lato text-base font-medium leading-5  ' >Phone</label>
              <CustomInput type="number" name="Phone" id="Phone" placeholder="enter phone" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

            <div className='flex flex-col items-start gap-3 w-full  '>
              <label htmlFor="address" className='text-[#616161] font-lato text-base font-medium leading-5  ' >Address</label>
              <CustomInput type="password" name="address" id="address" placeholder="enter address" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

          </div>

          <div className='flex flex-col  justify-center gap-8'>
            <div className='flex flex-col items-start justify-center gap-[8px] ' >
              <span className='text-lg font-medium leading-6 text-[#616161]'>Business Info</span>
              <span className='text-base font-medium leading-5 text-panther-300 '>This Please provide business name and address below</span>
            </div>

            <div className='flex flex-col items-start gap-3 w-full  '>
              <label htmlFor="businessName" className='text-[#616161] font-lato text-base font-medium leading-5  ' >Legal Business Name</label>
              <CustomInput type="text" name="businessName" id="businessName" placeholder="Click to add Business Name" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

            <div className='flex flex-col items-start gap-3 w-full  '>
              <label htmlFor="businessAddress" className='text-[#616161] font-lato text-base font-medium leading-5  ' >Business Address</label>
              <CustomInput type="text" name="businessAddress" id="businessAddress" placeholder="Click to add Business Address" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

          </div>

          <div className=' pt-4 border-t border-[#D9D9E0] flex gap-4 items-center   '>
            <button className='py-[11px] flex-[1_0_0]  rounded border border-panther-300  '>
              <span className='text-panther-800 text-base font-bold leading-4 ' >Cancel</span>
            </button>

            <button className=' py-[11px]  flex-[1_0_0] rounded items-center bg-[#A1ACAD] '>
              <span className='text-panther-50 text-base font-bold leading-4  flex-[1_0_0] '>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile