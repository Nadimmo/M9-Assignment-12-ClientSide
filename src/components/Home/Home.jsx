import React from 'react'
import Banner from './Banner/Banner'
import Works from './Works/Works'
import FAQ from './FAQ/FAQ'
import Featured from './Featured/Featured'
import Latest from './Latest/Latest'
import Testimonial from './Testimonial/Testimonial'
import Statistics from './Statistics'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Latest></Latest>
      <Works></Works>
      <Testimonial></Testimonial>
      <Statistics></Statistics>
      <FAQ></FAQ>
    </div>
  )
}

export default Home