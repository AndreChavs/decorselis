import React from 'react'
import NavBar from '../Common/Navigation/NavBar'
import './Header.css'

const Header = ({className, id, style}) => {  
    return <header className={className} id={id} style={style}>
        <NavBar className='container flexalign-center flexspace-between navbar' />
    </header>
}

export default Header