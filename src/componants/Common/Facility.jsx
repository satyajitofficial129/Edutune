import React from 'react'

const Facility = () => {
  return (
    <div className="facility pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-heading text-center mb-60">
                <h2 className="section-title text-white mt--8 mb-25">
                  Platform Facilities
                </h2>
                <p className="heading-sub-txt text-white mt--1 mb--8">
                  EduTune has everything an educational online platform should have.
                  Success will be achieved by doing various educational activities
                  step by step.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="facility-card facility-card-one mb-40">
                <div className="facility-img-area" />
                <div className="facility-card-txt d-flex flex-column align-items-center text-center p-50 px-50">
                  <div className="facility-icon facility-icon-minus-top mb-30">
                    <img
                      src="/images/facility-icon-1.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="facility-title mt--2 mb-20">
                    <a href="#">Quiz Contest</a>
                  </h3>
                  <p className="facility-txt mt--4 mb--8">
                    An opportunity to test various subjects in the impactful quiz
                    episode.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="facility-card facility-card-two mb-40">
                <div className="facility-img-area" />
                <div className="facility-card-txt d-flex flex-column align-items-center text-center p-50 px-50">
                  <div className="facility-icon facility-icon-minus-top mb-30">
                    <img
                      src="/images/facility-icon-2.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="facility-title mt--2 mb-20">
                    <a href="#">Skill Development</a>
                  </h3>
                  <p className="facility-txt mt--4 mb--8">
                    Achieving the most essential weapon 'skill' is possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="facility-card facility-card-three mb-40">
                <div className="facility-img-area" />
                <div className="facility-card-txt d-flex flex-column align-items-center text-center p-50 px-50">
                  <div className="facility-icon facility-icon-minus-top mb-30">
                    <img
                      src="/images/facility-icon-3.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="facility-title mt--2 mb-20">
                    <a href="#">Interactive Learning</a>
                  </h3>
                  <p className="facility-txt mt--4 mb--8">
                    Various tasks specifically on special education will increase
                    acceptance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Facility