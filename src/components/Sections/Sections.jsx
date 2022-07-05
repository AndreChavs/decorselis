import React from 'react'
import styles from './Sections.module.css'

const Sections = ({children, className, style}) => {
    const stylesSection = [styles.section, className]
    return <section className={stylesSection.join(' ')} style={style}>
        {children}
    </section>
}

export default Sections