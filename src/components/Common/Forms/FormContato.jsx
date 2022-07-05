import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import useInput from '../../../Hooks/useInput'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const FormContato = () => {
    const nome = useInput('nome')
    const email = useInput('email')
    const message = useInput('message')
    const formRef = React.useRef()
    const recaptchaRef = React.createRef()
    
    function handleCaptcha(value) {
        if(value){
            alert('Verificação com sucesso!')
            return true
        }else {
            return false
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target)
        const recaptchaValue = recaptchaRef.current.getValue();
        const verify = (recaptchaValue)? true : false  

        if (nome.validate() && email.validate() && message.validate() && verify) {
            emailjs.sendForm('GmailMessage', 'template_4wwxj9b',formRef.current , 'X9zOMFp51soKbIdKI')
                .then((result) => {
                    console.log(result)
                    return alert('Mensagem enviada com sucesso!')
                }, (error) => {
                    return alert(error.message)
                });
            console.log(`Dados Enviados com sucesso`)
            event.target.reset()
            
          }else {
            if (verify === false) {
                return alert(`Você não é um ser humano.`)
            }
            return alert(`Mensagem não enviada`)            
          }
    }

    const inputNome = {
        label:'',
        id:'nome',      
        type:'text',
        value:nome.value,
        onChange:nome.onChange,
        onBlur:nome.onBlur,
        error:nome.error,
        placeholder:'Digite seu Nome completo'
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
    const inputTextArea = {        
        id:'textarea',
        type:'text',
        cols:'30',
        rows:'5', 
        value:message.value,
        onChange:message.onChange,
        onBlur:message.onBlur,
        error:message.error,
        placeholder:'Mensagem'
    }

    return <form onSubmit={handleSubmit} ref={formRef}>
        <div>
            <Input {...inputNome} />
        </div>
        <div>
            <Input {...inputEmail}/>
        </div>
        <div>
            <TextArea {...inputTextArea}/>
        </div>
        <ReCAPTCHA 
            sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
            ref={recaptchaRef}        
            onChange={handleCaptcha}
        />      
        <button>Enviar</button>
    </form>
}

export default FormContato