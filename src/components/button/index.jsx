import React from 'react'
import './styles.css'

const Button = ({text = 'success'}) => {
  return (
    <button className='btn' style={{background: text === 'warning' ? 'orange' : text === 'error' ? 'red' : 'blue'}}>{text}</button>
  )
}

export default Button