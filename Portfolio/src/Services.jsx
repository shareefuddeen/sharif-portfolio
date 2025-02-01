import { InView } from 'react-intersection-observer';
import backend from './assets/icons/icons8-web-development-50.png';
import ecommerce from './assets/icons/icons8-e-commerce-32.png';
import frontend from './assets/icons/icons8-laptop-coding-50.png';
import webopt from './assets/icons/icons8-website-optimization-66.png';
import fullstack from './assets/icons/icons8-google-code-50.png';


const Services = () => {

      const screenWidth = window.innerWidth;
  let threshold;

  if (screenWidth <= 768) {
    threshold = 0.1;
  } else {
    threshold = 0.5;
  }
    return (
        <section id="services">
            <div className="p-10 mt-4 mx-auto">
                <h2 className="text-3xl tracking-widest font-extrabold text-center bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text mt-12 mb-12">
                    Services
                </h2>
                <p className="mx-2 mt-2 text-center text-gray-300 text-lg tracking-wider">
                    I offer a range of web development services to help bring your ideas to life and create functional, user-friendly solutions for your business needs.
                </p>
                <div className='flex flex-col md:flex-row gap-14 md:gap-4'>
                    <InView triggerOnce={false} threshold={threshold}>
                        {({ inView, ref }) => (
                            <div ref={ref} className={`animate-from-right tech w-1/2 md:w-full mx-auto hover:bg-green-200  hover:text-green-800 transition duration-500 rounded-lg p-2 text-gray-300 text-center tracking-wide leading-6 ${inView ? 'show-animate' : ''}`}>
                                <img className="mx-auto" width={62} height={55} src={frontend} alt="frontend" />
                                <h4 className="font-sans font-extrabold tracking-wider text-2xl bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text">
                                    Front-End Development
                                </h4>
                                <p className="font-semibold">
                                    I create attractive, user-friendly interfaces using modern technologies like HTML, CSS, JavaScript, and frameworks to ensure a seamless user experience.
                                </p>
                            </div>
                        )}
                    </InView>

                    <div className="tech w-1/2 md:w-full mx-auto hover:bg-green-200 hover:text-green-800 transition duration-500 rounded-lg p-2 text-gray-300 text-center tracking-wide leading-6" >
                        <img className="mx-auto" width={62} height={55} src={fullstack} alt="fullstack" />
                        <h4 className="font-sans font-extrabold tracking-wider text-2xl bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text">
                            Full-Stack Web Development
                        </h4>
                        <p className="font-semibold">
                            From design to deployment, I build complete web applications with responsive front-end designs and reliable back-end systems.
                        </p>
                    </div>
                    <InView triggerOnce={false} threshold={threshold}>
                        {({ inView, ref }) => (
                            <div ref={ref} className={`animate-from-left tech w-1/2 md:w-full mx-auto hover:bg-green-200  hover:text-green-800 transition duration-500 rounded-lg p-2 text-gray-300 text-center tracking-wide leading-6 ${inView ? 'show-animate' : ''}`}>
                                <img className="mx-auto" width={62} height={55} src={backend} alt="backend" />
                                <h4 className="font-sans font-extrabold tracking-wider text-2xl bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text">
                                    Back-End Development
                                </h4>
                                <p className="font-semibold">
                                    I develop robust server-side applications, RESTful APIs, and databases using tools like Django and Django Rest Framework (DRF).
                                </p>
                            </div>
                        )}
                    </InView>

                </div>
                <div className="flex md:flex-row flex-col gap-14 md:gap-4 mt-4">
                    <InView triggerOnce={false} threshold={threshold}>
                        {({ inView, ref }) => (
                            <div ref={ref} className={`animate-from-right tech  w-1/2 md:w-full mx-auto hover:bg-green-200 hover:text-green-800 transition duration-500 rounded-lg p-2 text-gray-300 text-center tracking-wide leading-6 ${inView ? 'show-animate' : ''}`}>
                                <img className="mx-auto" width={62} height={55} src={ecommerce} alt="ecommerce" />
                                <h4 className="font-sans font-extrabold tracking-wider text-2xl bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text">
                                    E-Commerce Solutions
                                </h4>
                                <p className="font-semibold">
                                    I can help set up and customize e-commerce platforms, including dropshipping websites, to help your business grow online.
                                </p>
                            </div>
                        )}
                    </InView>


                    <InView triggerOnce={false} threshold={threshold}>
                        {({ inView, ref }) => (
                            <div ref={ref} className={`animate-from-left tech w-1/2 md:w-full mx-auto hover:bg-green-200 hover:text-green-800 transition duration-500 rounded-lg p-2 text-gray-300 text-center tracking-wide leading-6 ${inView ? 'show-animate' : ''}`}>
                                <img className="mx-auto" width={62} height={55} src={webopt} alt="webopt" />
                                <h4 className="font-sans font-extrabold tracking-wider text-2xl bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text">
                                    Website Maintenance and Optimization
                                </h4>
                                <p className="font-semibold">
                                    I provide ongoing support to keep your website updated, secure, and optimized for performance.
                                </p>
                            </div>
                        )}
                    </InView>
                </div>
            </div>

        </section>
    );
};

export default Services;
