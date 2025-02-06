import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
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
          <InView triggerOnce={false} rootMargin="" threshold={threshold}>
            {({ inView, ref }) => (
              <div ref={ref} className={`about-image mx-auto animate-from-right  ${inView ? 'show-animate' : ''}`}>
                <img src={sharif} className='w-1/2 h-1 lg:w-full lg:h-full' alt='about-image' />
              </div>
            )}
          </InView>

          <div className='mx-auto  text-left p-4'>
            <p className='text-xl text-gray-300 tracking-widest leading-8'><span className='text-4xl leading-8 tracking-widest font-extrabold text-center text-yellow-500'>Hi, I'm Sharif,</span><br />{isExpanded ? text : `${text.substring(0, 183)}...`}</p>
            <button onClick={() => setIsExpanded(!isExpanded)} className='read-more text-white focus:outline-none bg-none border-2 border-yellow-500 hover:bg-yellow-500 hover:font-bold px-3 py-2 rounded-xl'>{isExpanded ? 'Read less' : 'Read more'}</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center align-items-center p-4 mt-24 space-x-16 blocks'>
        <div>
          <img src={img1} alt="image 2" className='rounded-md' />
        </div>
        <div className='text-yellow-200 my-6 lg:my-0'>
          <h1 className='font-mono'>Different Languages and <br />Frameworks?</h1>
          <p className='font-sans text-xl tracking-wider'>No problem. I can adapt to any Framework within a short <br />period as short as one week to be able to get <br />my hands fully working.</p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center align-items-center mt-16 p-4 space-x-16 blocks'>
        
        <div className='text-yellow-200 my-6 lg:my-0'>
          <h1 className='font-mono'>Software Engineering </h1>
          <p className='font-sans text-xl tracking-wider'>As a software engineer and web developer, <br /> I specialize in designing and developing<br /> high-performance, scalable, and user-friendly <br />applications.</p>
        </div>
        <div>
          <img src={img2} className='rounded-md object-center relative right-7 lg:right-0' alt="image 2" />
        </div>
      </div>
    </section>

  )
}
export default About;

