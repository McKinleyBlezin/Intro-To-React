import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { puppyList } from './puppy-data/data'

function App() {

const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);

//     function handleClick() {
   
//     }
//     // const featurePup = puppies.find(puppiesList) => puppyList.id === featPupId
//     console.log (featurePup)

//     return 
//     <div>
//     <p onClick={handleClick} key={puppyList.id}>
//             {puppyList.name}</p>
//     <p>{puppyList.name}</p>
//     </div>
//   })
// }

  return (
    <>
   {puppies.map((puppy) => {

    return 
      <p>   
        {puppy.name} {puppy.email}
      </p> 

   })} 
    </>
  )
}

export default App
