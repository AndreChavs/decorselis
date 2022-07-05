import React from 'react'

const P = ({children, className, style}) => {
    return <p className={className} style={style}>
        {children}
    </p>
}

export default P