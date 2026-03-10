import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import Section10 from './Section10'

const HeroSection = () => {
  return (
    <div>
      {/* Main SearchBar */}
        <Section1/>
        {/* Featured Vehicle */}
        <Section2/>
        {/* counter excusive cars */}
        <Section8/>
        {/* Carlogo Swiper */}
        <Section5/>
        {/* Banner Section  */}
        <Section3/>
        {/*How it works */}
        <Section6/>
        {/* banner swiper */}
        <Section9/>
        {/* App Section */}
        <Section7/>
        {/* Contact Us */}
        <Section10/>
         {/* Review Section */}
        <Section4/>
    </div>
  )
}

export default HeroSection