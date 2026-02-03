import React from 'react'
   import ProfileCard from './react-bits/ProfileCard'
 import Particles from './react-bits/Particles';
 import aku from '../assets/me.png';
 import { SiReact, SiTailwindcss,SiLaravel,SiJavascript } from 'react-icons/si';
 import TextType from './react-bits/TextType';
 import LogoLoop from './react-bits/LogoLoop';


function Hero() {

    

  return (
  
<section className="relative lg:grid lg:h-screen bg-black lg:place-content-center overflow-hidden">
    <div className="inset-0 absolute z-0">
    <div className='w-full h-screen relative'>
  <Particles
    particleColors={["#ffffff"]}
    particleCount={100}
    particleSpread={10} 
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles
    disableRotation={false}
    pixelRatio={1}
/>
</div>
    </div>
  <div className="mx-auto w-screen max-w-7xl relative z-10  px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
    <div className="max-w-prose text-left">
      
<div className="text-white text-4xl font-bold sm:text-5xl mt-15 md:mt-1">
  <TextType
    text={[
      "Hello, My Name is Adi",
      "Information Technology Student",
      "Fullstack Web Developer"
    ]}
    typingSpeed={75}
    pauseDuration={1500}
    showCursor
    cursorCharacter="_"
  />
</div>
     
      <p className="mt-4 text-base text-gray-300 sm:text-lg/relaxed">
  I am an Information Technology Student with a strong focus on Fullstack Web Development. 
  I love combining stunning front-end visuals 
  with powerful back-end logic to create memorable digital experiences.
</p>
      <div className="mt-4 flex gap-4 sm:mt-6">
        <a  
          className="inline-block z-10 rounded border border-primary shadow-[1px_1px_10px_4px_rgba(255,0,0,0.6)] hover:bg-red-800 duration-200  bg-primary px-5 py-2 font-medium text-white  transition-colors"
          href="/CV_Adi Nugroho.pdf" download
        >
      Download CV
        </a>
        
      </div>
    </div>

  <div className='flex sm:justify-center md:justify-end lg:justify-end mt-10 md:mt-6'>
<ProfileCard className='ml-16'
  name="Adi Dev" 
  title="IT Enthusiast" 
  handle="Adi"
  status="Online"
  contactText="Contact Me"
  avatarUrl={aku}
  showUserInfo={true} 
  enableTilt={true}
  enableMobileTilt
  onContactClick={() => console.log('Contact clicked')}
  showIcon
  showBehindGlow
  behindGlowColor="rgba(236, 10, 10, 0.8)"

/>
  </div>
  </div>

</section>


  )
}


export default Hero
