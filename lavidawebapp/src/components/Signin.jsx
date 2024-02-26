import React, { useState,useEffect,useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'; // Import axios for HTTP requests

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputRef = useRef(null)

useEffect(()=>{
inputRef.current.focus()
},[])

const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/auth/login", { email, password })
      .then((result) => {
        console.log(result.data); // Check the structure of the response
        // Assuming result.data contains the user data
        
        window.localStorage.setItem("id", result.data.id);
        
        navigation.navigate("/");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        // Handle login error
      });
};

  return (
    <div className='justify-center items-center flex py-10'>
      <div className='justify-center self-center items-center flex'>
        <div className='flex-row flex back fol w-[956px] items-center rounded-xl shadow-xl border-2 justify-center'>
          <div className="">
            <Carousel autoPlay={true}  centerMode={false}  interval={2000}  >
                <div>
                <img src="/landing.jpg" alt="carousel-img" />
                <p className="legend raleway">Lavida Local</p>
              </div>
              <div >
                <img src="/frame4.jpg" alt="carousel-img" className="rounded" />
                <p className="legend raleway">Our Bar Room</p>
              </div>
              <div>
                <img src="/frame3.jpg" alt="carousel-img" />
                <p className="legend raleway">Standard Room</p>
              </div>
            
              <div>
                <img src="/ye.jpg" alt="carousel-img" />
                <p className="legend raleway">Luxury Room</p>
              </div>
              
            </Carousel>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className='w-[500px] h-[410px] cardd shadow-xl rounded-xl flex justify-center items-center'>
                <div className="flex-col justify-center flex items-center gap-2">
                  <p className="text-[#484848] text-[30px] font-bold raleway">Sign In</p>
                  <div className="flex-row flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <input
                      type="email"
                      ref={inputRef}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder='Email'
                      className='w-[300px] longgg raleway h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
                    />
                  </div>
                  <div className="flex-row flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                    </svg>
                    <input
                     ref={inputRef}
                     
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder='Password'
                      className='w-[300px] raleway longgg h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
                    />
                  </div>
                 
                
              <div className='w-[180px] h-[50px] shadow-xl justify-center flex bg-[#484848] rounded-lg items-center'>
          
           <button  className='text-white ' >Sign In</button></div>
              <p className="text-[#484848] raleway">Don't have an account? <a href='/Signup'><span className="text-[#2c58b1] raleway">Sign Up</span></a></p>
                
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
