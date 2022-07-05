import React from 'react'
import styles from './Grids.module.css'

const Grid10 = ({children, className, style}) => {
    const {grid10} = styles
    const stylesGrid = [grid10, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid10