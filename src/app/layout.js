// app/layout.jsx
"use client"
import Loader from "@/componants/Common/Loader";
import Script from "next/script";
import Header from "@/componants/Common/Header";
import Footer from "@/componants/Common/Footer";
import { usePathname } from "next/navigation";
import AuthLayout from "@/componants/layouts/AuthLayout";
import MainLayout from "@/componants/layouts/MainLayout";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const authRoutes = [
    '/student/login',
    '/student/register',
    '/admin/login',
    '/admin/register'
  ];

  const isAuthPage = authRoutes.some(route => pathname.startsWith(route));
  const Layout = isAuthPage ? AuthLayout : MainLayout;
  useEffect(() => {
    if (isAuthPage) {
      document.body.style.backgroundImage = "url('/images/header-bg.png')";
      document.body.style.backgroundColor = '#eceff4';
    } else {
      // Reset background image style when it's not an auth page
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
      document.body.style.minHeight = '';
    }

    // Clean up styles on unmount or when path changes
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
      document.body.style.minHeight = '';
    };
  }, [pathname, isAuthPage]);

  return (
    <html lang="en">
      <head>
        {/* Stylesheets */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        {/* <link rel="stylesheet" href="/css/auth_bootstrap.min.css" /> */}
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/odometer.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/jquery-ui.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/animate-headline.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/modal-video@2.4.2/css/modal-video.min.css"
        />
      </head>

      <body>
        <Layout>{children}</Layout>

        {/* Scripts */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.js" strategy="afterInteractive" />
        <Script src="/js/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/js/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/packery-mode.pkgd.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/js/animate-headline.js" strategy="afterInteractive" />
        <Script src="/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.js" strategy="afterInteractive" />
        <Script src="/js/ajax_callback.js" strategy="afterInteractive" />
        <Script src="/js/simple-pagination.js" strategy="afterInteractive" />
        <Script
          src="https://cdn.jsdelivr.net/npm/modal-video@2.4.2/js/jquery-modal-video.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
