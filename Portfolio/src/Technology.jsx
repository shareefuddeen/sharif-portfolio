import { InView } from 'react-intersection-observer';
import tech from './assets/tech.png';
import techImage from './assets/tech over.png';

const Technology = () => {
    return (
        <div id='technology' className='p-4 '>
            <div className="blocks">
                <h1 className='text-3xl tracking-widest mb-1 font-extrabold mt-4 text-center text-yellow-500'>Technologies</h1>
                <img src={tech} alt="tech image" className='techImage w-3/4 h-3/4 mx-auto' />
            </div>
        </div>

    )
}
export default Technology;