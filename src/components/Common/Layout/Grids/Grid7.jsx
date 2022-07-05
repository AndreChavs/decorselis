import React from 'react'
import styles from './Grids.module.css'

const Grid7 = ({children, className, style}) => {
    const {grid7} = styles
    const stylesGrid = [grid7, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid7