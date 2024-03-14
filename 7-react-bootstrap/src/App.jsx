import './App.css'
import { TableData } from './components/TableData'
import Button from 'react-bootstrap/esm/Button'
import { ModalUsuario } from './components/ModalUsuario'
import { useEffect, useState } from 'react'

function App() {

  const [show, setShow] = useState(false)

  function toggle() {
    setShow(!show)
  }

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=10')
      .then(res => res.json())
      .then(res => setUsers(res.users));
  }, [])

  const [user, setUser] = useState(null)

  const handleUser = (id) => {
    fetch('https://dummyjson.com/users/' + id)
      .then(res => res.json())
      .then(res => setUser(res))
      .finally(toggle)
      console.log(user)
  }



  return (
    <>
      <h1>Hola mundo</h1>
      <ModalUsuario isShow={show} onHide={toggle} user={user}/>
      <Button variant="warning" onClick={toggle}>
        Launch demo modal
      </Button>


      {
        users.map(user => {
          return (
            <div key={user.id}>
              <img src={user.image} alt={user.firstName} />
              <p>{user.firstName} {user.lastName}</p>
              <Button onClick={() => handleUser(user.id)} variant="success">Ver usuario</Button>
            </div>
          )
        })
      }

    </>
  )
}

export default App
