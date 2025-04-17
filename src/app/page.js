import React from 'react'
import Feature from "@/componants/Home/Feature";
import About from '@/componants/Home/About';
import Courses from '@/componants/Common/Courses';
import Counter from '@/componants/Common/Counter';
import AppDownload from '@/componants/Home/AppDownload';
import Facility from '@/componants/Common/Facility';
import Testimonial from '@/componants/Common/Testimonial';
import PartnerSlider from '@/componants/Common/PartnerSlider';
import Banner from './../componants/Home/Banner';
import OurStaff from '@/componants/Common/OurStaff';
import Gallery from '@/componants/Common/Gallery';
import Blog from '@/componants/Common/Blog';

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Courses />
      <Counter />
      <OurStaff />
      <AppDownload />
      <Facility />
      <Gallery />
      <Testimonial />
      <Blog />
      <PartnerSlider />
    </>
  )
}

export default Home
