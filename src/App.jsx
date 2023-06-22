import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { puppyList } from './puppy-data/data'


function App() {

const [puppies, setPuppies] = useState(puppyList)
{ 
  puppies.map((puppy) => {
    
    console.log("puppyList: ", puppyList);
    return <p>{puppy.name}</p>
  })
}

  return (
    <>
   
    </>
  )
}

export default App
