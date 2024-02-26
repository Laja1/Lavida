import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Booking({ navigation }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHotels = () => {
    axios
      .get("http://localhost:3002/hotel/booked")
      .then((res) => {
        setHotels(res.data.hotel);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching hotels:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHotels(); // Fetch when the component mounts

    const interval = setInterval(() => {
      fetchHotels(); // Fetch periodically
    }, 60000); // Polling interval: 1 minute (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      {hotels.map((item) => (
        <div key={item._id}>
          <div className='items-center justify-center pad flex pb-5'>
            <div className='flex-row flex bg-[#ffffff] gap-10 border-[#484848]  items-center rounded-xl shadow-2xl border-[0.2px] h-[350px] smal w-[800px]'>
              <div><img src={item.coverimage} className='h-[350px] smali w-[450px] rounded-l-xl'/>
              </div>
              <div className='flex-col flex sll  justify-center'><p className='text-[30px] text-mddd raleway'>{item.title}</p>
                <p className='raleway'>{item.name}</p>
                <p className='raleway'>${item.price}</p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
