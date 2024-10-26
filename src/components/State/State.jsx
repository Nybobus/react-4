import React, { useState } from 'react'
import './State.css'

const State = () => {

    const [num, setNum] = useState(0)
    const [text, setText] =  useState('')
    const [img, setImg] = useState(false)
    const [open, setOpen] = useState('OPEN')

    const minus = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }

    const plus = () => {
        if (num < 10) {
            setNum(num + 1)
        }
    }

    const change = () => {
        setImg(!img)
        setOpen(img ? 'OPEN' : 'CLOSE')
    }


  return (
    <>
    <div className="box">
    <button onClick={change}>{open} IMAGE</button>
    {img && (
        <img src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_654b5b9959a57368a45857d9_654b6216ead1b6392610673a/scale_1200" alt="" />
    )}
    </div>

    <div className="box">
        <h2>{text}</h2>
    </div>


      <div className="box">
        <h2>{num}</h2>
        <button onClick={() => setNum(num + 1)}>Увеличить число</button>
        <button onClick={() => setNum(num - 1)}>Уменшить число</button>
        <button onClick={() => setNum(num * 2)}>Умножить число</button>
        <button onClick={() => setNum(num / 2)}>Разделить число</button>
        <button onClick={() => setNum(0)}>Обнулить число</button>
        
      </div>

      <div className="box">
        <h2>{text}</h2>
        <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
      </div>
    </>
  )
}

export default State
