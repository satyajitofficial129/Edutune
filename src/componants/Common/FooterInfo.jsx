import React from 'react'

const FooterInfo = () => {
    return (
        <div className="footer-info">
            
            <div className="row g-0">
                <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="footer-single-info p-35 px-30 d-flex align-items-center">
                        <div className="footer-info-icon-wrap mr-20">
                            <img
                                src="/images/footer-info-icon-1.png"
                                className="footer-info-icon"
                                alt="Phone"
                            />
                        </div>
                        <div className="footer-info-txt-area">
                            <p className="footer-info-title text-white mt--1 mb-11">
                                Give us a Call
                            </p>
                            <h4 className="footer-info-txt text-white mb--3">
                                <a target="_blank" href="tel:09610922334">
                                    09610922334
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="footer-single-info p-35 px-30 border-l d-flex align-items-center">
                        <div className="footer-info-icon-wrap mr-20">
                            <img
                                src="/images/footer-info-icon-2.png"
                                className="footer-info-icon"
                                alt="Email"
                            />
                        </div>
                        <div className="footer-info-txt-area">
                            <p className="footer-info-title text-white mt--1 mb-11">
                                Send us an Email
                            </p>
                            <h4 className="footer-info-txt text-white mb--3">
                                <a
                                    target="_blank"
                                    href="cdn-cgi/l/email-protection.html#fd8e888d8d928f89bd98998889889398d39e9290"
                                >
                                    <span
                                        className="__cf_email__"
                                        data-cfemail="384b4d4848574a4c785d5c4d4c4d565d165b5755"
                                    >
                                        support@edutune.com
                                    </span>
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="footer-single-info p-35 px-30 border-l d-flex align-items-center">
                        <div className="footer-info-icon-wrap mr-20">
                            <img
                                src="/images/footer-info-icon-3.png"
                                className="footer-info-icon"
                                alt="WhatsApp"
                            />
                        </div>
                        <div className="footer-info-txt-area">
                            <p className="footer-info-title text-white mt--1 mb-11">
                                Send us an Message
                            </p>
                            <h4 className="footer-info-txt text-white mb--3">
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send/?phone=8801708568885&text&type=phone_number&app_absent=0"
                                >
                                    8801708568885
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FooterInfo