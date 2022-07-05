import React from 'react'
import './Footer.css'
import ContainerFlex from '../Common/Layout/Container/ContainerFlex'
import H3 from '../Common/Typograph/H3'
// import P from '../Common/Typograph/P'
import IconesApi from '../../Apis/IconesApi'
import IconSocial from '../Common/Navigation/IconSocial'

const Footer = () => {
  return <footer>    
    <ContainerFlex className='flexspace-between flexalign-center footer-sub'>
      <ul>
          {IconesApi.map( (icon,index) => {
              return <IconSocial key={index} style={icon.style} href={icon.href}>{icon.icon}</IconSocial>
          })}
      </ul>
      <div>
        <H3 className='title-footer'>
          DECOR SÉLIS - TODOS OS DIREITOS RESERVADOS.
        </H3>
        <address>contato@decorselis.com.br || (11) 1234-5678</address>
      </div>
      
    </ContainerFlex>
  </footer>
}

export default Footer