import React, { useState } from 'react'
function Count1() {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Count1