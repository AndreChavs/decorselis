import React from 'react'
import styles from './Grids.module.css'

const Grid5 = ({children, className, style}) => {
    const {grid5} = styles
    const stylesGrid = [grid5, className]
  return (
    <div className={stylesGrid.join(' ')} style={style}>{children}</div>
  )
}

export default Grid5