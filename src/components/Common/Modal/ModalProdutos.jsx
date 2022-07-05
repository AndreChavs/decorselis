import React from 'react'
import styles from './ModalProdutos.module.css'

const ModalProdutos = ({onClick, modal, current, serie}) => {
    const [active, setActive] = React.useState(styles.modalOff)    
    const [cont, setCont] = React.useState(current.id)
    const [dataModal, setDataModal] = React.useState( serie.find( (item) => {
        return item === current
    }))

    function next() {
        if((cont >= 0) && (cont < serie.length -1)){
            setCont(cont + 1)                       
        }        
    }
    function prev() {
        if((cont > 0) && (cont <= serie.length -1)){
            setCont( cont - 1)            
        }        
    }

    React.useEffect( () => {        
        setDataModal( serie.find( item => {
            return item.id === cont
        }))
    },[cont, dataModal, serie])

    React.useEffect( () => {             
        if (modal) {                                  
            setActive(styles.modalOn)
        }else{
            setActive(styles.modalOff)              
        }       
    },[modal])

    return <div className={active}>
        <div className={styles.modalContent}>
            <img src={dataModal.src} alt={dataModal.alt} />                
            <div onClick={onClick}>
                <span></span>                    
            </div>
        </div>
        <div className={styles.modalBtns}>
            <div onClick={prev}>
                <i className='fa-solid fa-angle-left'></i>
            </div>
            <div onClick={next}>
                <i className='fa-solid fa-angle-right'></i>
            </div>
            
            
        </div>
    </div>
        
    
}

export default ModalProdutos
