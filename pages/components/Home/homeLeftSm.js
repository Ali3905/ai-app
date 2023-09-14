"use client"

import React, { useEffect, useRef, useState } from 'react'
import NavbarSm from '../NavbarSm'
import Menu from './Menu'
import Script from 'next/script'

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
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </p>
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
    </>
  )
}

export default homeLeftSm
