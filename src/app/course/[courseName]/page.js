import PartnerSlider from '@/componants/Common/PartnerSlider';
import Image from 'next/image';
import React from 'react'

const page = ({ params }) => {
    const { courseName } = params;
    return (
        <>
            <div className="class pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="single-content-wrapper mr-20">
                                <div className="class-details-img mb-40">
                                    <Image
                                        alt="Thumbnail"
                                        src="/images/1712395696689292091661115b0e963a.png"
                                        width={800}
                                        height={450}
                                        layout="responsive"
                                        className="w-100 lazyload courseBannerImage img-fluid"
                                    />

                                </div>
                                <div className="class-details-txt-box pb-90">
                                    <h3 className="class-details-title mt--3 mb-8">
                                        Abacus Math (Beginner)
                                    </h3>
                                    <p className="class-details-rating fz-14 mb-25">
                                        <span className="color-4 mr-10">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                        6/5 Ratting
                                    </p>
                                    <h4 className="class-details-teacher-name">
                                        Teacher Name :{" "}
                                        <span className="color-1">
                                            Pubali Maity, Anita Sarangi and 1 more
                                        </span>
                                    </h4>
                                    <div className="class-info class-details-info d-flex gap-4 pb-40 mt--2 mb-40">
                                        <div className="box text-center">
                                            <span className="single-info d-block mt--4 mb-10">
                                                Class Mode
                                            </span>
                                            <span className="amount d-block color-3 fw-bold mt--8 mb--8">
                                                Live
                                            </span>
                                        </div>
                                        <div className="vertical-border" />
                                        <div className="box text-center">
                                            <span className="single-info d-block mt--4 mb-10">
                                                Tuition Fee
                                            </span>
                                            <span className="amount d-block color-2 fw-bold mt--8 mb--8">
                                                $1080.00
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <p>
                                                Looking to give your child a competitive edge in academics and
                                                beyond?
                                            </p>
                                            <p>
                                                EduTune Abacus Course offers a unique opportunity to develop
                                                essential math skills while fostering confidence and mental
                                                agility.Abacus training is proven to enhance cognitive
                                                abilities, including concentration, memory, and
                                                problem-solving skills.
                                            </p>
                                            <p>
                                                Herewhat your child will gain from the Abacus Math
                                                program:
                                            </p>
                                            <ol>
                                                <li>
                                                    Master Math Concepts: Through hands-on manipulation of the
                                                    abacus beads children develop a deep understanding of
                                                    arithmetic operations such as addition, subtraction,
                                                    multiplication, and division.
                                                </li>
                                                <li>
                                                    Speed and Accuracy: As children progress in the course,
                                                    they ll learn to perform complex calculations with lightning
                                                    speed and precision, setting them apart in math competitions
                                                    and exams.
                                                </li>
                                                <li>
                                                    Improved Concentration: Abacus training requires focused
                                                    attention and concentration, helping children develop the
                                                    ability to stay focused for extended periods—a skill that
                                                    benefits them in all areas of life.
                                                </li>
                                                <li>
                                                    Confidence Boost: As children conquer challenging math tasks
                                                    and see tangible progress, their confidence soars, paving
                                                    the way for academic success and a positive attitude toward
                                                    learning
                                                </li>
                                            </ol>
                                            {/* Mirrored from edutune.com.bd/courses/abacus-math-beginner by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 05 Apr 2025 06:01:34 GMT */}
                                        </div>
                                    </div>
                                    <div
                                        className="class-details-video text-center p-125 mt--1 mb-50"
                                        src="/images/1712395696689292091661115b0e963a.png"
                                        data-background="/images/1712395696689292091661115b0e963a.png"
                                    >
                                        <a
                                            href="https://www.youtube.com/embed/COSH5uHRzG0"
                                            data-video-id="COSH5uHRzG0"
                                            className="blog-video-btn rounded-circle text-center"
                                        >
                                            <span className="ml-5">
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <p className="class-details-txt lh-2 mt--9 mb-40"></p>
                                    <p>
                                        <strong>Why EduTune?</strong>
                                    </p>
                                    <p>
                                        Our experienced instructors provide a supportive and nurturing
                                        learning environment, ensuring that each child receives
                                        personalized attention and guidance tailored to their individual
                                        needs. They will be accompanied by our experienced team for
                                        round-the-clock class monitoring, who will promptly resolve any
                                        technical issues. Also, there is our specialized teacher panel for
                                        exam evaluation.
                                    </p>
                                    <p>&nbsp;</p>
                                    <p />
                                    <div
                                        className="class-details-video text-center p-125 mt--1 mb-50" src="/images/1712395696689292091661115b0e963a.png"
                                        data-background="/images/1712395696689292091661115b0e963a.png">
                                        <a
                                            href="https://www.youtube.com/embed/COSH5uHRzG0"
                                            data-video-id="COSH5uHRzG0"
                                            className="blog-video-btn rounded-circle text-center"
                                        >
                                            <span className="ml-5">
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <p className="class-details-txt lh-2 mt--9 mb-40"></p>
                                    <p>
                                        So, Give your child the gift of a strong mathematical foundation
                                        and the confidence to tackle any challenge. Enroll them in our
                                        Abacus Course today and watch them excel!
                                    </p>
                                    <br />
                                    <p />
                                    <div className="class-details-img mt--1">
                                        <div className="row g-sm-4 g-2">
                                            <div className="col-6">
                                                <div className="class-details-img w_100">
                                                    <Image
                                                        alt="Thumbnail"
                                                        src="/images/1713843472150735032866272d10793cf.jpeg"
                                                        width={500}
                                                        height={300}
                                                        className="w-100 lazyload courseBannerImage img-fluid"
                                                    />

                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="class-details-img w_100">
                                                    <Image
                                                        alt="Thumbnail"
                                                        src="/images/1713843472150735032866272d10793cf.jpeg"
                                                        width={500}
                                                        height={300}
                                                        className="w-100 lazyload courseBannerImage img-fluid"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="course_faq">
                                    <div id="main">
                                        <div className="container p-0">
                                            <h4 className="css-Title mb-4">Materials</h4>
                                            <div className="accordion" id="faq">
                                                <div className="card mb-3">
                                                    <ul style={{ padding: "20px 4px 19px 52px" }}>
                                                        <li> A computer or smart phone</li>
                                                        <li> Internet connection</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="course_question mb-5" id="question">
                                    <div className="card">
                                        <div className="row p-5">
                                            <div className="col-md-12 p-0">
                                                <h4 style={{ color: "#3c4852" }}>How to pay?</h4>
                                                <p style={{ fontWeight: 400 }}>
                                                    Below the course click the Enroll Course button to start
                                                    your payment process. Watch this video to learn more about
                                                    the payment details.
                                                </p>
                                                <p style={{ fontWeight: 400 }}>
                                                    <a
                                                        style={{ textDecoration: "underline", color: "#f16126" }}
                                                        href="http://edutune.com/u/n2u8m"
                                                        target="_blank"
                                                    >
                                                        Watch this video
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="def-sidebar uptomd-padding-50">
                                <div className="sidebar-box px-30 p-30 mb-40">
                                    <div className="course__video">
                                        <div className="course__video-thumb w-img mb-25">
                                            <Image
                                                alt="Thumbnail"
                                                src="/images/1712395696689292091661115b0e963a.png"
                                                width={500}  // adjust this
                                                height={300} // adjust this
                                                className="w-100 lazyload courseBannerImage img-fluid"
                                            />

                                            <div className="course__video-play">
                                                <a
                                                    href="https://www.youtube.com/embed/F272iJ3pPNE"
                                                    data-video-id="F272iJ3pPNE"
                                                    className="blog-video-btn popup-video"
                                                >
                                                    <i className="fa-solid fa-play"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                                            <div className="course__video-price">
                                                <h5>
                                                    $1080.<span>00</span>
                                                </h5>
                                                <span
                                                    className="css-course-card-H3 CourseTags"
                                                    style={{ marginLeft: 5, fontSize: 10, color: "#2196f3" }}
                                                >
                                                    One Time Fees
                                                </span>
                                            </div>
                                            <div className="course__video-discount"></div>
                                        </div>
                                        <div className="course__video-content mb-35">
                                            <ul>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-book" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Books (Soft Copy) :</span> 03
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Abacus Tool (Online) :</span> 01
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-film" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Live Class :</span> 48
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-calendar" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Course Duration :</span> 06 Months
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-clock" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Course Level :</span> Beginner
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-book" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Video Class :</span> 48
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-check-square" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Exam (Online Assessment - Practice Test) :</span>{" "}
                                                            3+
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-certificate" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Certificate (PDF) :</span> Yes
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-check-square" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Final Exam (Online) :</span> 01
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="course__video-icon">
                                                        <i className="fa fa-cloud" />
                                                    </div>
                                                    <div className="course__video-info">
                                                        <h5>
                                                            <span>Mark Sheet (PDF) :</span> Yes
                                                        </h5>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="course__payment mb-35">
                                            <h3>Payment</h3>
                                            <a href="#">
                                                <Image
                                                    src="/images/payment-1.png"
                                                    alt="img"
                                                    width={100} // update based on actual image size
                                                    height={60}
                                                    className="img-fluid" // optional, if you want Bootstrap responsiveness
                                                />

                                            </a>
                                        </div>
                                        <div className="blog_button">
                                            <a
                                                href="../student/login.html?class=eyJpdiI6InFCS1ljdGJnQXBidWxKbkdNY2p3b2c9PSIsInZhbHVlIjoiN3VUNGRRVitwZldWNmpsVThxTDJSdz09IiwibWFjIjoiNGE3ZGQxZWQxYjk0M2E0YzI3OGFjZTY1NGRhZGMyYjAyZGYwYmVkNDlkNTY4M2Y1MGI0YzA1YmNiZThkMTM4OCIsInRhZyI6IiJ9&url_back=course-online-registration?class=eyJpdiI6ImJ4WmFsWW9QT0ExamZUeFBOUG5qNHc9PSIsInZhbHVlIjoiQ3RCdTJpVFVNMk9SM3VzNE44NjFEQT09IiwibWFjIjoiZGQ4ODg0N2QwOGFkM2QxMzEwMmVhOTNjYTFlMjIyZWI0ZDkxYjkyNGU0ZmIwYzU0MGE4YWFjMjZhMjAzYjgwYyIsInRhZyI6IiJ9"
                                                className="def-btn d-block"
                                            >
                                                Enroll Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-box mb-40">
                                    <div className="blog-sidebar-title-box px-30">
                                        <h4 className="blog-sidebar-title mb-0">Join our Community</h4>
                                    </div>
                                    <div className="sidebar-popular-class px-30 p-30">
                                        Join the Abacus Mastering Mental Math Community
                                        <div className="btn-box pt-30">
                                            <a
                                                target="_blank"
                                                href="https://www.facebook.com/groups/edutuneabacus"
                                                className="def-btn btn-2"
                                            >
                                                <i className="icofont-facebook" />
                                                &nbsp;&nbsp;Facebook
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-box mb-40">
                                    <div className="blog-sidebar-title-box px-30">
                                        <h4 className="blog-sidebar-title mb-0">Popular Courses</h4>
                                    </div>
                                    <div className="sidebar-popular-class px-30 p-30">
                                        <a href="abacus-math-beginner.html" className="d-flex mb-20">
                                            <div className="class-thumb mr-20">
                                                <Image
                                                    alt="Thumbnail"
                                                    src="/images/172095693418547859776693b8066ca10.png"
                                                    width={800} // adjust based on your layout
                                                    height={450}
                                                    className="w-100 lazyload courseBannerImage img-fluid"
                                                />
                                            </div>
                                            <div className="sidebar-class-txt">
                                                <span className="sidebar-sub-txt mb-5">Abacus Math</span>
                                                <span className="sidebar-class-title mb-5">
                                                    Abacus Math (Beginner)
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            href="abacus-math-beginner1712041091.html"
                                            className="d-flex mb-20"
                                        >
                                            <div className="class-thumb mr-20">
                                                <Image
                                                    alt="Thumbnail"
                                                    src="/images/172095693418547859776693b8066ca10.png"
                                                    width={800}
                                                    height={450}
                                                    layout="responsive"
                                                    className="w-100 lazyload courseBannerImage img-fluid"
                                                />
                                            </div>
                                            <div className="sidebar-class-txt">
                                                <span className="sidebar-sub-txt mb-5">Abacus Math</span>
                                                <span className="sidebar-class-title mb-5">
                                                    Abacus Math (Intermediate)
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            href="abacus-math-beginner1712041096.html"
                                            className="d-flex mb-20"
                                        >
                                            <div className="class-thumb mr-20">
                                                <Image
                                                    alt="Thumbnail"
                                                    src="/images/172095693418547859776693b8066ca10.png"
                                                    width={800}
                                                    height={450}
                                                    layout="responsive"
                                                    className="w-100 lazyload courseBannerImage img-fluid"
                                                />

                                            </div>
                                            <div className="sidebar-class-txt">
                                                <span className="sidebar-sub-txt mb-5">Abacus Math</span>
                                                <span className="sidebar-class-title mb-5">
                                                    Abacus Math (Advance)
                                                </span>
                                            </div>
                                        </a>
                                        <a href="phonics-for-beginner.html" className="d-flex mb-20">
                                            <div className="class-thumb mr-20">
                                                <Image
                                                    alt="Thumbnail"
                                                    src="/images/172095693418547859776693b8066ca10.png"
                                                    width={800}
                                                    height={450}
                                                    className="w-100 lazyload courseBannerImage img-fluid"
                                                />
                                            </div>
                                            <div className="sidebar-class-txt">
                                                <span className="sidebar-sub-txt mb-5">English Learning</span>
                                                <span className="sidebar-class-title mb-5">
                                                    Phonics for Beginner (L1)
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            href="basic-spoken-english-beginner.html"
                                            className="d-flex mb-20"
                                        >
                                            <div className="class-thumb mr-20">
                                                <Image
                                                    alt="Thumbnail"
                                                    src="/images/172095693418547859776693b8066ca10.png"
                                                    width={800}
                                                    height={450}
                                                    layout="responsive"
                                                    className="w-100 lazyload courseBannerImage img-fluid"
                                                />

                                            </div>
                                            <div className="sidebar-class-txt">
                                                <span className="sidebar-sub-txt mb-5">English Learning</span>
                                                <span className="sidebar-class-title mb-5">
                                                    Spoken English for Beginner
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            href="basic-spoken-english-intermediate.html"
                                            className="d-flex mb-20"
                                        >
                                            <div className="class-thumb mr-20">
                                                <Image
                                                    alt="Thumbnail"
                                                    src="/images/172095693418547859776693b8066ca10.png"
                                                    width={800}
                                                    height={450}
                                                    layout="responsive"
                                                    className="w-100 lazyload courseBannerImage img-fluid"
                                                />

                                            </div>
                                            <div className="sidebar-class-txt">
                                                <span className="sidebar-sub-txt mb-5">English Learning</span>
                                                <span className="sidebar-class-title mb-5">
                                                    Spoken English for Intermediate
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="sidebar-box mb-40">
                                    <div className="blog-sidebar-title-box px-30">
                                        <h4 className="blog-sidebar-title mb-0">Have questions?</h4>
                                    </div>
                                    <div className="sidebar-popular-class px-30 p-30">
                                        <div className="row">
                                            <div className="col-12">
                                                Our experts can answer all your questions over a phone call
                                                <br />
                                                <br />
                                                “How to join live class?”
                                                <br />
                                            </div>
                                            <div className="col-6">
                                                <button
                                                    id="get_call_us_btn"
                                                    style={{
                                                        fontSize: 15,
                                                        backgroundColor: "#3C4852",
                                                        fontWeight: 600,
                                                        border: "none",
                                                        borderRadius: 5,
                                                        outline: "none",
                                                        height: 35,
                                                        padding: 6
                                                    }}
                                                    className="text-center text-white offcanvas-link"
                                                >
                                                    Get call from us
                                                </button>
                                                <a
                                                    href="tel:support@edutune.com"
                                                    id="contact_us_btn"
                                                    style={{}}
                                                    className="text-left text-black-50"
                                                >
                                                    <div style={{ marginTop: 12 }}>
                                                        <div style={{ textAlign: "left" }}>Or call us</div>
                                                        <div style={{ textAlign: "left", paddingTop: 2 }}>
                                                            <i className="fas fa-phone-volume" />{" "}
                                                            <span style={{ color: "black" }}>09610922334</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-6">
                                                <div className="section-question-img">
                                                    <Image
                                                        alt="Thumbnail"
                                                        src="https://amadereshkul.s3-ap-southeast-1.amazonaws.com/4394ac/bda43601-2d16-4f14-9bd5-2fa215b18270/171344163814536180866210b6637fb6.png"
                                                        width={800}
                                                        height={450}
                                                        layout="responsive"
                                                        className=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PartnerSlider />
        </>
    )
}

export default page