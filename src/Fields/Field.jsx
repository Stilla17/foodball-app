import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inputText } from '../features/field/field'

function Field() {

    const [input, setInput] = useState('')

    const text = useSelector(state => state.fields.value)
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleButton = () => {
        dispatch(inputText(input))
    }

    return (
        <div className='mt-4 flex'>

            <input type="text" className='border-2' value={input} onChange={handleInputChange} />
            <button onClick={handleButton} className='bg-green-600 text-white px-4 py-2'>Button</button>
            <h1>{text}</h1>
        </div>
    )
}

export default Field