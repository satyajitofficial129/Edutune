import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/auth_bootstrap.min.css" />
      </Head>

      <main>{children}</main>

     
    </>
  )
}

export default AuthLayout