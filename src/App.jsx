import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { puppyList } from './puppy-data/data'


function App() {

const [puppies, setPuppies] = useState(puppyList)
  console.log (puppies)
  return (
    <>
   
    </>
  )
}

export default App
