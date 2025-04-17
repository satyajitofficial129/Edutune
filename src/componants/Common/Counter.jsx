"use client";
import React, { useEffect, useRef, useState } from "react";
import counterUp from "counterup2";
import styles from "./../../styles/Counter.module.css";

const CountdownSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      count: 2500,
      text: "Students Enrolled",
      icon: "/images/counter-icon-5.png",
    },
    {
      count: 212,
      text: "Awards Won",
      icon: "/images/counter-icon-6.png",
    },
    {
      count: 370,
      text: "Classes Completed",
      icon: "/images/counter-icon-7.png",
    },
    {
      count: 18,
      text: "Our Total Courses",
      icon: "/images/counter-icon-8.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          const counters = document.querySelectorAll(".counter");
          counters.forEach((el) =>
            counterUp(el, {
              duration: 2500,
              delay: 16,
            })
          );
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <div className="counter-inner pt-120 pb-80">
      <div className="container">
        <section
          id="countdown-section"
          ref={sectionRef}
          className={styles.countdownBg}
        >
          <div className="text-center row">
            {stats.map((item, index) => (
              <div key={index} className="col-md-3 col-6">
                <div className={`grid-item ${styles.countdownItemBorder}`}>
                  <div className={styles.countdownItem}>
                    <div className="counter-img-2 mb-40">
                      <img src={item.icon} alt="Icon" />
                    </div>
                    <p className={`${styles.number} counter`}>{item.count}</p>
                    <p className="mt-4">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CountdownSection;
