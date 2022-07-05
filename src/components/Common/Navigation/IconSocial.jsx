import React from 'react'
import styles from './IconSocial.module.css'

const IconSocial = ({href, children, className, style}) => {
    const stylesLi = [styles.icon, className]

    return <li className={stylesLi.join(' ')} style={style}>
        <a href={href} target="_blank" rel="noopener noreferrer" >
            {children}
        </a>
    </li>
    
  
}

export default IconSocial