import React from 'react'
import CustomInput from './CustomInput'

const Links = ({onClose}) => {
  return (
    <>
      <div className='flex flex-col justify-between gap-10 2xl:gap-36 ' >
        <div>
          <div className='flex items-center gap-20 px-6 py-8 border-b border-[#D9D9E0] '>
            <label htmlFor="Website" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 ' >Website</label>
            <CustomInput type="text" name="Website" id="Website" placeholder="click to add website" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
          </div>
          <div className='flex items-center gap-20 px-6 py-8 border-b border-[#D9D9E0] '>
            <label htmlFor="Instagram" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 ' >Instagram</label>
            <CustomInput type="text" name="Instagram" id="Instagram" placeholder="click to add instagram" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
          </div>
          <div className='flex items-center gap-20 px-6 py-8 border-b border-[#D9D9E0] '>
            <label htmlFor="Facebook" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 ' >Facebook</label>
            <CustomInput type="text" name="Facebook" id="Facebook" placeholder="click to add facebook" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
          </div>
          <div className='flex items-center gap-20 px-6 py-8 border-b border-[#D9D9E0] '>
            <label htmlFor="Twitter" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 ' >Twitter</label>
            <CustomInput type="text" name="Twitter" id="Twitter" placeholder="Click to add Twitter" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
          </div>
        </div>
        <div className='px-8 pt-12 pb-[31px] flex items-center justify-end gap-4'>
          <span className='text-panther-800 text-base font-medium leading-4 px-2.5 py-1.5 rounded border border-[#F2F2EE] text-center cursor-pointer ' onClick={() => onClose()}>Cancel</span>

          <span className=' text-base font-medium leading-4 px-2.5 py-1.5 rounded bg-azure-500 text-center cursor-pointer text-panther-50 '>Save</span>
        </div>
      </div>
    </>
  )
}

export default Links