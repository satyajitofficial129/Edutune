"use client"
import React, { useState, useEffect } from 'react';
import HeroSection from '@/componants/Common/HeroSection';
import styles from '../../styles/Course.module.css';
import SkeletonCard from '@/componants/Common/SkeletonCard';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const allCourses = [
    {
        id: 1,
        title: 'React for Beginners',
        description: 'Learn React from scratch.',
        type: 'Live Course',
        category: 'Web Development',
        price: '$49',
        duration: '5 Weeks',
        image: '/images/17159733969816547216647ad14b948e.png',
        link: '/course/1'
    },
    {
        id: 3,
        title: 'Advanced Data Science',
        description: 'Explore machine learning and AI.',
        type: 'Live Course',
        category: 'Data Science',
        price: '$199',
        duration: '8 Weeks',
        image: '/images/171597343619941710906647ad3c1a760.png',
        link: '/course/3'
    },
    {
        id: 4,
        title: 'SEO & Digital Marketing',
        description: 'Boost your digital presence.',
        type: 'Recorded Course',
        category: 'Digital Marketing',
        price: '$99',
        duration: '6 Weeks',
        image: '/images/1723562227181211663966bb78f319792.png',
        link: '/course/4'
    },
    {
        id: 5,
        title: 'UX/UI Design Crash Course',
        description: 'Design beautiful and user-friendly apps.',
        type: 'Free Course',
        category: 'UI/UX Design',
        price: 'Free',
        duration: '3 Weeks',
        image: '/images/172356246567421189666bb79e1175c9.png',
        link: '/course/5'
    },
    {
        id: 6,
        title: 'Next.js & Server-Side Rendering',
        description: 'Build advanced web apps with Next.js.',
        type: 'Recorded Course',
        category: 'Web Development',
        price: '$59',
        duration: '4 Weeks',
        image: '/images/1723562493179497070766bb79fde4f3b.png',
        link: '/course/6'
    },
    {
        id: 7,
        title: 'Canva for Social Media',
        description: 'Create stunning social media graphics.',
        type: 'Free Course',
        category: 'Graphic Design',
        price: 'Free',
        duration: '2 Weeks',
        image: '/images/171239565710865316186611158985a02.png',
        link: '/course/7'
    },
    {
        id: 8,
        title: 'Python for Data Analysis',
        description: 'Hands-on data analysis with Pandas and NumPy.',
        type: 'Recorded Course',
        category: 'Data Science',
        price: '$79',
        duration: '5 Weeks',
        image: '/images/1712395696689292091661115b0e963a.png',
        link: '/course/8'
    },
    {
        id: 9,
        title: 'Facebook Ads Bootcamp',
        description: 'Learn to run effective ad campaigns.',
        type: 'Live Course',
        category: 'Digital Marketing',
        price: '$149',
        duration: '4 Weeks',
        image: '/images/1723562227181211663966bb78f319792.png',
        link: '/course/9'
    },
    {
        id: 10,
        title: 'Figma UI Design',
        description: 'Design real-world UIs with Figma.',
        type: 'Recorded Course',
        category: 'UI/UX Design',
        price: '$39',
        duration: '3 Weeks',
        image: '/images/17159733969816547216647ad14b948e.png',
        link: '/course/10'
    }
];
const categories = ['Web Development', 'Graphic Design', 'Data Science', 'Digital Marketing', 'UI/UX Design'];

const options = ['All Course', 'Live Course', 'Recorded Course', 'Free Course'];
const renderSkeleton = () => Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />);

const CourseList = () => {
    const [selectedType, setSelectedType] = useState('All Course');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setFilteredCourses(allCourses);
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        setLoading(true);
        let filtered = allCourses;
        if (selectedType !== 'All Course') {
            if (selectedType === 'Free Course') {
                filtered = filtered.filter(course => course.price.toLowerCase().includes('free'));
            } else {
                filtered = filtered.filter(course => course.type === selectedType);
            }
        }
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(course => selectedCategories.includes(course.category));
        }
        const timer = setTimeout(() => {
            setFilteredCourses(filtered);
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [selectedType, selectedCategories]);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setSelectedCategories((prev) =>
            prev.includes(value) ? prev.filter((cat) => cat !== value) : [...prev, value]
        );
    };
    const pathname = usePathname();
    const slugify = (text) =>
        text
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    useEffect(() => {
    }, [pathname]);
    return (
        <>
            <HeroSection />
            <div className={styles.courseContainer}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className={styles.leftContent}>
                                <div className={`mb-4 ${styles.courseType}`}>
                                    <h3>Course Type</h3>
                                    <hr />
                                    <ul className={styles.courseTypeList}>
                                        {options.map((option, idx) => (
                                            <li key={idx} className={styles.courseTypeItem}>
                                                <label className={styles.customRadio}>
                                                    <input
                                                        type="radio"
                                                        name="courseType"
                                                        value={option}
                                                        checked={selectedType === option}
                                                        onChange={() => setSelectedType(option)}
                                                    />
                                                    <span className={styles.radioMark}></span>
                                                    {option}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`mt-4 ${styles.courseCategory}`}>
                                    <h3>Course Category</h3>
                                    <hr />
                                    <ul className={styles.courseCategoryList}>
                                        {categories.map((cat, index) => (
                                            <li key={index} className={styles.categoryItem}>
                                                <label className={styles.customCheckbox}>
                                                    <input
                                                        type="checkbox"
                                                        name="categories"
                                                        value={cat}
                                                        checked={selectedCategories.includes(cat)}
                                                        onChange={handleCategoryChange}
                                                    />
                                                    <span className={styles.checkboxMark}></span>
                                                    {cat}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-9'>
                            <div className='row'>
                                {loading ? (
                                    renderSkeleton()
                                ) : filteredCourses.length === 0 ? (
                                    <div className="col-12">
                                        <p>No courses found for selected filters.</p>
                                    </div>
                                ) : (
                                    filteredCourses.map((course) => (
                                        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6 popular-class-item">
                                            <div className="class-card mb-40">
                                                <div className="part-img">
                                                    <div className="kb-class-fee-wrap-1 p-rel fix">
                                                        <span className="class-fee">{course.price}</span>
                                                        <span className="kb-class-tooltip-1">One Time Fees</span>
                                                    </div>
                                                    <a>
                                                        <Image
                                                            alt="Thumbnail"
                                                            src={course.image}
                                                            width={800}
                                                            height={450}
                                                            layout="responsive"
                                                            className="w-100 courseBannerImage img-fluid"
                                                        />

                                                    </a>
                                                </div>
                                                <div className="part-txt p-40 px-30" style={{ minHeight: 280 }}>
                                                    <a className="class-catname bg-theme symbol">
                                                        {course.type}
                                                    </a>
                                                    <Link href={`/course/${slugify(course.title)}`} legacyBehavior>
                                                        <a>
                                                            <h3 style={{ height: 60 }} className="class-title mt--7 mb-6 name">
                                                            {course.title}
                                                            </h3>
                                                        </a>
                                                    </Link>
                                                    <p className="mt--8 mb--8">{course.description}</p>
                                                    <div className="class-info mt-30 d-flex justify-content-between">
                                                        <div className="box box-1 text-center">
                                                            <span className="single-info d-block fz-14 mt--4 mb-10">Course Length :</span>
                                                            <span className="amount d-block fz-18 color-3 fw-bold mt--8 mb--8">
                                                                {course.duration}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseList;
