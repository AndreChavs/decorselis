import React from 'react'
import './Sobre.css'
import Sections from '../Sections/Sections'
import ContainerFlex from '../Common/Layout/Container/ContainerFlex'
import H1 from '../Common/Typograph/H1'
import P from '../Common/Typograph/P'
import Grid10 from '../Common/Layout/Grids/Grid10'
import Grid6 from '../Common/Layout/Grids/Grid6'
import Grid5 from '../Common/Layout/Grids/Grid5'
import img1 from '../assets/bg/Imagem1.jpg'
import Carosel from '../Common/Carosel/Carosel'
import { _carosel } from '../../Apis/SlidesApi'

const Sobre = () => {
  return <>
    <section className='sobre-header'>
      <H1 className='text-center'>Decor Sélis</H1>
      <div className="container flex-center">
        <Grid10>
          <P className='text-center'>
              A Decor Sélis apresenta a linha de produtos Duraflor, inspirados no que há de mais moderno no mercado internacional. Pisos Laminados de alta resistência e Pisos LVT, vinílicos de última geração para harmonizar sua residência ou ambientes corporativos, além de uma linha completa de acessórios de acabamento e instalação.
          </P>
        </Grid10>
      </div> 
    </section>

    <Sections>
      <ContainerFlex className='flexalign-center flex-center'>                    
        <Grid6>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/H7kpCHpLddQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>                        
            </iframe>
        </Grid6>                    
      </ContainerFlex>
    </Sections>

    <Sections className='sobre-info'>
      <ContainerFlex className='flexalign-center flex-center wrap'>
        <Grid5 className='info-img'>
          <img src={img1} alt="serviços-decorselis" />
        </Grid5>
        <Grid6>
          <div className='info-text'>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quisquam doloremque quaerat veritatis est eum possimus quo tempore beatae accusamus cumque ea saepe quae voluptatibus expedita facere ab dolor! Dolor, officia? Libero nesciunt veniam obcaecati rerum dignissimos quam sunt debitis aspernatur aperiam maiores laborum, vitae, reprehenderit ut excepturi sed dolore harum mollitia. Non aut saepe voluptates necessitatibus debitis nobis facere?            
            </P>
            <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum aliquid labore, recusandae quibusdam vero sint debitis impedit minima molestias sequi eligendi fugiat error distinctio eos modi eius sit velit iste?            
            </P>
          </div>
        </Grid6>
      </ContainerFlex>
    </Sections>

    <Sections className='sobre-carosel'>
      <ContainerFlex className='flex-center wrap'>
        <Grid10>
          <Carosel slides={_carosel}/>          
        </Grid10>        
      </ContainerFlex>
      <ContainerFlex className='flex-center'>
        <Grid10 className='carosel-text'>
          <P>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </P>
        </Grid10>
      </ContainerFlex>
    </Sections>   
  </>
}

export default Sobre