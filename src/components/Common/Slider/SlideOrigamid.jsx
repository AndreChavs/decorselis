import React from 'react'
import styles from './SlideOrigamid.module.css'
import ButtonsSlide from './Buttons/ButtonsSlide'
import H1 from '../Typograph/H1'
import P from '../Typograph/P'
import { NavLink } from 'react-router-dom'

const SlideOrigamid = ({slides, className}) => {
    const [active, setActive] = React.useState(0)
    const [position, setPosition] = React.useState(0)
    const contentRef = React.useRef()
    const timeRef = React.useRef()

    React.useEffect( () => {
        const { width } = contentRef.current.getBoundingClientRect()
        setPosition( - (width * active))
    },[active])

    React.useEffect( () => {
        timeRef.current = setTimeout( () => {
            setActive(active + 1)
        }, 8000)
               
        if (active === slides.length) {            
            setActive(0)
            return clearTimeout(timeRef.current)            
        }             
    },[active, slides])   
    
    const styleSlideOrigamid = [styles.container, className]

    return <section className={styleSlideOrigamid.join(' ')} ref={timeRef}>
        <div ref={contentRef} 
            className={styles.content} 
            style={{transform:`translateX(${position}px)`}}>
                {slides.map( (slide) => {
                    return <div key={slide.id} className={styles.item} style={{background:`url(${slide.urlSlide}) center no-repeat`, backgroundSize:'cover'}}>
                        {(slide.id === 0) ? 
                        <>
                            <H1 className={styles.title}>{slide.title}</H1>
                            <NavLink to='sobre' className={styles.btnSlide}>{slide.text}</NavLink>                            
                        </>
                        :
                        <>
                           <div className={styles.slideInfo}>
                                <H1 className=''>{slide.title}</H1>
                                <P>{slide.text}</P>
                           </div>
                           <NavLink to='produtos/cortinas' className={styles.slideLink}>Saiba mais +</NavLink>                           
                        </>
                        }
                        
                    </div>
                })}
        </div>
        <ButtonsSlide active={active} setActive={setActive} 
            slides={slides} timeRef={timeRef}
        />
    </section>
}

export default SlideOrigamid