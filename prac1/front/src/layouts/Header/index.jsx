import React from 'react'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <div className={styles["logo"]}>
                    <h1>Selling <span>.</span></h1>
                </div>
                <nav>
                    <ul className={styles["menu"]}>
                        <li><NavLink to='/'>HOME</NavLink></li>
                        <li><NavLink to='add'>ADD</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header