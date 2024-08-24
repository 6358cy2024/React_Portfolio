import {useEffect, useState} from 'react'
import axios from 'axios'
//use all hooks with use Effect

function App() {
  const [characters, setCharacters] = useState()

  useEffect(() => {
    axios.get('https://swapi.dev/api/people',{
    })//route is interchangeable,
    .then(res => {
      setCharacters(res.data.results)
    })

  }, [])//cannot use await async for this
  return (
    <>
      <h1>Main Page</h1>
      {characters.map((charObj, index) => {
          return(
            <div key={index}>
              <h3>Name: {charObj.name}</h3>
              <p>Birth Year: {charObj.birth_year}</p>
            </div>
          )
      })}
    </>
  )
}

export default App


const users = [
  {
    name: 'Christian',
    age: 22
  },
  {
    name: 'James',
    age: 23
  }
]
const userStrings = users.map((userObj) => {//converting elements
  return (
  <div>
    <h3>Name: {userObj.name}</h3>
    <p>Age: {userObj.age}</p>
  </div>
  )
})

console.log(userStrings)