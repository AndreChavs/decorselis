import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

const Logo = ({children, to, className, style}) => {
    const {logo} = styles
    const stylesLogo = [logo, className]    
    return <Link to={to} className={stylesLogo.join(' ')} style={style}>        
        {children}
    </Link>
}

export default Logo