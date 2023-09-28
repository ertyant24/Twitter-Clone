import React from 'react'
import NotFoundImage from '../../../public/error.jpg'

function NotFound() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
            <div className="col-6 offset-3 text-center mt-5">
                <h1 className='text-center mb-4 mt-3'>Not Found</h1>
                <img className='rounded-circle' src={NotFoundImage} alt="" width="400px"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
