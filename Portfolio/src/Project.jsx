import React from "react";
import project from './assets/pexels-julia-m-cameron-4144223.jpg'

const Project = () => {
    return (
        <section id='project' className='Project mt-44'>
            <h1 className='text-3xl tracking-widest font-extrabold  mb-14 text-center text-yellow-500'>Projects</h1>
            <img src={project} className='mx-auto rounded-md w-3/4 h-3/4'  alt='Project'/>
        </section>
    )
}
export default Project;