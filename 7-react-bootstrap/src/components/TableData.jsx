import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function TableData() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/users?limit=10')
            .then(res => res.json())
            .then(res => setUsers(res.users));
    }, [])


    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td className="text-center">
                                        <img src={user.image} alt={user.firstName} style={{width: 80}} />
                                    </td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>@{user.username}</td>
                                </tr>
                            )   
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export { TableData }