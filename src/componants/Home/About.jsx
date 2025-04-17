import React from 'react'

const About = () => {
    return (
        <div className="about pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12">
                        <h2
                            style={{ fontFamily: '"Roboto", sans-serif' }}
                            className="about-title mt--8 mb-25"
                        >
                            ENHANCE COUNTING SKILLS AND MAKE THE FOUNDATION OF MATH WITH ABACUS
                        </h2>
                        <span className="about-list d-block  mb-15">
                            <i className="fas fa-check mr-15"></i>
                            96 live classes.
                        </span>
                        <span className="about-list d-block  mb-15">
                            <i className="fas fa-check mr-15"></i>
                            Unlimited practice opportunity
                        </span>
                        <span className="about-list d-block">
                            <i className="fas fa-check mr-15"></i>
                            Expert Teachers
                        </span>
                        <div className="btn-box pt-50">
                            <a href="student/registration.html" className="def-btn btn-2">
                                ENROLL NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About