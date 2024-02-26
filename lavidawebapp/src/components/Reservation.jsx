import React,{useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
 import DatePicker from 'react-datepicker';
 import 'react-datepicker/dist/react-datepicker.css';

import Footer from './Footer';
import axios from 'axios';


const Fetch_Further = gql`
  query Description($slug: String) {
    description(slug: $slug) {
      
      id
     price
      slug
      coverimage
      title
    }
  }
`;
export default function Reservation() {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [email, setEmail] = useState('');

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  
  const { slug } = useParams();
  const { loading, error, data } = useQuery(Fetch_Further, { variables: { slug } });


const title = data && data.description ? data.description.title : '';
const coverimage = data && data.description ? data.description.coverimage : '';
const price = data && data.description ? data.description.price : '';

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data || !data.description) return <div>No data...</div>;
 
 
 const handleSubmit = async (e) => {
  e.preventDefault()
    try {
      console.log(title);
      console.log(name);
      console.log(phoneNumber);
      console.log(email);
      console.log(coverimage);

      await axios.post("http://localhost:3002/hotel/create", {
        title,
        name,
        price,
        phoneNumber,
        email,
        coverimage,
      });

      console.log("Saved");
      navigation.navigate('/Booking')
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

{/* <form  onSubmit={(e) => handleSubmit(e, title, coverimage)}></form> */}
  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };


  return <div className='items-center   justify-center flex'>

  
  <div className='justify-center items-center flex py-10'>
    <div className='justify-center   self-center items-center flex'>
      <div className='flex-row flex back fol w-[956px]  rounded-xl shadow-xl border-2 justify-center'>

        <div>
         <div className="smalll"><img src={coverimage}  className="h-[500px] w-[500px] rounded-xl"/></div> 
        </div>

        <div>
          <form onSubmit={(e) => handleSubmit(e, title, coverimage)}>
            <div className='w-[500px] h-[500px] cardd shadow-xl  rounded-xl flex justify-center items-center'>

              <div className="flex-col justify-center flex items-center gap-2">
                <p className="text-[#484848] text-[30px] font-bold">{title} Reservation</p>
              <div className="flex-row flex items-center justify-center gap-2">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                <input
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                  placeholder='Full Name'
                  className='w-[300px] longgg h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
                /></div>
             <div className="flex-row flex items-center justify-center gap-2">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
  <input
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                  placeholder='Email'
                  className='w-[300px] longgg h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
                /></div>
               <div className="flex-row flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
 <input
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  placeholder='Phone Number'
                  className='w-[300px] longgg h-12 px-4 py-2 rounded-lg shadow-lg text-[#484848] bg-white border border-gray-300 focus:outline-none focus:border-blue-500'
                /></div>
                
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
      <button className='text-white'>Reserve Now</button>
    </div>
              </div>

            </div>
          </form>
        </div>

      </div>
    </div>
  </div>




  </div>;
}
