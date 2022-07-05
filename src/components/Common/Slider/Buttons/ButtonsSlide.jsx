import React from 'react'
import styles from './ButtonsSlide.module.css'

const ButtonsSlide = ({className, active, setActive, slides, timeRef}) => {
    const stylesButton = [styles.nav, className]    
    function slidePrev() {
        if(active > 0){
            setActive(active - 1)
            clearTimeout(timeRef.current)
        }
    }
    function slideNext() {
        if(active < slides.length - 1){
            setActive(active + 1)
            clearTimeout(timeRef.current)
        }
    }
    return <nav className={stylesButton.join(' ')}>
        <div onClick={slidePrev}><i className="fa-solid fa-angle-left"></i></div>        
        <div onClick={slideNext}><i className="fa-solid fa-angle-right"></i></div>
    </nav>
}

export default ButtonsSlide