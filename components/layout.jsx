import React from 'react'
import Nav from './nav'
import Head from 'next/head'
import Footer from './dooter'

export default function Layout({children}) {
  return (<>
  <Head>
  <title>Create Next App</title>
  <meta name="description" content="Generated by create next app" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
  {/* albertsans */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />  
  <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
  {/* clash */}
  <link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>  
  </Head>
  
  <Nav />
  <main className=''>
    {children}
  </main >
  {/* <Footer/> */}
  {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>   */}
 
  </>
  )
}

