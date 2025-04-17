"use client"
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import styles from './../../styles/Megamenu.module.css';

const BottomHeader = () => {
    const pathname = usePathname();
    const blurDataUrl =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgYJCAkLCwoLDAwM...";
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeCategory, setActiveCategory] = useState("all");

    const handleToggleDropdown = () => setShowDropdown(!showDropdown);
    const courseCategories = [
        { key: "all", name: "All", img: "/images/2023-06-22T06-40-41.054Z-code-box-line.png" },
        { key: 'web', name: 'Web Development', img: '/images/2023-06-22T06-40-41.054Z-code-box-line.png' },
        { key: 'design', name: 'Design', img: '/images/2023-06-22T06-40-41.054Z-code-box-line.png' },
        { key: 'marketing', name: 'Marketing', img: '/images/2023-06-22T06-40-41.054Z-code-box-line.png' },
        { key: 'data', name: 'Data Science', img: '/images/2023-06-22T06-40-41.054Z-code-box-line.png' },
    ];

    const courses = {
        web: [
            { title: 'React for Beginners', desc: 'Start building modern UIs', img: '/images/17209570217594725546693b85dbebf5.png' },
            { title: 'Advanced Laravel 10', desc: 'Master backend development', img: '/images/17209575441136650006693ba6894a81.png' },
        ],
        design: [
            { title: 'UI/UX Design Bootcamp', desc: 'Design better experiences', img: '/images/1723562493179497070766bb79fde4f3b.png' },
            { title: 'Figma for Designers', desc: 'Prototype with ease', img: '/images/17123730176772959576610bd195aec6.png' },
        ],
        marketing: [
            { title: 'SEO Masterclass', desc: 'Rank higher in search', img: '/images/171237304217387690236610bd32f33cd.png' },
            { title: 'Facebook Ads Strategy', desc: 'Run effective campaigns', img: '/images/1712395736824281040661115d8cce53.png' },
        ],
        data: [
            { title: 'Python for Data Analysis', desc: 'Handle big data with ease', img: '/images/171237304217387690236610bd32f33cd.png' },
            { title: 'Machine Learning A-Z', desc: 'Understand ML concepts', img: '/images/170654938211993591965b7e08680813.png' },
        ],
    };

    return (
        <>
            <div className="bottom-header">
                <div className="container">
                    <div className="row g-0 align-items-center">
                        <div className="col-xl-2 col-lg-2">
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-6">
                                    <div className="logo">
                                        <a href="index.html">
                                            <Image
                                                src="/images/logo.png"
                                                alt="EduTune"
                                                width={500}
                                                height={300}
                                                placeholder="blur"
                                                blurDataURL={blurDataUrl}
                                                style={{ width: '160px', height: 'auto' }}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="d-lg-none d-flex justify-content-end col-6">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <i className="fa-solid fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <nav className="navbar navbar-expand-lg p-0">
                                <div className="container-fluid p-0">
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav m-auto p-30">
                                            <li className="nav-item">
                                                <Link href="/" legacyBehavior>
                                                    <a className={pathname === '/' ? 'active' : ''}>
                                                        Home
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item position-relative" onClick={handleToggleDropdown} style={{ cursor: 'pointer' }}>
                                                <a >
                                                    Buy Courses <i className="fa-solid fa-chevron-down ms-1" />
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/about-us" legacyBehavior>
                                                    <a className={pathname === '/about-us' ? 'active' : ''}>
                                                        About Us
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/blog" legacyBehavior>
                                                    <a className={pathname === '/blog' ? 'active' : ''}>
                                                        Blog
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/contact-us" legacyBehavior>
                                                    <a className={pathname === '/contact-us' ? 'active' : ''}>
                                                        Contact Us
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="/student/login"
                                                    className={pathname === '/student/login' ? 'active' : ''}>
                                                    Login
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-2 col-lg-3 d-lg-block d-none">
                            <div className="nav-btn d-flex justify-content-end">
                                <a href="student/registration.html" className="def-btn">
                                    Trial Class
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showDropdown && (
                <div
                    className={styles.drawerOverlay}
                    onClick={() => setShowDropdown(false)}
                >
                    <div
                        className={styles.drawerContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="mb-0">Explore Courses</h4>
                            <button className="btn-close" onClick={() => setShowDropdown(false)} />
                        </div>

                        <div className="row">
                            <div className="col-md-4 pe-4 border-end">
                                <h2 className="text-muted mb-3">Categories</h2>
                                {courseCategories.map((cat) => (
                                    <div
                                        key={cat.key}
                                        className={`${styles.categoryItem} ${
                                            activeCategory === cat.key ? styles.activeCategory : ""
                                        }`}
                                        onClick={() => setActiveCategory(cat.key)}
                                    >
                                        <i className={cat.icon} style={{ width: '20px', textAlign: 'center' }} />
                                        {cat.name}
                                    </div>
                                ))}
                            </div>

                            <div className="col-md-8">
                                <h2 className="text-muted mb-3">Courses</h2>
                                <div style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto', paddingRight: '15px' }}>
                                    {(activeCategory === "all" ? Object.values(courses).flat() : courses[activeCategory] || []).map((course, idx) => (
                                        <div key={idx} className={styles.courseItem}>
                                            <img
                                                src={course.img}
                                                alt={course.title}
                                                width={100}
                                                height={70}
                                                className={styles.courseImage}
                                            />
                                            <div>
                                                <a href="#" className="fw-bold text-dark text-decoration-none">
                                                    {course.title}
                                                </a><br />
                                                <small className="text-muted">{course.desc}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default BottomHeader;
