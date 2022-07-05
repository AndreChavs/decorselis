import React from 'react'

const Input = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  ...props
}) => {
  
  return <>
    <label htmlFor={id}>{label}</label>
    <input name={id} id={id}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
    {error && <span><small style={{color:'red'}}>{error}</small></span>} 
  </>
}

export default Input