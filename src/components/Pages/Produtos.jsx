import React from 'react'
import './Produtos.css'
import H1 from '../Common/Typograph/H1'
import H2 from '../Common/Typograph/H2'
import P from '../Common/Typograph/P'
import Sections from '../Sections/Sections'
import ContainerFlex from '../Common/Layout/Container/ContainerFlex'
import Grid4 from '../Common/Layout/Grids/Grid4'
import ModalProdutos from '../Common/Modal/ModalProdutos'
import styles from './Produtos.module.css'
import { cortinas, persianas } from '../../Apis/ProdutosApi'


const CardProduto = ({src, alt, serie, atual }) => {
  const [modal, setModal] = React.useState(false)
  const [current, setCurrent] = React.useState(null)
  const [series, setSeries] = React.useState(null)  

  function handleModal() {
    setModal(!modal)    
  }

  React.useEffect( () => {
    setCurrent(atual)
    setSeries(serie)
  },[atual, serie])

  React.useEffect( () => {
    let body = document.body
    if (modal) {
      body.style.overflowY = "hidden"
    }else {
      body.style.overflowY = "auto"
    }
  },[modal])

  return <Grid4 className='card-produto'>
    <div onClick={handleModal}>
      <img src={src} alt={alt}/>
    </div>
    {modal && <ModalProdutos current={current} serie={series} onClick={handleModal} modal={modal} />}
  </Grid4>
}

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null)
  const [title, setTitle] = React.useState(String)
  const [text, setText] = React.useState(String)

  React.useEffect( () => {
    const { pathname } = window.location    
    if(pathname === '/produtos/cortinas'){
      setProdutos(cortinas)
      setTitle('Cortinas')
      setText('Cortinas Decor Selis Trabalhamos com os melhores tecidos e acabamento sem igual')      
    }
    if (pathname === '/produtos/persianas') {
      setProdutos(persianas)
      setTitle('Persianas')
      setText('Trabalhamos com as Melhores linhas de Persianas do Mercado')
    }       
  },[produtos])

  return <>
    <section className='produtos-header'>
      <H1 className='text-center'>{title}</H1>
      <div className="container flex-center">                
          <P className='text-center'>
            {text}              
          </P>
      </div> 
    </section>
    
    <Sections>
      {(produtos !== null && produtos.map( item => {
        return <div key={item.id} className={styles.produtos}>
          <H2 className='container'>{item.title}</H2>
          <ContainerFlex key={item.id} className='wrap'>
            {item['serie'].map( card => {
              return <CardProduto key={card.id}
                serie={item['serie']}
                atual={card}
                src={card.src} 
                alt={card.alt} />
            })}            
          </ContainerFlex>
          <hr className='container' style={{marginBottom:'80px'}}/>
        </div>
      } ))}  
    </Sections>
    
  </>
}

export default Produtos
