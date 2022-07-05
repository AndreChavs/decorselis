import React from 'react'

const H1 = ({children, className, style}) => {
    return <h1 className={className} style={style}>
        {children}
    </h1>
}

export default H1