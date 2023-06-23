import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { puppyList } from "./puppy-data/data";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
          >
            {" "}
            {puppy.name} {puppy.email}
          </p>
        );
      })}

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ol>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ol>
        </div>
      )}
    </>
  );
}

export default App;
