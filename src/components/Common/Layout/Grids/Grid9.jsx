import React from 'react'
import styles from './Grids.module.css'

const Grid9 = ({children, className, style}) => {
    const {grid9} = styles
    const stylesGrid = [grid9, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid9