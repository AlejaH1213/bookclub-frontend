import React from 'react'
import notFoundPic from '../assets/image-from-rawpixel-id-10092909-png.png'

function NotFound() {
  return (
    <div className='not-found'>
    <h2 >Not Found Try Again</h2>
    <img 
    src={notFoundPic}
    style={{
      height: '600px',
      width: '600px'
    }}
    />
  </div>
  )
}

export default NotFound