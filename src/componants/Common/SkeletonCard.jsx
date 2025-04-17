// components/SkeletonCard.js
import React from "react";
import styles from "./../../styles/Skeleton.module.css";

const SkeletonCard = () => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div className={styles.skeletonCard}>
                <div className={`${styles.skeletonBlock} ${styles.skeletonImage}`}></div>
                <div className={`${styles.skeletonBlock} ${styles.skeletonTitleShort}`}></div>
                <div className={`${styles.skeletonBlock} ${styles.skeletonTitle}`}></div>
                <div className={`${styles.skeletonBlock} ${styles.skeletonLine}`}></div>
                <div className={`${styles.skeletonBlock} ${styles.skeletonHalfLine}`}></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
