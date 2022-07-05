import React from 'react'
import styles from './Grids.module.css'

const Grid11 = ({children, className, style}) => {
    const {grid11} = styles
    const stylesGrid = [grid11, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid11