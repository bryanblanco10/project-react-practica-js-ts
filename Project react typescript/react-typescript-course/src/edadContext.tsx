import { createContext, useState } from "react"

export interface Edad {
  edad: number
  setEdad: React.Dispatch<React.SetStateAction<number>>
}

export const EdadContext = createContext<Edad>({} as Edad);

export function EdadProvider({ children }: any) {
  const [edad, setEdad] = useState<number>(0)

  const sharedDate: Edad = {
    edad,
    setEdad,
  }
  return <EdadContext.Provider value={sharedDate}>{ children }</EdadContext.Provider>
}