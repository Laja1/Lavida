import React,{useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
 import DatePicker from 'react-datepicker';
 import 'react-datepicker/dist/react-datepicker.css';

import Footer from './Footer';
import axios from 'axios';


function Test() {
    const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
   const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
console.log(phoneNumber)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(phoneNumber)
      console.log(name);
      console.log(email);
      await axios.post('http://localhost:3001/reserve/reserve', {  name, phoneNumber, email, });
      console.log(name);
      console.log(phoneNumber)
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  return <div className='items-center   justify-center flex'>
<div className='pt-20'>
<div className='w-[500px] h-[420px] cardd shadow-xl bg-[#ffffff] rounded-xl'>
<div className='items-center flex justify-center flex-col gap-2'>

<form onSubmit={handleSubmit}>

<input
  onChange={(e)=>setName(e.target.value)}
  value={name}
  placeholder='Full Name'
  className='w-64 h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
/>
<input
onChange={(e)=>setEmail(e.target.value)}
value={email}
  placeholder='Email'
  className='w-[350px] longgg h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
/>
<input
onChange={(e)=>setPhoneNumber(e.target.value)}
value={phoneNumber}
  placeholder='Phone Number'
  className='w-[350px] longgg h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
/>
<div className="mb-4 justify-center flex items-center gap-2">
        <label className="block text-[#484848] mb-2" htmlFor="checkInDate">
          Check-in Date
        </label>
        <DatePicker
          id="checkInDate"
          selected={checkInDate}
          onChange={handleCheckInDateChange}
          className="w-full h-12 px-4 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-2 justify-center flex items-center gap-2">
        <label className="block text-[#484848] mb-2" htmlFor="checkInDate">
          Check-Out Date
        </label>
        <DatePicker
          id="checkOutDate"
          selected={checkOutDate}
          onChange={handleCheckOutDateChange}
          className="w-full h-12 px-4 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className='w-[200px] h-[60px] shadow-xl justify-center flex bg-[#484848] rounded-lg items-center'>
          
           <button  className='text-white ' >Reserve Now</button></div></form>
</div>
</div></div>
  </div>;
}


export default Test