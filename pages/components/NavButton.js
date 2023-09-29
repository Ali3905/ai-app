import React from 'react'

const NavButton = ({value}) => {
  return (
    <button class="btn" type="button">
    <strong>{value}</strong>
    <div id="container-stars">
      <div id="stars"></div>
    </div>

    <div id="glow">
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </button>
  )
}

export default NavButton
