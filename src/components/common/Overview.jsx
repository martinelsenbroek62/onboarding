import React from 'react'

const Overview = () => {
    return (
        <>
            <div>
                <div className='flex flex-col items-center justify-between'>
                    <div>
                        <div>
                            <div className='h-1 w-[220px] bg-[#A1ADAE]  '></div>
                            <div className='h-1 w-[220px] bg-[#A1ADAE]  '></div>
                            <div className='h-1 w-[220px] bg-[#A1ADAE]  '></div>
                            <div className='h-1 w-[220px] bg-[#A1ADAE]  '></div>
                        </div>
                        <div>
                            <span>
                                Here’s a brief overview of
                                how “Do” works
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <button>Skip</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview