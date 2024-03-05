import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

/* function crearBoton({ texto, icono }) {
  return (
    <button>{icono + texto}</button>
  )
} */

/* function Boton ({ texto, icono }) {
  return (
    <button>{icono + texto}</button>
  )
} */

/* function Boton (props) {
  return (
    <button>{props.icono + props.texto}</button>
  )
} */

root.render(
  <>

    <App />

    {/* <Boton texto='Botón azul' icono='🍔' />
    <Boton texto='Botón rojo' icono='🥩' />
    <Boton texto='Botón amarillo' icono='🍙' />
  */}

    {/* {crearBoton({ texto: 'Botón azul', icono: '🍔' })}
    {crearBoton({ texto: 'Botón rojo', icono: '🥩' })}
    {crearBoton({ texto: 'Botón amarillo', icono: '🍙' })} */}


    {/* <button>Botón azul</button>
    <button>Botón rojo</button>
    <button>Botón amarillo</button> */}

  </>,
)
