import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import logo from "./assets/whole.png";
import search from "./assets/search.png";
import arrow from "./assets/arrow.jpg";

function Header({ onShowModal }) {
  return (
    <div className='header-container container d-none d-lg-flex align-items-center justify-content-between p-3'>
      <div className='header-img' style={{ zIndex: 1 }}>
        <img src={logo} width='162.57px' height='24px' alt='Logo' />
      </div>
      <div className='header-form'>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ width: "360px", position: "relative" }}
        >
          {/* The search icon is absolutely positioned inside the input */}
          <img
            alt='Search'
            src={search}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              pointerEvents: "none",
            }}
          />
          <input
            className='form-control custom-input-search'
            type='search'
            placeholder='Search for your favorite groups in ATG'
            aria-label='Search'
            style={{
              width: "100%",
              borderRadius: "21px",
              paddingLeft: "40px", // extra space for the icon
            }}
          />
        </form>
      </div>
      <div className='header-button'>
        <button
          id='show'
          className='btn custom-btn-create p-0 m-0'
          onClick={onShowModal}
        >
          Create Account.{" "}
          <span className='text-primary fw-bold'>
            It's Free!
            <img className='rounded-circle' alt='Profile' src={arrow} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
