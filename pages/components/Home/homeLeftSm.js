"use client"

import React, { useEffect, useRef, useState } from 'react'
import NavbarSm from '../NavbarSm'
import Menu from './Menu'

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
    console.log(showMenu);
  },[showMenu])

  return (
    <div className='bg'>
      <video src='/bg.mp4' autoPlay loop muted/>
    <div className='home_left_sm'>
     {!showMenu? <NavbarSm showMenu={showMenu} hideMenu={hideShowMenu} /> : null}
      
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
      <video src="/3D.mp4" ref={vidRef} setPlay={!play?true:false}></video>
      {/* <button> */}
      {!play?<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/play--v1.png" alt="play--v1" onClick={handlePlayVideo}/>: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/pause--v1.png" alt="pause--v1" onClick={handlePauseVideo}/>}
      {/* </button> */}
      {/* <div></div> */}

      </div>
    </div>

    <Menu showMenu={showMenu} hideShowMenu={hideShowMenu}/>
    </div>
  )
}

export default homeLeftSm
