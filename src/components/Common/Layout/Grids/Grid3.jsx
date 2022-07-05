import React from 'react'
import styles from './Grids.module.css'

const Grid3 = ({children, className, style}) => {
    const {grid3} = styles
    const stylesGrid = [grid3, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid3