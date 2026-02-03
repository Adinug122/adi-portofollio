import React from 'react'
import gym from '../assets/gym.png';
import define from '../assets/define.png'
import ElectricBorder from './react-bits/ElectricBorder';
import perustakaan from '../assets/perpustakaan.png';
import desa from '../assets/desa.png';
import servic from '../assets/servic.png';
function Project() {

    const project = [
        {id:1,
         name:"System Gym",
         img:gym,
         desciption:"Aplikasi berbasis web untuk pengelolaan data member gym, sistem membership, dan penjadwalan latihan",
         link:"https://github.com/Adinug122/sistem-gym",
        },
        {
         id:2,
         name:"Define",
         img:define,
         desciption:"Aplikasi berbasis web untuk pembelajaran terintegrasi dengan gemini ai sehingga user bisa dicarikan jalur pembelajaran",
         link:"https://github.com/Adinug122/education-web-app"
        },
        {
        id:3,
        name:"System Perpustakaan",
        img:perustakaan,
        desciption:"Aplikasi berbasis Web untuk mengelola perpustakaan mulai dari peminjaman sampai pengembalian",
        link:"https://github.com/Adinug122/sistem-perpustakaan"
        },
        {
        id:4,
        name:"System Desa",
        img:desa,
        desciption:"Aplikasi berbasis Web untuk mengelola desa mulai crud pengumuman dan galery",
        link:"https://github.com/Adinug122/sistem-perpustakaan"
        },
        {
        id:5,
        name:"Servic (Pengingat Service)",
        img:servic,
        desciption:"Aplikasi mobile untuk mengingatkan kapan jadwal service motor",
        link:"https://github.com/breliandwioktaviani/cobauas"
        }
    ]

  return (
    
 <section id='project' className='mt-20  '>
    
<h2 className='text-center font-bold mt-10 text-3xl text-white'>My Project</h2>
<div className='max-w-7xl mx-auto flex justify-center items-center '>
<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 items-stretch mt-10">
    {project.map((item)=>(
       <ElectricBorder
  color="#FF3F28"
  speed={1}
  key={item.id}
  chaos={0.25}
  thickness={3}
  borderRadius={9}
  className="m-8"
>
      <div  className="bg-gradient-to  from-[#1f0f17] h-full to-[#160a1a] m-0.5 flex flex-col  text-white  p-6 rounded-lg ">
  <a href="#">
    <img className="rounded-lg pt-5 object-cover h-52 w-full" src={item.img}  alt={item.name} />
  </a>
  <a href="#">
    <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
      {item.name}
    </h5>
  </a>
  <p className="mb-6 flex-grow line-clamp-3 ">
    {item.desciption}
  </p>
  <a
    href={item.link}
    className="inline-flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
  >
Detail
  </a>
</div>
</ElectricBorder> 
       
    )
    )}
   

</div>
</div>
 </section>
  )
}

export default Project