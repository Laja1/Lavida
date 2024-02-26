import React from "react";
import Body from './Body'
import Card from "./Card";
import Mobile from "./Mobile";
function Home() {
  return <div className="items-center "><Body />
 <div className="py-10"><Card /></div>
 <div className="py-10"><Mobile /></div>
 
  </div>;
}

export default Home;
