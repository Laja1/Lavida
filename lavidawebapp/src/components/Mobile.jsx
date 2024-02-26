import React from 'react'

export default function Mobile() {
  return (
    <div className='items-center flex justify-center' id='project'>
        <div className='bg-[#E0E2E6] w-[1200px] h-[300px] flex-row items-center justify-between px-10 foldr flex'>
  
        <div className='flex-col flex'> <h1 className='font-bold text-[40px] text-mdd raleway'>Download Our Mobile App</h1> 
        <p className='raleway'>Available for free on these platforms</p>
       <div className='flex-row flex gap-4'> <div className='bg-[#278C84] w-[172px] rounded-lg h-[52px] flex-row flex items-center justify-center gap-5'><img src='app.svg'/><p className='text-white raleway'>App Store</p></div>
       <div className='bg-[#356698] w-[172px] h-[52px] rounded-lg flex-row flex items-center justify-center gap-5'><img src='playstore.svg'/><p className='text-white raleway'>Playstore</p></div>
       </div> </div>

    <div><img src='/hello.svg'/></div> 
    </div>

    </div>
  )
}
