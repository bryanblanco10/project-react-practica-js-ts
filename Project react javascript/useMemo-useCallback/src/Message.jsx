import { useMemo } from "react"

export const Message = ({ text }) => {
  const getMessage = () => {
    console.log("getMessage")
    return text
  }
  const message = useMemo(() => {
    return getMessage()
  }, [text])

  return (
    <p>{ message }</p>
  )
}