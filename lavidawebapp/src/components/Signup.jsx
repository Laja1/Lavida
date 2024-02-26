import React,{useState,useEffect,useRef} from "react";
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Signup() {
  
      const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       console.log(phoneNumber)
      console.log(name);      
      console.log(email);
 console.log(password);
     await axios.post('http://localhost:3002/auth/signup', {  name, phoneNumber, email,  password });       
       navigation.navigate('Signin');
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const inputRef = useRef(null)

useEffect(()=>{
inputRef.current.focus()
},[])

 return (
  <div className='justify-center items-center flex py-10'>
    <div className='justify-center   self-center items-center flex'>
   <div className='flex-row flex back fol w-[956px]  rounded-xl shadow-xl border-2 justify-center'>
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
            <div className='w-[500px] h-[420px] cardd shadow-xl  rounded-xl flex justify-center items-center'>

              <div className="flex-col justify-center flex items-center gap-2">
                <p className="text-[#484848] text-[30px] raleway font-bold">Sign Up</p>
              <div className="flex-row flex items-center justify-center gap-2">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                <input
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                   ref={inputRef}
                  placeholder='Full Name'
                  className='w-[300px] longgg raleway h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
                /></div>
             <div className="flex-row flex items-center justify-center gap-2">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
  <input
   ref={inputRef} 
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                  placeholder='Email'
                  className='w-[300px] longgg raleway h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
                /></div>
               <div className="flex-row flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
 <input
  ref={inputRef}
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  placeholder='Phone Number'
                  className='w-[300px] longgg raleway h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
                /></div>
                
            <div className="flex-row flex items-center justify-center gap-2">   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
</svg>
<input
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
             ref={inputRef}
             type="password"
                  placeholder='Password'
                  className='w-[300px] longgg h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
                /></div> 
            
              <div className='w-[180px] h-[50px] shadow-xl justify-center flex bg-[#484848] rounded-lg items-center'>
          
           <button  className='text-white'  >Sign Up</button></div>
               <p className="text-[#484848] raleway">Already have an account?  <a href="/Signin" className="text-[#1c58b3]">Sign In </a></p>  
              </div>
              
              
           

            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
);

}

export default Signup;
