import React from 'react'
import html from './assets/HTML5.jpg'
import css from './assets/Css.jpg'
import javascript from './assets/javascript.jpg'
import bootstrap from './assets/Bootstrap.jpg'
import django from './assets/Django.jpg'
import api from './assets/API.jpg'
import react from './assets/React.jpg'


const Technology = () =>{
    return(
        <div id='technology'>
            <h1 className='text-3xl tracking-widest font-extrabold mt-44 mb-14 z-index-1 text-center bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text'>Technologies</h1>
            <div className='flex flex-wrap gap-6 align-center technology mt-12 justify-center'>
                <img src={html} alt="html" width={122} height={42} className='tech-images rounded-lg'/>
                <img src={css} alt="css" width={122} height={42} className='tech-images rounded-lg'/>
                <img src={javascript} alt="javascript" width={122} height={42} className='tech-images rounded-lg'/>
                <img src={bootstrap} alt="bootstrap" width={122} height={42} className='tech-images rounded-lg'/>
                <img src={react} alt="react" width={122} height={42} className='tech-images rounded-lg'/>
                <img src={django} alt="django" width={122} height={42} className='tech-images rounded-lg'/>
                <img src={api} alt="api" width={122} height={42} className='tech-images rounded-lg'/>
            </div>
        </div>
    )
}
export default Technology;