import React from 'react'

const MainFooter = () => {
    return (
        <div className="main-footer pt-120 pb-70">
            <div className="row">
                <div className="col-xl-4 col-lg-3 col-sm-6">
                    <div className="footer-card mb-50">
                        <h4 className="footer-card-title mt--2 pb-20 mb-30">
                            About EduTune
                        </h4>
                        <p className="footer-card-txt text-white mt--6 mb-30 pr-30">
                            EduTune is one of the most effective e-learning platforms in the
                            world.
                        </p>
                        <span className="footer-follow-dialogue d-block mb-23">
                            Follow us :
                        </span>
                        <div className="footer-socials">
                            <a
                                href="https://www.facebook.com/edutune.international"
                                target="_blank"
                                className="footer-social"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/@edutuneinternational"
                                target="_blank"
                                className="footer-social"
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/edutune"
                                target="_blank"
                                className="footer-social"
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/edutuneapp/"
                                target="_blank"
                                className="footer-social"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.aitl.edutune"
                                target="_blank"
                                className="footer-social"
                            >
                                <i className="fa-brands fa-google-play"></i>
                            </a>
                            <a
                                href="https://apps.apple.com/app/edutune-learner-app/id6479294390"
                                target="_blank"
                                className="footer-social"
                            >
                                <i className="fa-brands fa-apple"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-6">
                    <div className="footer-card mb-50">
                        <h4 className="footer-card-title mt--2 pb-20 mb-30">Services</h4>
                        <div className="footer-links mt--8">
                            <ul>
                                <li>
                                    <a href="about-us.html" className="footer-link">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="contact-us.html" className="footer-link">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="career.html" className="footer-link">
                                        Career
                                    </a>
                                </li>
                                <li>
                                    <a href="privacy.html" className="footer-link">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="refund.html" className="footer-link">
                                        Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="tc.html" className="footer-link">
                                        Terms and Condition
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-6">
                    <div className="footer-card mb-50">
                        <h4 className="footer-card-title mt--2 pb-20 mb-30">Information</h4>
                        <div className="footer-links mt--8">
                            <ul>
                                <li>
                                    <a href="blog.html" className="footer-link">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="student/login.html" className="footer-link">
                                        Student Login
                                    </a>
                                </li>
                                <li>
                                    <a href="teacher/login.html" className="footer-link">
                                        Teacher Login
                                    </a>
                                </li>
                                <li>
                                    <a href="affiliate/login.html" className="footer-link">
                                        Affiliate Login
                                    </a>
                                </li>
                                <li>
                                    <a href="verify-certificate.html" className="footer-link">
                                        Verify Certificate
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://forms.gle/bd8Cbhdrj7hBLaGQ9"
                                        className="footer-link"
                                    >
                                        Join as a Teacher
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="footer-card mb-50">
                        <h4 className="footer-card-title mt--2 pb-20 mb-30">
                            Newsletter Subscription
                        </h4>
                        <div className="footer-mewsletter">
                            <p className="footer-card-txt text-white mt--6 mb-26">
                                Enter your email and get latest updates and offers subscribe us
                            </p>
                            <form
                                method="POST"
                                action="https://edutune.com.bd/visitor_newsletter_subscriber"
                                acceptCharset="UTF-8"
                                id="modal_form"
                                className="newsletter-form"
                            >
                                <input
                                    name="_token"
                                    type="hidden"
                                    defaultValue="plTyTh77tKbiZ2JhAE2jvIWqEa4Kt3HOIMhGYcgX"
                                />
                                <input
                                    required=""
                                    type="email"
                                    name="email"
                                    className="footer-input px-35 mb-25"
                                    placeholder="Enter your email"
                                />
                                <button className="def-btn">Subscribe Now!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFooter