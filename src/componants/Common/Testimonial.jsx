import React from 'react'

const Testimonial = () => {
  return (
    <div className="testimonial pt-120 pb-120">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div>
            <div className="single-client">
              <img
                alt="Image"
                src="images/17135577208307607446622d0d8031b5.png"
                data-src="../amadereshkul.s3-ap-southeast-1.amazonaws.com/4394ac/bda43601-2d16-4f14-9bd5-2fa215b18270/gallery/17135577208307607446622d0d8031b5.png"
                className="w-100 lazyload courseBannerImage img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-7 col-md-6">
          <div className=" pr-70 pl-30">
            <div className="single-feedback">
              <div className="feedback-title-area">
                <div className="quote-icon mb-30">
                  <img src="/images/quote.png" alt="“" />
                </div>
                <h2 className="feedback-title mt--3 mb-17">Clients Says?</h2>
              </div>
              <p className="feedback-txt mb-25">
                “The interface is incredibly user-friendly. Navigating through the
                courses, accessing resources, and tracking my child’s progress is
                seamless and intuitive. Edutune truly makes the learning
                experience enjoyable and stress-free.”
              </p>
              <div className="divider bg-white rounded-pill mb-20" />
              <h4 className="client-name mt--2 mb--2">Maria Megan</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial