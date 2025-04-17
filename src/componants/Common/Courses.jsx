"use client";
import React, { useEffect, useState, useRef } from "react";
import coursesData from "@/data/coursesData"; // You can replace this with actual API later
import styles from "./../../styles/Skeleton.module.css";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";
import SectionHeading from "./SectionHeading";

const PopularCourses = () => {
  const [activeCategory, setActiveCategory] = useState("*");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
  };

  const filteredCourses = activeCategory === "*" ? courses : courses.filter((course) => course.category === activeCategory);

  const renderSkeleton = () => Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoading(true);
            setTimeout(() => {
              setCourses(coursesData);
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
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="class pt-120 pb-80" ref={sectionRef}>
      <div className="container">
        {/* Heading */}
        <SectionHeading 
          title="Our Popular Courses" 
          description="These courses are very beneficial in terms of a child's mental development, academic education, and later skill-based professionalism." 
        />


        {/* Filter Buttons */}
        <div className="row">
          <div className="col-12">
            <div className="popular-class-buttons mb-40 text-center" id="filters">
              {[
                { label: "See all", value: "*" },
                { label: "Abacus Math", value: "2686" },
                { label: "English Learning", value: "2687" },
                { label: "Crash Course", value: "2688" },
              ].map((btn) => (
                <button
                  key={btn.value}
                  className={`class-filter-btn ${activeCategory === btn.value ? "active" : ""}`}
                  onClick={() => handleFilterClick(btn.value)}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="row justify-content-center">
          {loading
            ? renderSkeleton()
            : filteredCourses.length > 0
            ? filteredCourses.map((course) => (
                <div key={course.id} className="col-xl-4 col-lg-6 col-md-6 popular-class-item">
                  <div className="class-card mb-40">
                    <div className="part-img">
                      <div className="kb-class-fee-wrap-1 p-rel fix">
                        <span className="class-fee">{course.price}</span>
                        <span className="kb-class-tooltip-1">One Time Fees</span>
                      </div>
                      <a href={course.link}>
                        <img alt="Thumbnail" src={course.image} className="w-100 courseBannerImage img-fluid" />
                      </a>
                    </div>
                    <div className="part-txt p-40 px-30" style={{ minHeight: 280 }}>
                      <a href={course.link} className="class-catname bg-theme symbol">Live</a>
                      <h3 style={{ height: 60 }} className="class-title mt--7 mb-6 name">
                        <a href={course.link}>{course.title}</a>
                      </h3>
                      <p className="mt--8 mb--8">{course.description}</p>
                      <div className="class-info mt-30 d-flex justify-content-between">
                        <div className="box box-1 text-center">
                          <span className="single-info d-block fz-14 mt--4 mb-10">Course Length :</span>
                          <span className="amount d-block fz-18 color-3 fw-bold mt--8 mb--8">{course.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : (
                <div className="col-12 text-center">
                  <p>No courses found in this category.</p>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
