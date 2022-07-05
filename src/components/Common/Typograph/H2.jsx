import React from 'react'

const H2 = ({children, className, style}) => {
    return <h2 className={className} style={style}>
        {children}
    </h2>
}

export default H2