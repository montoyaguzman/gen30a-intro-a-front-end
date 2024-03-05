import React from 'react'
import { useState, useEffect } from 'react'

function Texto() {

    const [mostrar, setMostrar] = useState(true)

    function manejadorVista (){
        setMostrar(!mostrar)
    }

    useEffect( () => {
        console.log('componente ejecutado')

        return () => {
            console.log('componente desmontado')
        }

    }, [mostrar] )

  return (
    <>
        { mostrar && <h1>Título del componente Texto</h1> }
        <button onClick={manejadorVista}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
    </>
  )
}

export default Texto