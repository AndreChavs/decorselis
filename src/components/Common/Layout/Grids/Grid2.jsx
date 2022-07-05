import React from 'react'
import styles from './Grids.module.css'

const Grid2 = ({children, className, style}) => {
    const {grid2} = styles
    const stylesGrid = [grid2, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid2