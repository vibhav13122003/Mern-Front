//
// CreateAccountModal Component
//
import  { useState } from "react";
import google from "./assets/google.png";
import eye from "./assets/eye.png";
import "./index.css";

function CreateAccountModal({ showModal, onClose }) {
  // Manage whether the modal is in "Create Account" (default) or "Sign In" mode.
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  // Only render the modal when showModal is true
  if (!showModal) return null;

  return (
    <div id='create-form' style={{ zIndex: 2, display: "block" }}>
      <div className='create-account' style={{ width: "70%", margin: "auto" }}>
        <div className='modal-content'>
          {/* Modal Header */}
          <div className='modal-header custom-modal-header d-flex justify-content-center mb-4'>
            <div className="container container5">
              <p className='text-center'>
                Let`s learn, share &amp; inspire each other with our passion for
                computer engineering.
                {isSignIn ? " Welcome Back!" : " Sign up now 🤘🏼"}
              </p>
            </div>
            <button
              id='close-form'
              type='button'
              className='close'
              aria-label='Close'
              onClick={() => {
                // Reset to Create Account mode when closing.
                setIsSignIn(false);
                onClose();
              }}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>

          <div className='px-4'>
            {/* Toggle between Sign In and Create Account */}
            <div className='d-flex justify-content-between align-items-center mb-4'>
              <h4 className='fw-bold' id='update'>
                {isSignIn ? "Sign In" : "Create Account"}
              </h4>
              <button className='btn' onClick={toggleSignIn}>
                {isSignIn
                  ? "Don't have an account? Create Account"
                  : "Already have an account? Sign In"}
              </button>
            </div>

            <div className='container text-center'>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex flex-column gap-2'>
                    {/* Show first/last name only for sign up */}
                    {!isSignIn && (
                      <div className='d-flex gap-2'>
                        <input
                          type='text'
                          className='form-control custom-input'
                          placeholder='First Name'
                          id='first-name'
                        />
                        <input
                          type='text'
                          className='form-control custom-input'
                          placeholder='Last Name'
                          id='last-name'
                        />
                      </div>
                    )}

                    <input
                      type='email'
                      className='form-control custom-input'
                      placeholder='Email'
                    />

                    {/* Password Field */}
                    <div className='position-relative'>
                      <input
                        type='password'
                        className='form-control custom-input'
                        placeholder='Password'
                      />
                      <button
                        className='btn position-absolute'
                        style={{
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                        }}
                      >
                        <img src={eye} alt='eye' width='18px' height='18px' />
                      </button>
                    </div>

                    {/* Forgot Password Link for Sign In mode */}
                    {isSignIn && (
                      <div className='text-end mt-2'>
                        <a href='#' className='text-primary'>
                          Forgot Password?
                        </a>
                      </div>
                    )}

                    {/* Confirm Password Field only for Sign Up */}
                    {!isSignIn && (
                      <>
                        <input
                          type='password'
                          className='form-control custom-input mb-4'
                          placeholder='Confirm password'
                        />
                        <button
                          className='btn position-absolute'
                          style={{
                            right: "555px",
                            top: "43%",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                          }}
                        ></button>
                      </>
                    )}

                    <button
                      className='btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4'
                      id='update1'
                    >
                      {isSignIn ? "Sign In" : "Create Account"}
                    </button>

                    <div className='d-flex flex-column gap-2'>
                      <button className='btn d-flex align-items-center justify-content-center gap-2 button-signup-group'>
                        <img
                          src='https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg'
                          alt='facebook'
                        />
                        Sign Up with Facebook
                      </button>
                      <button className='btn d-flex align-items-center gap-2 button-signup-group justify-content-center'>
                        <img src={google} alt='google' />
                        Sign Up with Google
                      </button>
                    </div>
                  </div>
                </div>

                {/* Illustration Column */}
                <div className='col'>
                  <div className='d-flex flex-column'>
                    <img
                      src='https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg'
                      alt='atg-illustration'
                    />
                    <p className='info-signup'>
                      By signing up, you agree to our Terms &amp; conditions,
                      Privacy policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .px-4 */}
        </div>
      </div>
    </div>
  );
}

export default CreateAccountModal;
