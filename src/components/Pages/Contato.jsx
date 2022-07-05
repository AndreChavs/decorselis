import React from 'react'
import './Contato.css'
import Sections from '../Sections/Sections'
import ContainerFlex from '../Common/Layout/Container/ContainerFlex'
import Grid4 from '../Common/Layout/Grids/Grid4'
import H1 from '../Common/Typograph/H1'
import P from '../Common/Typograph/P'
import FormContato from '../Common/Forms/FormContato'

const Contato = () => {
    return <>
        <section className='contato-header'>
            <H1 className='text-center'>Contato</H1>
            <div className="container flex-center">                
                <P className='text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Libero deleniti  odit totam possimus <br /> cumque voluptatem assumenda alias?
                </P>
            </div> 
        </section>

        <Sections className='contato-info'>
            <ContainerFlex className='flexspace-around wrap'>
                <Grid4>
                    <address>
                        Rua Larival Gea Sanches, 318 <br />
                        Água Fria | São Paulo <br />
                        CEP: 02409-000 <br />                        
                    </address>
                    <address>
                        Telefone: (11) 2507-2866 <br />
                        Fax: (11) 2628-6183                        
                    </address>
                    <div className='contato-btn'>
                        <a href="https://wa.me/5511974041402?text=Ol%C3%A1">
                            <i className="fa-brands fa-whatsapp"></i>
                            Whatsapp
                        </a>
                    </div>                                       
                </Grid4>
                <Grid4>
                    <FormContato />
                </Grid4>
            </ContainerFlex>
        </Sections>

        <Sections className='container contato-maps'>            
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.8654446596823!2d-46.6249019707708!3d-23.47987116898371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1577387d745317b%3A0x660286101ae0e9d3!2sDecorselis!5e0!3m2!1spt-BR!2sbr!4v1653574054095!5m2!1spt-BR!2sbr" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
        </Sections>
    </>
}

export default Contato