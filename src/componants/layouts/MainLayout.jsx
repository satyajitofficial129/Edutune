import React from 'react'
import Loader from '../Common/Loader'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

const MainLayout = ({ children }) => {
    return (
        <>
            <Loader />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout