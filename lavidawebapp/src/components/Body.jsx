import React from 'react';

function Body() {
  return (
    <div className=" w-full h-[800px] bg-cover  bg-no-repeat items-center  flex justify-center" style={{backgroundImage: "url('/landing.jpg')"}}>
      <div className='items-center justify-center flex flex-col'>
        <p className='text-[#00000040] text-[120px] text-bg font-extrabold raleway'>LAVIDA</p>
            <p className='text-[#E8EAEC] text-[60px] text-md font-medium raleway'>Rooms and Suites</p>
             <p className='text-[#E8EAEC] text-[20px] w-[300px] text-center wrapp text-sm font-medium raleway'>The elegant luxury bedrooms in this gallery showcase custom interior 
designs & decorating ideas. View pictures and find your
 perfect luxury bedroom design.</p>
      </div>
    </div>
  );
}

export default Body;
