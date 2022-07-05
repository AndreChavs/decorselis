import React from 'react'
import styles from './Dropdown.module.css'
const Dropdown = ({children, className, style, value }) => {
    const [active, setActive] = React.useState(false)
    const [i, setI] = React.useState()
    const anchorRef = React.useRef()  

    React.useEffect(() => {
        anchorRef.current.removeAttribute('href')
    },[])

    React.useEffect(() => {
        if (active) {
            setI(styles.active)
        }else{
            setI(null)
        }
    },[active])

    const stylesDropdown = [styles.li, className]

    function handleHover() {setActive(!active)}

    return <li className={stylesDropdown.join(' ')} style={style} onClick={handleHover}>
        <a href='/' className={styles.a} ref={anchorRef}>{value}</a>
        <span className={styles.span}>
          <i className={`fa-solid fa-sort-down ${i}`}></i>
        </span>      
        <ul className={styles.ul}>
            {active && children}
        </ul>
    </li>
}

export default Dropdown