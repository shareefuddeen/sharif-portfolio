import React from "react";
import project from './assets/pexels-julia-m-cameron-4144223.jpg';
import { InView } from 'react-intersection-observer';


const Project = () => {
    return (
        <section id='project' className=' mt-44 '>
            <h1 className='text-3xl tracking-widest font-extrabold  mb-14 text-center text-yellow-500'>Projects</h1>
            <InView triggerOnce={false} threshold={0.01}>
                {({ inView, ref }) => (
                    <div ref={ref} className={`animate-from-right w-1/2 md:w-full mx-auto transition duration-500 rounded-lg p-2 text-gray-300 text-center tracking-wide leading-6 ${inView ? 'show-animate' : ''}`}>
                        <img loading='lazy' src={project} className='mx-auto rounded-md w-3/4 h-3/4' alt='Project' />
                    </div>
                )}
            </InView>
        </section>
    )
}
export default Project;