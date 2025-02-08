import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import location from './assets/location.png';
import thumbs from './assets/thumb.png';

import clear from './assets/clear.png';
import Header from './Header.jsx';

import CreateAccountModal from './CreateAccountModal.jsx';
import Banner from './Banner.jsx';
import NavBar from './NavBar.jsx';
import Posts from './Posts.jsx';


// Sidebar Component
//
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='container d-none d-lg-flex flex-column mt-4'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <img
              src={location
              }
              alt='location'
            />
            <input
              type='text'
              placeholder='Enter Your Location'
              className='input-text'
            />
          </div>
          <button className='btn'>
            <img src={clear} alt='edit' />
          </button>
        </div>
        <hr className='my-1' />
        <div className='d-flex align-items-center gap-2 mb-4'>
          <img
            src={thumbs}
            alt='thumbs up'
          />
          <span className='text-recommended'>REcommended Groups</span>
        </div>
        <div className='d-flex flex-column gap-4'>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-2'>
              <img
                className='rounded-circle'
                alt='Profile'
                src='https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg'
                width='36'
                height='36'
              />
              <div className='text-wrapper'>Leisure</div>
            </div>
            <a className='btn follow rounded-5' href='/'>
              Follow
            </a>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-2'>
              <img
                className='rounded-circle'
                alt='Profile'
                src='https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg'
                width='36'
                height='36'
              />
              <div className='text-wrapper'>Activism</div>
            </div>
            <a className='btn follow rounded-5' href='/'>
              Follow
            </a>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-2'>
              <img
                className='rounded-circle'
                alt='Profile'
                src='https://dont-copy.netlify.app/assets/recGroup3-AxHGDmNo.jpg'
                width='36'
                height='36'
              />
              <div className='text-wrapper'>MBA</div>
            </div>
            <a className='btn follow rounded-5' href='/'>
              Follow
            </a>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-2'>
              <img
                className='rounded-circle'
                alt='Profile'
                src='https://dont-copy.netlify.app/assets/recGroup4-cA6Wedko.jpg'
                width='36'
                height='36'
              />
              <div className='text-wrapper'>Philosophy</div>
            </div>
            <a className='btn follow rounded-5' href='/'>
              Follow
            </a>
          </div>
        </div>
        <button className='btn text-end mt-5 text-primary text-capitalize'>
          see more...
        </button>
      </div>
    </div>
  );
}

//
// MainContent Component (container3) – combines Posts and Sidebar
//
function MainContent() {
  return (
    <div className='container3'>
      <div
        className='mx-auto d-flex gap-5 justify-content-center'
        style={{ maxWidth: "1040px" }}
      >
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

//
// The App Component – combines all components
//
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header onShowModal={handleShowModal} />
      <CreateAccountModal showModal={showModal} onClose={handleCloseModal} />
      <Banner />
      <NavBar />
      <hr className='mx-auto mt-0' style={{ maxWidth: "1040px" }} />
      <MainContent />
      {/* Extra spacing to simulate the many <br> tags in your original HTML */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
