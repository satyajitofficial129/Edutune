import React from 'react'

const BottomFooter = () => {
    return (
        <div className="bottom-footer p-30">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-4 col-lg-4 order-1 order-lg-0">
                        <p className="mb-0">
                            Copyright © 2022 - 2024 EduTune. All rights reserved.
                        </p>
                    </div>
                    <div className="col-xl-7 col-lg-8 order-0 order-lg-1">
                        <div className="footer-social-box d-flex justify-content-end">
                            <a
                                href="https://www.facebook.com/edutune.international"
                                target="_blank"
                                className="bottom-footer-social mr-15"
                            >
                                <span className="footer-social-icon fb mr-10">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </span>
                                Facebook
                            </a>
                            <a
                                href="https://www.youtube.com/@edutuneinternational"
                                target="_blank"
                                className="bottom-footer-social mr-15"
                            >
                                <span className="footer-social-icon fb mr-10">
                                    <i className="fa-brands fa-youtube"></i>
                                </span>
                                YouTube
                            </a>
                            <a
                                href="https://www.linkedin.com/company/edutune"
                                target="_blank"
                                className="bottom-footer-social mr-15"
                            >
                                <span className="footer-social-icon ld mr-10">
                                    <i className="fa-brands fa-linkedin"></i>
                                </span>
                                LinkedIn
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.aitl.edutune"
                                target="_blank"
                                className="bottom-footer-social mr-15"
                            >
                                <span className="footer-social-icon pin mr-10">
                                    <i className="fa-brands fa-google-play"></i>
                                </span>
                                Google
                            </a>
                            <a
                                href="https://apps.apple.com/app/edutune-learner-app/id6479294390"
                                target="_blank"
                                className="bottom-footer-social mr-15"
                            >
                                <span className="footer-social-icon pin mr-10">
                                    <i className="fa-brands fa-apple"></i>
                                </span>
                                Apple
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter