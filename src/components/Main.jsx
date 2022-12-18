import React from 'react'
import classes from './Main.module.css'

import Intro from './Sections/Intro'
import About from './Sections/About'
import Skills from './Sections/Skills'

function Main() {
  return (
    <div className={classes.blah}>
        <Intro />
        <About />
        <Skills />
    </div>
  )
}

export default Main