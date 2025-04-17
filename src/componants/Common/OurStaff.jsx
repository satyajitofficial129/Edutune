"use client";
import React, { useEffect, useRef, useState } from 'react';
import staffData from '@/data/staffData';
import SkeletonCard from './SkeletonCard';
import SectionHeading from './SectionHeading';

const OurStaff = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  const renderSkeleton = () => Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setLoading(true);
            setTimeout(() => {
              setStaff(staffData);
              setLoading(false);
            }, 1500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div className="our-staff pt-120 pb-80">
      <div className="container">
        <SectionHeading
          title="Meet Our Expert Teachers"
          description="We have experienced instructors in our teacher panel to guarantee the best education! They have studied at different universities in special subjects and teaching methods."
        />
        <div className="row justify-content-center" ref={sectionRef}>
          {loading ? (
            renderSkeleton() // Render loading skeletons when loading
          ) : (
            staff.map((staffMember, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="staff-card mb-40">
                  <div className="staff-card-img w_100 mb-25">
                    <a href={staffMember.link}>
                      <img
                        alt={staffMember.name}
                        src={staffMember.imageSrc}
                        className="w-100 lazyload courseBannerImage img-fluid"
                      />
                    </a>
                  </div>
                  <div className="part-txt d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h3 className="staff-name">
                        <a href={staffMember.link}>{staffMember.name}</a>
                      </h3>
                      <p className="staff-position mb-0">{staffMember.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OurStaff;
