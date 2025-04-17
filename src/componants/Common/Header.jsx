"use client"
import TopHeader from './TopHeader'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import styles from './../../styles/Megamenu.module.css';
import { useRouter } from 'next/router';

const Header = () => {
  const pathname = usePathname();
  const blurDataUrl =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkHBgYJCAkLCwoLDAwM...";
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '') 
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');   
  useEffect(() => {
    setShowDropdown(false);
  }, [pathname]);
  const courseCategories = [
    { key: "all", name: "All", img: "/images/2023-06-22T06-40-41.054Z-code-box-line.png" },
    { key: 'web', name: 'Web Development', img: '/images/2023-06-22T06-40-41.054Z-code-box-line.png' },
    { key: 'design', name: 'Graphic Design', img: '/images/2023-06-22T06-40-41.054Z-code-box-line.png' },
    { key: 'data', name: 'Data Science', img: '/images/2023-06-22T06-40-41.054Z-code-box-line.png' },
    { key: 'marketing', name: 'Digital Marketing', img: '/images/2023-06-22T06-40-41.054Z-code-box-line.png' },
    { key: 'ux', name: 'UI/UX Design', img: '/images/2023-06-22T06-40-41.054Z-code-box-line.png' },
  ];

  const courses = {
    web: [
      { title: 'React for Beginners', desc: 'Learn React from scratch.', img: '/images/17159733969816547216647ad14b948e.png' },
      { title: 'Next.js & Server-Side Rendering', desc: 'Build advanced web apps with Next.js.', img: '/images/1723562493179497070766bb79fde4f3b.png' }
    ],
    design: [
      { title: 'Canva for Social Media', desc: 'Create stunning social media graphics.', img: '/images/171239565710865316186611158985a02.png' }
    ],
    data: [
      { title: 'Advanced Data Science', desc: 'Explore machine learning and AI.', img: '/images/171597343619941710906647ad3c1a760.png' },
      { title: 'Python for Data Analysis', desc: 'Hands-on data analysis with Pandas and NumPy.', img: '/images/1712395696689292091661115b0e963a.png' }
    ],
    marketing: [
      { title: 'SEO & Digital Marketing', desc: 'Boost your digital presence.', img: '/images/1723562227181211663966bb78f319792.png' },
      { title: 'Facebook Ads Bootcamp', desc: 'Learn to run effective ad campaigns.', img: '/images/1723562227181211663966bb78f319792.png' }
    ],
    ux: [
      { title: 'UX/UI Design Crash Course', desc: 'Design beautiful and user-friendly apps.', img: '/images/172356246567421189666bb79e1175c9.png' },
      { title: 'Figma UI Design', desc: 'Design real-world UIs with Figma.', img: '/images/17159733969816547216647ad14b948e.png' }
    ]
  };
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight);
    }
  }, [courseCategories, activeCategory]);
  return (
    <div style={{ position: 'relative' }}>
      <div className="header header-style-1" >
        <TopHeader />
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

                          <li className="nav-item position-relative" onClick={handleToggleDropdown} style={{
                            margin: 'auto',
                            cursor: 'pointer',
                            display: 'inline-block',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            backgroundColor: '#1fc4f4',
                            color: '#fff',
                            transition: 'background-color 0.3s',
                          }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                            <a
                              className="d-flex align-items-center"
                              style={{
                                padding: '5px 15px',
                                textDecoration: 'none',
                                color: 'inherit',
                                fontWeight: 'bold',
                              }}
                            >
                              Courses         <i
                                className={`fa-solid ms-1 ${showDropdown ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                                style={{ transition: 'transform 0.3s ease' }}
                              />
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

        </>
      </div>
      <div className={`${styles.dropdownMain} ${showDropdown ? styles.dropdownActive : ''}`}>
        <div className='container'>
          <div className="row" style={{ display: 'flex' }}>
            {/* Left Side */}
            <div className='col-lg-4'>
              <div ref={leftRef}>
                <div className={styles.headerContent}>
                  <div className={styles.headerLeft}>
                    <i className="fas fa-book-open" style={{ fontSize: '24px' }}></i>
                    <h2>Category List</h2>
                  </div>
                  <div className={styles.straightLine}></div>
                </div>
                <div className="body-content mt-4">
                  {courseCategories.map((cat) => (
                    <div
                      key={cat.key}
                      className={`${styles.categoryItem} ${activeCategory === cat.key ? styles.activeCategory : ""}`}
                      onClick={() => setActiveCategory(cat.key)}
                    >
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <div className="categoryimage" style={{
                          backgroundColor: '#f0f0f0',
                          padding: '6px',
                          borderRadius: '6px',
                          marginRight: '8px'
                        }}>
                          <Image
                            src={cat.img}
                            alt={cat.name}
                            width={20}
                            height={20}
                          />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.categoryName}>
                              {cat.name}
                            </div>
                            <ul>
                              <li>4 কোর্স</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <i className="fa-solid fa-arrow-right float-end"></i>
                    </div>
                  ))}


                </div>
                <Link href="/course" legacyBehavior>
                  <a
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '15px 20px',
                      marginTop: '10px',
                      textAlign: 'center',
                      backgroundColor: 'black',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                  >
                    See All Course List
                  </a>
                </Link>
              </div>
            </div>
            {/* Right Side */}
            <div className='col-lg-7'>
              <div>
                <div className={styles.headerContent}>
                  <div className={styles.headerRight}>
                    <i className="fas fa-book-open" style={{ fontSize: '24px' }}></i>
                    <h2>Course List</h2>
                  </div>
                  <div className={styles.straightLine}></div>
                </div>

                <div
                  className={`body-content mt-4 ${styles.scrollableContent}`}
                  style={{
                    height: leftHeight || 'auto',
                    overflowY: 'auto',
                  }}
                  ref={rightRef}
                >
                  {(activeCategory === "all"
                    ? Object.values(courses).flat()
                    : courses[activeCategory] || []
                  ).map((course, idx) => (
                    <div key={idx} className={styles.courseItem}>
                      <div className={styles.courseCard}>
                        <img
                          src={course.img}
                          alt={course.title}
                          width={100}
                          height={70}
                          className={styles.courseImage}
                        />
                        <div className={styles.courseDetails}>
                        <Link href={`/course/${slugify(course.title)}`} legacyBehavior>
                          <a className={`${styles.courseTitle} fw-bold text-dark text-decoration-none`}>
                            {course.title}
                            <br />
                            <small className={styles.courseDesc}>{course.desc}</small>
                            <div className={styles.courseMeta}>
                              <i className="fas fa-chair text-secondary"></i>
                              <span>Total Seats: 30</span>
                            </div>
                          </a>
                        </Link>

                        </div>
                      </div>
                    </div>

                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header