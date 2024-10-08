import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src="/src/images/brand_logo.png" alt="Logo" />

        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <button>Login</button>
      </nav>
    </>
  );
};

export default Navbar;
