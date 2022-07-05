import React from 'react'
import styles from './Grids.module.css'

const Grid1 = ({children, className, style}) => {
    const {grid1} = styles
    const stylesGrid = [grid1, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid1