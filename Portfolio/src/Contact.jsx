import React from 'react'
import {useForm, ValidationError} from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvoykdp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section id='contact'>
      <h1 className='text-3xl tracking-widest font-extrabold mt-44 mb-14 z-index-1 text-center bg-gradient-to-tr from-teal-500 to-teal-900 text-transparent bg-clip-text'>Contact</h1>
      <div className=' flex flex-col md:flex-row align-items-center justify-center container '>
        <div className='w-full form-text text-gray-300 leading-9'>
          <p>Fill the form to send <br></br>me a message through E-mail or<br></br> contact me through my phone number <br></br> <strong>0593628367 or 0204785887</strong></p>
        </div>
        <div className="contact w-full">
          <form className='form ' onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id='name ' placeholder='Enter your name ' className='form-control' />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="email" name="email" id='Email' placeholder='Enter your e-mail' className='form-control' />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <input type="textarea" name="message" id='Message' placeholder='Write your message here' className='form-control' />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input type="submit" disabled={state.submitting} className='btn btn-info btn-block btn-md mt-4' value="Submit" />

              <a href="#" ><p className='text-center '>Or contact me on whatsApp <br />@0593628367 </p></a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact;

