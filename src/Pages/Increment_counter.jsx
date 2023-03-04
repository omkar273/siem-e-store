import React from 'react'
import { useState } from 'react';


const Increment_counter = () => {
    const [num, setNum] = useState(1);

    const inc = () => {
        setNum(num + 1)
    }

    const dec = () => {
        setNum(num - 1)
    }
    return (
        <div className='flex justify-center flex-col items-center	min-h-[100vh] text-5xl'>
            <p className='text-5xl' >{num}</p>

            <div>
                <button className='button' onClick={inc}>Increment</button>
                <button className='button' onClick={dec} >Decrement</button>
            </div>
        </div>
    )
}

export default Increment_counter