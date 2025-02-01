import React from "react";
import project from './assets/pexels-julia-m-cameron-4144223.jpg'

const Project = () => {
    return (
        <section id='project' className='Project mt-44'>
            <h1 className='text-3xl tracking-widest font-extrabold  mb-14 z-index-1 text-center bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text'>Projects</h1>
            <img src={project} className='mx-auto rounded-md w-full'  alt='Project'/>
        </section>
    )
}
export default Project;