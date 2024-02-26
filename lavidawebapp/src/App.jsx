import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import Test from './components/Test'
import Signup from './components/Signup'
import Booking from './components/Booking'
import Description from './components/Description'
import Header from './components/Header'
import Signin from './components/Signin'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Reservation from './components/Reservation'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
export default function App() {
  return (
     <ApolloProvider client={client}>
     <BrowserRouter>
    <div>
     <Header />
      <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/Description/:slug' element={<Description />}></Route>
        <Route path='/Reservation/:slug' element={<Reservation />}></Route>
         <Route path='/Test' element={<Test />}></Route>
             <Route path='/Signup' element={<Signup />}></Route>
            
                        <Route path='/Signin' element={<Signin />}></Route>
                          <Route path='/Booking' element={<Booking />}></Route>
      </Routes>
    <div className=""><Footer /></div> 
    </div>
      </BrowserRouter>
      </ApolloProvider>
  )
}
