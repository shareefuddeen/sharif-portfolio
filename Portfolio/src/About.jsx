import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';
import sharif from './assets/About me.jpg'

const About = () => {

  const [isExpanded,setIsExpanded] =useState(false);
  const text ='A passionate web developer with a keen eye for design and functionality. I specialize in crafting seamless digital experiences,and I am always eager to bring innovative ideas to life. Right now, I’m learning more about Django and Django Rest Framework (DRF) to create better and more powerful web applications. I also have an interest in e-commerce and enjoy working on projects like dropshipping that bring ideas to life. When I am not coding, I enjoy exploring new technologies, thinking of creative business ideas, and staying up-to-date with the latest in web development. I am always excited to connect and work on interesting projects. Let’s create something awesome together! '
  const screenWidth = window.innerWidth;
  let threshold;

  if (screenWidth <= 768) {
    threshold = 0.01;
  } else {
    threshold = 0.3;
  }
  return (
    <section id='about'>
      <div className='my-22'>
        <h1 className='text-3xl mb-6 tracking-widest font-extrabold mt-12 text-center bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text'>About me</h1>
        <div className='grid md:grid-cols-2 sm:grid-cols-1  align-items-center about-grid'>
          <InView triggerOnce={false} rootMargin="" threshold={threshold}>
            {({ inView, ref }) => (
              <div ref={ref} className={`about-image mx-auto animate-from-right  ${inView ? 'show-animate' : ''}`}>
                <img src={sharif} width={664} height={622} alt='about-image' />
              </div>
            )}
          </InView>

          <div className='mx-auto  text-left p-4'>
            <p className='text-xl text-gray-300 tracking-widest leading-8'><span className='text-4xl leading-8 tracking-widest font-extrabold text-center bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text'>Hi, I'm Sharif,</span><br />{isExpanded ? text:`${text.substring(0,183)}...`}</p>
            <button onClick={()=>setIsExpanded(!isExpanded)} className='read-more text-white focus:outline-none bg-transparent  px-3 py-2 rounded-xl bg-gradient-to-tr from-teal-500 to-teal-900'>{isExpanded? 'Read less':'Read more'}</button>
          </div>
        </div>
      </div>

    </section>

  )
}
export default About;

