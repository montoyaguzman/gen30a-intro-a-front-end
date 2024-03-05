import React from 'react'
import './App.css'
import Boton from './components/Boton'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import Texto from './components/Texto'

/* 

Tipos de componentes: 
- Stateless (Sin estado)
- Stateful (Con estado)

Ciclo de vida de los componentes: 
- Inicialización
- Montaje => mounting
- Actualización => updating
- Desmontaje => unmounting

*/

function App() {

  return (
    <>

    <Texto />



      {/* <header style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Awesome Clients</h1>
        <p>Mira qué dicen nuestros clientes de nosotros</p>
      </header>

      <UserCard 
        image="userUno.jpg" 
        testimonial="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi alias odio nihil? Natus." 
        user="Stanley Kubrick"
        direction="row"
      />
      <UserCard 
        image="userUno.jpg" 
        testimonial="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi alias odio nihil? Natus." 
        user="Stanley Kubrick"
        direction="row-reverse"
      /> */}

      {/* <Boton texto='Botón azul' icono='🍔' />
      <Boton texto='Botón rojo' icono='🥩' />
      <Boton texto='Botón amarillo' icono='🍙' /> */}
    </>
  )

}

export default App
