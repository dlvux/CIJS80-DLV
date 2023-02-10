import React, { useState } from 'react'
import './styles.css'

const Text = () => {
  const someTexts = ["Let's discover some longest English words!", "Supercalifragilisticexpialidocious", "Floccinaucinihilipilification", "Pneumonoultramicroscopicsilicovolcanoconiosis"]
  const someColors = ["#c8ad7e", "#722620", "white", "#96351e", "#f2bc94", "#514644"]
  const someSizes = ["30px", "20px", "22px", "24px", "26px", "28px"]

  const [text, setText] = useState(0)
  const [color, setColor] = useState(0)
  const [size, setSize] = useState(0)

  const handleChangeText = () => {
    if (text === 3) {
        setText(0)
    } else setText(text + 1)
  }

  const handleChangeColor = () => {
    if (color === 5) {
        setColor(0)
    } else setColor(color + 1)
  }

  const handleChangeSize = () => {
    if (size === 5) {
        setSize(0)
    } else setSize(size + 1)
  }

  return (
    <div className='container'>
        <div className='text'style={{color: someColors[color], fontSize: someSizes[size]}}><p>{someTexts[text]}</p></div>
        <div className='btn'>
            <button onClick={handleChangeText}>Change Text</button>
            <button onClick={handleChangeColor}>Change Color</button>
            <button onClick={handleChangeSize}>Change Size</button>
        </div>
    </div>
  )
}

export default Text