import React from 'react'
import Lanyard from './react-bits/Lanyard'
import SplashCursor from './react-bits/SplashCursor'
import LogoLoop from './react-bits/LogoLoop';
import { SiReact, SiTailwindcss,SiLaravel,SiJavascript,SiMysql,SiGithub } from 'react-icons/si';
function About() {
    const techLogos = [
         
          { node: <SiReact size={40} color="#ffffff" />, title: "React", href: "https://react.dev" },
          { node: <SiTailwindcss size={40} color="#ffffff" />, title: "Tailwind", href: "https://tailwindcss.com" },
          { node: <SiLaravel size={40} color="#ffffff" />, title:"Laravel", href:"https://laravel.com/"},
          { node: <SiJavascript size={40} color="#ffffff" />, title:"Javascript", href:"https://www.javascript.com/"},
          { node: <SiMysql size={40} color="#ffffff" />, title:"My SQL", href:"https://www.mysql.com/"},
          { node: <SiGithub size={40} color="#ffffff" />, title:"github", href:"https://www.github.com/"}
        
        ]
  return (
 <section id='about' className='max-w-7xl relative mx-auto min-h-52 mt-5 p-5 z-10 '>
    <SplashCursor/>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-white'>
        <div>

<Lanyard position={[0, 0, 20]} gravity={[0, -15, 0]} />
        </div>
        <div className='ml-8 pt-20'>
            <h2 className='text-2xl mt-5 font-bold'>About Me</h2>
      <div className='leading-relaxed sm:text-xs p-3 md:p-0 -ml-8 md:-ml-0  md:text-base text-justify text-gray-300 space-y-4'>
  <p>
    Hello! I’m <span className="text-white font-bold">Adi Nugroho</span>, a passionate aspiring Fullstack Web Developer with a creative mindset.
    I’m currently exploring the world of web development, driven by a strong curiosity to build applications that combine
    <span className="text-red-500 font-semibold"> solid performance</span> with clean, modern design.
    For me, coding is not just about writing code, but about creating meaningful digital solutions that are intuitive and impactful.
  </p>

  <p>
    At the moment, I am learning the <span className="text-white font-semibold">React and Laravel ecosystem</span>,
    gradually improving my skills from building interactive user interfaces to handling server-side logic.
    I enjoy experimenting with databases, integrating APIs, and refining UI details while focusing on writing
    <span className="text-white font-semibold"> clean and maintainable code</span>.
    I am always eager to learn, take on new challenges, and turn ideas into real, working applications.
  </p>
</div>

           </div>
        </div>
  <div className='w-full overflow-  md:-mt-35'>
   <LogoLoop
   logos={techLogos}
    speed={100} 
    direction="left" 
    logoHeight={60} 
    gap={60}
     hoverSpeed={0} 
     scaleOnHover 
     fadeOut 
     fadeOutColor="#000000" 
     ariaLabel="Technology partners"
 />
 
   </div>
 </section>
  
)
}


export default About