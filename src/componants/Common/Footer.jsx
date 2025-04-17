import React from 'react'
import FooterInfo from './FooterInfo'
import MainFooter from './MainFooter'
import BottomFooter from './BottomFooter'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <FooterInfo />
                <MainFooter />
            </div>
            <BottomFooter />
        </div>
    )
}

export default Footer