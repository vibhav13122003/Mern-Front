
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import dot from "./assets/dot.svg";
import share from "./assets/share.png";
import location from "./assets/location.png";

import calendar from "./assets/calendar.png";


import eye from "./assets/eye.png";

function Posts() {
  return (
    <div className='posts-center position-relative'>
      {/* Post 1: Article */}
      <div
        className='d-flex flex-column border border-1 rounded-2'
        style={{
          maxWidth: "692px",
          borderColor: "rgb(224, 224, 224)",
          fill: "rgb(255, 255, 255)",
        }}
      >
        <img
          src='https://dont-copy.netlify.app/assets/nature-rDsfVg8l.jpg'
          alt='Nature'
          className='imagePost'
        />
        <div className='p-4'>
          <h3 className='d-flex'>✍️ Article</h3>
          <div className='d-flex gap-6 justify-content-between'>
            <h4>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
            <div className='btn align-self-start'>
              <div className='dropdown'>
                <div
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img
                    src={dot}
                    alt='more details'
                    height='28px'
                    width='28px'
                  />
                </div>
                <ul className='dropdown-menu'>
                  <li>
                    <button className='dropdown-item' type='button'>
                      Edit
                    </button>
                  </li>
                  <li>
                    <button className='dropdown-item' type='button'>
                      Report
                    </button>
                  </li>
                  <li>
                    <button className='dropdown-item' type='button'>
                      option 3
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className='d-flex align-items-center gap-5 list-unstyled'></ul>
          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-2'>
              <img
                className='rounded-circle'
                alt='Profile'
                src='https://dont-copy.netlify.app/assets/user1-COSOQoOX.jpg'
                width='48'
                height='48'
              />
              <div className='d-flex flex-column'>
                <div className='text-wrapper'>Siddharth Goyal</div>
                <div className='d-lg-none'>
                  <img src={eye} alt='watch' />
                  <span>1.4k views</span>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-none d-lg-block pe-4'>
                <img src={eye} alt='watch' />
                <span>1.4k views</span>
              </div>
              <button
                className='btn d-flex align-items-center gap-2'
                style={{ background: "rgb(237, 238, 240)" }}
              >
                <img src={share} alt='share' />
                <span className='d-lg-none'>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post 2: Education */}
      <div
        className='d-flex flex-column border border-1 rounded-2'
        style={{
          maxWidth: "692px",
          borderColor: "rgb(224, 224, 224)",
          fill: "rgb(255, 255, 255)",
        }}
      >
        <img
          src='https://dont-copy.netlify.app/assets/wood-SIbopgrg.jpg'
          alt='Nature'
          className='imagePost'
        />
        <div className='p-4'>
          <h3 className='d-flex'>🔬️ Education</h3>
          <div className='d-flex gap-6 justify-content-between'>
            <h4>
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h4>
            <div className='btn align-self-start'>
              <div className='dropdown'>
                <div
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img
                    src={dot}
                    alt='more details'
                    height='28px'
                    width='28px'
                  />
                </div>
                <ul className='dropdown-menu'>
                  <li>
                    <button className='dropdown-item' type='button'>
                      Edit
                    </button>
                  </li>
                  <li>
                    <button className='dropdown-item' type='button'>
                      Report
                    </button>
                  </li>
                  <li>
                    <button className='dropdown-item' type='button'>
                      option 3
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className='d-flex align-items-center gap-5 list-unstyled'></ul>
          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-2'>
              <img
                className='rounded-circle'
                alt='Profile'
                src='https://dont-copy.netlify.app/assets/15d7211204149d93adda6dfafb5d81f2-08Q1wamp.jpg'
                width='48'
                height='48'
              />
              <div className='d-flex flex-column'>
                <div className='text-wrapper'>Siddharth Goyal</div>
                <div className='d-lg-none'>
                  <img src={eye} alt='watch' />
                  <span>1.4k views</span>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-none d-lg-block pe-4'>
                <img src={eye} alt='watch' />
                <span>1.4k views</span>
              </div>
              <button
                className='btn d-flex align-items-center gap-2'
                style={{ background: "rgb(237, 238, 240)" }}
              >
                <img src={share} alt='share' />
                <span className='d-lg-none'>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post 3: Meetup */}
      <div
        className='d-flex flex-column border border-1 rounded-2'
        style={{
          maxWidth: "692px",
          borderColor: "rgb(224, 224, 224)",
          fill: "rgb(255, 255, 255)",
        }}
      >
        <img
          src='https://dont-copy.netlify.app/assets/car-kZ9O3U5Q.jpg'
          alt='Nature'
          className='imagePost'
        />
        <div className='p-4'>
          <h3 className='d-flex'>🗓️ Meetup</h3>
          <div className='d-flex gap-6 justify-content-between'>
            <h4>Finance &amp; Investment Elite Social Mixer @Lujiazui</h4>
            <div className='btn align-self-start'>
              <div className='dropdown'>
                <div
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img
                    src={dot}
                    alt='more details'
                    height='28px'
                    width='28px'
                  />
                </div>
                <ul className='dropdown-menu'>
                  <li>
                    <button className='dropdown-item' type='button'>
                      Edit
                    </button>
                  </li>
                  <li>
                    <button className='dropdown-item' type='button'>
                      Report
                    </button>
                  </li>
                  <li>
                    <button className='dropdown-item' type='button'>
                      option 3
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className='d-flex align-items-center gap-5 list-unstyled'>
            <li className='d-flex align-items-center gap-1'>
              <img src={calendar} alt='' width='20px' height='20px' />
              Fri, 12 Oct, 2018
            </li>
            <li className='d-flex align-items-center gap-1'>
              <img src={location} alt='location' width='20px' height='20px' />
              Ahmedabad, India
            </li>
          </ul>
          <button
            className='custom-post-link btn mb-4 fw-semibold'
            style={{ color: "rgb(229, 97, 53)", width: "100%" }}
          >
            Visit WebSite
          </button>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-2'>
              <img
                className='rounded-circle'
                alt='Profile'
                src='https://dont-copy.netlify.app/assets/c3ac7682e52df2e10d0a36ec3f243a44-6fhMyk-S.jpg'
                width='48'
                height='48'
              />
              <div className='d-flex flex-column'>
                <div className='text-wrapper'>Siddharth Goyal</div>
                <div className='d-lg-none'>
                  <img src={eye} alt='watch' />
                  <span>1.4k views</span>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-none d-lg-block pe-4'>
                <img src={eye} alt='watch' />
                <span>1.4k views</span>
              </div>
              <button
                className='btn d-flex align-items-center gap-2'
                style={{ background: "rgb(237, 238, 240)" }}
              >
                <img src={share} alt='share' />
                <span className='d-lg-none'>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post 4: Job */}
      <div
        className='d-flex flex-column border border-1 rounded-2'
        style={{
          maxWidth: "692px",
          borderColor: "rgb(224, 224, 224)",
          fill: "rgb(255, 255, 255)",
        }}
      >
        <div className='p-4'>
          <h3 className='d-flex'>💼️ Job</h3>
          <div className='d-flex gap-6 justify-content-between'>
            <h4>Software Developer</h4>
            <div className='btn align-self-start'>
              <div className='dropdown'>
                <div
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img
                    src={dot}
                    alt='more details'
                    height='28px'
                    width='28px'
                  />
                </div>
                <ul className='dropdown-menu'>
                  <li>
                    <button className='dropdown-item' type='button'>
                      Edit
                    </button>
                  </li>
                  <li>
                    <button className='dropdown-item' type='button'>
                      Report
                    </button>
                  </li>
                  <li>
                    <button className='dropdown-item' type='button'>
                      option 3
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className='d-flex align-items-center gap-5 list-unstyled'>
            <li className='d-flex align-items-center gap-1'>
              <img src='=' alt='' width='20px' />
              Innovaccer Analytics Private Ltd.
            </li>
            <li className='d-flex align-items-center gap-1'>
              <img src='data' alt='' height='20px' />
              Noida, India
            </li>
          </ul>
          <button
            className='custom-post-link btn mb-4 fw-semibold'
            style={{ color: "rgb(2, 184, 117)", width: "100%" }}
          >
            Apply on Timejobs
          </button>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-2'>
              <img
                className='rounded-circle'
                alt='Profile'
                src='https://dont-copy.netlify.app/assets/siddrath-t0piMZRc.jpg'
                width='48'
                height='48'
              />
              <div className='d-flex flex-column'>
                <div className='text-wrapper'>Siddharth Goyal</div>
                <div className='d-lg-none'>
                  <img src={eye} alt='watch' />
                  <span>1.4k views</span>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-none d-lg-block pe-4'>
                <img src={share} alt='share' />
                <span className='d-lg-none'>Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Posts;
