import React from 'react'
import styles from './Grids.module.css'

const Grid8 = ({children, className, style}) => {
    const {grid8} = styles
    const stylesGrid = [grid8, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid8