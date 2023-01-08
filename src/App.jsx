import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Form from './components/Form'
import './App.css'

function App({
  value,
  onChange,
  onClick

}) {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
  
    setName('')
  }
  


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Ant Design Components</h2>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div className="card">
        <p className='name'>{name ? `Hello ${name}!` : 'Please enter your name'}</p>
        <Form 
          value={name}
          
          onChange={(e) => {
              setName(e.target.value); 
          }}
          onClick={handleSubmit}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
