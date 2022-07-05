import React from 'react'
import { typesValidation } from '../Apis/RegexApi'

const useInput = (type) => {
    const [value, setValue] = React.useState(String)
    const [error, setError] = React.useState(null)
    
    const types = typesValidation
    function validate(value) {
        if (type === false) {
            return true
        }
        if (value.length === 0) {
            setError('Campo vazio!')
            return false
        }else if ((types[type]) && !types[type].regex.test(value)) {
            setError(() => types[type].messageError)
            return false
        } else {
            setError(null)
            return true
        }
    }
    function onChange({target}) {
        if (error) {validate(target.value)}
        setValue(target.value)
    }
    return {
        value,
        setValue,
        error,
        //   setError,
        onChange,
        onBlur:() => validate(value),
        validate:() => validate(value)
    }
}

export default useInput