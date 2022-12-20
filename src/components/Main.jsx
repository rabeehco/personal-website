import React from 'react'
import classes from './Main.module.css'

import Intro from './Sections/Intro'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Work from './Sections/Work'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

function Main() {
  return (
    <div className={classes.blah}>
        <Intro />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
    </div>
  )
}

export default Main