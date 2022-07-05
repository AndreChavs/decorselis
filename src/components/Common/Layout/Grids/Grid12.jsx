import React from 'react'
import styles from './Grids.module.css'

const Grid12 = ({children, className, style}) => {
    const {grid12} = styles
    const stylesGrid = [grid12, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid12