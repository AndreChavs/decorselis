import React from 'react'
import styles from './Grids.module.css'

const Grid6 = ({children, className, style}) => {
    const {grid6} = styles
    const stylesGrid = [grid6 ,className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid6