"use client"

import React, { useEffect, useState, useRef } from "react";
import styles from "./../../styles/Skeleton.module.css";
import galleryStyles from "./../../styles/GalleryImageHover.module.css";
import blogsData from '@/data/Blogdata';
import SkeletonCard from "./SkeletonCard";
import SectionHeading from "./SectionHeading";

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("*");
    const [blogImages, setBlogImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef(null);

    const handleFilterClick = (category) => {
        setActiveCategory(category);
    };

    const filteredBlog = activeCategory === "*" ? blogImages : blogImages.filter((image) => image.category === activeCategory);

    const renderSkeleton = () => Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setLoading(true);
                        setTimeout(() => {
                            setBlogImages(blogsData);
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
                    title="Our Latest News & Blog" 
                    description="EduTune is not only working on education and skills but is constantly researching the various aspects of effective education." 
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

                {/* Gallery Cards */}
                <div className="row justify-content-center" style={{ position: "relative" }}>
                    {loading
                        ? renderSkeleton()
                        : filteredBlog.length > 0
                            ? filteredBlog.map((galleryImage) => (
                                <div key={galleryImage.id} className="col-xl-4 col-lg-6 col-md-6 gallery-image">
                                    <div className="blog-card mb-40">
                                        <div className="part-img">
                                            <div className="kb-class-fee-wrap-1 p-rel fix"></div>
                                            <a href={galleryImage.link}>
                                                <img
                                                    alt="Thumbnail"
                                                    src={galleryImage.image}
                                                    className={`${galleryStyles.galleryBannerImage} w-100 img-fluid`}
                                                />
                                            </a>
                                            <span className="lv-part-blog-calendar-date">
                                                <i className="fa-solid fa-calendar-days"></i> 03-04-2024
                                            </span>
                                        </div>
                                        <div className="blog-card-txt p-40 px-30">
                                            <h3 style={{ height: '50px' }} className="blog-title mt--2 mb-20">
                                                <a href="blog/does-abacus-benefit-math.html">
                                                    {galleryImage.title}
                                                </a>
                                            </h3>
                                            <p className="mb--8">
                                                {galleryImage.description}
                                            </p>
                                        </div>
                                        <div className="blog-bottom-part px-30 d-flex justify-content-between align-items-center">
                                            <span className="blog-single-stat py-20">
                                                <img
                                                    src="/images/heart-icon.png"
                                                    className="mr-10"
                                                    alt="Heart"
                                                />
                                                {galleryImage.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            ))
                            : (
                                <div className="col-12 text-center">
                                    <p>No galleries found in this category.</p>
                                </div>
                            )}
                </div>
            </div>
        </div>
    )
}

export default Blog