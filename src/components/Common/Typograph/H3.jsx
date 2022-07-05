import React from 'react'

const H3 = ({children, className, style}) => {
    return <h3 className={className} style={style}>
        {children}
    </h3>
}

export default H3