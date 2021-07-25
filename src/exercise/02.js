// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  console.log('rendering...')
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') || initialName,
  )

  React.useEffect(() => {
    console.log('calling useEffect')
    window.localStorage.setItem('name', name)
  }, [name]) // Only re-run the effect if dependecy in array changes → uses === Object.is

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <button value={count} onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <Greeting />
    </>
  )
}

export default App
