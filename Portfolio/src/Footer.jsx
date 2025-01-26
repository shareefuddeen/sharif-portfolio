import React from 'react'
import facebook from './assets/icons/facebook-svgrepo-com.png';
import instgram from './assets/icons/instagram-svgrepo-com.png';
import linkIdn from './assets/icons/linkedin-svgrepo-com.png';
import tiktok from './assets/icons/tiktok-svgrepo-com.png';
import whatsApp from './assets/icons/whatsapp-svgrepo-com.png';
import logo from './assets/default.png'
import { Link } from 'react-scroll';

const Footer =()=>{
	return(
		<section id='footer'>
		<div className='flex justify-center align-items-center p-4 shadow-md mt-22'>
			<div className='flex-col '>
			<div>
				<ul className='flex flex-row space-x-20 justify-center items-center '>
					<li><Link spy={true} smooth={true} offset={50} duration={400} className='text-white text-xl transition duration-500 cursor-pointer hover:border-b pb-2' to='about'>About me</Link></li>
					<li><Link spy={true} smooth={true} offset={50} duration={400} className='text-white text-xl transition duration-500 cursor-pointer hover:border-b pb-2' to='project'>Projects</Link></li>
					<li><Link spy={true} smooth={true} offset={50} duration={400} className='text-white text-xl transition duration-500 cursor-pointer hover:border-b pb-2' to='contact'>Contact</Link></li>
					<li><Link spy={true} smooth={true} offset={50} duration={400} className='text-white text-xl transition duration-500 cursor-pointer hover:border-b pb-2' to='services'>Services</Link></li>
				</ul>
				</div>
			 	<div className='flex justify-center space-x-10 align-items-center space-y-4'>
                    <a href="https://www.facebook.com/profile.php?id=100090095863256"><img width={11} className='relative top-2'  height={6} src={facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com/sharifshari77?igsh=YzljYTk1ODg3Zg=="><img width={24} height={22}src={instgram} alt="instgram" /></a>
                    <a href="https://www.linkedin.com/in/awal-sharif-489a09304?trk=contact-info"><img width={24} height={22}src={linkIdn} alt="linkIdn" /></a>
                    <a href="https://wa.me/qr/UTV5UQGMOP3OG1"><img width={24} height={22}src={whatsApp} alt="whatsApp" /></a>
                    <a href="https://vm.tiktok.com/ZMk9sfkrE/"><img width={24} height={22}src={tiktok} alt="tiktok" /></a>
                </div>
					<p className='text-center mt-4 '>&copy;2025 Sharif. All Rights Reserved</p>
					<img src={logo} className='w-14 h-14 mx-auto mt-4 rounded-md' alt='logo'/>
                </div>				
		</div>
		</section>
	)
} 
export default Footer;
  
