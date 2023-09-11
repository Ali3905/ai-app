import React from 'react'
import NavbarSm from '../NavbarSm'

const homeLeftSm = () => {
  return (
    <div className='bg'>
      <video src='/bg.mp4' autoPlay loop muted/>
    <div className='home_left_sm'>
      <NavbarSm />
      
      <h2>
        <span>We Create</span>
        <span>Awesome</span>
        <span>
            {/* <ul> */}
            {/* <li> */}
                Design
                {/* </li> */}
            {/* <li>Branding</li>
            <li>Development</li> */}
            {/* </ul> */}
        </span>
      </h2>
      <div className='scroll'>
        <p className='arrow'>&darr;</p>
        <div className='scroll_right'>
            <p>Scroll</p>
            <p></p>
            <p>Down</p>
        </div>
      </div>
      <div className='vid_div'>
      <video src="/3D.mp4" autoPlay loop muted ></video>
      <button></button>
      {/* <div></div> */}

      </div>
    </div>
    </div>
  )
}

export default homeLeftSm
