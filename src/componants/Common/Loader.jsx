"use client"
import React, { useState, useEffect } from 'react'
import styles from "../../styles/Loader.module.css"

const Loader = () => {
    const [preloader, setPreloaderloader] = useState(true);

    // Hide loader once the page has loaded
    useEffect(() => {
        const timer = setTimeout(() => {
            setPreloaderloader(false);
        }, 3000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        preloader && (
            <div className={styles.loading}>
                <div className={styles.loadingCenter}>
                    <div className={styles.loadingCenterAbsolute}>
                        <div className={styles.loadingContent}>
                            <img className={styles.loadingLogoText} src="/images/logo/logo-text.png"
                                alt="Kidba" />
                            <div className={styles.loadingStroke}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Loader;
