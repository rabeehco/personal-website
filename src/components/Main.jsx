import React from 'react'
import classes from './Main.module.css'
import About from './Sections/About'

import Intro from './Sections/Intro'

function Main() {
  return (
    <div className={classes.blah}>
        <Intro />
        <About />
    </div>
  )
}

export default Main