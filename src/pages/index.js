import React from 'react'
import Head from 'next/head'
import { About, Blog, Contacts, Education, Experience, Landing, Navbar, Projects, Skills } from '../components'

function HomePage() {
  return (
    <>
      <Head>
        <title>Mohit Goyal | Blockchain developer</title>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta
          name="description"
          content="Myself MOHIT GOYAL. I'm a fullstack & web3 developer freelancer based in Jaipur, India.
          I am a professional and passionate programmer in my daily life.I am open for working and collaborating on web3 projects. My current stack includes fullstack development, smartcontract development, deployment, testing etc"
        />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:site_name" content="Moh1t Goyal's Portfolio" />
        <meta property="og:title" content="Mohit Goyal || Blockchain developer" />
        <meta property="og:url" content="https://moh1t.tech/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Myself MOHIT GOYAL. I'm a fullstack & web3 developer freelancer based in Jaipur, India.
          I am a professional and passionate programmer in my daily life.I am open for working and collaborating on web3 projects. My current stack includes fullstack development, smartcontract development, deployment, testing etc"
        />

        <meta itemprop="name" content="Portfolio of Mohit Goyal" />
        <meta itemprop="url" content="https://moh1t.tech/" />
        <meta
          itemprop="description"
          content="Myself MOHIT GOYAL. I'm a fullstack & web3 developer freelancer based in Jaipur, India.
          I am a professional and passionate programmer in my daily life.I am open for working and collaborating on web3 projects. My current stack includes fullstack development, smartcontract development, deployment, testing etc"
        />
        <meta itemprop="thumbnailUrl" content="" />

        <meta
          name="linkedin:url"
          content="https://www.linkedin.com/in/0xmohit/"
        />
        <meta name="twitter:title" content="Mohit Goyal" />
        <meta
          name="twitter:url"
          content="https://www.twitter.com/0xmohit_/"
        />
        <meta
          name="twitter:description"
          content="Hello!
          Hello! I am MOHIT GOYAL, a web3 technology enthusiast and a fullstack developer open for working on web3 projects.
          "
        />
        <meta name="twitter:card" content="summary" />

      </Head>
      
      <main>
        {/* <BackToTop /> */}
        {/* <ChangeTheme /> */}
        <Navbar />
        <Landing />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        {/* <Blog /> */}
        <Contacts />
      </main>
    </>
  )
}

export default HomePage
