import React from 'react'
import useInput from '../../../Hooks/useInput'
import Input from './Input'
import emailjs from '@emailjs/browser';
import styles from './FormNews.module.css'

const FormNews = () => {
  const [status, setStatus] = React.useState(false)
  const email = useInput('email')
  const formRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    if(email.validate()){
      emailjs.sendForm('GmailMessage', 'template_4wwxj9b',formRef.current , 'X9zOMFp51soKbIdKI')
      .then((result) => {
          if (result.status === 200) {
            setStatus(true)
          }
          alert('Mensagem enviada com sucesso!')
      }, (error) => {
          alert(error.message)
      });
    }
    event.target.reset()
  }

  const inputEmail = {
    label:'',
    id:'email',      
    type:'email',
    value:email.value,
    onChange:email.onChange,
    onBlur:email.onBlur,
    error:email.error,
    placeholder:'Seu e-mail'
  }

  return <form onSubmit={handleSubmit} ref={formRef}>
    <div className={styles.form}>
      <Input {...inputEmail}/>
    </div>
    {(status)? <button disabled>Enviado!</button> : <button>Enviar</button>}    
  </form>
}

export default FormNews