import Image from 'next/image'
import React from 'react'

const Header = ({ showlogo, showUser, handleMenuopen }) => {


    return (
        <div className='border-b border-[#E6E6E6] bg-panther-50 '>
            <div className='flex items-center justify-between p-6'>
                <div>
                    {showlogo && <Image src="/images/Anna.svg"
                        alt='Anna'
                        width="48"
                        height="48"
                        className='cursor-pointer hidden sm:block '
                        // onClick={() => handleMenuopen()}

                    />}
                    {showlogo &&  <Image src="/images/Menu.svg"
                        alt='Anna'
                        width="16"
                        height="14"
                        className='cursor-pointer sm:hidden '
                        onClick={() => handleMenuopen()}
                    />}
                </div>
                <div className='flex items-center gap-3'>
                    <div className='bg-panther-400 rounded-full w-8 h-8 flex items-center justify-center'>
                        <Image src="/images/user.svg"
                            alt='Anna'
                            width="22"
                            height="22"
                            className='p-1 '
                        />
                    </div>
                   {showUser && <span className='text-[#3A3A3B] font-lato text-base font-medium leading-5 hidden sm:block '>
                        Jessica Fitzgerald
                    </span>}
                </div>
            </div>
        </div>
    )
}

export default Header 