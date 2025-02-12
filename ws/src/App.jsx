import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Tmonials from './components/Tmonials/Tmonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'




const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title title='Our PROGRAM' subTitle='What We Offer'></Title>
        <Programs></Programs>
        <About setPlayState={setPlayState} ></About>
        <Title title='Gallery' subTitle='Campus Photos'></Title>
        <Campus></Campus>
        <Title title='TESTIMONIALS' subTitle='What Student Says'></Title>
        <Tmonials></Tmonials>
        <Title title='Contact Us' subTitle='Get in Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>

    </div>
  )
}

export default App
