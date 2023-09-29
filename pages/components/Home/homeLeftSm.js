"use client"

import React, { useEffect, useRef, useState } from 'react'
import NavbarSm from '../NavbarSm'
import Menu from './Menu'
import Script from 'next/script'
import Button from '../NavButton'
import Btn from '../Btn'

const homeLeftSm = () => {
  const [showMenu, setShowMenu] = useState(false)

  const hideShowMenu = (prev) => {
    setShowMenu(!prev)
    console.log(12);
  }

  const [play, setPlay] = useState(false)
  const vidRef = useRef()

  const handlePlayVideo = () => {
    setPlay(prev => !prev)
    vidRef.current.play()
  }

  const handlePauseVideo = () => {
    setPlay(prev => !prev)
    vidRef.current.pause()
  }

  useEffect(()=>{
    // let circ = new CircleType(document.getElementById('circ'));
    //     circ.raduis(360);
  },[])

  return (
    <>
   
    <div className='bg'>
      <video src='/bg.mp4' autoPlay loop muted/>
    <div className='home_left_sm'>
     {!showMenu? <NavbarSm showMenu={showMenu} hideMenu={hideShowMenu} /> : null}
      
      <h2>
        <span>WE CREATE</span>
        <span><i>A</i>WESOME</span>
        <span>
            {/* <ul> */}
            {/* <li> */}
                DESIGN
                {/* </li> */}
            {/* <li>Branding</li>
            <li>Development</li> */}
            {/* </ul> */}
        </span>
      </h2>
      <div className='scroll'>
        <p className='arrow'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
        </svg>

        </p>
        <div className='scroll_right '>
            {/* <p>explore collection</p> */}
           <Btn value={"explore collections"} />
            <p></p>
           <Btn value={"Community"} />
            {/* <p>Community</p> */}
        </div>
      </div>
      <div className='vid_div'>
      <video src="/3D.mp4" ref={vidRef} setPlay={!play?true:false}></video>
      {/* <button> */}
      {!play?<svg xmlns="http://www.w3.org/2000/svg" onClick={handlePauseVideo} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
</svg>

: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={handlePauseVideo} fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
</svg>
}
      {/* </button> */}
      {/* <div></div> */}

     
    

    

      </div>
    </div>

    <Menu showMenu={showMenu} hideShowMenu={hideShowMenu}/>
    </div>
    </>
  )
}

export default homeLeftSm
