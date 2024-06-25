import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { switchs, inputText } from '../features/switch/switchSlice'

function Swithcer() {

    const [inputVal, setInputVal] = useState('')

    const show = useSelector(state => state.switcher.value)
    const inputValue = useSelector(state => state.switcher.text)
    const dispatch = useDispatch()

    const hundleInputChange = (e) => {
        setInputVal(e.target.value)
    }

    const handleClick = () => {
        dispatch(inputText(inputVal));
    };

    // const [show, setShow] = useState(false)

    // const handleShow = () => {
    //     setShow(!show)
    //     console.log("ishladi");
    // }

    return (
        <div>
            <h1 className='my-2'>{show ? "" : "Hello"}</h1>
            <button onClick={() => dispatch(switchs())} className='bg-green-600 text-white px-4 py-2'>{show ? 'Show' : 'Hide'}</button>

            <input type="text" value={inputVal} onChange={hundleInputChange} className="bg-red-400" />
            <button onClick={() => handleClick()} className='bg-green-600 text-white px-4 py-2'>Click</button>
            <h1>{inputVal}</h1>
        </div>
    )
}

export default Swithcer