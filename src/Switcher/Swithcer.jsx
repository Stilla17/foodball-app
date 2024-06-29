import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { switchs } from '../features/switch/switchSlice'
import { inputText } from '../features/field/field'

function Swithcer() {

    const show = useSelector(state => state.switcher.value)
    const dispatch = useDispatch()


    return (
        <div>
            <h1 className='my-2'>{show ? "" : "Hello"}</h1>
            <button onClick={() => dispatch(switchs())} className='bg-green-600 text-white px-4 py-2'>{show ? 'Show' : 'Hide'}</button>

        </div>
    )
}

export default Swithcer