

import React, { useState } from "react";

const NavbarSm = ({showMenu, hideMenu}) => {
  const hideShowMenu = () => {
    hideMenu(showMenu)
  }

  return (
    <nav className="Navbar_Sm">
      <ul>
        <li>Logo</li>
        <li>
          {/* <svg><use href="/img/sprite.svg#plus"></use></svg> */}
          Become Client
        </li>
        {!showMenu?<li className="three_dots" onClick={hideShowMenu}>
          <span></span>
          <span></span>
          <span></span>
        </li>:<li className="three_dots" onClick={hideShowMenu}>
        &#10006;
        </li>}
      </ul>
    </nav>
  );
};

export default NavbarSm;
