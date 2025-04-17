import AboutUs from '@/componants/About/AboutUs'
import AboutUsFeature from '@/componants/About/AboutUsFeature'
import HeroSection from '@/componants/Common/HeroSection'
import Counter from '@/componants/Common/Counter'
import OurStaff from '@/componants/Common/OurStaff'
import PartnerSlider from '@/componants/Common/PartnerSlider'
import React from 'react'

const About = () => {
  return (
    <>
      <HeroSection/>
      <AboutUsFeature/>
      <AboutUs/>
      <OurStaff/>
      <Counter/>
      <PartnerSlider />
    </>
  )
}

export default About