import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios' //importing axios
import { useEffect } from 'react' // <--- This line is missing!
function App() {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    axios.get('/api/thoughts').then(res => {
      setThoughts(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}, [])

  return (
    <>
      <div><h1>First React App</h1></div>
      <p>
        Thoughts: {thoughts.length}
      </p>
      {
        thoughts.map((thought) => (
          <div key={thought.id}>
            <p>{thought.thought}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
