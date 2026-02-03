import React from 'react';
import { SiGithub, SiLinkedin, SiWhatsapp,SiInstagram } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import ElectricBorder from './react-bits/ElectricBorder'; // Pakai lagi border listriknya!

function Contact() {
  
  const contacts = [
    {
      id: 1,
      name: "Email",
      value: "adi315429@gmail.com",
      icon: <MdEmail size={40} className="text-red-500" />,
      link: "mailto:adi315429@gmail.com",
      desc: "Send me a message"
    },
    {
      id: 2,
      name: "Instagram",
      value: "someone__bro", 
      icon: <SiInstagram size={40} className="text-pink-500" />,
      link: "https://www.instagram.com/someone__bro",
      desc: "DM me"
    },
    {
      id: 3,
      name: "LinkedIn",
      value: "Adi Nugroho",
      icon: <SiLinkedin size={40} className="text-blue-500" />,
      link: "https://www.linkedin.com/in/adi-nugroho-354b922b7/", 
      desc: "Let's connect professionally"
    },
    {
      id: 4,
      name: "GitHub",
      value: "Adinug122",
      icon: <SiGithub size={40} className="text-white" />,
      link: "https://github.com/Adinug122",
      desc: "Check my repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 mt-2 md:mt-10 bg-black text-white flex flex-col justify-center">
      
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Saya selalu terbuka untuk diskusi proyek baru atau sekadar menyapa. 
          Pilih platform favoritmu untuk menghubungi saya!
        </p>
      </div>

    
      <div className="max-w-6xl w-full mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {contacts.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="noreferrer"
              className="group" // Group hover effect
            >
              <ElectricBorder
                color="#FF3F28" // Merah
                speed={1}
                chaos={0.1}
                thickness={2}
                cornerRadius={16}
                className="h-full w-full"
              >
                <div className="
                  bg-zinc-900 
                  h-full 
                  m-0.5 
                  p-8 
                  rounded-2xl 
                  flex flex-col items-center text-center justify-center 
                  gap-4
                  border border-transparent
                  group-hover:bg-zinc-800 
                  transition-all duration-300
                ">
                  
                  {/* Icon dengan efek bounce pas di-hover */}
                  <div className="group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 mb-2">{item.desc}</p>
                    <span className="text-sm text-gray-300 font-medium border-b border-red-500 pb-0.5">
                      {item.value}
                    </span>
                  </div>

                </div>
              </ElectricBorder>
            </a>
          ))}

        </div>
      </div>
      
  
    </section>
  )
}

export default Contact;