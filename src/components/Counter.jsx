import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState (0);  
    return(
        <div className="card">
        <button onClick={()=> console.log('clicked here')}>
           Count is: {counter}
        </button>
       
      </div>

    )
}

export default Counter;