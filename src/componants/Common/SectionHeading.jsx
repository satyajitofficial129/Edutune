import React from 'react'

const SectionHeading = ({ title, description }) => {
  return (
    <div className="row justify-content-center">
    <div className="col-xl-7 col-lg-8 col-md-10">
      <div className="section-heading text-center mb-65">
        <h2 className="section-title mt--8 mb-25">{title}</h2>
        <p className="heading-sub-txt mt--1 mb--8">
          {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default SectionHeading