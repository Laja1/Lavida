 
  import React, { useState } from "react";
import axios from 'axios'


  export default function Header (){
    const [navbar, setNavbar] = useState(true);

const handleLogout = () => {
  window.localStorage.clear();
  axios
    .get("http://localhost:3002/auth/logout") // Corrected URL
    .then((result) => window.location.reload())
    .catch((err) => console.log(err));
};
  const handleNav = () => {
   
      setNavbar(!navbar);
      console.log("Nav state after update:", navbar); // Log after state update
    };
    return (
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-5 ">
        <a href="/"> <img src="/logo.svg"/></a>
        <ul className="md:flex hidden items-center">
         
               <a href="/">  <li className="p-4 hover:h-13 raleway  text-[#484848]">
              Home
            </li></a> 
      <a href="#tech">
          <li className="p-4 hover:h-13 raleway  text-[#484848]">About</li>
        </a>
           <a href="#project">   <li className="p-4 hover:h-13 raleway text-[#484848]">Download Mobile App</li>
      </a>
          <a href="/Booking">     <div className="bg-[#484848] p-4 rounded-xl"> <div className="text-center items-center justify-center h-13">
        <p className="text-white text-[14px] raleway">My Bookings</p></div> 
         </div>
        </a> 
      {window.localStorage.length ? (
  <div className="bg-[#484848] px-3 py-4 ml-3 rounded-xl"> 
    <div className="text-center items-center justify-center h-13">
      <div className="flex-row flex items-center"> 
        <button onClick={handleLogout} className="text-white text-[14px] raleway">Logout</button>
        <img src="/user.svg" />
      </div>
    </div> 
  </div>
) : (
  <a href="/Signup">     
    <div className="bg-[#484848] px-3 py-4 ml-3 rounded-xl"> 
      <div className="text-center items-center justify-center h-13">
        <div className="flex-row flex items-center"> 
          <p className="text-white text-[14px] raleway">Login/Sign Up</p>
          <img src="/user.svg" />
        </div>
      </div> 
    </div>
  </a>
)}
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!navbar ? (
           <>
            <img
              src="/x.svg"
              width={20}
              
             
              height={20}
              alt="Close menu"
            />
           
           </>
          ) : (
            <img src="/badge.svg"   width={20} height={20} alt="Open menu" />
          )}

          <div
            className={
              !navbar
                ? "fixed left-0 top-0 w-[40%] border-r-gray-900 h-full bg-[#ffffff] ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <a href="/">  <img src="/logo.svg" className="m-5"/></a>
            <ul className="p-4 uppercase">
               <a href="/"> <li className="p-4 border-b border-gray-600 raleway">Home</li></a>
            <a href="#tech">  <li className="p-4 border-b border-gray-600 raleway">About</li></a>
             
              <a href="#project">     <li className="p-4 border-b border-gray-600 raleway">Download Mobile App</li>  </a> 
              <div className="pt-60 flex-col flex items-center justify-center gap-5"><a href="/Booking">     <div className="bg-[#484848] p-4 rounded-xl"> <div className="text-center items-center justify-center h-13">
        <p className="text-white text-[14px]">My Bookings</p></div> 
         </div>
        </a> 
       <a href="/Signup">     <div className="bg-[#484848] px-3 py-3  ml-3 rounded-xl"> <div className="text-center items-center justify-center h-13">
       <div className="flex-row flex items-center"> <p className="text-white text-[14px] raleway">Login/Sign Up</p><img src="/user.svg" /></div></div> 
         </div>
        </a> </div>
            </ul>
          </div>
        </div>
   
      </div>
    );
  };


