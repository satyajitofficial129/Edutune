import React from 'react'
import styles from "../../styles/TopHeader.module.css"

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-9">
                        <div className="top-left">
                            <div className="d-sm-flex">
                                <div className="header-txt pr-30">
                                    <a
                                        target="_blank"
                                        href="https://api.whatsapp.com/send/?phone=8801708568885&text&type=phone_number&app_absent=0"
                                    >
                                        <i className="fa-brands fa-whatsapp"></i> 8801708568885
                                    </a>
                                </div>
                                <div className="header-txt px-30">
                                    <a href="cdn-cgi/l/email-protection.html#ef9c9a9f9f809d9baf8a8b9a9b9a818ac18c8082">
                                        <i className="fa-solid fa-envelope-open-text"></i> &nbsp;
                                        <span>
                                            support@edutune.com
                                        </span>
                                    </a>
                                </div>
                                <div className="header-txt pl-30">
                                    <i className="fa-solid fa-download"></i> &nbsp;Download
                                    To get the full experience, download our{" "}
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.aitl.edutune"
                                        style={{ color: "#FFEB3B" }}
                                        target="_blank"
                                    >
                                        Android
                                    </a>
                                    or{" "}
                                    <a
                                        href="https://apps.apple.com/app/edutune-learner-app/id6479294390"
                                        style={{ color: "#FFEB3B" }}
                                        target="_blank"
                                    >
                                        IOS
                                    </a>{" "}
                                    app
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="top-right">
                            <div className="d-flex justify-content-lg-end justify-content-center">
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/edutune.international"
                                    className="header-right-txt"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/@edutuneinternational"
                                    className="header-right-txt"
                                >
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/company/edutune"
                                    className="header-right-txt"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/edutuneapp/"
                                    className="header-right-txt"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://play.google.com/store/apps/details?id=com.aitl.edutune"
                                    className="header-right-txt"
                                >
                                    <i className="fa-brands fa-google-play"></i>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://apps.apple.com/app/edutune-learner-app/id6479294390"
                                    className="header-right-txt"
                                >
                                    <i className="fa-brands fa-apple"></i>
                                </a>
                                <a
                                    data-toggle="modal"
                                    href="#cs"
                                    title="Switch Country"
                                    className="header-right-txt"
                                >
                                    <i className="fa-solid fa-globe"></i>
                                </a>
                                <div id="cs" className={styles.modal2}>
                                    <div className={styles.modal__content}>
                                        <div
                                        style={{
                                            marginTop: 20,
                                            fontSize: 20,
                                            textAlign: "center",
                                            fontWeight: "bold"
                                        }}
                                        >
                                        Choose your country or region to see content specific to your location.
                                        </div>
                                        <br />
                                        <div style={{ textAlign: "center" }}>
                                        <select
                                            style={{
                                            width: 250,
                                            border: "1px solid black",
                                            fontSize: 20,
                                            borderRadius: 10,
                                            padding: 12
                                            }}
                                            name="region"
                                        >
                                            <option value="global">Global</option>
                                            <option value="bangladesh">Bangladesh</option>
                                        </select>
                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                        <input
                                            type="submit"
                                            style={{
                                            fontSize: 20,
                                            width: 150,
                                            borderRadius: 50,
                                            backgroundColor: "#4CAF50",
                                            color: "#fff",
                                            marginTop: 20,
                                            marginBottom: 10,
                                            padding: 10
                                            }}
                                            defaultValue="Continue"
                                        />
                                        </div>
                                        <a
                                        style={{ fontSize: 35, marginTop: "-16px" }}
                                        href="#"
                                        className={styles.modal__close}
                                        >
                                        ×
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader