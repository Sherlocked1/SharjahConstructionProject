import React from 'react'
interface ErrorLabelProps {
    text : string
}

const ErrorLabel = (props:ErrorLabelProps) => {
  return (
    <label className='text-sm text-red-500 font-semibold'>{props.text}</label>
  )
}

export default ErrorLabel