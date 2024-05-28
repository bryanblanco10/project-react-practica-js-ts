import { useEffect, useState } from "react"

const initialState = {
  clientX: 0,
  clientY: 0,
}

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState(initialState);
  
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({
        clientX,
        clientY,
      })
    }
    
    if (enabled) {
      window.addEventListener("pointermove", handleMove)
    }

    //getEventListener(window) //Miras los eventos subscritos
  //Este evento lo ejecuta useEffect cuando se desmonta el componete
  //y cuando se actualiza las dependencias [].
  return () => {
    setPosition(initialState)
    window.removeEventListener("pointermove", handleMove)
  }
  }, [enabled])
  return (
    <>
      <div style={{
        display: `${enabled ? 'block' : 'none'}`,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.clientX}px, ${position.clientY}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

export default App
