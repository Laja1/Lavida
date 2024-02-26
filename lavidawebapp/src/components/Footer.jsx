import React from "react";

function Footer() {
  return <div>
    <div className="w-full h-[370px] bg-[#484848]">
      <div className="lg:grid-cols-3 flex pt-10  gap-5 items-center justify-evenly pb-20" >
<div className="flex-col w-[400px] ">
  <p className="text-[#E8EAEC] raleway ">Lavida view</p>
  <p className="text-[#E8EAEC] raleway text-[13px]">The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)</p>
</div>
<div className="flex-row gap-10 items-center text-[#E8EAEC] raleway  justify-center hidden md:flex">
  <ul>
    <h1>Quick Links</h1>
    <li  className="text-[13px]">Room booking</li>
    <li  className="text-[13px]">Rooms</li>
    <li  className="text-[13px]">Contact</li>
    <li  className="text-[13px]">Explore</li>
  </ul>
   <ul>
    <h1>Social Media</h1>
    <li className="text-[13px]">Facebook</li>
    <li  className="text-[13px]">Twitter</li>
    <li  className="text-[13px]">Instagram</li>
    <li  className="text-[13px]">Linkedin</li>
  </ul>
</div>
<div className="flex-col w-[400px] hidden md:flex">
  <p className="text-[#E8EAEC] raleway ">Newsletter</p>
  <p className="text-[#E8EAEC] raleway text-[13px] pb-5">Kindly subscribe to our newsletter to get
latest deals on our rooms and vacation
discount.</p>
<div className="w-[360px] h-[50px] bg-[#ffffff] rounded-lg items-center justify-between px-3 flex flex-row ">
  <input placeholder="Enter your email"/><div className="w-[111px] h-[40px] bg-[#484848] text-[#E8EAEC] rounded-lg items-center justify-evenly flex">Subscribe</div>
</div>
</div>
</div>
<hr />
<div className='text-[#E8EAEC] raleway items-center justify-center flex pt-10'>Lavida View 2023</div>
    </div>
  </div>;
}

export default Footer;
