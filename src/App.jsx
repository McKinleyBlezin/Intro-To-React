import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { puppyList } from './puppy-data/data'
import './path-to-css.css' //Is this not the same as line 2 trying to import/link the app.css together?

function App() {

const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);
{ 
  puppies.map((puppyList) => { 
    console.log("puppyList:", puppyList);

    function handleClick() {
   
    }
    // const featurePup = puppies.find(puppiesList) => puppyList.id === featPupId
    console.log (featurePup)

    return 
    <div>
    <p onClick={handleClick} key={puppyList.id}>
            {puppyList.name}</p>
    <p>{puppyList.name}</p>
    </div>
  })
}

  return (
    <>
   
    </>
  )
}

export default App
