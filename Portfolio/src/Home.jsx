import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import facebook from './assets/icons/facebook-svgrepo-com.png';
import instgram from './assets/icons/instagram-svgrepo-com.png';
import linkIdn from './assets/icons/linkedin-svgrepo-com.png';
import tiktok from './assets/icons/tiktok-svgrepo-com.png';
import whatsApp from './assets/icons/whatsapp-svgrepo-com.png';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import Technology from './Technology';


const Home = () => {
    return (<>
        <section className='hero animate'>
            <div className='hero h-screen md:h-screen  '>
                <Navbar />
                <div className='mt-40'>
                    <p className='text-2xl text-center font-serif'>
                        Welcome
                    </p>
                    <h1 className='text-6xl font-extrabold mt-4 text-center font-mono'>I am a developer|</h1>
                    <p className='text-xl mt-8 text-center mx-4 font-sans tracking-wider'>Technology is a tool of endless creativity, empowering us to learn, build, and innovate every day.</p>
                </div>
                <div className='flex images justify-center  my-5 space-x-6'>
                    <a href="https://www.facebook.com/profile.php?id=100090095863256"><img width={11}  height={6} src={facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com/sharifshari77?igsh=YzljYTk1ODg3Zg=="><img width={24} height={22}src={instgram} alt="instgram" /></a>
                    <a href="https://www.linkedin.com/in/awal-sharif-489a09304?trk=contact-info"><img width={24} height={22}src={linkIdn} alt="linkIdn" /></a>
                    <a href="https://wa.me/qr/UTV5UQGMOP3OG1"><img width={24} height={22}src={whatsApp} alt="whatsApp" /></a>
                    <a href="https://vm.tiktok.com/ZMk9sfkrE/"><img width={24} height={22}src={tiktok} alt="tiktok" /></a>
                </div>
                <div className='flex justify-center'>
                    <button className='outline outline-1 outline-white py-2 px-8 rounded-full text-lg hover:outline-teal-800 button'>contact Me</button>
                </div>
            </div>
        </section>
        
        <About/>
        <Services/>
        <Technology/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default Home;
