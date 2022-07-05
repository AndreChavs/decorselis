import React from 'react'
import styles from './MobileMenu.module.css'

const MobileMenu = ({className, style, mobile, setMobile}) => {

    const menuRef = React.useRef()
    const {mobileMenu} = styles
    const stylesMobileMenu = [mobileMenu, className]
    function handleClick() {
        setMobile((mobile) => !mobile)
    }
    return <div className={stylesMobileMenu.join(' ')} 
        ref={menuRef} 
        style={style} 
        onClick={handleClick}>
           {(mobile)? <i className='fas fa-times close'></i> 
           : <i className='fas fa-bars open'></i>} 
    </div>
}

export default MobileMenu