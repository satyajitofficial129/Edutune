import React from 'react'

const AppDownload = () => {
    return (
        <div className="app-download pb-120">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="app-download-txt mb-50 mb-md-0">
                            <div className="section-heading mb-50">
                                <h2 className="section-title mt--8 mb-25 cd-headline rotate-1">
                                    Join Our <br />
                                    <span className="cd-words-wrapper">
                                        <b className="is-visible">IOS App</b>
                                        <b>Android App</b>
                                        <b>Mobile App</b>
                                    </span>
                                </h2>
                                <p className="heading-sub-txt mt--1 mb--8">
                                    EduTune is one step ahead in achieving modern education. You can
                                    get our service on Android and iOS App along with website! All the
                                    time and everywhere!
                                </p>
                            </div>
                            <div className="btn-box">
                                <a
                                    target="_blank"
                                    href="https://play.google.com/store/apps/details?id=com.aitl.edutune"
                                    className="app-download-btn mr-75"
                                >
                                    <img
                                        src="/images/appstore.png"
                                        className="filter-shadow-3"
                                        alt="App Store"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://apps.apple.com/app/edutune-learner-app/id6479294390"
                                    className="app-download-btn"
                                >
                                    <img
                                        src="/images/playstore.png"
                                        className="filter-shadow-2"
                                        alt="Play Store"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="part-img pl-30 w_100">
                            <img src="/images/app-download-img.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AppDownload