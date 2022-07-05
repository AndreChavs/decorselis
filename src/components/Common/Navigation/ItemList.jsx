import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ItemList.module.css'

const ItemList = ({children, className, style, to, activeClassName, mobile, setMobile}) => {
    const {itemList} = styles
    const stylesItemList = [itemList, className]
    function handleClick() {
        setMobile(!mobile)
    }
    return <li className={stylesItemList.join(' ')} style={style} onClick={handleClick}>
        <NavLink to={to} end activeClassName={activeClassName}>{children}</NavLink>
    </li>
}

export default ItemList