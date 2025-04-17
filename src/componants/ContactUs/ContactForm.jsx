import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-3 pb-50 pt-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="contact-form-wrapper mb-70">
          <span className="contact-subtext">Get In Touch</span>
          <h4 className="contact-titletext mb-40">Have Any Query?</h4>
          <form
            method="POST"
            action="https://edutune.com.bd/send/mail"
            acceptCharset="UTF-8"
            id="contact-form"
          >
            <input
              name="_token"
              type="hidden"
              defaultValue="plTyTh77tKbiZ2JhAE2jvIWqEa4Kt3HOIMhGYcgX"
            />
            <div className="contact-form">
              <div className="contact-col-6">
                <input name="name" required="" type="text" placeholder="Name" />
              </div>
              <div className="contact-col-6">
                <input
                  name="email"
                  required=""
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="contact-col">
                <input
                  required=""
                  name="subject"
                  type="text"
                  placeholder="Message Subject"
                />
              </div>
              <div className="contact-col">
                <textarea
                  name="message"
                  required=""
                  placeholder="Leave Messege"
                  defaultValue={""}
                />
              </div>
              <div className="contact-col">
                <div className="row">
                  <div
                    className="col-sm-6 padding-right-5"
                    style={{ paddingTop: 3 }}
                  >
                    <input
                      type="text"
                      name="captcha"
                      placeholder="Captcha"
                      id="captcha"
                      className="form-control no-border"
                      maxLength={6}
                      required=""
                      style={{ width: "100%" }}
                    />
                    <small>
                      <span id="captcha_message" />
                    </small>
                  </div>
                </div>
              </div>
              <div className="contact-col">
                <button className="def-btn">Submit Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="contact-info-wrapper ml-60 mb-70">
          <ul>
            <li>
            <i className="fa-brands fa-whatsapp"></i>
              <div className="contact-info-content">
                <span className="contact-info-content-text">WhatsApp</span>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=8801708568885&text&type=phone_number&app_absent=0"
                >
                  01708568885
                </a>
              </div>
            </li>
            <li>
            <i className="fa-solid fa-envelope"></i>
              <div className="contact-info-content">
                <span className="contact-info-content-text">Send Email</span>
                <a href="cdn-cgi/l/email-protection.html#40333530302f32340025243534352e256e232f2d">
                  <span
                    className="__cf_email__"
                    data-cfemail="e89b9d9898879a9ca88d8c9d9c9d868dc68b8785"
                  >
                    www.edutune.com
                  </span>
                </a>
              </div>
            </li>
            <li>
            <i className="fa-solid fa-globe"></i>
              <div className="contact-info-content">
                <span className="contact-info-content-text">Visit Us</span>
                <a href="#" target="_blank">
                  www.edutune.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ContactForm