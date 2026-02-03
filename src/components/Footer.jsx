import React from 'react'
import { FaGithub, FaInstagram, FaLaravel, FaLinkedin, FaReact } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { SiTailwindcss } from 'react-icons/si';

function Footer() {
  return (
   
    <footer className="max-w-7xl mx-auto mt-20 text-gray-600 text-sm px-4 pb-8">
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
   
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-[#FF3F28]">
              Adi<span className='text-white italic font-light'> Portofolio</span>
            </span>
          </a>
          
          <p className='mb-4 max-w-xs leading-relaxed'>
            Mari berteman! Saya siap menerima project yang berhubungan dengan Website.
          </p>

          <div className='flex gap-5 mt-2 justify-center md:justify-start'>
            <a href="https://github.com/Adinug122" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FF3F28] text-2xl transition-all ">
              <FaGithub />
            </a>
            <a href="mailto:adi315429@gmail.com" className="text-gray-400 hover:text-[#FF3F28] text-2xl transition-all ">
              <MdEmail/>
            </a>
            <a href="https://www.linkedin.com/in/adi-nugroho-354b922b7/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FF3F28] text-2xl transition-all ">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/someone__bro" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FF3F28] text-2xl transition-all ">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <h2 className='font-bold text-white mb-4 text-lg'>Explore</h2>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="hover:text-[#FF3F28] transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-[#FF3F28] transition-colors">About</a></li>
            <li><a href="#project" className="hover:text-[#FF3F28] transition-colors">Project</a></li>
            <li><a href="#contact" className="hover:text-[#FF3F28] transition-colors">Contact</a></li>
          </ul>
        </div>

      
        <div className="mt-6 md:mt-0">
          <h2 className='font-bold text-white mb-4 text-lg'>My Services</h2>
          <ul className='flex flex-col gap-3'>
        
            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-default">
              <FaLaravel className='text-red-600 text-lg'/> Web Development (Laravel)
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-default">
              <FaReact className='text-blue-400 text-lg'/> Frontend (React.js)
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-default">
              <SiTailwindcss className='text-cyan-400 text-lg'/> UI Slicing & Design
            </li>
          </ul>
        </div>

      </div>


      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p>© {new Date().getFullYear()} Adi Nugroho. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer