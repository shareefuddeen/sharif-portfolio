import React, { useState } from 'react'
import sharif from './assets/About me.jpg';
import img1 from './assets/9190d5591e405abe5bdbb9f3d1018ecb.jpg';
import img2 from './assets/a633af67a4393c596a9e0a02e1fe66f5.jpg'

const About = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const text = 'A passionate web developer with a keen eye for design and functionality. I specialize in crafting seamless digital experiences,and I am always eager to bring innovative ideas to life. Right now, I’m learning more about Django and Django Rest Framework (DRF) to create better and more powerful web applications. I also have an interest in e-commerce and enjoy working on projects like dropshipping that bring ideas to life. When I am not coding, I enjoy exploring new technologies, thinking of creative business ideas, and staying up-to-date with the latest in web development. I am always excited to connect and work on interesting projects. Let’s create something awesome together! '
  const screenWidth = window.innerWidth;
  let threshold;

  if (screenWidth <= 768) {
    threshold = 0.01;
  } else {
    threshold = 0.01;
  }
  return (
    <section id='about'>
      <div className='my-22'>
        <h1 className='text-3xl mb-6 tracking-widest font-extrabold mt-12 text-center text-yellow-500'>About me</h1>
        <div className='flex flex-col lg:flex-row  align-items-center about-grid'>

          <div className>
            <img loading='lazy' src={sharif} className='w-3/4 h-3/4 mx-auto lg:mx-0 lg:w-full lg:h-full' alt='about-image' />
          </div>

          <div className='mx-auto  text-left p-4'>
            <p className='text-xl text-gray-300 tracking-widest leading-8'><span className='text-4xl leading-8 tracking-widest font-extrabold text-center text-yellow-500'>Hi, I'm ShaRif,</span><br />{isExpanded ? text : `${text.substring(0, 183)}...`}</p>
            <button onClick={() => setIsExpanded(!isExpanded)} className='read-more text-white focus:outline-none bg-none border-2 border-yellow-500 hover:bg-yellow-500 hover:font-bold px-3 py-2 rounded-xl'>{isExpanded ? 'Read less' : 'Read more'}</button>
          </div>
        </div>
      </div>
      <div className='mt-12 mx-4'>
        <div className='blocks p-4 flex flex-col lg:flex-row text-center md:text-start align-items-center justify-center'>
          <img loading='lazy' src={img1} className='rounded-md mx-auto' alt="diffferent languages" />
          <div>
            <h1 className='font-mono text-yellow-500 '>Different Languages and <br />Frameworks? </h1>
            <p className='font-sans text-xl tracking-wider font-bold'>No problem. I can adapt to any Framework within a shorter period as short as one week to be able to get my hands fully working.</p>
          </div>
        </div>
        <div className='blocks p-4 mt-20 flex flex-col lg:flex-row text-center align-items-center justify-center'>
          <div>
            <h1 className='font-mono text-yellow-500 '>Software Engineering </h1>
            <p className='font-sans text-xl tracking-wider  font-bold'>As a software engineer and web developer, I specialize in designing and developing high-performance, scalable, and user-friendly applications.</p>
          </div>
          <img loading='lazy' src={img2} className='mx-auto rounded-md w-full' alt="Software engineering" />
        </div>
      </div>

    </section>

  )
}
export default About;

