import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import arrow from "./assets/arrow.jpg";
import group from "./assets/group.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar navbar-expand-lg bg-white sticky-top shadow-sm'>
      <div className='container' style={{ maxWidth: "1040px" }}>
        {/* Brand Logo */}
        <a className='navbar-brand fw-bold' href='/'>
          MyBrand
        </a>

        {/* Hamburger Menu Button */}
        <button
          className='navbar-toggler'
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          aria-controls='navbarNav'
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navbar Links - Collapsible */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id='navbarNav'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' href='/'>
                All Posts (32)
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Article
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Event
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Education
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Job
              </a>
            </li>
          </ul>

          {/* Right-Side Buttons */}
          <div className='d-flex align-items-center'>
            <button className='btn btn-light me-2'>
              Write Post <img src={arrow} alt='arrow down' />
            </button>
            <button className='btn btn-primary d-flex align-items-center'>
              <img src={group} alt='Join group' className='me-1' />
              Join Group
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
