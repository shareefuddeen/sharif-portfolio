import React, { useState } from 'react';
import menu from './assets/icons/menu.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [isOpen,setisOpen] = useState(false)
    return (
        <div className="container  w-full ">
            <div className="flex flex-nowrap items-center justify-between ">
                <h2 className='font-sans mb-3 '>codeRif</h2>
                <button className='focus:outline-none' onClick={()=>setisOpen(!isOpen)} >
                    {isOpen? ( <span className='text-3xl text-black'>X</span> ):(
                        <img src={menu} width={22} height={22} alt="menu" className='flex mb-3 lg:hidden'/>
                    )}
                </button>
                {/* wider screen */}
                <ul className="nav1 hidden lg:flex justify-between py-4 gap-6 text-2xl text-white">
                    <li><Link to="services" className="text-white text-2xl hover:no-underline hover:border-b border-yellow-600  px-4 py-1 rounded-full transition duration-400 cursor-pointer" spy={true} smooth={true} offset={-50} duration={400}>Services</Link></li>
                    <li><Link to="contact" className='text-white text-2xl hover:no-underline hover:border-b border-yellow-600  px-4 py-1 rounded-full transition duration-400 cursor-pointer ' spy={true} smooth={true} offset={-50} duration={400}>Contact</Link></li>
                    <li><Link to="project" className='text-white text-2xl hover:no-underline hover:border-b border-yellow-600  px-4 py-1 rounded-full transition duration-400 cursor-pointer ' spy={true} smooth={true} offset={-50} duration={400}>Projects</Link></li>
                    <li><Link to="technology" className='text-white text-2xl hover:no-underline hover:border-b border-yellow-600  px-4 py-1 rounded-full transition duration-400 cursor-pointer ' spy={true} smooth={true} offset={-50} duration={400}>Techology</Link></li>
                    <li><Link to="about" className='text-white text-2xl hover:no-underline hover:border-b border-yellow-600 px-4 py-1 rounded-full transition duration-400 cursor-pointer'spy={true} smooth={true} offset={-50} duration={400}>About</Link></li>
                </ul>
             
            </div>
               {/* smaller screens */}
              { isOpen && ( 
                <div className ='lg:hidden bg-gray-700 mx-0 '>
                    <ul className='flex flex-col p-6 transition duration-500'>
                        <li><Link onClick={()=>setisOpen(!isOpen)} to="services" className="text-white text-2xl hover:no-underline hover:bg-gray-600 px-6 block transition duration-500 cursor-pointer" spy={true} smooth={true} offset={-50} duration={500} >Services</Link></li>
                        <li><Link onClick={()=>setisOpen(!isOpen)} to="contact" className='text-white text-2xl hover:no-underline hover:bg-gray-600 px-6 block transition duration-500 cursor-pointer'spy={true} smooth={true} offset={-50} duration={500} >Contact</Link></li>
                        <li><Link onClick={()=>setisOpen(!isOpen)} to="about" className='text-white text-2xl hover:no-underline hover:bg-gray-600 px-6 block transition duration-500 cursor-pointer' spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
                        <li><Link onClick={()=>setisOpen(!isOpen)} to="technology" className='text-white text-2xl hover:no-underline hover:bg-gray-600 px-6 block transition duration-500 cursor-pointer' spy={true} smooth={true} offset={-50} duration={400}>technology</Link></li>
                        <li><Link onClick={()=>setisOpen(!isOpen)} to="project" className='text-white text-2xl hover:no-underline hover:bg-gray-600 px-6 block transition duration-500 cursor-pointer' spy={true} smooth={true} offset={-50} duration={400}>Projects</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Navbar;