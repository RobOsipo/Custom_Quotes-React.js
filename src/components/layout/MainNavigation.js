import {Link, NavLink} from 'react-router-dom'

import React from 'react'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/quotes" className={classes.active}>Quotes</NavLink></li>
                <li><NavLink to="/new-quote" className={classes.active}>Add a quote</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation