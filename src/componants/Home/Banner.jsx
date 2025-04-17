import React from 'react'

const Banner = () => {

  return (
    <>
      <div
        className="banner pt-185 pb-190"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-sm-11">
              <div className="banner-txt">
                <h3 className="banner-subtitle mt--9 mb-10">A New Approach to</h3>
                <h1 className="banner-title mb-20 cd-headline push">
                  <span>Study Of&nbsp;</span>
                  <span className="cd-words-wrapper">
                    <b className="is-visible">Kids</b>
                    <b>Youth</b>
                    <b>Child</b>
                  </span>
                </h1>
                <p className="banner-paragraph mb-11">
                  Boosting Education, Enriching Futures: <br />
                  Learn Anytime, Anywhere with Ease!
                </p>
                <div className="btn-box sm-padd-btn pt-35">
                  <a href="student/registration.html" className="def-btn btn-2">
                    admission now
                  </a>
                  <a href="our-classes.html" className="def-btn btn-3">
                    Our Classes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner