import React from 'react'
import styles from './NavBar.module.css'
import Logo from './Logo'
import logo from '../../assets/logo.png'
import MobileMenu from './MobileMenu'
import NavList from './NavList'
import ItemList from './ItemList'
import IconSocial from './IconSocial'
import Dropdown from './Dropdown'
import IconesApi from '../../../Apis/IconesApi'
import {_rotas, _subRotas} from '../../../Apis/Rotas'


const NavBar = ({className, style}) => {
    const [mobile, setMobile] = React.useState(false)
    const [changeClass, setChangeClass] = React.useState(styles.navbar)   
    const navRef = React.useRef()
    const navListRef = React.useRef()
    const navbarStyles = [changeClass, className]

    React.useEffect( () => {
        function handleScroll() {
            navListRef.current.classList.toggle('scrolling', window.scrollY > 100)
            if (window.scrollY > 100) {
                setChangeClass(styles.navbarScroll)
            } else {
                setChangeClass(styles.navbar)
            }
        }
        window.addEventListener('scroll',handleScroll)
    },[])
    
    return <nav className={navbarStyles.join(' ')}
     style={style} ref={navRef}>
        <Logo to='/'>
            <img src={logo} alt="decorselis logo" />
        </Logo>
        <MobileMenu setMobile={setMobile} mobile={mobile}/>
        <NavList mobile={mobile} className='navlist' reference={navListRef} >
            <Logo to='/' className='logoItem'>
                <img src={logo} alt="decorselis logo" />
            </Logo>

            {_rotas.map( (item,index) => {                    
                if (item.id === 0) {
                    return <Dropdown key={index} value={item.link}>
                        {_subRotas.map( link =>{
                            return <ItemList key={link.id} to={link.to} mobile={mobile} setMobile={setMobile}>
                                {link.link}
                            </ItemList>
                        })}
                    </Dropdown>
                }                    
                return <ItemList key={index} to={item.path} className='link' activeClassName='active' 
                    mobile={mobile} setMobile={setMobile}>
                        {item.link}
                    </ItemList>
            })}

            <ul className='icones-menu'>
                {IconesApi.map( (icon,index) => {
                    return <IconSocial key={index} href={icon.href} className='icon-item'>
                        {icon.icon}
                    </IconSocial>
                })}
            </ul>
        </NavList>
    </nav>
}

export default NavBar