import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CountUp from '../components/CountUp'
import About from '@/components/About';
import Project from '@/components/Project';
import  Contact  from '@/components/Contact';
import Footer from '@/components/footer';
function Home() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    },2500);
    return ()=> clearTimeout(timer)
  },[]);


  if(loading){
    return(
      <div className="flex h-screen w-full justify-center bg-black z-50 fixed inset-0">
        <div className="flex flex-col items-center justify-center text-9xl   gap-4 text-white">
          <CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
  startCounting={false}
/>
        </div>
      </div>
    )
  }

  return (
    <>
    <Navbar/>
  <Hero/>

  <div>
  <About/>    
  </div>
  <Project/>
  
  <Contact/>
 <Footer/>
    </>
  )
}

export default Home