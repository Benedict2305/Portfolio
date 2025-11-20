import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='container mb-4'>
      <div className="row">
        <div className="col-12">
            <div className="row align-items-center justify-content-center">
                <div className="col-6 footerBrand">
                    <h1>Benedict</h1>
                    <p className='fs-5'>I am an experienced Frontend Developer with lots of professional expertise in the field.</p>
                </div>
                <div className="col-6">
                    <form className='d-flex gap-4 justify-content-center'>
                        
                            <input type="email" placeholder='Enter your email' className='rounded-pill w-75 py-2 ps-3'/>

                        <input type="submit" value='Submit' className='rounded-pill px-4 fw-bolder'/>
                    </form>
                </div>
            </div>
        </div>

        <hr />
      </div>
    </div>
  ) 
}

export default Footer
