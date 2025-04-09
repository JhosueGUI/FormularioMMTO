import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {PaginaFormulario} from './pages/Mantenimiento/Formulario/Table/PaginaFormulario'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginaFormulario />
    </>
  )
}

export default App
