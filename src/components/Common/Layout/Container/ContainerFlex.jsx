import React from 'react'
import styles from './ContainerFlex.module.css'

// Esse é padrão nowrap, para quebrar os itens use a classe '.wrap' do index.css ao chamar o componente

const ContainerFlex = ({children, className, style}) => {
    const {containerFlex} = styles
    const styleContainer = [containerFlex, className]    
    return <div className={styleContainer.join(' ')} style={style}>{children}</div>  
}

export default ContainerFlex