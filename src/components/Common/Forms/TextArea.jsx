import React from 'react'

const TextArea = ({
    label,
    id,
    name,
    cols,
    rows,
    value,
    onChange,
    onBlur,
    error,
    ...props
}) => {
  return <>
    <label htmlFor={id}>{label}</label>
    <textarea 
      name={id} 
      id={id} 
      cols={cols} 
      rows={rows}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      {...props}
    />
    {error && <span><small style={{color:'red'}}>{error}</small></span>} 
  </>
}

export default TextArea