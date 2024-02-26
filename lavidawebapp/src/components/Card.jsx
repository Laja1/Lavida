import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';

const Fetch_Info = gql`
query Home {
  home {
    id
 
    available
    image
    price
    slug
    title
  }
}
`
export default function Card() {
  const {data, loading, error} = useQuery(Fetch_Info)
if (loading) return <div>Loading...</div>
if (error) return <div>Error...</div>
if (!data) return <div>no data...</div>
  return (
    <div className=" items-center flex justify-center">
      <div className="lg:grid-cols-3 grid items-center flex justify-center">
        {data.home.map(item => (
          <div key={item.id} className="flexx-row flex">
            <div>
              <div className="bg-[#FFFFFF] shadow-lg w-[330px] h-[370px]">
                <img src={item.image} alt={item.title} className='h-[210px] w-full'/>
                <div className="flex-col flex">
                  <div className="flex-row flex justify-between px-5">
                    <p className="text-[#484848] raleway">{item.title}</p>
                    <p className="text-[#484848] raleway text-[12px]">Available: {item.available}</p>
                  </div>
                  <p className="text-[#484848]  raleway pl-5 py-2">${item.price}</p>
                  <hr color="#484848" className="" />
                  <div className="pt-5 px-5 flex-row flex items-center justify-between">
                    <div className="flex-row flex gap-2">
                      <div className="w-[32px] h-[32px] rounded-full shadow-lg items-center flex justify-center bg-[#F2F2F2]">
                        <img src="/Vector.svg" alt="Vector 1" />
                      </div>
                      <div className="w-[32px] h-[32px] rounded-full shadow-lg items-center flex justify-center bg-[#F2F2F2]">
                        <img src="/Vector1.svg" alt="Vector 2" />
                      </div>
                      <div className="w-[32px] h-[32px] rounded-full shadow-lg items-center flex justify-center bg-[#F2F2F2]">
                        <img src="/Vector2.svg" alt="Vector 3" />
                      </div>
                    </div>
                    <Link to={`/description/${item.slug}`}><div className="w-[143px] h-[47px] bg-[#484848] shadow-xl items-center flex justify-center">
                      <button className="text-white raleway">Book Now</button>
                    </div></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
