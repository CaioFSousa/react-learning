import '../App.css';
import { useState } from 'react'

const Hooks = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button className='btn-primary' onClick={handleClick}>Click</button>
        </div>
    )
}

export default Hooks