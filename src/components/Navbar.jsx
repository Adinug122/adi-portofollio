import React, { useState } from 'react'

function Navbar() {
  const [open,setOpen] = useState(false);
  
  return (
    <nav className="bg-neutral-secondary-soft fixed w-full z-20 top-0 start-0 border-b border-default">
        
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
      href="https://flowbite.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
     
      <span className="self-center text-2xl text-primary font-bold text-heading  whitespace-nowrap">
    Adi<span className='text-white italic font-light'> Portofolio</span>
      </span>
    </a>
    <button
      onClick={()=> setOpen(!open)}
      data-collapse-toggle="navbar-solid"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body text-white rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
      aria-controls="navbar-solid"
      aria-expanded={open}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          d="M5 7h14M5 12h14M5 17h14"
        />
      </svg>
    </button>
    <div className={`${open ? 'block' : 'hidden'}  w-full md:block md:w-auto`} id="navbar-solid">
      <ul className="font-medium flex flex-col  text-white p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-secondary-soft">
        <li>
          <a
            href="#"
            className="block py-2 px-3 border-b-2 border-transparent transition-all duration-300 hover:border-primary  ease-in-out text-white   md:bg-transparent md:text-fg-brand md:p-0"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block py-2 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in-out px-3 text-white  md:bg-transparent md:hover:text-fg-brand md:p-0 "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="block py-2 px-3 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in-out  text-white   md:hover:bg-transparent  md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
          >
          Project
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block py-2 px-3 border-b-2 border-transparent hover:border-primary transition-all duration-300 ease-in-out text-white  hover:bg-neutral-tertiary md:hover:bg-transparent  md:p-0 md:dark:hover:bg-transparent"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>

  </div>

</nav>

  )
}

export default Navbar