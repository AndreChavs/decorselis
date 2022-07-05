import React from 'react'
import styles from './Carosel.module.css'

const Carosel = ({slides}) => {
    const [active, setActive] = React.useState(0) 
    const [position, setPosition] = React.useState(0)
    const contentRef = React.useRef() 
     
    React.useEffect( () => {
        const { width } = contentRef.current.getBoundingClientRect()
        setPosition( - (width * active))        
    },[active])

    function slidePrev() {
        if (active > 0){setActive(active - 1);}
    }

    function slideNext() {
        if (active < slides.length - 1){setActive(active + 1);}        
    }   
  return <section className={styles.container}>

    <div ref={contentRef} className={styles.content}
        style={{transform:`translateX(${position}px)`}}>
        {slides.map((slide) => (
        <div key={slide.id} className={styles.item} 
        style={{background:`url(${slide.img}) center no-repeat`, backgroundSize:'cover'}}>            
        </div>
        ))}
    </div>

    <nav className={styles.nav}>
        <div onClick={slidePrev}>
            <i className="fa-solid fa-angle-left"></i>
        </div>        
        <div onClick={slideNext}>
            <i className="fa-solid fa-angle-right"></i>
        </div>
    </nav>

    </section>
}

export default Carosel