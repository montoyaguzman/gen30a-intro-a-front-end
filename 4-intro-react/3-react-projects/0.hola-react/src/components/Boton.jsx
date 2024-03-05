import React from 'react'

function Boton(props) {
  return (
    <button>{props.icono + props.texto}</button>
  )
}

export default Boton