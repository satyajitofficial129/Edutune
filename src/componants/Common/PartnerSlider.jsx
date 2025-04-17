'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

// Your slider component
const partners = [
  '/images/partner-logo-1.jpg',
  '/images/partner-logo-2.jpg',
  '/images/partner-logo-4.jpg',
  '/images/partner-logo-5.jpg',
  '/images/partner-logo-1.jpg',
  '/images/partner-logo-2.jpg',
  '/images/partner-logo-4.jpg',
  '/images/partner-logo-5.jpg',
]

const PartnerSlider = () => {
  return (
    <div className="partner p-120">
        <div className="container">
    <div className="w-full py-6 bg-gray-100">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="partner-swiper"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {partners.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-24 bg-white rounded-lg shadow-sm">
              <img src={logo} alt={`Partner ${index + 1}`} className="h-16 object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </div>
  )
}

export default PartnerSlider
