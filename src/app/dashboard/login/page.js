"use client"

import Header from '@/components/common/Header'
import Loginpage from '@/components/common/Loginpage'
import SingupPage from '@/components/common/SingupPage';
import { useState } from 'react';

const page = () => {
  const [isSingup, setIsSingup] = useState(false)

  const handleSingup = () => {
    setIsSingup(true)
  };
  const handleSingupClose = () => {
    setIsSingup(false)
  };

  return (
    <div className='flex flex-col gap-8 desktop:gap-32' >
      <div>
        <Header showlogo={true} showUser={false} />
      </div>

      {isSingup ? <div className='flex items-center justify-center'>
        <SingupPage handleSingupClose={handleSingupClose} />
      </div> : <div className='flex items-center justify-center'>
        <Loginpage handleSingup={handleSingup}   />
      </div>}
    </div>
  )
}

export default page