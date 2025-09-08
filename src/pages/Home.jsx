import React from 'react'
import Video from '../components/Home/Video'
import HomeHero from '../components/Home/HomeHero'
import HomeBottomText from '../components/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed '>
        <Video/>
      </div>
      <div className='h-screen relative w-screen flex flex-col justify-between'>
        <HomeHero />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
