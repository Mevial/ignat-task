import React from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
function Header() {
    return (
        <div className={styles.header}>
           <NavLink to={PATH.PRE_JUNIOR} className={styles.link} activeClassName={styles.active}>pre-junior</NavLink>
           <NavLink to={PATH.JUNIOR} className={styles.link} activeClassName={styles.active}>junior</NavLink>
           <NavLink to={PATH.JUNIOR_PLUS} className={styles.link} activeClassName={styles.active}>junior+</NavLink>
            <div className={styles.block}/>

        </div>
    )
}

export default Header
