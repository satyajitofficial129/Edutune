"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HeroSection = () => {
    const pathname = usePathname();

    // Convert pathname to title case, removing leading slash
    const getTitleFromPath = (path) => {
        const cleanPath = path.replace('/', '');
        if (cleanPath === '') return 'Home';
        return cleanPath
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const pageTitle = getTitleFromPath(pathname);

    return (
        <div>
            <div className="banner breadcrumb-banner pt-190 pb-200">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner-txt">
                                <h1 className="breadcrumb-title">{pageTitle}</h1>
                                <div className="breadcrumb-txt">
                                    <Link href="/" legacyBehavior>
                                        <a>Home</a>
                                    </Link>
                                    <span className="dvdr">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                    <span>{pageTitle}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
