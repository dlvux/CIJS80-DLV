import React, {useState} from 'react'
import './styles.css'

const Shape = () => {
  const [change, setChange] = useState(false)
  const handleChange = () => {
    setChange(!change)
  }
  return (
    <div className='container'>
      <button onClick={handleChange}>Change shape</button>
      <div className='shape' style={{borderRadius: change === true ? "50%" : "0"}}></div>
    </div>
  )
}

export default Shape