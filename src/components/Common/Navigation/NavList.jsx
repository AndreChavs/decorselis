import React from 'react'
import styles from './NavList.module.css'

const NavList = ({className, children, mobile, reference}) => {
  const [changeClass, setChangeClass] = React.useState(styles.navList)
  const [classes, setClasses] = React.useState([className])  
  
  React.useEffect( () => {
    function showScrolling() {
      return classes.indexOf('scrolling')
    }    
    if (mobile) {
      setChangeClass(styles.navListActive)
      setClasses( (itens) => {
        if ( (window.scrollY > 100) && (showScrolling() === -1) ) {
          return [...itens, 'scrolling']
        }
        return [...itens]
      })
    }
    else{
      setChangeClass(styles.navList)
      setClasses( (itens) => {
        if ( (window.scrollY > 100) && (showScrolling() !== -1) ) {
          return itens.filter( item => {
            return (item !== 'scrolling') && (item !== 'active')
          })
        }
        if ( (window.scrollY < 100) && (showScrolling() !== -1) ) {
          return itens.filter( item => {
            return (item !== 'active') && (item !== 'scrolling')
          })
        }
        return itens.filter( item => item !== 'active')
      })
    }
  },[mobile])  

  const stylesNavList = [changeClass ,classes.join(' ')]  
    
  return <ul className={stylesNavList.join(' ')} ref={reference}>
      {children}
  </ul>
}

export default NavList