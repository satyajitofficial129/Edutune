import React from 'react';

import styles from './../../styles/Megamenu.module.css';

const MegaMenu = ({ courseCategories }) => {
    return (
        <div className={styles['mega-menu']}>
            <div className={styles['mega-menu-category']}>
                <h5>Categories</h5>
                <ul>
                    {courseCategories.map((category, index) => (
                        <li key={index}>
                            <a href="#">{category.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles['mega-menu-course']}>
                <h5>Courses</h5>
                <ul>
                    {courseCategories.map((category, index) => (
                        <div key={index}>
                            <h6>{category.name}</h6>
                            <ul>
                                {category.subcategories.map((subcategory, idx) => (
                                    <li key={idx}>
                                        <a href="#">{subcategory}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MegaMenu;
