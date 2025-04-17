"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./../../styles/Skeleton.module.css";
import galleryStyles from "./../../styles/GalleryImageHover.module.css";
import galleryData from "@/data/GalleryData";
import SkeletonCard from "./SkeletonCard";
import SectionHeading from "./SectionHeading";

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("*");
    const [galleryImages, setGalleryImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef(null);

    const handleFilterClick = (category) => {
        setActiveCategory(category);
    };

    const filteredGallery = activeCategory === "*" ? galleryImages : galleryImages.filter((image) => image.category === activeCategory);

    const renderSkeleton = () => Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setLoading(true);
                        setTimeout(() => {
                            setGalleryImages(galleryData);
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
                    title="Gallery"
                    description="Organizing different events at different times increases the capacity of teaching and learning manifold.
We are the best in various activities happily!"
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
                        : filteredGallery.length > 0
                            ? filteredGallery.map((galleryImage) => (
                                <div key={galleryImage.id} className="col-xl-4 col-lg-6 col-md-6 gallery-image">
                                    <div className={`${galleryStyles.classCard} mb-40`}>
                                        <div className="part-img">
                                            <div className="kb-class-fee-wrap-1 p-rel fix"></div>
                                            <a href={galleryImage.link}>
                                                <img
                                                    alt="Thumbnail"
                                                    src={galleryImage.image}
                                                    className={`${galleryStyles.galleryBannerImage} w-100 img-fluid`}
                                                />
                                            </a>
                                        </div>
                                        <div className={galleryStyles.galleryInfo}>
                                            <a target="_blank"
                                                className="gallery-popup mb-20"
                                                href={galleryImage.image}
                                            >
                                                <img src="/images/expand.png" alt="View" />
                                            </a>
                                            <h3 className={`${galleryStyles.galleryTitle} mt--3 mb-10`}>
                                                <a href="#">EduTune Annual program 1</a>
                                            </h3>
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
    );
};

export default Gallery;
