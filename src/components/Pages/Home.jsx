import React from 'react'
import './Home.css'
import SlideOrigamid from '../Common/Slider/SlideOrigamid'
import Sections from '../Sections/Sections'
import ContainerFlex from '../Common/Layout/Container/ContainerFlex'
import Grid3 from '../Common/Layout/Grids/Grid3'
import Grid4 from '../Common/Layout/Grids/Grid4'
import Grid6 from '../Common/Layout/Grids/Grid6'
import Grid10 from '../Common/Layout/Grids/Grid10'
import Grid12 from '../Common/Layout/Grids/Grid12'
import H3 from '../Common/Typograph/H3'
import H2 from '../Common/Typograph/H2'
import H1 from '../Common/Typograph/H1'
import P from '../Common/Typograph/P'
import { ServicosApi } from '../../Apis/ServicosApi'
import { _slides } from '../../Apis/SlidesApi'
import FormNews from '../Common/Forms/FormNews'

const Home = () => {
    function handleLink({target}) {
        
    }
    return <>
        <SlideOrigamid slides={_slides}/>        
        <Sections className='home-servicos'>
            <ContainerFlex className='flexspace-between wrap'>
                {ServicosApi.map( (item,index) => {
                    return <Grid3 key={index}>
                        <img src={item.imagem} alt={item.alt} onClick={handleLink}/>                        
                        <H2 className='text-center'>{item.title}</H2>
                        <P className='text-center'>{item.text}</P>
                    </Grid3>
                })}                
            </ContainerFlex>
        </Sections>

        <hr className='container' />

        <Sections className='home-video'>
                <H1 className='text-center'>Decor Sélis</H1>
            <div className="container flex-center">
                <Grid10>
                    <P className='text-center'>
                        A Decor Sélis apresenta a linha de produtos Duraflor, inspirados no que há de mais moderno no mercado internacional. Pisos Laminados de alta resistência e Pisos LVT, vinílicos de última geração para harmonizar sua residência ou ambientes corporativos, além de uma linha completa de acessórios de acabamento e instalação.
                    </P>
                </Grid10>
            </div>            
        </Sections>

        <Sections>
                <ContainerFlex className='flexalign-center flex-center'>                    
                    <Grid6>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/H7kpCHpLddQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>                        
                        </iframe>
                    </Grid6>                    
                </ContainerFlex>
        </Sections>
        
        <Sections className='home-equipe'>
            <ContainerFlex className='equip'>
                <Grid4 className='offset-8 desc'>
                    <H2>Equipe</H2>
                    <P>
                        Trabalhamos com as Melhores linhas de Persianas do Mercado 
                    </P>
                </Grid4>
                <div className='home-equipe-link'>
                    <a href="https://wa.me/5511974041402?text=Ol%C3%A1">Saiba mais +</a> 
                </div>
            </ContainerFlex>
        </Sections>

        <Sections className='home-newsletter'>
            <ContainerFlex className='flexalign-center wrap'>
                <Grid6 style={{borderRight:'1px solid'}}>
                    <H1>Conheça a Decor Sélis</H1>
                </Grid6>
                <Grid6>
                    <P>Trabalhamos com os melhores tecidos<br></br> e acabamento sem igual</P>
                </Grid6>
                <Grid12 className='newsletter'>
                    <H3 className='text-center'>
                        Assine nossa newsletter
                    </H3>                   
                    <FormNews />
                </Grid12>
            </ContainerFlex>
        </Sections>
    </>
}

export default Home