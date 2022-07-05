import React from 'react'
import styles from './Grids.module.css'

const Grid4 = ({children, className, style}) => {
    const {grid4} = styles
    const stylesGrid = [grid4, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid4