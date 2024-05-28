import { useState } from 'react'
import { evaluate } from 'mathjs'
export const operations = ['+', '-', '*', '/']
export const Calculator = () => {
  // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

  const [value, setValue] = useState('')
  const handleClick = op => setValue(value.concat(op))
  const handleEqual = () => {
    const result = evaluate(value)
    setValue(result)
  }
  return (
    <section>
      <h1>Calculator</h1>
      <div role='grid'>
        <input value={value} readOnly />
        {rows.map((row, index) => (
          <div key={index} role='row'>
            {row.map((number) => (
              <button onClick={() => handleClick(number)} key={number}>
                {number}
              </button>
            ))}
          </div>
        ))}
        {operations.map((operation) => (
          <button onClick={() => handleClick(operation)} key={operation}>{operation}</button>
        ))}
        <button onClick={handleEqual}>=</button>
        <button onClick={() => setValue('')}>Clear</button>
      </div>
    </section>
  )
}
