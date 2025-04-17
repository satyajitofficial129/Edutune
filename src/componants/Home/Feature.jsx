import React from 'react'

const Feature = () => {
  return (
    <div className="feature pt-120 pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8">
              <div className="part-txt mb-70">
                <div className="section-heading mb-70">
                  <h2 className="section-title mt--8 mb-25">
                    Welcome to Our EduTune
                  </h2>
                  <p className="heading-sub-txt mt--1 mb--8">
                    EduTune is constantly striving to maintain the quality of
                    education. <br />
                    EduTune's comprehensive services on the app and website are useful
                    for learning!
                  </p>
                </div>
                <div className="row r-gap-40 has-gradient-service mb-30 mb-lg-0">
                  <div className="col-xl-6 col-md-6">
                    <div className="feature-box d-flex">
                      <div className="feature-part-icon mr-30">
                        <img
                          src="/images/feat-icon-2.png"
                          className="filter-shadow-1"
                          alt="Icon"
                        />
                      </div>
                      <div className="feature-txt">
                        <h3 className="feature-sub-title mt--7 mb--8">
                          <a href="#">Active Learning</a>
                        </h3>
                        <div className="divider mt-10 mb-20 bg-gradient-1 rounded-pill" />
                        <p className="mt--6 mb--8">
                          Education that is both life-oriented and academic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="feature-box d-flex">
                      <div className="feature-part-icon mr-30">
                        <img
                          src="/images/feat-icon-4.png"
                          className="filter-shadow-2"
                          alt="Icon"
                        />
                      </div>
                      <div className="feature-txt">
                        <h3 className="feature-sub-title mt--7 mb--8">
                          <a href="#">Certificate</a>
                        </h3>
                        <div className="divider mt-10 mb-20 bg-gradient-2 rounded-pill" />
                        <p className="mt--6 mb--8">
                          Useful for later use and connector in various fields.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="feature-box d-flex">
                      <div className="feature-part-icon mr-30">
                        <img
                          src="/images/feat-icon-3.png"
                          className="filter-shadow-3"
                          alt="Icon"
                        />
                      </div>
                      <div className="feature-txt">
                        <h3 className="feature-sub-title mt--7 mb--8">
                          <a href="#">Certified Expert Teachers</a>
                        </h3>
                        <div className="divider mt-10 mb-20 bg-gradient-3 rounded-pill" />
                        <p className="mt--6 mb--8">
                          Studied from different Universities in the specific subject
                          to be taught.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="feature-box d-flex">
                      <div className="feature-part-icon mr-30">
                        <img
                          src="/images/feat-icon-1.png"
                          className="filter-shadow-4"
                          alt="Icon"
                        />
                      </div>
                      <div className="feature-txt">
                        <h3 className="feature-sub-title mt--7 mb--8">
                          <a href="#">Exam and Assessment</a>
                        </h3>
                        <div className="divider mt-10 mb-20 bg-gradient-4 rounded-pill" />
                        <p className="mt--6 mb--8">
                          Simultaneous Online Test Method and Self-Exploring
                          Assignment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="feature-img p-relative ml-30 mb-70">
                <img src="/images/feature-img.png" alt="image" />
                <a
                  href="#"
                  data-video-id="6stlCkUDG_s"
                  className="video-btn bg-gradient-1 p-absolute bottom-0 right-0 text-center text-white"
                >
                  <i className="icofont-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Feature