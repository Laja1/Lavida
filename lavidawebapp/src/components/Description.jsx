import React,{useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';



const Fetch_Further = gql`
  query Description($slug: String) {
    description(slug: $slug) {
      kitchen
      description
      id
      bathroom
      design
      design2
      price
      slug
      coverimage
      title
    }
  }
`;


function Description() {

const name = window.localStorage.getItem("name");
  const { slug } = useParams();
 
  const { loading, error, data } = useQuery(Fetch_Further, { variables: { slug } });

  if (loading) return <div> <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    
  </svg></div>;
  if (error) return <div>Error...</div>;
  if (!data || !data.description) return <div>No data...</div>; // Ensure data.description exists

  const { title,  description, price, kitchen,design,design2, bathroom,coverimage } = data.description;

  return (
   
     <div>
    <div className=' items-center flex flex-col px-5 justify-center'>
      <p>{name}</p>
      <div className="flex-row fold items-center gap-[20px] flex justify-evenly">
<div className='w-[609px] h-[480px] folddd bg-[#C2C6CC] rounded-xl'><img src={coverimage} className='h-[480px] rounded-xl'/></div>
<div className='items-center flex-col flex justify-center '>
    
    <div className='flex-row flex  gap-5 items-center justify-center'><div className='w-[315px] h-[230px] foldd  rounded-xl'><img src={kitchen} className='h-[230px] w-full rounded-xl'/></div>
<div className='w-[315px] h-[230px] bg-[#C2C6CC] foldd rounded-xl'><img src={bathroom} className='h-[230px] w-full rounded-xl'/></div></div>
<div className='flex-row flex gap-5 py-2 items-center justify-center'>
<div className='w-[315px] h-[230px] bg-[#C2C6CC] foldd rounded-xl'><img src={design} className='h-[230px] w-full rounded-xl'/></div>
<div className='w-[315px] h-[230px] bg-[#C2C6CC] foldd rounded-xl'><img src={design2} className='h-[230px] w-full rounded-xl'/></div></div></div></div>
     
    </div>
    <div >
    <div className='items-center flex  justify-center'>
       <div className='flex-row flex gap-10 items-center justify-between fold pt-20   pb-5'> 
       <div className='flex-col flex'>
      <div className='flex-row flex justify-between items-center'> <h1 className='text-[#484848] text-[28px] raleway font-bold'>{title}</h1> 
        <div className='flex-row flex  gap-3'><img src='/love.svg' className='w-[35px]'/><img src='/share.svg' className='w-[35px]'/></div></div>
<div className='flex-row flex fold gap-[10px] pt-10'>
    
<div className='flex-row flex gap-5'><div className='w-[160px] h-[150px] shadow-xl bg-[#EFF0F2] items-center justify-center flex  flex-col rounded-lg '>
    <img src='/bed.svg'/> 
    <p className='text-[#484848] raleway'>3 Bedrooms</p>
    </div>
    <div className='w-[160px] h-[150px] shadow-xl bg-[#EFF0F2] items-center justify-center flex  flex-col rounded-lg '>
    <img src='/shower.svg'/> 
    <p className='text-[#484848] raleway'>3 Bedrooms</p>
    </div></div>
   <div className='flex-row flex gap-5'>  <div className='w-[160px] h-[150px] shadow-xl bg-[#EFF0F2] items-center justify-center flex  flex-col rounded-lg '>
    <img src='/car.svg'/> 
    <p className='text-[#484848] raleway'>3 Bedrooms</p>
    </div>
    <div className='w-[160px] h-[150px] shadow-xl bg-[#EFF0F2] items-center justify-center flex  flex-col rounded-lg '>
    <img src='/pet.svg'/> 
    <p className='text-[#484848] raleway'>3 Bedrooms</p>
    </div></div></div>
    
</div>
       <div className='flex-row place-items-start gap-3 flex sm:flex-col sm fold'>
        <div className='w-[352px] h-[300px] shadow-xl rounded-lg items-center fold flex-col justify-center flex'>
               <p className='text-[#484848] text-[22px] raleway pb-5'>Price: ${price}</p>
               <hr />
               <div className='w-[290px] h-[60px] shadow-xl justify-center flex bg-[#484848] rounded-lg items-center'>
          
          <Link to={`/Reservation/${slug}`}> <button  className='text-white ' >Reserve Now</button></Link></div>
          <div className='flex-row flex pt-10 gap-10'> <div className='flex-row flex items-center'> <img src='/building.svg'/> Property Inquiry</div>
           <div className='flex-row flex items-center'> <img src='/call.svg'/>Contact</div></div>
            </div></div>
         </div>

</div>
<div className=' flex  flex-col '>
  <div className='flex-col flex mx-auto pt-5 '> <h1 className='text-[#484848] text-[28px] raleway font-bold'>Apartment Description</h1> 
      <p className='text-[#484848] text-[17px] raleway text-wrap longword w-[1100px]'>{description}</p>
     </div>
     
       <div className='flex-col flex mx-auto w-[1100px] longword  pt-5 '> <h1 className='text-[#484848] text-[28px] raleway font-bold'>Offered Amenities
</h1> 
      <div className='flex-row flex  gap-8  pt-5'>
    
<div className='flex-col flex gap-5'>
   <div className='flex-row flex items-center gap-3'> <img src='/kitchen.svg' width={30}/> 
    <p className='text-[#484848] raleway'>Kitchen</p></div>
    
    <div className='flex-row flex items-center gap-3'>
    <img src='/air.svg'/> 
    <p className='text-[#484848] raleway'>Air Conditioner</p></div> 
      <div className='flex-row flex items-center gap-3'> <img src='/laundry.svg' /> 
    <p className='text-[#484848] raleway'>Washer</p></div> 
    </div>
   <div className='flex-col flex gap-5'>  
  <div className='flex-row flex items-center gap-3'>
    <img src='/tv.svg' width={30}/> 
    <p className='text-[#484848] raleway'>Television With Netlfix </p></div>
  <div className='flex-row flex items-center gap-3'>
    <img src='/wifi.svg' width={30}/> 
    <p className='text-[#484848] raleway'>Free Wireless Internet</p></div>
    
    <div className='flex-row flex items-center gap-3 pb-5'>
    <img src='/balcony.svg' width={30}/> 
    <p className='text-[#484848] raleway'>Balcony or Patio</p></div>
    </div>
   
    </div>
     <div className='w-[250px] h-[70px] border-[0.5px] border-[#484848] items-center justify-center flex'>Show all 10 Ammenties</div>
     </div>
     
      </div>
        

      <div>
   
    
    </div>
      </div>
     
       <div className='pb-5'></div>
       </div>
  );
}

export default Description;
