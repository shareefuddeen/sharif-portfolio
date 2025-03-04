import React from 'react'
import {useForm, ValidationError} from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvoykdp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section id='contact' className='pb-4'>
      <h1 className='text-3xl tracking-widest font-extrabold mt-44 mb-14 z-index-1 text-center text-yellow-500'>Contact</h1>
      <div className=' flex flex-col md:flex-row align-items-center justify-center container '>
        <div className='w-full form-text text-gray-300 leading-9'>
          <p>Fill the form to send <br></br>me a message through E-mail or<br></br> contact me through my phone number <br></br> <strong>0593628367 or 0204785887</strong></p>
        </div>
        <div className="contact w-full">
          <form className='form ' onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" autoComplete='true' name="name" id='name ' placeholder='Enter your name ' className='form-control' />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="email" autoComplete='true' name="email" id='Email' placeholder='Enter your e-mail' className='form-control' />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <input type="textarea" autoComplete='true' name="message" id='Message' placeholder='Write your message here' className='form-control' />
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />

              <input type="submit" disabled={state.submitting} className='btn bg-yellow-500 btn-block btn-md mt-4' value="Submit" />

            </div>
              <a href="https://wa.me/qr/UTV5UQGMOP3OG1" ><p className='mx-auto inline  '>Or contact me on whatsApp <br />@0593628367 </p></a>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact;

