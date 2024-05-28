import { useCallback, useState } from 'react'
import './App.css'
import { Message } from './Message'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("Count is 0")
  const [calculate] = useState(0);

  const calculateCount = () => {
    setCount(count + 1);
  }

  //useMemo si retorna algo, useCallback no. 
  const memoCalculateCount = useCallback(() => {
    calculateCount()
  }, [calculate])
  return (
    <>
      <h1>useMemo and useCallback</h1>
      <div className="card">
        <Message text={text} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setText(`Count is ${count}`)}>Cambiar text</button>
        <button onClick={memoCalculateCount}>Click</button>
      </div>
    </>
  )
}

export default App
